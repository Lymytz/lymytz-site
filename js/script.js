/* ============================================================
   LYMYTZ — script.js  (v5 — avec Web3Forms)
   ============================================================

   CONFIGURATION WEB3FORMS :
   1. Allez sur https://web3forms.com/
   2. Entrez votre adresse email et cliquez "Create Access Key"
   3. Copiez la clé reçue par email
   4. Remplacez 'VOTRE_ACCESS_KEY' ci-dessous par cette clé
   ============================================================ */

const WEB3FORMS_ACCESS_KEY = '4a3a028b-09c8-466c-8d33-b1b141f95c13';

/* ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ===== HEADER SCROLL ===== */
    const header = document.getElementById('header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ===== HAMBURGER MENU ===== */
    const burger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-menu');
    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            const open = burger.classList.toggle('open');
            mobileNav.classList.toggle('open', open);
            burger.setAttribute('aria-expanded', open);
            mobileNav.setAttribute('aria-hidden', !open);
        });
        mobileNav.querySelectorAll('.mob-link').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                mobileNav.classList.remove('open');
                burger.setAttribute('aria-expanded', false);
                mobileNav.setAttribute('aria-hidden', true);
            });
        });
    }

    /* ===== REVEAL ON SCROLL ===== */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const revObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => revObs.observe(el));
    }

    /* ===== ACTIVE NAV LINK (index only) ===== */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    if (sections.length) {
        const secObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const id = e.target.id;
                    navLinks.forEach(l => {
                        const href = l.getAttribute('href') || '';
                        l.classList.toggle('active', href === `#${id}` || href.endsWith(`#${id}`));
                    });
                }
            });
        }, { threshold: 0.35 });
        sections.forEach(s => secObs.observe(s));
    }

    /* ===== ANIMATED COUNTERS ===== */
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    if (statNums.length) {
        const cntObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    animateCount(e.target);
                    cntObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.5 });
        statNums.forEach(el => cntObs.observe(el));
    }

    function animateCount(el) {
        const target = parseInt(el.dataset.target, 10);
        const dur = 1300;
        const start = performance.now();
        const step = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target);
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    /* ===== CARD 3D TILT ===== */
    const tiltCards = document.querySelectorAll('.team-card, .mod-card, .svc-detail-card, .price-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
            const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
            card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
            card.style.transition = 'transform .05s linear';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'all .35s cubic-bezier(.4,0,.2,1)';
        });
    });

    /* ===== ERP BARS — animate when visible ===== */
    const bars = document.querySelectorAll('.mc-bar, .esb-bar');
    if (bars.length) {
        const originalHeights = [...bars].map(b => b.style.height);
        bars.forEach(b => b.style.height = '0%');
        const barObs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                bars.forEach((b, i) => {
                    setTimeout(() => {
                        b.style.transition = 'height .7s cubic-bezier(.4,0,.2,1)';
                        b.style.height = originalHeights[i];
                    }, i * 60);
                });
                barObs.disconnect();
            }
        }, { threshold: 0.3 });
        const chartParent = document.querySelector('.mock-chart, .esb-bars');
        if (chartParent) barObs.observe(chartParent);
    }

    /* ===== CONTACT FORM (Web3Forms) ===== */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!form.checkValidity()) { form.reportValidity(); return; }

            const btn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');

            // État : chargement
            btn.disabled = true;
            btn.style.opacity = '.75';
            btnText.textContent = 'Envoi en cours…';

            const setSuccess = () => {
                btnText.textContent = 'Message envoyé !';
                btnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4.5 12.75l6 6 9-13.5"/>`;
                btn.style.background = 'linear-gradient(135deg,#059669,#0DB87B)';
                btn.style.boxShadow = '0 4px 20px rgba(13,184,123,.4)';
                btn.style.opacity = '1';
                form.reset();
                setTimeout(() => {
                    btn.disabled = false;
                    btn.style.background = btn.style.boxShadow = '';
                    btn.style.opacity = '1';
                    btnText.textContent = 'Envoyer ma demande';
                    btnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>`;
                }, 5000);
            };

            const setError = (msg = 'Erreur — réessayez') => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btnText.textContent = msg;
                btn.style.background = 'linear-gradient(135deg,#dc2626,#ef4444)';
                setTimeout(() => {
                    btn.style.background = '';
                    btnText.textContent = 'Envoyer ma demande';
                }, 4000);
            };

            // Données du formulaire
            const data = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: 'Nouvelle demande de contact — Lymytz',
                from_name: 'Lymytz Website',
                name: form.querySelector('#f-name')?.value || '',
                email: form.querySelector('#f-email')?.value || '',
                company: form.querySelector('#f-company')?.value || '—',
                service: form.querySelector('#f-service')?.value || '—',
                message: form.querySelector('#f-msg')?.value || '',
                // Champ honeypot anti-spam (Web3Forms le gère nativement)
                botcheck: '',
            };

            // Vérification : clé configurée ?
            if (WEB3FORMS_ACCESS_KEY === 'VOTRE_ACCESS_KEY') {
                // Mode démo : simule l'envoi sans appel réseau
                await new Promise(r => setTimeout(r, 1200));
                setSuccess();
                console.info('[Lymytz] Formulaire en mode démo. Allez sur https://web3forms.com/ pour obtenir votre Access Key et remplacez VOTRE_ACCESS_KEY dans js/script.js.');
                return;
            }

            // Envoi réel via Web3Forms
            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(data),
                });
                const json = await res.json();

                if (res.ok && json.success) {
                    setSuccess();
                } else {
                    console.error('[Web3Forms] Erreur:', json);
                    setError(json.message || 'Erreur — réessayez');
                }
            } catch (err) {
                console.error('[Web3Forms] Erreur réseau:', err);
                setError('Erreur réseau — réessayez');
            }
        });
    }

    /* ===== SMOOTH INTERNAL ANCHOR SCROLL ===== */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});
