import './styles/main.css';
import { Router } from './router';
import { renderHeader } from './components/Header';
import { renderFooter } from './components/Footer';
import { renderCookieBanner, setupCookieBanner } from './components/CookieBanner';

const app = document.getElementById('app')!;

app.innerHTML = `
  ${renderHeader()}
  <main id="page-content"></main>
  ${renderFooter()}
  ${renderCookieBanner()}
`;

const router = new Router();
router.init();

// ── Cookie banner ─────────────────────────────────
setupCookieBanner();

// ── Scroll-aware header ──────────────────────────────
const setupHeaderScroll = () => {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.remove('at-top');
    header.classList.add('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

// ── Scroll reveal observer ───────────────────────────
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
    observer.observe(el);
  });
};

// ── Counter animation with easing ───────────────────
const animateCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const end = parseInt(target.dataset.count || '0', 10);
          const suffix = target.dataset.suffix || '';
          const duration = 1800;
          const startTime = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
          const update = (now: number) => {
            const elapsed = Math.min((now - startTime) / duration, 1);
            target.textContent = Math.floor(easeOut(elapsed) * end) + suffix;
            if (elapsed < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => observer.observe(counter));
};

// ── Mobile menu toggle ───────────────────────────────
let mobileMenuCleanup: (() => void) | null = null;

const setupMobileMenu = () => {
  if (mobileMenuCleanup) mobileMenuCleanup();

  const toggle = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mob-backdrop');
  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (backdrop) {
      backdrop.style.opacity = '1';
      backdrop.style.pointerEvents = 'auto';
    }
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (backdrop) {
      backdrop.style.opacity = '0';
      backdrop.style.pointerEvents = 'none';
    }
  };

  const onToggle = () => {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  };

  const linkListeners: Array<{ el: Element; fn: () => void }> = [];
  menu.querySelectorAll('a').forEach((link) => {
    const fn = () => closeMenu();
    link.addEventListener('click', fn);
    linkListeners.push({ el: link, fn });
  });

  toggle.addEventListener('click', onToggle);
  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  mobileMenuCleanup = () => {
    toggle.removeEventListener('click', onToggle);
    closeBtn?.removeEventListener('click', closeMenu);
    backdrop?.removeEventListener('click', closeMenu);
    linkListeners.forEach(({ el, fn }) => el.removeEventListener('click', fn));
    document.body.style.overflow = '';
  };
};

// ── Active nav ───────────────────────────────────────
const updateActiveNav = (path: string) => {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === path || (path === '/' && href === '/')) {
      link.classList.add('active');
    }
  });
};

// ── Header always solid ─────────────────────────────
const updateHeaderForRoute = (_path: string) => {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.classList.remove('at-top');
  header.classList.add('scrolled');
};

// ── Contact form submit handler ──────────────────────
const setupContactForm = () => {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (btn) {
      btn.textContent = 'Sent! We\'ll be in touch.';
      btn.disabled = true;
    }
  });
};

// ── Page change handler ──────────────────────────────
window.addEventListener('route-changed', ((e: CustomEvent) => {
  updateActiveNav(e.detail.path);
  updateHeaderForRoute(e.detail.path);
  setupMobileMenu();
  setupContactForm();
  setTimeout(() => {
    observeElements();
    animateCounters();
  }, 60);
}) as EventListener);

// ── Init ─────────────────────────────────────────────
setupHeaderScroll();
setupMobileMenu();
setupContactForm();
updateActiveNav(window.location.pathname);
updateHeaderForRoute(window.location.pathname);
setTimeout(() => {
  observeElements();
  animateCounters();
}, 100);
