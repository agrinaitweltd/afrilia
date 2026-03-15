export function renderFooter(): string {
  return `
  <footer class="bg-forest-dark text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Company Info -->
        <div>
          <a href="/" data-link class="flex items-center mb-6">
            <img src="/logo.png" alt="Afrilia Agro Uganda Ltd" class="h-16 w-auto object-contain" />
          </a>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Premier agricultural export company delivering quality Ugandan produce to international markets across Europe, Middle East, and beyond.
          </p>
          <div class="flex gap-2.5">
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
               style="background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.1);"
               onmouseenter="this.style.background='#C8922A'; this.style.borderColor='#C8922A';"
               onmouseleave="this.style.background='rgba(255,255,255,0.04)'; this.style.borderColor='rgba(255,255,255,0.1)';"
               aria-label="Facebook">
              <i class="fab fa-facebook-f text-white/70 text-sm"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
               style="background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.1);"
               onmouseenter="this.style.background='#C8922A'; this.style.borderColor='#C8922A';"
               onmouseleave="this.style.background='rgba(255,255,255,0.04)'; this.style.borderColor='rgba(255,255,255,0.1)';"
               aria-label="Twitter">
              <i class="fab fa-twitter text-white/70 text-sm"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
               style="background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.1);"
               onmouseenter="this.style.background='#C8922A'; this.style.borderColor='#C8922A';"
               onmouseleave="this.style.background='rgba(255,255,255,0.04)'; this.style.borderColor='rgba(255,255,255,0.1)';"
               aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-white/70 text-sm"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
               style="background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.1);"
               onmouseenter="this.style.background='#C8922A'; this.style.borderColor='#C8922A';"
               onmouseleave="this.style.background='rgba(255,255,255,0.04)'; this.style.borderColor='rgba(255,255,255,0.1)';"
               aria-label="Instagram">
              <i class="fab fa-instagram text-white/70 text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold text-xs mb-6 tracking-widest uppercase" style="letter-spacing:0.15em;">Quick Links</h3>
          <ul class="space-y-2.5">
            <li><a href="/" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Home
            </a></li>
            <li><a href="/about" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>About Us
            </a></li>
            <li><a href="/products" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Products
            </a></li>
            <li><a href="/export-process" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Export Process
            </a></li>
            <li><a href="/testimonials" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Testimonials
            </a></li>
            <li><a href="/contact" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Contact
            </a></li>
          </ul>
        </div>

        <!-- Our Products -->
        <div>
          <h3 class="text-white font-bold text-xs mb-6 tracking-widest uppercase" style="letter-spacing:0.15em;">Our Products</h3>
          <ul class="space-y-2.5">
            <li><a href="/products" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Arabica/Robusta Coffee
            </a></li>
            <li><a href="/products" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Fresh Vegetables
            </a></li>
            <li><a href="/products" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Fresh Fruits
            </a></li>
            <li><a href="/products" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Grains
            </a></li>
            <li><a href="/products" data-link class="text-gray-400 hover:text-accent text-sm transition-colors duration-200 inline-flex items-center gap-2 group">
              <span class="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200"></span>Packaged Coffee
            </a></li>
          </ul>
        </div>

        <!-- Get In Touch -->
        <div>
          <h3 class="text-white font-bold text-xs mb-6 uppercase" style="letter-spacing:0.15em;">Get In Touch</h3>
          <ul class="space-y-3">
            <li class="text-gray-400 text-sm">Kampala, Uganda</li>
            <li><a href="tel:+256788655973" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">+256 (0) 788 655973</a></li>
            <li><a href="mailto:afriliaagro@gmail.com" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">afriliaagro@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div style="border-top:1px solid rgba(255,255,255,0.06);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-gray-500 text-sm">
          &copy; 2025 Afrilia Agro Uganda Limited. All rights reserved.
        </p>
        <div class="flex items-center gap-2 text-gray-600 text-xs">
          <span>Made &amp; Designed By</span>
          <a href="https://www.kavotech.uk" target="_blank" rel="noopener noreferrer">
            <img src="/kavo.png" alt="Kavo" style="height:104px; width:auto; object-fit:contain; opacity:0.85; transition:opacity 0.2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='0.85'" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  `;
}
