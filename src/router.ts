import { renderHome } from './pages/Home';
import { renderAbout } from './pages/About';
import { renderProducts } from './pages/Products';
import { renderExportProcess } from './pages/ExportProcess';
import { renderTestimonials } from './pages/Testimonials';
import { renderContact } from './pages/Contact';

type Route = {
  path: string;
  render: () => string;
  title: string;
};

const routes: Route[] = [
  { path: '/', render: renderHome, title: 'Afrilia Agro Uganda Ltd | Premium Agricultural Exports' },
  { path: '/about', render: renderAbout, title: 'About Us | Afrilia Agro Uganda Ltd' },
  { path: '/products', render: renderProducts, title: 'Our Products | Afrilia Agro Uganda Ltd' },
  { path: '/export-process', render: renderExportProcess, title: 'Export Process | Afrilia Agro Uganda Ltd' },
  { path: '/testimonials', render: renderTestimonials, title: 'Testimonials | Afrilia Agro Uganda Ltd' },
  { path: '/contact', render: renderContact, title: 'Contact Us | Afrilia Agro Uganda Ltd' },
];

export class Router {
  init() {
    window.addEventListener('popstate', () => this.render());
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[data-link]') as HTMLAnchorElement | null;
      if (anchor) {
        e.preventDefault();
        const path = anchor.getAttribute('href') || '/';
        this.navigate(path);
      }
    });
    this.render();
  }

  navigate(path: string) {
    window.history.pushState({}, '', path);
    this.render();
  }

  render() {
    const path = window.location.pathname;
    const route = routes.find((r) => r.path === path) || routes[0];
    const content = document.getElementById('page-content');
    if (content) {
      content.innerHTML = route.render();
      document.title = route.title;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('route-changed', { detail: { path } }));
    }
  }
}
