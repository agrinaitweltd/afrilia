export function renderHeader(): string {
  return `
  <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 scrolled">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a href="/" data-link class="flex items-center flex-shrink-0 group">
          <img src="/logo.png" alt="Afrilia Agro Uganda Ltd Logo"
               class="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
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

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-toggle"
                class="lg:hidden text-xl p-2.5 rounded-xl transition-colors"
                style="color:white;"
                onmouseenter="this.style.background='rgba(255,255,255,0.1)'"
                onmouseleave="this.style.background='transparent'"
                aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden lg:hidden">
        <div class="flex flex-col pb-5 border-t pt-3" style="border-color:rgba(255,255,255,0.1);">
          <a href="/" data-link class="nav-link py-3 px-3 rounded-xl hover:bg-white/10">Home</a>
          <a href="/about" data-link class="nav-link py-3 px-3 rounded-xl hover:bg-white/10">About Us</a>
          <a href="/products" data-link class="nav-link py-3 px-3 rounded-xl hover:bg-white/10">Products</a>
          <a href="/export-process" data-link class="nav-link py-3 px-3 rounded-xl hover:bg-white/10">Export Process</a>
          <a href="/testimonials" data-link class="nav-link py-3 px-3 rounded-xl hover:bg-white/10">Testimonials</a>
          <a href="/contact" data-link class="nav-link py-3 px-3 rounded-xl hover:bg-white/10">Contact</a>
          <div class="mt-3 pt-3 space-y-2" style="border-top:1px solid rgba(255,255,255,0.1);">
            <a href="tel:+256788655973"
               class="block px-3 py-2.5 text-sm"
               style="color:rgba(255,255,255,0.55);">+256 788 655973</a>
            <a href="/contact" data-link
               class="flex items-center justify-center text-white font-bold px-6 py-3.5
                      rounded-xl text-sm transition-all duration-300"
               style="background:#C8922A;">
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div class="h-20"></div>
  `;
}
