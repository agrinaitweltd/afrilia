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

// ── Hide loading screen ──────────────────────────────
const hideLoader = () => {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  loader.style.opacity = '0';
  loader.style.visibility = 'hidden';
  setTimeout(() => loader.remove(), 650);
};

const LOADER_MIN_MS = 3000;
const loaderStart = Date.now();

const scheduleHide = () => {
  const elapsed = Date.now() - loaderStart;
  const remaining = Math.max(0, LOADER_MIN_MS - elapsed);
  setTimeout(hideLoader, remaining);
};

if (document.readyState === 'complete') {
  scheduleHide();
} else {
  window.addEventListener('load', scheduleHide);
}

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
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const onToggle = () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    const icon = toggle.querySelector('i');
    if (icon) icon.className = isOpen ? 'fas fa-bars' : 'fas fa-times';
  };

  const linkListeners: Array<{ el: Element; fn: () => void }> = [];
  menu.querySelectorAll('a').forEach((link) => {
    const fn = () => {
      menu.classList.add('hidden');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    };
    link.addEventListener('click', fn);
    linkListeners.push({ el: link, fn });
  });

  toggle.addEventListener('click', onToggle);

  mobileMenuCleanup = () => {
    toggle.removeEventListener('click', onToggle);
    linkListeners.forEach(({ el, fn }) => el.removeEventListener('click', fn));
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
