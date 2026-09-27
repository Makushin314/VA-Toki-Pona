/* ============================================================
   VA SETTINGS — профиль, экспорт/импорт, сброс
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const C = global.VACore;

    function render() {
        const nameInput = document.getElementById('profileName');
        const goalInput = document.getElementById('profileGoal');
        if (nameInput) nameInput.value = C.data.profile.name || '';
        if (goalInput) goalInput.value = String(C.data.profile.goal || 20);

        const statsBox = document.getElementById('globalStats');
        if (statsBox) renderStats(statsBox);

        if (global.VATheme) {
            global.VATheme.renderPicker();
            global.VATheme.renderSidebarPosPicker();
        }
    }

    function renderStats(box) {
        const lessons = C.getTotalLessonsDone();
        const words   = C.getLearnedWordsCount();
        const ach     = C.data.unlockedAch.length;
        const xp      = C.getTotalXp();

        box.innerHTML = `
            <div class="stats-grid">
                <div class="stat-box"><div class="stat-num">${lessons}</div><div class="stat-lbl">Уроков пройдено</div></div>
                <div class="stat-box"><div class="stat-num">${words}</div><div class="stat-lbl">Слов изучено</div></div>
                <div class="stat-box"><div class="stat-num">${ach}</div><div class="stat-lbl">Достижений</div></div>
                <div class="stat-box"><div class="stat-num">${xp}</div><div class="stat-lbl">XP всего</div></div>
            </div>`;
    }

    function bindProfile() {
        const nameInput = document.getElementById('profileName');
        const goalInput = document.getElementById('profileGoal');

        if (nameInput && !nameInput.dataset.bound) {
            nameInput.dataset.bound = '1';
            nameInput.addEventListener('input', e => {
                C.data.profile.name = e.target.value.trim();
                C.saveData();
            });
        }

        if (goalInput && !goalInput.dataset.bound) {
            goalInput.dataset.bound = '1';
            goalInput.addEventListener('change', e => {
                C.data.profile.goal = +e.target.value;
                C.saveData();
                if (global.VAToast) global.VAToast.show('Цель обновлена');
            });
        }
    }

    function bindExport() {
        const btn = document.getElementById('exportBtn');
        if (!btn || btn.dataset.bound) return;
        btn.dataset.bound = '1';

        btn.addEventListener('click', () => {
            const blob = new Blob([JSON.stringify(C.data, null, 2)], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `va-toki-pona-${C.todayISO()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(a.href);
            if (global.VAToast) global.VAToast.show('Данные экспортированы');
        });
    }

    function bindImport() {
        const importBtn  = document.getElementById('importBtn');
        const importFile = document.getElementById('importFile');
        if (!importBtn || !importFile || importBtn.dataset.bound) return;
        importBtn.dataset.bound = '1';

        importBtn.addEventListener('click', () => importFile.click());

        importFile.addEventListener('change', e => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = ev => {
                try {
                    const parsed = JSON.parse(ev.target.result);
                    if (!parsed || typeof parsed !== 'object') throw new Error('bad');
                    showImportModal(parsed);
                } catch (err) {
                    if (global.VAToast) global.VAToast.show('Не удалось прочитать файл', 'error');
                }
            };
            reader.readAsText(file);
            e.target.value = '';
        });
    }

    function showImportModal(parsed) {
        if (!global.VAModal) return;

        global.VAModal.show({
            title: 'Импорт данных',
            body: '<p style="color:var(--muted);">Как поступить с текущим прогрессом?</p>',
            buttons: [
                { text: 'Отмена', class: 'btn-secondary' },
                { text: 'Заменить', class: 'btn-danger', onClick: () => {
                    C.data = Object.assign(C.defaultData(), parsed);
                    C.saveData();
                    render();
                    if (global.VAHome) global.VAHome.render();
                    if (global.VAToast) global.VAToast.show('Данные импортированы');
                }},
                { text: 'Объединить', class: '', onClick: () => {
                    const d = C.data;
                    d.lessons    = Object.assign({}, d.lessons, parsed.lessons || {});
                    d.flashcards = Object.assign({}, d.flashcards, parsed.flashcards || {});
                    d.profile.xpTotal = Math.max(d.profile.xpTotal || 0, (parsed.profile && parsed.profile.xpTotal) || 0);
                    const achSet = new Set([...(d.unlockedAch || []), ...((parsed.unlockedAch) || [])]);
                    d.unlockedAch = [...achSet];
                    C.saveData();
                    render();
                    if (global.VAHome) global.VAHome.render();
                    if (global.VAToast) global.VAToast.show('Данные объединены');
                }}
            ]
        });
    }

    function bindClearAll() {
        const btn = document.getElementById('clearAllBtn');
        if (!btn || btn.dataset.bound) return;
        btn.dataset.bound = '1';

        btn.addEventListener('click', () => {
            if (!global.VAModal) return;
            global.VAModal.show({
                title: 'Удалить всё?',
                body: '<p style="color:var(--muted);">Весь прогресс, XP, уроки, слова и достижения будут стёрты безвозвратно.</p>',
                buttons: [
                    { text: 'Отмена', class: 'btn-secondary' },
                    { text: 'Удалить всё', class: 'btn-danger', onClick: () => {
                        try { localStorage.removeItem(C.STORAGE_KEY); } catch (e) {}
                        C.data = C.defaultData();
                        C.saveData();
                        render();
                        if (global.VAHome) global.VAHome.render();
                        if (global.VAToast) global.VAToast.show('Все данные удалены');
                    }}
                ]
            });
        });
    }

    function init() {
        bindProfile();
        bindExport();
        bindImport();
        bindClearAll();
    }

    global.VASettings = { init, render };

})(window);