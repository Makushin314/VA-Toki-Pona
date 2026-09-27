/* ============================================================
   VA LESSON ENGINE — рендер уроков, тестов, конструкторов
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const C = global.VACore;
    const escapeHtml = C.escapeHtml;

    const LEVEL_META = {
        tp1: { icon: '🔵', title: 'nanpa wan',  desc: 'Приветствия, li, e, lon, pi. 64 базовых слова' },
        tp2: { icon: '🟣', title: 'nanpa tu',   desc: 'Частицы, эмоции, вопросы, цвета. 50 слов' },
        tp3: { icon: '🟡', title: 'nanpa mute', desc: 'nimi ku suli, абстракции, стилистика. 47 слов' }
    };

    let currentLevel = null;
    let currentLessons = null;
    let rootEl = null;

    /* ─── SITELEN PONA — состояние режима (единый ключ) ─── */
    const SP_KEY = 'va_tp_sp_mode';

    function loadSpMode() {
        try { return localStorage.getItem(SP_KEY) === '1'; }
        catch (e) { return false; }
    }
    function saveSpMode(on) {
        try { localStorage.setItem(SP_KEY, on ? '1' : '0'); } catch (e) {}
    }
    function applySpMode(on) {
        if (!rootEl) return;
        rootEl.classList.toggle('sp-mode', on);
        const btn = document.getElementById('lessonSpToggle');
        if (btn) btn.classList.toggle('active', on);
    }
    function toggleSpMode() {
        const on = !rootEl.classList.contains('sp-mode');
        saveSpMode(on);
        applySpMode(on);
        if (global.VAToast) {
            global.VAToast.show(on ? 'toki → ✦ sitelen pona' : '✦ sitelen pona → toki');
        }
    }

    function mount(level, lessons) {
        currentLevel = level;
        currentLessons = lessons;
        rootEl = document.getElementById('courseRoot');
        if (!rootEl) { console.warn('VA: не найден #courseRoot'); return; }
        window.addEventListener('hashchange', handleHash);

        /* Горячая клавиша S — глобально для страницы курса */
        if (!document.documentElement.hasAttribute('data-lesson-sp-bound')) {
            document.documentElement.setAttribute('data-lesson-sp-bound', '1');
            document.addEventListener('keydown', function (e) {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
                if (e.ctrlKey || e.metaKey || e.altKey) return;
                if (e.key === 's' || e.key === 'S') {
                    const btn = document.getElementById('lessonSpToggle');
                    if (btn) { e.preventDefault(); btn.click(); }
                }
            });
        }
                /* Синхронизация с тумблером в топ-баре */
        if (!document.documentElement.hasAttribute('data-lesson-sp-sync')) {
            document.documentElement.setAttribute('data-lesson-sp-sync', '1');
            window.addEventListener('va-sp-mode-change', function (e) {
                applySpMode(e.detail.on);
            });
        }
        handleHash();
    }

    function handleHash() {
        const hash = window.location.hash.slice(1);
        if (!hash) { renderList(); return; }
        if (hash.startsWith('sec-')) { renderList(); return; }

        const lesson = currentLessons.find(l => l.id === hash);
        if (lesson) openLesson(lesson);
        else renderList();
    }

    function renderList() {
        const meta = LEVEL_META[currentLevel] || { icon: '📚', title: '', desc: '' };
        const done = C.getCompletedCount(currentLevel);
        const total = currentLessons.length;
        const pct = total ? Math.round(done / total * 100) : 0;

        rootEl.innerHTML = `
            <div class="page-header">
                <h2>${meta.icon} ${meta.title}</h2>
                <p>${meta.desc}</p>
            </div>
            <div class="level-progress-line">
                <div class="level-progress-bar">
                    <div class="level-progress-fill" style="width:${pct}%;"></div>
                </div>
                <span class="level-progress-text">${done} / ${total} · ${pct}%</span>
            </div>
            <div class="lesson-list">
                ${currentLessons.map((l, i) => {
                    const isDone = !!C.data.lessons[l.id];
                    return `
                        <a class="lesson-item ${isDone ? 'done' : ''}" href="#${l.id}">
                            <div class="lesson-num">${i + 1}</div>
                            <div class="lesson-info">
                                <div class="lesson-title">${escapeHtml(l.title)}</div>
                                <div class="lesson-meta">${escapeHtml(l.desc)} · ${l.xp} XP</div>
                            </div>
                            <div class="lesson-arrow">›</div>
                        </a>`;
                }).join('')}
            </div>
            <div class="page-footer">Vulpeto Abeleto · 2026</div>
        `;
        applySpMode(loadSpMode());
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (global.VATheme) global.VATheme.animatePageIn(rootEl);
    }

    function openLesson(lesson) {
        const isDone = !!C.data.lessons[lesson.id];

        const exCount = (lesson.exercises || []).length;
        const testCount = (lesson.test || []).length;
        const buildCount = (lesson.builder || []).length;

        rootEl.innerHTML = `
            <div class="lesson-header">
                <a class="lesson-back" href="#" data-back>← К списку уроков</a>
                <div class="lh-badge">${currentLevel.toUpperCase()} · урок</div>
                <h2>${escapeHtml(lesson.title)}</h2>
                <div class="lh-sub">
                    ${escapeHtml(lesson.desc)} · ${lesson.xp} XP
                    ${isDone ? ' · ✅ пройдено' : ''}
                </div>
            </div>

            <nav class="lesson-nav">
                <a href="#sec-theory"><span>📖</span><span>Теория</span></a>
                ${exCount ? `<a href="#sec-exercises"><span class="ln-num">${exCount}</span><span>Упражнения</span></a>` : ''}
                ${testCount ? `<a href="#sec-test"><span class="ln-num">${testCount}</span><span>Тест</span></a>` : ''}
                ${buildCount ? `<a href="#sec-builder"><span class="ln-num">${buildCount}</span><span>Конструктор</span></a>` : ''}
            </nav>

            <div class="lesson-toggle-all">
                <button type="button" class="btn-mini" data-expand-all>⬇ Развернуть всё</button>
                <button type="button" class="btn-mini" data-collapse-all>⬆ Свернуть всё</button>
                <button type="button" class="btn-mini sp-toggle-btn" id="lessonSpToggle" title="Переключить sitelen pona (клавиша S)">
                    <span class="sp-switch"></span>
                    <span class="sp-toggle-icon">toki</span>
                    <span class="sp-toggle-label">sitelen pona</span>
                </button>
            </div>

            <div class="lesson-content" id="sec-theory">${lesson.content || ''}</div>

            ${exCount ? `
                <details class="lesson-block" id="sec-exercises">
                    <summary>
                        <span class="lb-emoji">📝</span>
                        <span class="lb-title">Упражнения</span>
                        <span class="lb-count">${exCount}</span>
                    </summary>
                    <div class="lesson-block-body" data-body="exercises"></div>
                </details>` : ''}

            ${testCount ? `
                <details class="lesson-block" id="sec-test">
                    <summary>
                        <span class="lb-emoji">🧪</span>
                        <span class="lb-title">Расширенный тест</span>
                        <span class="lb-count">${testCount}</span>
                    </summary>
                    <div class="lesson-block-body" data-body="test"></div>
                </details>` : ''}

            ${buildCount ? `
                <details class="lesson-block" id="sec-builder">
                    <summary>
                        <span class="lb-emoji">🧱</span>
                        <span class="lb-title">Конструктор фраз</span>
                        <span class="lb-count">${buildCount}</span>
                    </summary>
                    <div class="lesson-block-body" data-body="builder"></div>
                </details>` : ''}

            <div class="lesson-footer">
                <a class="btn btn-secondary" href="#" data-back>← К списку уроков</a>
                <button class="btn" id="finishLesson" type="button" ${isDone ? 'disabled' : ''}>
                    ${isDone ? '✅ Урок пройден' : `✓ Завершить урок (+${lesson.xp} XP)`}
                </button>
            </div>
            <div class="page-footer">Vulpeto Abeleto · 2026</div>
        `;

        rootEl.querySelectorAll('[data-back]').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                window.location.hash = '';
            });
        });

        if (exCount) {
            const body = rootEl.querySelector('[data-body="exercises"]');
            (lesson.exercises || []).forEach((e, i) =>
                body.appendChild(renderChoiceExercise(e, i, exCount, false)));
        }
        if (testCount) {
            const body = rootEl.querySelector('[data-body="test"]');
            (lesson.test || []).forEach((q, i) => {
                if (q.type === 'input') body.appendChild(renderInputQuestion(q, i, testCount));
                else body.appendChild(renderChoiceExercise(q, i, testCount, true));
            });
        }
        if (buildCount) {
            const body = rootEl.querySelector('[data-body="builder"]');
            (lesson.builder || []).forEach((b, i) => body.appendChild(renderBuilderItem(b, i)));
        }

        const expandBtn = rootEl.querySelector('[data-expand-all]');
        const collapseBtn = rootEl.querySelector('[data-collapse-all]');
        if (expandBtn) expandBtn.onclick = () => {
            rootEl.querySelectorAll('details.lesson-block').forEach(d => d.open = true);
        };
        if (collapseBtn) collapseBtn.onclick = () => {
            rootEl.querySelectorAll('details.lesson-block').forEach(d => d.open = false);
        };

        /* Тумблер sitelen pona */
        const spBtn = document.getElementById('lessonSpToggle');
        if (spBtn) spBtn.addEventListener('click', toggleSpMode);

        rootEl.querySelectorAll('.lesson-nav a').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const href = a.getAttribute('href');
                if (!href || !href.startsWith('#')) return;
                const target = rootEl.querySelector(href);
                if (!target) return;

                if (target.tagName === 'DETAILS') target.open = true;

                const content = document.getElementById('content');
                const stickyNav = rootEl.querySelector('.lesson-nav');
                const stickyHeight = stickyNav ? stickyNav.offsetHeight + 16 : 0;

                if (content && target) {
                    const targetTop = target.getBoundingClientRect().top
                                    + content.scrollTop
                                    - stickyHeight;
                    content.scrollTo({ top: targetTop, behavior: 'smooth' });
                }
                if (global.VATheme) global.VATheme.animatePageIn(rootEl);
            });
        });

        const fin = document.getElementById('finishLesson');
        if (fin && !isDone) fin.addEventListener('click', () => finishLesson(lesson));

        /* Восстанавливаем сохранённый режим */
        applySpMode(loadSpMode());

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function finishLesson(lesson) {
        C.data.lessons[lesson.id] = {
            completed: true,
            date: C.todayISO(),
            xp: lesson.xp
        };
        C.addXp(lesson.xp);
        C.saveData();
        if (global.VAToast) global.VAToast.show(`pona! +${lesson.xp} XP`);
        openLesson(lesson);
    }

    function renderChoiceExercise(q, i, total, withExplain) {
        const div = document.createElement('div');
        div.className = 'exercise';
        div.innerHTML = `
            <div class="exercise-num">Вопрос ${i + 1} из ${total}</div>
            <div class="exercise-q">${q.q}</div>
            <div class="exercise-options">
                ${q.opts.map((o, j) => `<button type="button" class="exercise-option" data-i="${j}">${o}</button>`).join('')}
            </div>
            <div class="exercise-result"></div>
        `;

        div.querySelectorAll('.exercise-option').forEach(btn => {
            btn.addEventListener('click', () => {
                if (div.dataset.answered) return;
                div.dataset.answered = '1';
                const picked = +btn.dataset.i;
                const correct = picked === q.ans;

                div.querySelectorAll('.exercise-option').forEach((b, j) => {
                    b.classList.add('disabled');
                    if (j === q.ans) b.classList.add('correct');
                    else if (j === picked && !correct) b.classList.add('wrong');
                });

                const r = div.querySelector('.exercise-result');
                r.className = 'exercise-result show ' + (correct ? 'ok' : 'err');
                r.textContent = correct
                    ? ('✓ pona!' + (withExplain && q.explain ? ' ' + q.explain : ''))
                    : ('✕ ' + (q.explain || 'Правильный ответ выделен.'));
            });
        });
        return div;
    }

    function renderInputQuestion(q, i, total) {
        const div = document.createElement('div');
        div.className = 'exercise';
        div.innerHTML = `
            <div class="exercise-num">Вопрос ${i + 1} из ${total}</div>
            <div class="exercise-q">${q.q}</div>
            <input type="text" class="test-input" placeholder="Введите ответ..." autocomplete="off" />
            <div class="exercise-result"></div>
        `;
        const inp = div.querySelector('.test-input');
        const r = div.querySelector('.exercise-result');

        inp.addEventListener('input', () => {
            const val = inp.value.trim().toLowerCase();
            if (!val) { r.className = 'exercise-result'; return; }
            const ok = val === String(q.ans).toLowerCase();
            r.className = 'exercise-result show ' + (ok ? 'ok' : 'err');
            r.textContent = ok
                ? ('✓ pona!' + (q.explain ? ' ' + q.explain : ''))
                : (q.explain || 'Пока не то. Попробуйте ещё.');
        });
        return div;
    }

    function renderBuilderItem(b, i) {
        const div = document.createElement('div');
        div.className = 'builder-item';
        const shuffled = [...b.words].sort(() => Math.random() - 0.5);

        div.innerHTML = `
            <div class="builder-translation">${i + 1}. ${b.translation}</div>
            <div class="builder-slots" data-slots></div>
            <div class="builder-pool">
                ${shuffled.map(w => `<button type="button" class="builder-word" data-word="${w}">${w}</button>`).join('')}
            </div>
            <div class="exercise-result"></div>
        `;

        const slots = div.querySelector('[data-slots]');
        const pool = div.querySelector('.builder-pool');
        const result = div.querySelector('.exercise-result');
        let built = [];

        function updateSlots() {
            if (built.length === 0) {
                slots.innerHTML = '<span class="builder-placeholder">Нажимайте слова ниже ↓</span>';
                return;
            }
            slots.innerHTML = built.map((w, idx) =>
                `<button type="button" class="builder-slot" data-idx="${idx}">${w}</button>`
            ).join('');
            slots.querySelectorAll('.builder-slot').forEach(s => {
                s.addEventListener('click', () => {
                    const idx = +s.dataset.idx;
                    const removed = built.splice(idx, 1)[0];
                    const btn = [...pool.querySelectorAll('.builder-word')]
                        .find(x => x.dataset.word === removed && x.disabled);
                    if (btn) { btn.disabled = false; btn.style.opacity = ''; }
                    updateSlots();
                });
            });
        }

        pool.querySelectorAll('.builder-word').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                built.push(btn.dataset.word);
                btn.disabled = true;
                btn.style.opacity = '0.3';
                updateSlots();
                if (built.length === b.correct.length) checkBuild();
            });
        });

        function checkBuild() {
            const ok = built.join(' ') === b.correct.join(' ');
            result.className = 'exercise-result show ' + (ok ? 'ok' : 'err');
            result.textContent = ok
                ? '✓ pona!'
                : `✕ Правильно: ${b.correct.join(' ')}`;
        }

        updateSlots();
        return div;
    }

    global.VALessonEngine = { mount };

})(window);