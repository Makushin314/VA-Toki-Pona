/* ============================================================
   VA FLASHCARDS — 5 режимов, SRS, спринт, словарь
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const C = global.VACore;
    const WORDS = global.VA_WORDS || [];
    if (WORDS.length) global.VA_WORDS_TOTAL = WORDS.length;

    /* Индексы полей слова */
    const F_TP = 0;      // слово на toki pona
    const F_RU = 1;      // перевод (может быть несколько значений через запятую)
    const F_POS = 2;     // часть речи
    const F_LEVEL = 3;   // tp1 / tp2 / tp3
    const F_LESSON = 4;  // tp1-l1 ... tp3-l6
    const F_CAT = 5;     // категория
    const F_SP = 6;      // sitelen pona (глиф)

    /* Интервалы SRS (в днях) */
    const SRS_INTERVALS = [0, 1, 2, 4, 7, 15, 30];
    const LABELS = ['Новое', 'Знакомо', 'Учу', 'Помню', 'Знаю', 'Мастер'];

    /* Названия уроков */
    const LESSON_NAMES = {
        'tp1-l1': 'Урок 1 · toki!',
        'tp1-l2': 'Урок 2 · jan en soweli',
        'tp1-l3': 'Урок 3 · pali',
        'tp1-l4': 'Урок 4 · ijo',
        'tp1-l5': 'Урок 5 · ma en sewi',
        'tp1-l6': 'Урок 6 · tomo',
        'tp1-l7': 'Урок 7 · moku en sijelo',
        'tp1-l8': 'Урок 8 · nanpa',
        'tp2-l1': 'Урок 1 · ilo pi toki',
        'tp2-l2': 'Урок 2 · pali',
        'tp2-l3': 'Урок 3 · olin en kulupu',
        'tp2-l4': 'Урок 4 · seme en ala',
        'tp2-l5': 'Урок 5 · sewi en anpa',
        'tp2-l6': 'Урок 6 · nanpa pona',
        'tp2-l7': 'Урок 7 · kule',
        'tp3-l1': 'Урок 1 · nimi en sona',
        'tp3-l2': 'Урок 2 · esun en utala',
        'tp3-l3': 'Урок 3 · ku suli — wan',
        'tp3-l4': 'Урок 4 · ku suli — tu',
        'tp3-l5': 'Урок 5 · kalama en nasa',
        'tp3-l6': 'Урок 6 · nasin pi toki'
    };

    /* ──────────── СОСТОЯНИЕ ──────────── */
    const state = {
        mode: 'srs',
        currentWord: null,
        flipped: false,
        sprint: null
    };

    /* ──────────── ВСПОМОГАТЕЛЬНОЕ ──────────── */

    function getBox(word) {
        const f = C.data.flashcards[word];
        return f ? (f.box || 0) : 0;
    }

    function getInterval(box) {
        return SRS_INTERVALS[Math.min(box, SRS_INTERVALS.length - 1)];
    }

    function isDue(word) {
        const f = C.data.flashcards[word];
        if (!f) return true;
        const days = (Date.now() - new Date(f.lastSeen || 0).getTime()) / 86400000;
        return days >= getInterval(f.box || 0);
    }

    function isLearned(word) { return getBox(word) >= 4; }

    function isFavorite(word) {
        return Array.isArray(C.data.stats.favorites) && C.data.stats.favorites.indexOf(word) !== -1;
    }

    function toggleFavorite(word) {
        if (!Array.isArray(C.data.stats.favorites)) C.data.stats.favorites = [];
        const i = C.data.stats.favorites.indexOf(word);
        if (i === -1) C.data.stats.favorites.push(word);
        else C.data.stats.favorites.splice(i, 1);
        C.saveData();
    }

    /* Нормализация строки для сверки ввода */
    function normalize(s) {
        return String(s || '').toLowerCase().trim()
            .replace(/\s+/g, ' ')
            .replace(/[!?.,;:'"()]/g, '');
    }

    /* Проверка ответа при вводе с учётом многозначных переводов */
    function checkTranslation(userInput, translation) {
        const variants = String(translation).split(',').map(v => normalize(v)).filter(Boolean);
        const input = normalize(userInput);
        if (!input) return { ok: false, variant: variants[0] || '' };
        const ok = variants.some(v => v === input || v.indexOf(input) === 0 || input.indexOf(v) === 0);
        return { ok, variant: variants[0] || '' };
    }

    /* ──────────── ФИЛЬТРЫ ──────────── */

    function getFilters() {
        return {
            level: document.getElementById('flLevel')?.value || 'all',
            lesson: document.getElementById('flLesson')?.value || 'all',
            cat: document.getElementById('flCat')?.value || 'all',
            deck: document.getElementById('flDeck')?.value || 'all'
        };
    }

    function getPool() {
        const f = getFilters();
        return WORDS.filter(function (w) {
            if (f.level !== 'all' && w[F_LEVEL] !== f.level) return false;
            if (f.lesson !== 'all' && w[F_LESSON] !== f.lesson) return false;
            if (f.cat !== 'all' && w[F_CAT] !== f.cat) return false;

            const word = w[F_TP];
            if (f.deck === 'new' && C.data.flashcards[word]) return false;
            if (f.deck === 'due' && !isDue(word)) return false;
            if (f.deck === 'learned' && !isLearned(word)) return false;
            if (f.deck === 'errors') {
                const fc = C.data.flashcards[word];
                if (!fc || !fc.wrong || fc.wrong <= 0) return false;
            }
            if (f.deck === 'favorites' && !isFavorite(word)) return false;
            return true;
        });
    }

    /* Уникальные слова (без дублей по toki pona) */
    function uniqueWords(list) {
        const seen = new Set();
        const result = [];
        list.forEach(w => {
            if (!seen.has(w[F_TP])) {
                seen.add(w[F_TP]);
                result.push(w);
            }
        });
        return result;
    }

    /* ──────────── СТАТИСТИКА ──────────── */

    function getGlobalStats() {
        const uniq = uniqueWords(WORDS);
        const words = uniq.map(w => w[F_TP]);
        const learned = words.filter(isLearned).length;
        const due = words.filter(isDue).length;
        return { learned, due, total: words.length };
    }

    function getDeckStats() {
        const pool = uniqueWords(getPool());
        const learned = pool.filter(w => isLearned(w[F_TP])).length;
        return { pool: pool.length, learned };
    }

    function getForecast() {
        const now = Date.now();
        const b = { today: 0, tomorrow: 0, week: 0, later: 0 };
        uniqueWords(WORDS).forEach(w => {
            const word = w[F_TP];
            const f = C.data.flashcards[word];
            if (!f) { b.today++; return; }
            const interval = getInterval(f.box || 0);
            const days = (now - new Date(f.lastSeen || 0).getTime()) / 86400000;
            const remaining = interval - days;
            if (remaining <= 0) b.today++;
            else if (remaining <= 1) b.tomorrow++;
            else if (remaining <= 7) b.week++;
            else b.later++;
        });
        return b;
    }

    /* ──────────── СЛОВО ДНЯ ──────────── */

    function getWordOfDay() {
        const uniq = uniqueWords(WORDS);
        if (!uniq.length) return null;
        const today = C.todayISO();
        let hash = 0;
        for (let i = 0; i < today.length; i++) {
            hash = ((hash << 5) - hash) + today.charCodeAt(i);
            hash |= 0;
        }
        return uniq[Math.abs(hash) % uniq.length];
    }

    /* ──────────── ВЫБОР СЛОВА ──────────── */

    function pickWord() {
        const pool = uniqueWords(getPool());
        if (!pool.length) return null;
        pool.sort((a, b) => getBox(a[F_TP]) - getBox(b[F_TP]));
        const topN = pool.slice(0, Math.max(5, Math.floor(pool.length / 3)));
        return topN[Math.floor(Math.random() * topN.length)];
    }

    function pickDistractors(correctWord, count) {
        const correctRu = correctWord[F_RU];
        const pool = uniqueWords(WORDS).filter(w => w[F_RU] !== correctRu);
        const shuffled = pool.slice().sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    /* ──────────── SRS-ЛОГИКА ──────────── */

    function applyAnswer(word, correct) {
        const today = C.todayISO();
        const f = C.data.flashcards[word] || { box: 0, correct: 0, wrong: 0 };
        if (correct) {
            f.box = Math.min(5, (f.box || 0) + 1);
            f.correct = (f.correct || 0) + 1;
        } else {
            f.box = Math.max(0, (f.box || 0) - 1);
            f.wrong = (f.wrong || 0) + 1;
        }
        f.lastSeen = new Date().toISOString();
        C.data.flashcards[word] = f;

        if (C.data.stats.flashcardsDate !== today) {
            C.data.stats.flashcardsDate = today;
            C.data.stats.flashcardsStreak = 0;
            C.data.stats.flashcardsToday = 0;
        }
        C.data.stats.flashcardsStreak = (C.data.stats.flashcardsStreak || 0) + 1;
        C.data.stats.flashcardsToday  = (C.data.stats.flashcardsToday  || 0) + 1;

        C.addXp(1);
        C.saveData();
    }

    /* ──────────── РЕНДЕР: СТАТИСТИКА ──────────── */

    function renderStats() {
        const s = getGlobalStats();
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('fsDue', s.due);
        set('fsLearned', s.learned);
        set('fsTotal', s.total);
        set('fsStreak', C.data.stats.flashcardsStreak || 0);
    }

    /* ──────────── РЕНДЕР: СЛОВО ДНЯ ──────────── */

    function renderWordOfDay() {
        const box = document.getElementById('wordOfDay');
        if (!box) return;
        const w = getWordOfDay();
        if (!w) { box.innerHTML = ''; return; }

        const tp = w[F_TP], ru = w[F_RU], pos = w[F_POS], lvl = w[F_LEVEL], sp = w[F_TP];
        const learned = isLearned(tp);
        box.innerHTML = `
            <div class="wotd-head">
                <span class="wotd-label">🌟 nimi suno · слово дня</span>
                <span class="level-pill ${lvl}">${lvl.toUpperCase()}</span>
            </div>
            <div class="wotd-body">
                <span class="sp-glyph small">${sp}</span>
                <div class="wotd-eo">${tp}</div>
                <div class="wotd-ru">${ru}</div>
                <div class="wotd-pos">${pos}${learned ? ' · <span style="color:var(--green)">✓ изучено</span>' : ''}</div>
            </div>
        `;
    }

    /* ──────────── РЕНДЕР: ДНЕВНАЯ ЦЕЛЬ ──────────── */

    function renderDailyGoal() {
        const goal = C.data.stats.wordsGoal || 20;
        const today = C.todayISO();
        const done = C.data.stats.flashcardsDate === today
            ? (C.data.stats.flashcardsToday || 0) : 0;
        const pct = Math.min(100, Math.round(done / goal * 100));

        const fill = document.getElementById('fcgFill');
        const text = document.getElementById('fcgText');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = `${done} / ${goal} слов · ${pct}%`;
    }

    /* ──────────── РЕНДЕР: ПРОГРЕСС КОЛОДЫ ──────────── */

    function renderDeckProgress() {
        const s = getDeckStats();
        const pct = s.pool ? Math.round(s.learned / s.pool * 100) : 0;

        const fill = document.getElementById('deckFill');
        const text = document.getElementById('deckStats');
        const title = document.getElementById('deckTitle');

        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = `${s.learned} из ${s.pool} · ${pct}%`;

        if (title) {
            const f = getFilters();
            const parts = [];
            if (f.level !== 'all') parts.push(f.level.toUpperCase());
            if (f.lesson !== 'all') parts.push(LESSON_NAMES[f.lesson] || f.lesson);
            if (f.cat !== 'all') parts.push(f.cat);
            if (f.deck === 'errors') parts.push('⭐ Ошибки');
            if (f.deck === 'favorites') parts.push('❤ Избранное');
            title.textContent = parts.length ? parts.join(' · ') : 'Все слова';
        }

        const fc = document.getElementById('fcForecast');
        if (fc) {
            const b = getForecast();
            fc.innerHTML = `
                <span class="fc-fc-item"><b>${b.today}</b> сегодня</span>
                <span class="fc-fc-item"><b>${b.tomorrow}</b> завтра</span>
                <span class="fc-fc-item"><b>${b.week}</b> за неделю</span>
                <span class="fc-fc-item"><b>${b.later}</b> позже</span>
            `;
        }
    }

    /* ──────────── ФИЛЬТРЫ: ЗАВИСИМЫЕ СПИСКИ ──────────── */

    function updateLessonOptions() {
        const levelSel = document.getElementById('flLevel');
        const lessonSel = document.getElementById('flLesson');
        if (!levelSel || !lessonSel) return;
        const level = levelSel.value;
        const seen = new Set();
        const lessons = [];
        WORDS.forEach(w => {
            if (level !== 'all' && w[F_LEVEL] !== level) return;
            if (!seen.has(w[F_LESSON])) {
                seen.add(w[F_LESSON]);
                lessons.push(w[F_LESSON]);
            }
        });
        lessons.sort((a, b) => {
            const [al, an] = a.split('-l'), [bl, bn] = b.split('-l');
            if (al !== bl) return al.localeCompare(bl);
            return (+an) - (+bn);
        });
        lessonSel.innerHTML = '<option value="all">Все уроки</option>' +
            lessons.map(id => `<option value="${id}">${LESSON_NAMES[id] || id}</option>`).join('');
        lessonSel.disabled = !lessons.length;
    }

    function updateCategoryOptions() {
        const level = document.getElementById('flLevel')?.value || 'all';
        const lesson = document.getElementById('flLesson')?.value || 'all';
        const catSel = document.getElementById('flCat');
        if (!catSel) return;
        const seen = new Set();
        const cats = [];
        WORDS.forEach(w => {
            if (level !== 'all' && w[F_LEVEL] !== level) return;
            if (lesson !== 'all' && w[F_LESSON] !== lesson) return;
            if (!seen.has(w[F_CAT])) { seen.add(w[F_CAT]); cats.push(w[F_CAT]); }
        });
        cats.sort();
        catSel.innerHTML = '<option value="all">Все категории</option>' +
            cats.map(c => `<option value="${c}">${c}</option>`).join('');
        catSel.disabled = !cats.length;
    }

    /* ──────────── РЕЖИМ: SRS / НАОБОРОТ ──────────── */

    function renderCardSRS(reverse) {
        const zone = document.getElementById('cardZone');
        if (!zone) return;

        const word = pickWord();
        if (!word) { renderEmpty(zone); return; }
        state.currentWord = word;
        state.flipped = false;

        const tp = word[F_TP], ru = word[F_RU], pos = word[F_POS];
        const lvl = word[F_LEVEL], sp = word[F_TP];
        const box = getBox(tp);
        const boxLabel = LABELS[Math.min(box, 5)];
        const fav = isFavorite(tp);

        const front = reverse ? ru : tp;
        const back  = reverse ? tp : ru;
        const frontCls = reverse ? 'flashcard-word ru' : 'flashcard-word';
        const backCls  = reverse ? 'flashcard-word' : 'flashcard-word ru';

        /* На обороте показываем sitelen pona и перевод (может быть длинным) */
        const backSp = reverse ? `<span class="sp-glyph">${sp}</span>` : '';
        const frontSp = reverse ? '' : `<span class="sp-glyph">${sp}</span>`;

        zone.innerHTML = `
            <div class="flashcard-wrap">
                <div class="flashcard" id="fc">
                    <div class="flashcard-face front">
                        <div class="flashcard-pos">${boxLabel} · ${pos} · <span class="level-pill ${lvl}">${lvl.toUpperCase()}</span></div>
                        ${frontSp}
                        <div class="${frontCls}">${front}</div>
                        <button type="button" class="btn-icon fc-fav ${fav ? 'active' : ''}" id="fcFav" title="Избранное">${fav ? '❤' : '♡'}</button>
                        <div class="flashcard-tap">Нажмите или Space — увидеть перевод</div>
                    </div>
                    <div class="flashcard-face back">
                        <div class="flashcard-pos">${reverse ? 'toki pona' : 'Перевод'}</div>
                        ${backSp}
                        <div class="${backCls}">${back}</div>
                        <div class="flashcard-hint">${pos} · ${boxLabel}</div>
                    </div>
                </div>
            </div>

            <div class="flashcard-tools">
                <button type="button" class="btn-icon" id="fcFlip" title="Перевернуть">🔄</button>
                <button type="button" class="btn-icon" id="fcSkip" title="Пропустить">⏭</button>
            </div>

            <div class="flash-actions">
                <button type="button" class="flash-btn again" id="fcAgain">Не знаю <span class="kbd-inline">1</span></button>
                <button type="button" class="flash-btn good"  id="fcGood">Знаю <span class="kbd-inline">2</span></button>
            </div>
        `;

        const fc = document.getElementById('fc');
        fc.addEventListener('click', () => { fc.classList.toggle('flipped'); state.flipped = fc.classList.contains('flipped'); });
        document.getElementById('fcFlip').addEventListener('click', e => { e.stopPropagation(); fc.classList.toggle('flipped'); state.flipped = fc.classList.contains('flipped'); });
        document.getElementById('fcSkip').addEventListener('click', e => { e.stopPropagation(); renderCardSRS(reverse); });
        document.getElementById('fcFav').addEventListener('click', e => {
            e.stopPropagation();
            toggleFavorite(tp);
            renderCardSRS(reverse);
            renderDeckProgress();
        });
        document.getElementById('fcAgain').addEventListener('click', () => {
            applyAnswer(tp, false);
            updateAfterAnswer();
            renderCardSRS(reverse);
        });
        document.getElementById('fcGood').addEventListener('click', () => {
            applyAnswer(tp, true);
            updateAfterAnswer();
            renderCardSRS(reverse);
        });
    }

    /* ──────────── РЕЖИМ: ПЕЧАТЬ ──────────── */

    function renderCardType() {
        const zone = document.getElementById('cardZone');
        if (!zone) return;

        const word = pickWord();
        if (!word) { renderEmpty(zone); return; }
        state.currentWord = word;

        const tp = word[F_TP], ru = word[F_RU], pos = word[F_POS];
        const lvl = word[F_LEVEL], sp = word[F_TP];
        const box = getBox(tp);
        const boxLabel = LABELS[Math.min(box, 5)];
        const fav = isFavorite(tp);

        zone.innerHTML = `
            <div class="type-wrap">
                <div class="type-card">
                    <div class="flashcard-pos">${boxLabel} · ${pos} · <span class="level-pill ${lvl}">${lvl.toUpperCase()}</span></div>
                    <span class="sp-glyph">${sp}</span>
                    <div class="flashcard-word">${tp}</div>

                    <div class="type-label">Введите перевод на русском (любое из значений):</div>
                    <input type="text" class="type-input" id="typeInput" placeholder="Например: хороший" autocomplete="off" autocapitalize="off" spellcheck="false" />

                    <div class="type-result" id="typeResult"></div>
                </div>

                <div class="flashcard-tools">
                    <button type="button" class="btn-icon" id="typeSkip" title="Пропустить">⏭</button>
                    <button type="button" class="btn-icon fc-fav ${fav ? 'active' : ''}" id="typeFav" title="Избранное">${fav ? '❤' : '♡'}</button>
                </div>

                <div class="flash-actions">
                    <button type="button" class="flash-btn good" id="typeCheck">Проверить <span class="kbd-inline">Enter</span></button>
                </div>
            </div>
        `;

        const inp = document.getElementById('typeInput');
        const res = document.getElementById('typeResult');
        const btnCheck = document.getElementById('typeCheck');

        setTimeout(() => inp.focus(), 50);

        document.getElementById('typeSkip').addEventListener('click', () => renderCardType());
        document.getElementById('typeFav').addEventListener('click', () => {
            toggleFavorite(tp);
            renderCardType();
            renderDeckProgress();
        });

        function submit() {
            if (inp.dataset.done === '1') { renderCardType(); return; }
            const val = inp.value.trim();
            if (!val) return;
            inp.dataset.done = '1';
            const result = checkTranslation(val, ru);
            res.className = 'type-result show ' + (result.ok ? 'ok' : 'err');
            res.innerHTML = result.ok
                ? `✓ pona! <span class="ru">(${ru})</span>`
                : `✕ Правильно: <b>${ru}</b>`;
            applyAnswer(tp, result.ok);
            updateAfterAnswer();
            setTimeout(() => { if (result.ok) renderCardType(); }, 1100);
        }

        btnCheck.addEventListener('click', submit);
        inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); submit(); }
        });
    }

    /* ──────────── РЕЖИМ: СПРИНТ ──────────── */

    function renderSprint() {
        const zone = document.getElementById('cardZone');
        if (!zone) return;

        if (!state.sprint) {
            zone.innerHTML = `
                <div class="sprint-start">
                    <div class="sprint-start-icon">⚡</div>
                    <h3>Спринт на 60 секунд</h3>
                    <p>Отвечай как можно быстрее. За каждый правильный ответ — +1. Ошибка не отнимает время, но прерывает серию.</p>
                    <button type="button" class="btn" id="sprintStart">Начать спринт →</button>
                </div>
            `;
            document.getElementById('sprintStart').addEventListener('click', startSprint);
            return;
        }

        renderSprintQuestion();
    }

    function startSprint() {
        state.sprint = { timeLeft: 60, score: 0, streak: 0, correct: 0, total: 0, timer: null };
        state.sprint.timer = setInterval(() => {
            state.sprint.timeLeft--;
            const el = document.getElementById('sprintTimer');
            if (el) el.textContent = state.sprint.timeLeft;
            if (state.sprint.timeLeft <= 0) endSprint();
        }, 1000);
        renderSprintQuestion();
    }

    function endSprint() {
        const s = state.sprint;
        clearInterval(s.timer);
        const zone = document.getElementById('cardZone');
        const accuracy = s.total ? Math.round(s.correct / s.total * 100) : 0;
        zone.innerHTML = `
            <div class="sprint-end">
                <div class="sprint-end-icon">🏁</div>
                <h3>Спринт завершён!</h3>
                <div class="sprint-end-stats">
                    <div class="sprint-end-stat"><div class="ses-num">${s.correct}</div><div class="ses-lbl">Правильно</div></div>
                    <div class="sprint-end-stat"><div class="ses-num">${s.total}</div><div class="ses-lbl">Всего</div></div>
                    <div class="sprint-end-stat"><div class="ses-num">${accuracy}%</div><div class="ses-lbl">Точность</div></div>
                </div>
                <button type="button" class="btn" id="sprintAgain">Ещё раз ⚡</button>
            </div>
        `;
        state.sprint = null;
        document.getElementById('sprintAgain').addEventListener('click', startSprint);
        updateAfterAnswer();
    }

    function renderSprintQuestion() {
        const zone = document.getElementById('cardZone');
        const s = state.sprint;
        if (!s) return;

        const pool = uniqueWords(getPool());
        if (!pool.length) { endSprint(); return; }

        const showTp = Math.random() < 0.5;
        const word = pool[Math.floor(Math.random() * pool.length)];
        const distractors = pickDistractors(word, 3);

        const correctAnswer = showTp ? word[F_RU] : word[F_TP];
        const promptText = showTp ? word[F_TP] : word[F_RU];
        const promptSp = showTp ? `<span class="sp-glyph">${word[F_TP]}</span>` : '';

        const options = [correctAnswer, ...distractors.map(d => showTp ? d[F_RU] : d[F_TP])]
            .sort(() => Math.random() - 0.5);

        zone.innerHTML = `
            <div class="sprint-wrap">
                <div class="sprint-top">
                    <div class="sprint-timer"><span id="sprintTimer">${s.timeLeft}</span> сек</div>
                    <div class="sprint-score">Очки: <b>${s.score}</b> · Серия: <b>${s.streak}</b></div>
                </div>
                <div class="sprint-prompt">
                    <div class="sprint-label">${showTp ? 'Что означает по-русски?' : 'Как по-toki pona?'}</div>
                    ${promptSp}
                    <div class="sprint-word" style="${!showTp ? 'font-size:22px;' : ''}">${promptText}</div>
                </div>
                <div class="sprint-options">
                    ${options.map(o => `<button type="button" class="sprint-opt" data-ans="${o.replace(/"/g,'&quot;')}">${o}</button>`).join('')}
                </div>
            </div>
        `;

        zone.querySelectorAll('.sprint-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                if (s.timeLeft <= 0) return;
                const ok = btn.dataset.ans === correctAnswer;
                s.total++;
                if (ok) { s.correct++; s.score++; s.streak = (s.streak || 0) + 1; }
                else    { s.streak = 0; }
                applyAnswer(word[F_TP], ok);
                renderSprintQuestion();
            });
        });
    }

    /* ──────────── ПУСТОЕ СОСТОЯНИЕ ──────────── */

    function renderEmpty(zone) {
        const f = getFilters();
        let hint = 'В этой колоде нет слов. Выберите другой курс, урок или категорию.';
        if (f.deck === 'new')       hint = 'Все новые слова в этой колоде уже открыты.';
        if (f.deck === 'due')       hint = 'Нет слов к повторению. Возвращайтесь позже.';
        if (f.deck === 'learned')   hint = 'В этой колоде пока нет изученных слов.';
        if (f.deck === 'errors')    hint = 'Пока нет слов с ошибками — pona mute!';
        if (f.deck === 'favorites') hint = 'Нет избранных слов. Нажмите ❤ на карточке, чтобы добавить.';

        zone.innerHTML = `
            <div class="flash-empty">
                <div class="fe-icon">🎉</div>
                <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:8px;">
                    pona!
                </div>
                <p>${hint}</p>
            </div>`;
    }

    /* ──────────── ОБНОВЛЕНИЕ ПОСЛЕ ОТВЕТА ──────────── */

    function updateAfterAnswer() {
        renderStats();
        renderDeckProgress();
        renderDailyGoal();
        C.updateNavBadges();
    }

    /* ──────────── РЕЖИМ: СЛОВАРЬ ──────────── */

    function renderVortaro(query) {
        const list = document.getElementById('vortaroList');
        if (!list) return;
        const f = getFilters();
        const q = (query || '').toLowerCase().trim();

        /* Дедупликация по слову */
        const uniq = uniqueWords(WORDS);

        const filtered = uniq.filter(w => {
            if (f.level !== 'all' && w[F_LEVEL] !== f.level) return false;
            if (f.lesson !== 'all' && w[F_LESSON] !== f.lesson) return false;
            if (f.cat !== 'all' && w[F_CAT] !== f.cat) return false;
            if (q) {
                const tp = w[F_TP].toLowerCase();
                const ru = w[F_RU].toLowerCase();
                const sp = String(w[F_SP] || '').toLowerCase();
                if (!tp.includes(q) && !ru.includes(q) && !sp.includes(q)) return false;
            }
            return true;
        });

        const count = document.getElementById('dictCount');
        if (count) count.textContent = filtered.length + ' слов';

        if (!filtered.length) {
            list.innerHTML = `<div class="flash-empty"><div class="fe-icon">🔍</div><p>Ничего не найдено</p></div>`;
            return;
        }

        list.innerHTML = filtered.map(w => {
            const tp = w[F_TP], ru = w[F_RU], pos = w[F_POS];
            const lvl = w[F_LEVEL], sp = w[F_TP];
            const learned = isLearned(tp);
            const fav = isFavorite(tp);
            return `
                <div class="vortaro-item">
                    <span class="vi-sp">${sp}</span>
                    <span class="vi-eo">${tp}</span>
                    <span class="vi-ru">${ru} ${learned ? '<span style="color:var(--green)">✓</span>' : ''}</span>
                    <span class="vi-pos">${pos} · ${lvl.toUpperCase()}</span>
                    <button type="button" class="btn-icon vi-fav ${fav ? 'active' : ''}" data-fav="${tp}" title="Избранное">${fav ? '❤' : '♡'}</button>
                </div>`;
        }).join('');

        list.querySelectorAll('[data-fav]').forEach(b =>
            b.addEventListener('click', () => {
                toggleFavorite(b.dataset.fav);
                renderVortaro(query);
                renderDeckProgress();
            }));
    }

    /* ──────────── ЭКСПОРТ В ANKI ──────────── */

    function exportAnki() {
        const pool = uniqueWords(getPool());
        const rows = pool.map(w =>
            `${w[F_TP]}\t${w[F_RU]}\t${w[F_POS]}\t${w[F_LEVEL].toUpperCase()}\t${w[F_SP] || ''}`
        );
        const csv = 'toki_pona\trussian\tpos\tlevel\tsitelen_pona\n' + rows.join('\n');
        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `va-toki-pona-anki-${C.todayISO()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
        if (global.VAToast) global.VAToast.show('Экспортировано ' + pool.length + ' слов');
    }

    /* ──────────── ПЕРЕКЛЮЧЕНИЕ РЕЖИМА ──────────── */

    function setMode(mode) {
        state.mode = mode;
        state.currentWord = null;
        state.flipped = false;
        state.sprint = null;

        document.querySelectorAll('.fc-tab').forEach(t => t.classList.toggle('active', t.dataset.mode === mode));

        const cardZone = document.getElementById('cardZone');
        const dictZone = document.getElementById('dictZone');

        if (mode === 'dict') {
            cardZone.style.display = 'none';
            dictZone.style.display = '';
            renderVortaro(document.getElementById('vortaroSearch')?.value || '');
            return;
        }

        cardZone.style.display = '';
        dictZone.style.display = 'none';

        if (mode === 'srs')        renderCardSRS(false);
        else if (mode === 'reverse') renderCardSRS(true);
        else if (mode === 'type')    renderCardType();
        else if (mode === 'sprint')  renderSprint();
    }

    /* ──────────── КЛАВИАТУРА ──────────── */

    function bindKeyboard() {
        document.addEventListener('keydown', e => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (!state.currentWord && state.mode !== 'srs' && state.mode !== 'reverse') return;

            const key = e.key;
            if (key === ' ' || key === 'Spacebar') {
                e.preventDefault();
                const fc = document.getElementById('fc');
                if (fc) { fc.classList.toggle('flipped'); state.flipped = fc.classList.contains('flipped'); }
            } else if (key === '1' && (state.mode === 'srs' || state.mode === 'reverse')) {
                document.getElementById('fcAgain')?.click();
            } else if (key === '2' && (state.mode === 'srs' || state.mode === 'reverse')) {
                document.getElementById('fcGood')?.click();
            } else if (key === 'f' || key === 'F') {
                if (state.currentWord) {
                    toggleFavorite(state.currentWord[F_TP]);
                    renderDeckProgress();
                    const btn = document.getElementById('fcFav') || document.getElementById('typeFav');
                    if (btn) {
                        const fav = isFavorite(state.currentWord[F_TP]);
                        btn.classList.toggle('active', fav);
                        btn.textContent = fav ? '❤' : '♡';
                    }
                }
            }
        });
    }

    /* ──────────── ФИЛЬТРЫ ──────────── */

    function bindFilters() {
        const refreshAll = () => {
            updateLessonOptions();
            updateCategoryOptions();
            renderDeckProgress();
            renderStats();
            renderDailyGoal();
            if (state.mode === 'dict') renderVortaro(document.getElementById('vortaroSearch')?.value || '');
            else setMode(state.mode);
        };

        ['flLevel', 'flLesson', 'flCat', 'flDeck'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', refreshAll);
        });
    }

    function bindTabs() {
        document.querySelectorAll('.fc-tab').forEach(tab => {
            tab.addEventListener('click', () => setMode(tab.dataset.mode));
        });
    }

    function bindVortaroSearch() {
        const search = document.getElementById('vortaroSearch');
        if (!search) return;
        search.addEventListener('input', e => renderVortaro(e.target.value));
    }

    function bindExport() {
        const btn = document.getElementById('dictExportAnki');
        if (btn) btn.addEventListener('click', exportAnki);
    }

    /* ──────────── МОНТИРОВАНИЕ ──────────── */

    function mount() {
        if (!C.data.stats.wordsGoal) C.data.stats.wordsGoal = 20;
        if (!Array.isArray(C.data.stats.favorites)) C.data.stats.favorites = [];

        updateLessonOptions();
        updateCategoryOptions();

        renderStats();
        renderWordOfDay();
        renderDailyGoal();
        renderDeckProgress();

        bindFilters();
        bindTabs();
        bindVortaroSearch();
        bindExport();
        bindKeyboard();

        setMode('srs');
    }

    global.VAFlashcards = { mount, getGlobalStats };

})(window);