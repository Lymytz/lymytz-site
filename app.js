/* =====================================================
   LYMYTZ ERP – Subscription Site – JavaScript
   ===================================================== */

(function () {
    'use strict';

    /* ─── DATA ─── */
    const MODULES = [
        {
            id: 'commercial',
            name: 'Commercial',
            icon: '🛒',
            desc: 'Achats, ventes, stocks, facturation',
            color: '#6366f1',
        },
        {
            id: 'compta',
            name: 'Comptabilité',
            icon: '📊',
            desc: 'Grand livre, bilans, journaux',
            color: '#10b981',
        },
        {
            id: 'grh',
            name: 'GRH',
            icon: '👥',
            desc: 'Employés, paie, congés, formations',
            color: '#f59e0b',
        },
        {
            id: 'production',
            name: 'Production',
            icon: '🏭',
            desc: 'Ordres de fabrication, nomenclatures',
            color: '#ef4444',
        },
        {
            id: 'mutuelle',
            name: 'Mutuelle',
            icon: '🏥',
            desc: 'Prestations sociales et cotisations',
            color: '#06b6d4',
        },
        {
            id: 'projets',
            name: 'Projets',
            icon: '📋',
            desc: 'Planification, suivi et budgets',
            color: '#a855f7',
        },
    ];

    const PLANS = [
        {
            id: 'starter',
            name: 'Starter',
            price: '0',
            priceLabel: 'Gratuit',
            period: '3 mois d\'essai',
            modules: '3 modules max',
            tag: null,
        },
        {
            id: 'pro',
            name: 'Pro',
            price: '49 000',
            priceLabel: '49 000 FCFA',
            period: 'par mois',
            modules: '6 modules inclus',
            tag: 'Recommandé',
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 'Sur devis',
            priceLabel: 'Sur devis',
            period: 'personnalisé',
            modules: 'Modules illimités',
            tag: null,
        },
    ];

    /* ─── STATE ─── */
    const state = {
        currentStep: 1,
        selectedModules: [],
        selectedPlan: null,
        formData: {},
    };

    /* ─── NAVBAR ─── */
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
    });

    /* ─── MOBILE MENU ─── */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
    }

    /* ─── SCROLL ANIMATIONS ─── */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    /* ─── FAQ ACCORDION ─── */
    document.querySelectorAll('.faq-item').forEach((item) => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach((i) =>
                i.classList.remove('open')
            );
            if (!isOpen) item.classList.add('open');
        });
    });

    /* ─── SMOOTH SCROLL for CTAs ─── */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (navLinks) navLinks.classList.remove('mobile-open');
            }
        });
    });

    /* ─── MULTI-STEP FORM ─── */

    function initModuleSelection() {
        const grid = document.getElementById('module-select-grid');
        if (!grid) return;
        grid.innerHTML = '';
        MODULES.forEach((mod) => {
            const card = document.createElement('div');
            card.className = 'module-select-card';
            card.dataset.id = mod.id;
            card.innerHTML = `
        <span class="module-sel-icon">${mod.icon}</span>
        <div class="module-sel-name">${mod.name}</div>
        <div class="module-sel-desc">${mod.desc}</div>
        <div class="module-sel-check">✓</div>
      `;
            card.addEventListener('click', () => {
                card.classList.toggle('selected');
                updateModuleState();
            });
            grid.appendChild(card);
        });
    }

    function updateModuleState() {
        state.selectedModules = Array.from(
            document.querySelectorAll('.module-select-card.selected')
        ).map((c) => c.dataset.id);
        updateModuleCount();
    }

    function updateModuleCount() {
        const count = document.getElementById('module-count');
        if (count) count.textContent = `${state.selectedModules.length} module(s) sélectionné(s)`;
    }

    function initPlanSelection() {
        const grid = document.getElementById('plan-select-grid');
        if (!grid) return;
        grid.innerHTML = '';
        PLANS.forEach((plan) => {
            const card = document.createElement('div');
            card.className = 'plan-select-card' + (plan.tag ? ' recommended' : '');
            card.dataset.id = plan.id;
            card.innerHTML = `
        <div class="plan-sel-name">${plan.name}</div>
        <div class="plan-sel-price">${plan.priceLabel}</div>
        <div class="plan-sel-period">${plan.period}</div>
        <div class="plan-sel-modules">${plan.modules}</div>
      `;
            card.addEventListener('click', () => {
                document
                    .querySelectorAll('.plan-select-card')
                    .forEach((c) => c.classList.remove('selected'));
                card.classList.add('selected');
                state.selectedPlan = plan.id;
            });
            grid.appendChild(card);
        });
    }

    function buildRecap() {
        const data = state.formData;

        const setCellValue = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value || '—';
        };

        setCellValue('recap-name', data.societe_nom);
        setCellValue('recap-forme', data.societe_forme);
        setCellValue('recap-email', data.societe_email);
        setCellValue('recap-tel', data.societe_tel);
        setCellValue('recap-ville', data.societe_ville);
        setCellValue('recap-pays', data.societe_pays);

        const mods = MODULES.filter((m) => state.selectedModules.includes(m.id));
        const modsEl = document.getElementById('recap-modules');
        if (modsEl) {
            if (mods.length === 0) {
                modsEl.innerHTML = '<span style="color:var(--text-muted)">Aucun module sélectionné</span>';
            } else {
                modsEl.innerHTML = mods
                    .map((m) => `<span class="recap-module-tag">${m.icon} ${m.name}</span>`)
                    .join('');
            }
        }

        const plan = PLANS.find((p) => p.id === state.selectedPlan);
        setCellValue('recap-plan', plan ? plan.name : '—');

        const totalEl = document.getElementById('recap-total-price');
        if (totalEl) {
            totalEl.textContent = plan
                ? plan.priceLabel + (plan.period !== 'personnalisé' ? ' / mois' : '')
                : '—';
        }
    }

    /* ─── Form Validation ─── */
    function validateStep1() {
        let valid = true;
        const fields = [
            { id: 'societe_nom', errorId: 'err-nom', check: (v) => v.trim().length >= 2 },
            { id: 'societe_forme', errorId: 'err-forme', check: (v) => v.trim().length > 0 },
            {
                id: 'societe_email',
                errorId: 'err-email',
                check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            },
            { id: 'societe_tel', errorId: 'err-tel', check: (v) => v.trim().length >= 6 },
        ];

        fields.forEach(({ id, errorId, check }) => {
            const input = document.getElementById(id);
            const error = document.getElementById(errorId);
            if (!input) return;
            const isOk = check(input.value);
            input.classList.toggle('error', !isOk);
            if (error) error.classList.toggle('visible', !isOk);
            if (!isOk) valid = false;
            else state.formData[id] = input.value.trim();
        });

        // Save all other fields
        ['societe_ville', 'societe_pays', 'societe_adresse', 'societe_capital'].forEach(
            (id) => {
                const input = document.getElementById(id);
                if (input) state.formData[id] = input.value.trim();
            }
        );

        return valid;
    }

    function validateStep2() {
        const warning = document.getElementById('modules-warning');
        if (state.selectedModules.length === 0) {
            if (warning) warning.style.display = 'block';
            return false;
        }
        if (warning) warning.style.display = 'none';
        return true;
    }

    function validateStep3() {
        const warning = document.getElementById('plan-warning');
        if (!state.selectedPlan) {
            if (warning) warning.style.display = 'block';
            return false;
        }
        if (warning) warning.style.display = 'none';
        return true;
    }

    /* ─── Progress Bar ─── */
    function updateProgress(step) {
        const fills = { 1: '0%', 2: '33%', 3: '66%', 4: '100%' };
        const fillEl = document.getElementById('progress-fill');
        if (fillEl) fillEl.style.width = fills[step] || '0%';

        document.querySelectorAll('.progress-step').forEach((el) => {
            const s = parseInt(el.dataset.step);
            el.classList.remove('active', 'done');
            if (s === step) el.classList.add('active');
            else if (s < step) el.classList.add('done');
        });
    }

    /* ─── Navigation ─── */
    function goToStep(step) {
        if (step < 1 || step > 4) return;
        const currentEl = document.querySelector(`.form-step[data-step="${state.currentStep}"]`);
        const nextEl = document.querySelector(`.form-step[data-step="${step}"]`);
        if (currentEl) currentEl.classList.remove('active');
        if (nextEl) nextEl.classList.add('active');
        state.currentStep = step;
        updateProgress(step);

        if (step === 4) buildRecap();

        // Scroll to form
        const form = document.getElementById('register');
        if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function nextStep() {
        let ok = true;
        if (state.currentStep === 1) ok = validateStep1();
        if (state.currentStep === 2) ok = validateStep2();
        if (state.currentStep === 3) ok = validateStep3();
        if (ok) goToStep(state.currentStep + 1);
    }

    function prevStep() {
        if (state.currentStep > 1) goToStep(state.currentStep - 1);
    }

    /* ─── Submit ─── */
    function submitForm() {
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
        }

        // Simulate API call
        setTimeout(() => {
            const recap = document.getElementById('form-recap-content');
            const success = document.getElementById('form-success');
            if (recap) recap.style.display = 'none';
            if (success) success.style.display = 'block';

            const formNav = document.getElementById('form-nav-step4');
            if (formNav) formNav.style.display = 'none';
        }, 1500);
    }

    /* ─── Event Listeners for form buttons ─── */
    function initFormButtons() {
        // Next buttons
        document.querySelectorAll('[data-action="next"]').forEach((btn) =>
            btn.addEventListener('click', nextStep)
        );

        // Prev buttons
        document.querySelectorAll('[data-action="prev"]').forEach((btn) =>
            btn.addEventListener('click', prevStep)
        );

        // Submit
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) submitBtn.addEventListener('click', submitForm);

        // Restart
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                state.currentStep = 1;
                state.selectedModules = [];
                state.selectedPlan = null;
                state.formData = {};
                document.querySelectorAll('.progress-step').forEach((el) =>
                    el.classList.remove('active', 'done')
                );

                // Reset card selections
                document.querySelectorAll('.module-select-card').forEach((c) =>
                    c.classList.remove('selected')
                );
                document.querySelectorAll('.plan-select-card').forEach((c) =>
                    c.classList.remove('selected')
                );

                const recap = document.getElementById('form-recap-content');
                const success = document.getElementById('form-success');
                if (recap) recap.style.display = 'block';
                if (success) success.style.display = 'none';

                const formNav = document.getElementById('form-nav-step4');
                if (formNav) formNav.style.display = 'flex';

                const submitBtn2 = document.getElementById('submit-btn');
                if (submitBtn2) {
                    submitBtn2.disabled = false;
                    submitBtn2.textContent = "Confirmer l'inscription";
                }

                goToStep(1);
            });
        }
    }

    /* ─── CTA "Commencer" from hero & pricing ─── */
    document.querySelectorAll('[data-plan-cta]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const planId = btn.dataset.planCta;
            const register = document.getElementById('register');
            if (register) register.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Auto-select the plan after delay
            setTimeout(() => {
                document.querySelectorAll('.plan-select-card').forEach((c) => {
                    if (c.dataset.id === planId) {
                        document.querySelectorAll('.plan-select-card').forEach((x) =>
                            x.classList.remove('selected')
                        );
                        c.classList.add('selected');
                        state.selectedPlan = planId;
                    }
                });
            }, 500);
        });
    });

    /* ─── INIT ─── */
    document.addEventListener('DOMContentLoaded', () => {
        initModuleSelection();
        initPlanSelection();
        initFormButtons();
        updateProgress(1);
        updateModuleCount();
    });

    // Also try init immediately (for after DOMContentLoaded)
    if (document.readyState !== 'loading') {
        initModuleSelection();
        initPlanSelection();
        initFormButtons();
        updateProgress(1);
        updateModuleCount();
    }
})();
