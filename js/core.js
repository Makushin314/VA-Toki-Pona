/* ============================================================
   VA CORE — данные, хранилище, XP, достижения
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const STORAGE_KEY     = 'va_toki_pona_v1';
    const THEME_KEY       = 'va_tp_theme';
    const SIDEBAR_POS_KEY = 'va_tp_sidebar_pos';
    const WELCOMED_KEY    = 'va_tp_welcomed';

    /* Курсы: 3 уровня — nanpa wan / tu / mute */
    const LESSONS = {
        tp1: global.LESSONS_TP1 || [],
        tp2: global.LESSONS_TP2 || [],
        tp3: global.LESSONS_TP3 || []
    };

    if (global.LESSONS_TP1 === undefined) {
        console.warn('VA: data/courses-tp1.js не загружен! Проверь путь и порядок подключения.');
    }

    /* ---------- Состояние ---------- */
    function defaultData() {
        return {
            profile: {
                name: '',
                goal: 20,
                startedAt: new Date().toISOString(),
                streak: 0,
                lastActive: null,
                xpToday: 0,
                xpDate: null,
                xpTotal: 0
            },
            lessons:     {},
            flashcards:  {},
            unlockedAch: [],
            stats: {
                flashcardsToday:  0,
                flashcardsStreak: 0,
                flashcardsDate:   null
            }
        };
    }

    let data = defaultData();

    /* ---------- Хранилище ---------- */
    function loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            data = defaultData();
            Object.assign(data, parsed);
            data.profile = Object.assign(defaultData().profile, parsed.profile || {});
            data.stats   = Object.assign(defaultData().stats,   parsed.stats   || {});
        } catch (e) {
            console.warn('VA: ошибка загрузки данных', e);
            data = defaultData();
        }
    }

    function saveData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn('VA: ошибка сохранения', e);
        }
    }

    /* ---------- Утилиты ---------- */
    function todayISO() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    function escapeHtml(s) {
        if (s == null) return '';
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    }

    /* ---------- Прогресс ---------- */
    function getTotalLessonsDone() {
        return Object.keys(data.lessons).filter(id => data.lessons[id].completed).length;
    }

    function getCompletedCount(level) {
        const arr = LESSONS[level] || [];
        return arr.filter(l => data.lessons[l.id]).length;
    }

    function getLevelProgress(level) {
        const arr = LESSONS[level] || [];
        return arr.length ? getCompletedCount(level) / arr.length : 0;
    }

    function getTotalXp() {
        return data.profile.xpTotal || 0;
    }

    function getLearnedWordsCount() {
        return Object.keys(data.flashcards)
            .filter(k => (data.flashcards[k].box || 0) >= 4).length;
    }

    /* ---------- Серия дней ---------- */
    function updateStreak() {
        const today = todayISO();
        const last = data.profile.lastActive;
        if (last === today) return;

        if (last) {
            const diff = (new Date(today) - new Date(last)) / 86400000;
            if (diff === 1)      data.profile.streak = (data.profile.streak || 0) + 1;
            else if (diff > 1)   data.profile.streak = 1;
        } else {
            data.profile.streak = 1;
        }

        data.profile.lastActive = today;
        if (data.profile.xpDate !== today) {
            data.profile.xpDate  = today;
            data.profile.xpToday = 0;
        }
        saveData();
    }

    function addXp(amount) {
        const today = todayISO();
        if (data.profile.xpDate !== today) {
            data.profile.xpDate  = today;
            data.profile.xpToday = 0;
        }
        data.profile.xpToday = (data.profile.xpToday || 0) + amount;
        data.profile.xpTotal = (data.profile.xpTotal || 0) + amount;
        saveData();
        checkAchievements();
    }

    /* ---------- Достижения ---------- */
    const ACHIEVEMENTS = [
        { id: 'first_lesson', icon: '🌱', name: 'nanpa wan',     desc: 'Пройди первый урок',        check: () => getTotalLessonsDone() >= 1 },
        { id: 'tp1_done',     icon: '🔵', name: 'nanpa wan pini', desc: 'Заверши все уроки nanpa wan', check: () => LESSONS.tp1.length > 0 && getCompletedCount('tp1') >= LESSONS.tp1.length },
        { id: 'tp2_done',     icon: '🟣', name: 'nanpa tu pini',  desc: 'Заверши все уроки nanpa tu',  check: () => LESSONS.tp2.length > 0 && getCompletedCount('tp2') >= LESSONS.tp2.length },
        { id: 'tp3_done',     icon: '🟡', name: 'nanpa mute pini',desc: 'Заверши все уроки nanpa mute',check: () => LESSONS.tp3.length > 0 && getCompletedCount('tp3') >= LESSONS.tp3.length },
        { id: 'streak3',      icon: '🔥', name: 'tenpo tu wan',   desc: 'Серия 3 дня подряд',        check: () => data.profile.streak >= 3 },
        { id: 'streak7',      icon: '💎', name: 'tenpo luka tu',  desc: 'Серия 7 дней подряд',       check: () => data.profile.streak >= 7 },
        { id: 'streak30',     icon: '👑', name: 'tenpo mute',     desc: 'Серия 30 дней подряд',      check: () => data.profile.streak >= 30 },
        { id: 'words30',      icon: '📚', name: 'nimi nanpa tu',  desc: 'Изучи 30 слов',             check: () => getLearnedWordsCount() >= 30 },
        { id: 'words80',      icon: '📖', name: 'nimi mute',      desc: 'Изучи 80 слов',             check: () => getLearnedWordsCount() >= 80 },
        { id: 'words137',     icon: '🏆', name: 'jan sona',       desc: 'Изучи все 137 слов',        check: () => getLearnedWordsCount() >= 137 },
        { id: 'xp500',        icon: '⭐', name: 'wawa tu',        desc: 'Набери 500 XP',             check: () => getTotalXp() >= 500 },
        { id: 'xp2000',       icon: '🌟', name: 'wawa mute',      desc: 'Набери 2000 XP',            check: () => getTotalXp() >= 2000 }
    ];

    function checkAchievements() {
        let changed = false;
        ACHIEVEMENTS.forEach(a => {
            if (!data.unlockedAch.includes(a.id) && a.check()) {
                data.unlockedAch.push(a.id);
                changed = true;
                if (global.VAToast) global.VAToast.show(`🏆 ${a.name}`);
            }
        });
        if (changed) saveData();
    }

    /* ---------- Обновление бейджей ---------- */
    function getWordsTotal() {
        if (global.VA_WORDS && Array.isArray(global.VA_WORDS) && global.VA_WORDS.length > 0) {
            return global.VA_WORDS.length;
        }
        if (global.VA_WORDS_TOTAL && global.VA_WORDS_TOTAL > 0) {
            return global.VA_WORDS_TOTAL;
        }
        return 0;
    }

    function updateNavBadges() {
        ['tp1', 'tp2', 'tp3'].forEach(function (lv) {
            const el = document.getElementById('navBadge' + lv.toUpperCase());
            if (!el) return;
            const arr = LESSONS[lv] || [];
            const total = arr.length;
            const done = getCompletedCount(lv);
            el.textContent = total > 0 ? (done + '/' + total) : '—';
        });

        const wordsEl = document.getElementById('navBadgeWords');
        if (!wordsEl) return;

        const totalWords = getWordsTotal();
        const learned = getLearnedWordsCount();

        if (totalWords > 0) {
            wordsEl.textContent = learned + '/' + totalWords;
        } else {
            wordsEl.textContent = learned + '/—';
        }
    }

    /* ---------- Озвучка (для токи пона не критично, но оставим) ---------- */
    function speak(text) {
        if (!('speechSynthesis' in window)) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en';
        u.rate = 0.85;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
    }

    /* ---------- Init ---------- */
    function init() {
        loadData();
        updateStreak();
    }

    /* ---------- Экспорт ---------- */
    global.VACore = {
        STORAGE_KEY, THEME_KEY, SIDEBAR_POS_KEY, WELCOMED_KEY,
        LESSONS,
        ACHIEVEMENTS,

        get data() { return data; },
        set data(v) { data = v; saveData(); },

        defaultData,
        loadData,
        saveData,
        todayISO,
        escapeHtml,
        generateId,
        getTotalLessonsDone,
        getCompletedCount,
        getLevelProgress,
        getTotalXp,
        getLearnedWordsCount,
        updateStreak,
        addXp,
        checkAchievements,
        updateNavBadges,
        speak,
        init
    };

})(window);