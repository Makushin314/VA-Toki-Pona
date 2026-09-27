/* ============================================================
   VA HOME — главная страница (хаб)
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const C = global.VACore;
    const escapeHtml = C.escapeHtml;

    const LEVELS_META = [
        { key: 'tp1', icon: '🔵', name: 'nanpa wan',  desc: 'Приветствия, li, e, lon, pi. 64 базовых слова' },
        { key: 'tp2', icon: '🟣', name: 'nanpa tu',   desc: 'Частицы, эмоции, вопросы, цвета. 50 слов' },
        { key: 'tp3', icon: '🟡', name: 'nanpa mute', desc: 'nimi ku suli, абстракции, стилистика. 47 слов' }
    ];

    /* ---------- Hero ---------- */
    function renderHero() {
        const name = C.data.profile.name || 'jan sona';

        const heroName = document.getElementById('heroName');
        if (heroName) heroName.textContent = `toki, ${name}! 👋`;

        const greeting = document.getElementById('homeGreeting');
        if (greeting) {
            greeting.textContent = C.data.profile.name
                ? `toki, ${C.data.profile.name}!`
                : 'toki!';
        }

        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('hsLessons', C.getTotalLessonsDone());
        set('hsStreak',  (C.data.profile.streak || 0) + '🔥');
        set('hsXp',      C.getTotalXp());
        set('hsWords',   C.getLearnedWordsCount());

        const goal = C.data.profile.goal || 20;
        const todayXp = C.data.profile.xpDate === C.todayISO() ? (C.data.profile.xpToday || 0) : 0;
        const pct = Math.min(100, Math.round(todayXp / goal * 100));

        const fill = document.getElementById('goalFill');
        const text = document.getElementById('goalText');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = `${todayXp} / ${goal} XP сегодня`;
    }

    function hasAnyLessons() {
        return ['tp1', 'tp2', 'tp3'].some(lv => (C.LESSONS[lv] || []).length > 0);
    }

    /* ---------- Найти следующий урок ---------- */
    function findNextLesson() {
        for (const level of ['tp1', 'tp2', 'tp3']) {
            const arr = C.LESSONS[level] || [];
            for (const lesson of arr) {
                if (!C.data.lessons[lesson.id]) return { level, lesson };
            }
        }
        return null;
    }

    /* ---------- Блок «Продолжить» ---------- */
    function renderContinue() {
        const cont = document.getElementById('continueCard');
        if (!cont) return;

        if (!hasAnyLessons()) {
            cont.innerHTML = `
                <div class="continue-card" style="background:linear-gradient(135deg, var(--card2) 0%, var(--card) 100%); border:1px dashed var(--border); box-shadow:none;">
                    <div>
                        <div class="cc-label">📚 o awen</div>
                        <div class="cc-title">Курсы ещё не подключены</div>
                    </div>
                </div>`;
            return;
        }

        const next = findNextLesson();

        if (!next) {
            cont.innerHTML = `
                <div class="continue-card" style="background:linear-gradient(135deg,#9C27B0 0%,#673AB7 100%);">
                    <div>
                        <div class="cc-label">🎉 pona mute!</div>
                        <div class="cc-title">Все уровни пройдены — sina sona e toki pona!</div>
                    </div>
                </div>`;
            return;
        }

        cont.innerHTML = `
            <a class="continue-card" href="courses/${next.level}.html#${next.lesson.id}">
                <div>
                    <div class="cc-label">${next.level.toUpperCase()} · o awen sona</div>
                    <div class="cc-title">${escapeHtml(next.lesson.title)} — ${escapeHtml(next.lesson.desc)}</div>
                </div>
                <span class="cc-btn">открыть →</span>
            </a>`;
    }

    /* ---------- Сетка уровней ---------- */
    function renderLevels() {
        const grid = document.getElementById('levelsGrid');
        if (!grid) return;

        grid.innerHTML = LEVELS_META.map(l => {
            const arr = C.LESSONS[l.key] || [];
            const total = arr.length;
            const done = C.getCompletedCount(l.key);
            const pct = total ? Math.round(done / total * 100) : 0;

            if (total === 0) {
                return `
                    <div class="level-card" style="opacity:0.45; cursor:default;">
                        <span class="level-badge ${l.key}">${l.icon}</span>
                        <div class="level-name">${l.name}</div>
                        <div class="level-desc">${l.desc}</div>
                        <div class="level-progress">
                            <div class="level-progress-fill" style="width:0%;"></div>
                        </div>
                        <div class="level-meta">tenpo kama — скоро</div>
                    </div>`;
            }

            return `
                <a class="level-card" href="courses/${l.key}.html">
                    <span class="level-badge ${l.key}">${l.icon}</span>
                    <div class="level-name">${l.name}</div>
                    <div class="level-desc">${l.desc}</div>
                    <div class="level-progress">
                        <div class="level-progress-fill" style="width:${pct}%;"></div>
                    </div>
                    <div class="level-meta">${done} / ${total} · ${pct}%</div>
                </a>`;
        }).join('');
    }

    /* ---------- Достижения ---------- */
    function renderAchievements() {
        const grid = document.getElementById('achGrid');
        if (!grid) return;

        grid.innerHTML = C.ACHIEVEMENTS.map(a => {
            const unlocked = C.data.unlockedAch.includes(a.id);
            return `
                <div class="ach ${unlocked ? 'unlocked' : ''}" title="${escapeHtml(a.desc)}">
                    <div class="ach-icon">${a.icon}</div>
                    <div class="ach-name">${escapeHtml(a.name)}</div>
                    <div class="ach-desc">${escapeHtml(a.desc)}</div>
                </div>`;
        }).join('');
    }

    /* ---------- Общий рендер ---------- */
    function render() {
        renderHero();
        renderContinue();
        renderLevels();
        renderAchievements();
        C.updateNavBadges();
    }

    global.VAHome = { render, updateNavBadges: C.updateNavBadges };

})(window);