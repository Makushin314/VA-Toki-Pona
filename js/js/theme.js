/* ============================================================
   VA THEME — темы, sidebar, dropdown, анимация страниц
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

        /* ─── SITELEN PONA — единый ключ ─── */
    const SP_KEY = 'va_tp_sp_mode';

    function readSpMode() {
        try { return localStorage.getItem(SP_KEY) === '1'; }
        catch (e) { return false; }
    }
    function writeSpMode(on) {
        try { localStorage.setItem(SP_KEY, on ? '1' : '0'); } catch (e) {}
    }
    function broadcastSpMode(on) {
        window.dispatchEvent(new CustomEvent('va-sp-mode-change', { detail: { on: on } }));
    }

    const THEMES = {
        dark: {
            name: 'Тёмная', icon: '🌙',
            vars: {
                '--bg': '#0D110F', '--card': '#151A17', '--card2': '#1C231E', '--input': '#202821',
                '--border': '#29332C', '--text': '#F3F6F3', '--muted': '#9CA79E',
                '--green': '#00A000', '--green-hover': '#00B800', '--danger': '#D9534F'
            }
        },
        light: {
            name: 'Светлая', icon: '☀️',
            vars: {
                '--bg': '#F2F6F2', '--card': '#FFFFFF', '--card2': '#F7FAF7', '--input': '#EEF3EE',
                '--border': '#D9E2D9', '--text': '#172019', '--muted': '#68736B',
                '--green': '#00A000', '--green-hover': '#00B800', '--danger': '#D9534F'
            }
        },
        winter: {
            name: 'Зимняя', icon: '❄️',
            vars: {
                '--bg': '#0B1520', '--card': '#132234', '--card2': '#182B40', '--input': '#1D344C',
                '--border': '#274562', '--text': '#EAF4FB', '--muted': '#8FA8C0',
                '--green': '#4DA6FF', '--green-hover': '#6BB8FF', '--danger': '#E85D75'
            }
        },
        forest: {
            name: 'Лесная', icon: '🌲',
            vars: {
                '--bg': '#0A130E', '--card': '#122018', '--card2': '#17291F', '--input': '#1C3126',
                '--border': '#253D2F', '--text': '#E8F2E8', '--muted': '#8FAF93',
                '--green': '#2E8B57', '--green-hover': '#3DA66A', '--danger': '#C9645B'
            }
        },
        autumn: {
            name: 'Осенняя', icon: '🍂',
            vars: {
                '--bg': '#1A1210', '--card': '#241A15', '--card2': '#2E211B', '--input': '#342720',
                '--border': '#42332A', '--text': '#F5EDE5', '--muted': '#B8A398',
                '--green': '#D2691E', '--green-hover': '#E67E22', '--danger': '#C0392B'
            }
        },
        cat: {
            name: 'Кошачья', icon: '🐱',
            vars: {
                '--bg': '#14101C', '--card': '#1C1826', '--card2': '#231E30', '--input': '#2A2338',
                '--border': '#3A2F4A', '--text': '#F0EAF5', '--muted': '#9C93B0',
                '--green': '#F5A623', '--green-hover': '#FFB84D', '--danger': '#E85D75'
            }
        }
    };

    const C = global.VACore;

    let currentTheme = localStorage.getItem(C.THEME_KEY) || 'dark';
    if (!THEMES[currentTheme]) currentTheme = 'dark';

    function apply(key) {
        const t = THEMES[key] || THEMES.dark;
        currentTheme = key;
        const root = document.documentElement;
        Object.entries(t.vars).forEach(([k, v]) => root.style.setProperty(k, v));
        root.setAttribute('data-theme-key', key);
        try { localStorage.setItem(C.THEME_KEY, key); } catch (e) {}
        applyWeatherEffect(key);
    }

    function renderPicker() {
        const picker = document.getElementById('themePicker');
        if (!picker) return;
        picker.innerHTML = Object.entries(THEMES).map(([k, t]) => `
            <div class="theme-option ${currentTheme === k ? 'active' : ''}" data-theme-key="${k}">
                <div class="theme-emoji">${t.icon}</div>
                <div class="theme-name">${t.name}</div>
                <div class="theme-preview" style="background:${t.vars['--bg']};">
                    <span style="background:${t.vars['--card']};"></span>
                    <span style="background:${t.vars['--green']};"></span>
                    <span style="background:${t.vars['--card2']};"></span>
                </div>
            </div>`).join('');
    }

    function bindPicker() {
        const picker = document.getElementById('themePicker');
        if (!picker || picker.dataset.bound) return;
        picker.dataset.bound = '1';
        picker.addEventListener('click', e => {
            const opt = e.target.closest('[data-theme-key]');
            if (!opt) return;
            const key = opt.dataset.themeKey;
            if (key === currentTheme) return;
            apply(key);
            renderPicker();
            if (global.VAToast) global.VAToast.show(`Тема «${THEMES[key].name}» включена`);
        });
    }

    function getDefaultSidebarPos() {
        return window.innerWidth <= 700 ? 'top' : 'left';
    }

    let sidebarPos = localStorage.getItem(C.SIDEBAR_POS_KEY) || getDefaultSidebarPos();
    if (sidebarPos !== 'left' && sidebarPos !== 'top') sidebarPos = getDefaultSidebarPos();

    function applySidebarPos(pos) {
        sidebarPos = pos;
        document.documentElement.setAttribute('data-sidebar-pos', pos);
        document.body.removeAttribute('data-sidebar-pos');
        try { localStorage.setItem(C.SIDEBAR_POS_KEY, pos); } catch (e) {}
        renderSidebarPosPicker();
    }

    function renderSidebarPosPicker() {
        const picker = document.getElementById('sidebarPosPicker');
        if (!picker) return;
        picker.querySelectorAll('[data-pos]').forEach(el => {
            el.classList.toggle('active', el.dataset.pos === sidebarPos);
        });
    }

    function bindSidebarPosPicker() {
        const picker = document.getElementById('sidebarPosPicker');
        if (!picker || picker.dataset.bound) return;
        picker.dataset.bound = '1';
        picker.addEventListener('click', e => {
            const opt = e.target.closest('[data-pos]');
            if (!opt) return;
            const pos = opt.dataset.pos;
            if (pos === sidebarPos) return;
            applySidebarPos(pos);
            if (global.VAToast) global.VAToast.show(pos === 'top' ? 'Панель перемещена наверх' : 'Панель перемещена влево');
        });
    }

    function markNavReady() {
        document.documentElement.setAttribute('data-nav-ready', '1');
    }

        function initTopDropdown() {
        const nav = document.getElementById('nav');
        if (!nav) { markNavReady(); return; }
        if (nav.dataset.dropdownReady === '1') { markNavReady(); return; }
        nav.dataset.dropdownReady = '1';

        const navBtns = Array.from(nav.children).filter(el =>
            el.classList && el.classList.contains('nav-btn')
        );
        if (navBtns.length < 2) { markNavReady(); return; }

        const homeBtn = navBtns[0];
        homeBtn.classList.add('nav-home');

        const more = document.createElement('div');
        more.className = 'nav-more';

        const nodes = Array.from(nav.childNodes);
        let started = false;
        nodes.forEach(node => {
            if (node === homeBtn) { started = true; return; }
            if (!started) return;
            more.appendChild(node);
        });

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav-btn nav-dropdown-toggle';
        toggle.setAttribute('aria-label', 'Ещё');
        toggle.innerHTML = '<span class="nav-icon">☰</span><span class="nav-label">Ещё</span>';

        /* ─── SITELEN PONA TOGGLE — рядом с Home ─── */
        const spToggle = document.createElement('button');
        spToggle.type = 'button';
        spToggle.className = 'nav-btn nav-sp-toggle';
        spToggle.id = 'navSpToggle';
        spToggle.setAttribute('aria-label', 'sitelen pona');
        spToggle.title = 'Переключить sitelen pona (клавиша S)';
        spToggle.innerHTML =
            '<span class="nav-sp-switch"></span>' +
            '<span class="nav-sp-icon">toki</span>' +
            '<span class="nav-sp-label">sitelen pona</span>';

        homeBtn.insertAdjacentElement('afterend', spToggle);

        if (readSpMode()) spToggle.classList.add('active');

        spToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const on = !spToggle.classList.contains('active');
            spToggle.classList.toggle('active', on);
            writeSpMode(on);
            broadcastSpMode(on);
            if (global.VAToast) {
                global.VAToast.show(on ? 'toki → ✦ sitelen pona' : '✦ sitelen pona → toki');
            }
        });

        nav.appendChild(toggle);
        nav.appendChild(more);

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = more.classList.toggle('open');
            toggle.classList.toggle('open', isOpen);
        });

        document.addEventListener('click', (e) => {
            if (!more.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
                more.classList.remove('open');
                toggle.classList.remove('open');
            }
        });

        more.addEventListener('click', (e) => {
            if (e.target.closest('.nav-btn')) {
                more.classList.remove('open');
                toggle.classList.remove('open');
            }
        });

        markNavReady();
    }

    function animatePageIn(el) {
        if (!el) return;
        el.classList.remove('fade-slide-in');
        void el.offsetWidth;
        el.classList.add('fade-slide-in');
    }

    function applyWeatherEffect(themeKey) {
        const old = document.getElementById('weatherEffect');
        if (old) old.remove();

        if (!document.getElementById('page-home')) return;

        let type = null;
        if      (themeKey === 'winter') type = 'snow';
        else if (themeKey === 'autumn') type = 'leaf';
        else if (themeKey === 'cat')    type = 'cat';
        else return;

        const container = document.createElement('div');
        container.className = 'weather-effect';
        container.id = 'weatherEffect';

        const isMobile = window.innerWidth <= 700;

        let emojis, count, sizeMin, sizeMax, durMin, durMax, baseOpacity, spread;

        if (type === 'snow') {
            emojis = ['❄', '❅', '❆', '❄', '❄'];
            count = isMobile ? 25 : 45;
            sizeMin = 8; sizeMax = 22;
            durMin = 7; durMax = 15;
            baseOpacity = 0.20; spread = 0.30;
        } else if (type === 'leaf') {
            emojis = ['🍂', '🍁', '🍃', '🍂'];
            count = isMobile ? 16 : 28;
            sizeMin = 12; sizeMax = 24;
            durMin = 9; durMax = 19;
            baseOpacity = 0.30; spread = 0.35;
        } else {
            emojis = ['🐾', '🐾', '🐾', '🐱', '🐈'];
            count = isMobile ? 18 : 32;
            sizeMin = 14; sizeMax = 28;
            durMin = 9; durMax = 18;
            baseOpacity = 0.30; spread = 0.35;
        }

        for (let i = 0; i < count; i++) {
            const el = document.createElement('span');
            el.className = 'weather-particle ' + type;
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            const size = sizeMin + Math.random() * (sizeMax - sizeMin);
            el.style.left     = (Math.random() * 100) + '%';
            el.style.fontSize = size + 'px';

            const duration = durMin + Math.random() * (durMax - durMin);
            el.style.animationDuration = duration.toFixed(2) + 's';
            el.style.animationDelay    = (-Math.random() * duration).toFixed(2) + 's';

            el.style.setProperty(
                '--particle-opacity',
                (baseOpacity + Math.random() * spread).toFixed(2)
            );

            el.style.marginLeft = ((Math.random() - 0.5) * 40).toFixed(0) + 'px';

            container.appendChild(el);
        }

        document.body.appendChild(container);
    }

    function init() {
        const root = document.documentElement;
        if (!root.getAttribute('data-theme-key')) apply(currentTheme);
        if (!root.getAttribute('data-sidebar-pos')) applySidebarPos(sidebarPos);
        renderPicker();
        bindPicker();
        renderSidebarPosPicker();
        bindSidebarPosPicker();
        initTopDropdown();
        if (!root.hasAttribute('data-nav-ready')) markNavReady();
        applyWeatherEffect(currentTheme);
    }

        global.VATheme = {
        THEMES,
        apply,
        getCurrent: () => currentTheme,
        renderPicker,
        renderSidebarPosPicker,
        applySidebarPos,
        animatePageIn,
        applyWeatherEffect,
        init,

        /* ─── SITELEN PONA API ─── */
        getSpMode: readSpMode,
        setSpMode: function (on) {
            writeSpMode(on);
            const btn = document.getElementById('navSpToggle');
            if (btn) btn.classList.toggle('active', on);
            broadcastSpMode(on);
        }
    };

})(window);