export function renderHeader(): string {
  return `
  <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 scrolled">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">

        <!-- Logo -->
        <a href="/" data-link class="flex items-center flex-shrink-0 group">
          <img src="/logo.png" alt="Afrilia Agro Uganda Ltd Logo"
               class="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <a href="/" data-link class="nav-link">Home</a>
          <a href="/about" data-link class="nav-link">About Us</a>
          <a href="/products" data-link class="nav-link">Products</a>
          <a href="/export-process" data-link class="nav-link">Export Process</a>
          <a href="/testimonials" data-link class="nav-link">Testimonials</a>
          <a href="/contact" data-link class="nav-link">Contact</a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center gap-5">
          <a href="tel:+256788655973"
             class="text-sm font-medium transition-colors duration-200 hover:text-white"
             style="color:rgba(255,255,255,0.55);">
            +256 788 655973
          </a>
          <div class="h-4 w-px" style="background:rgba(255,255,255,0.12);"></div>
          <a href="/contact" data-link
             class="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold
                    px-5 py-2.5 rounded-lg text-sm transition-all duration-300"
             style="letter-spacing:0.01em;">
            Request Quote
          </a>
        </div>

        <!-- Mobile Right Icons -->
        <div class="flex lg:hidden items-center gap-0.5">
          <a href="tel:+256788655973" class="mob-icon-btn" aria-label="Call us">
            <i class="fas fa-phone-alt"></i>
          </a>
          <a href="https://wa.me/256788655973" target="_blank" rel="noopener noreferrer" class="mob-icon-btn" aria-label="WhatsApp">
            <i class="fab fa-whatsapp text-lg"></i>
          </a>
          <button id="mobile-menu-toggle" class="mob-icon-btn" aria-label="Open menu" aria-expanded="false">
            <i class="fas fa-bars text-lg"></i>
          </button>
        </div>

      </div>
    </nav>
  </header>

  <!-- ── Full-screen Mobile Menu Overlay ── -->
  <div id="mobile-menu" class="mob-overlay" aria-hidden="true">

    <!-- Overlay top bar -->
    <div class="flex items-center justify-between px-5 h-16 flex-shrink-0" style="border-bottom:1px solid rgba(255,255,255,0.08);">
      <a href="/" data-link class="flex items-center">
        <img src="/logo.png" alt="Afrilia" class="h-9 w-auto object-contain brightness-0 invert" />
      </a>
      <button id="mobile-menu-close"
              class="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors"
              style="background:rgba(255,255,255,0.08);"
              aria-label="Close menu">
        <i class="fas fa-times text-lg"></i>
      </button>
    </div>

    <!-- Nav items -->
    <nav class="flex-1 overflow-y-auto">
      <a href="/" data-link class="mob-menu-item">
        <span>Home</span>
      </a>
      <a href="/about" data-link class="mob-menu-item">
        <span>About Us</span>
      </a>
      <a href="/products" data-link class="mob-menu-item">
        <span>Products</span>
        <i class="fas fa-chevron-right mob-menu-chevron"></i>
      </a>
      <a href="/export-process" data-link class="mob-menu-item">
        <span>Export Process</span>
        <i class="fas fa-chevron-right mob-menu-chevron"></i>
      </a>
      <a href="/testimonials" data-link class="mob-menu-item">
        <span>Testimonials</span>
      </a>
      <a href="/contact" data-link class="mob-menu-item">
        <span>Contact</span>
      </a>
    </nav>

    <!-- Bottom CTA -->
    <div class="px-5 py-6 flex-shrink-0" style="border-top:1px solid rgba(255,255,255,0.08);">
      <a href="/contact" data-link
         class="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-300"
         style="background: linear-gradient(135deg,#C8922A,#a8721a);">
        <i class="fas fa-file-alt"></i> Request a Quote
      </a>
      <p class="text-center text-xs mt-4" style="color:rgba(255,255,255,0.3);">+256 788 655 973</p>
    </div>
  </div>

  <!-- Backdrop -->
  <div id="mob-backdrop" class="fixed inset-0 z-[149] bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300"></div>

  <div class="h-16 sm:h-20"></div>
  `;
}
