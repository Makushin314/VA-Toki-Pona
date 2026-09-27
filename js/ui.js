/* ============================================================
   VA UI — модальные окна и тосты
   VA TOKI PONA · Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    let modalOverlay = null;
    let modalTitle = null;
    let modalBody = null;
    let modalFooter = null;

    function initModal() {
        modalOverlay = document.getElementById('modalOverlay');
        modalTitle   = document.getElementById('modalTitle');
        modalBody    = document.getElementById('modalBody');
        modalFooter  = document.getElementById('modalFooter');

        if (!modalOverlay) return;

        modalOverlay.addEventListener('click', e => {
            if (e.target === modalOverlay) closeModal();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
                closeModal();
            }
        });
    }

    function showModal({ title, body, buttons }) {
        if (!modalOverlay) initModal();
        if (!modalOverlay) return;

        modalTitle.textContent = title || '';
        modalBody.innerHTML = '';
        if (typeof body === 'string') modalBody.innerHTML = body;
        else if (body) modalBody.appendChild(body);

        modalFooter.innerHTML = '';
        (buttons || []).forEach(b => {
            const btn = document.createElement('button');
            btn.className = 'btn ' + (b.class || 'btn-secondary');
            btn.textContent = b.text;
            btn.addEventListener('click', () => {
                const shouldClose = b.onClick ? b.onClick() : true;
                if (shouldClose !== false) closeModal();
            });
            modalFooter.appendChild(btn);
        });

        modalOverlay.classList.add('open');
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('open');
        if (modalBody)   modalBody.innerHTML = '';
        if (modalFooter) modalFooter.innerHTML = '';
    }

    let toastTimer = null;

    function toast(msg, type = 'success') {
        const el = document.getElementById('toast');
        if (!el) return;

        el.textContent = msg;
        el.className = 'toast ' + type;
        requestAnimationFrame(() => el.classList.add('show'));

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
    }

    global.VAModal = { show: showModal, close: closeModal, init: initModal };
    global.VAToast = { show: toast };

})(window);