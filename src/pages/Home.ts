export function renderHome(): string {
  return `
  <!-- ============ HERO SECTION ============ -->
  <section class="relative min-h-screen flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <div class="img-placeholder w-full h-full">
        <i class="fas fa-seedling text-4xl text-gray-400 mb-2"></i>
        <span>IMAGE PLACEHOLDER</span>
        <span class="text-xs mt-1">Save as: hero-bg.jpg</span>
        <span class="text-xs">Location: /public/hero-bg.jpg</span>
      </div>
      <img src="/hero-bg.jpg" alt="Fresh produce from Ugandan farms" 
           class="absolute inset-0 w-full h-full object-cover"
           onerror="this.style.display='none';" />
      <!-- cinematic directional gradient -->
      <div class="absolute inset-0" style="background: linear-gradient(105deg, rgba(4,12,4,0.92) 0%, rgba(8,22,8,0.78) 45%, rgba(6,14,6,0.5) 100%);"></div>
      <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(4,10,4,0.7) 0%, transparent 55%);"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
      <div class="max-w-2xl">
        <h1 class="hero-enter hero-enter-2 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
          Premium Fresh &amp; Dry Produce,
          <span style="background: linear-gradient(135deg, #5aaa5a 0%, #94c794 50%, #C8922A 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Sustainably<br class="hidden sm:block" /> Sourced</span>
        </h1>
        <p class="hero-enter hero-enter-3 text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light">
          Connecting Ugandan farmers directly to international markets. We deliver high-quality agricultural products with fair trade practices that empower local communities.
        </p>

        <div class="hero-enter hero-enter-4 flex flex-wrap gap-3 mb-8">
          <a href="/products" data-link class="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 text-sm">
            Explore Products
          </a>
          <a href="/contact" data-link class="inline-flex items-center gap-2 bg-transparent border border-white/40 hover:bg-white/10 text-white font-medium px-5 py-3 rounded-xl transition-all duration-300 text-sm">
            Get a Quote
          </a>
        </div>

        <!-- Stats Bar -->
        <div class="hero-enter hero-enter-5 pt-8" style="border-top:1px solid rgba(255,255,255,0.12);">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-0 gap-y-4">
            <div class="py-2 sm:pr-8 sm:border-r pr-4 border-r" style="border-color:rgba(255,255,255,0.12);">
              <p class="text-3xl lg:text-4xl font-black text-white tracking-tight" data-count="15" data-suffix="+">0+</p>
              <p class="text-xs font-semibold mt-1.5 tracking-widest uppercase" style="color:rgba(255,255,255,0.45);">Years Experience</p>
            </div>
            <div class="py-2 sm:px-8 sm:border-r pl-4 sm:pl-8" style="border-color:rgba(255,255,255,0.12);">
              <p class="text-3xl lg:text-4xl font-black text-white tracking-tight" data-count="10" data-suffix="+">0+</p>
              <p class="text-xs font-semibold mt-1.5 tracking-widest uppercase" style="color:rgba(255,255,255,0.45);">Countries Served</p>
            </div>
            <div class="py-2 sm:px-8 sm:border-r pr-4 border-r" style="border-color:rgba(255,255,255,0.12);">
              <p class="text-3xl lg:text-4xl font-black text-white tracking-tight" data-count="500" data-suffix="+">0+</p>
              <p class="text-xs font-semibold mt-1.5 tracking-widest uppercase" style="color:rgba(255,255,255,0.45);">Partner Farmers</p>
            </div>
            <div class="py-2 sm:pl-8 pl-4">
              <p class="text-3xl lg:text-4xl font-black tracking-tight" style="color:#e0b04a;">100%</p>
              <p class="text-xs font-semibold mt-1.5 tracking-widest uppercase" style="color:rgba(255,255,255,0.45);">Sustainable</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Discover More -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
      <p class="text-gray-400 text-xs tracking-[0.2em] uppercase mb-2">Discover More</p>
      <i class="fas fa-chevron-down text-gray-400 animate-bounce"></i>
    </div>
  </section>

  <!-- ============ HOW WE EXPORT ============ -->
  <section class="bg-forest py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <span class="section-badge bg-white/10 text-white border border-white/20 mb-4 inline-block">OUR PROCESS</span>
        <h2 class="section-heading text-white mb-4">How We Export</h2>
        <p class="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          From farm to international destination - Our streamlined export process ensures quality, compliance, and timely delivery
        </p>
      </div>

      <!-- 4 Steps -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 overflow-visible pt-6">
        ${renderStep(1, 'fa-file-alt', 'Quote &amp; Order', 'Submit your export requirements through our quote form. We provide detailed quotations including product specifications, pricing, and shipping options.')}
        ${renderStep(2, 'fa-filter', 'Sourcing &amp; Quality Check', 'We source fresh produce from our trusted farmer network. Each batch undergoes rigorous quality inspection to meet international standards.')}
        ${renderStep(3, 'fa-stamp', 'Documentation &amp; Compliance', 'We handle all export documentation including phytosanitary certificates, customs declarations, and required certifications for your destination country.')}
        ${renderStep(4, 'fa-shipping-fast', 'Shipping &amp; Delivery', 'Products are packed with cold chain management and shipped via air or sea freight. Track your shipment in real-time until arrival at your destination.')}
      </div>

      <!-- Bottom Features -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8">
        <div class="grid sm:grid-cols-3 gap-8 text-center">
          <div class="reveal" style="transition-delay: 0.1s;">
            <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-clock text-white text-xl"></i>
            </div>
            <h3 class="font-bold text-white mb-2">Fast Processing</h3>
            <p class="text-gray-300 text-sm">Orders processed within 24-48 hours. Express shipping options available.</p>
          </div>
          <div class="reveal" style="transition-delay: 0.2s;">
            <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-check-circle text-white text-xl"></i>
            </div>
            <h3 class="font-bold text-white mb-2">Quality Guarantee</h3>
            <p class="text-gray-300 text-sm">100% quality assurance with full traceability from farm to destination.</p>
          </div>
          <div class="reveal" style="transition-delay: 0.3s;">
            <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-headset text-white text-xl"></i>
            </div>
            <h3 class="font-bold text-white mb-2">Dedicated Support</h3>
            <p class="text-gray-300 text-sm">Personal account manager available throughout the export process.</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 reveal">
        <a href="/contact" data-link class="btn-outline">
          <i class="fas fa-file-alt"></i> Start Your Export Order
        </a>
      </div>
    </div>
  </section>

  <!-- ============ PRODUCTS OVERVIEW ============ -->
  <section class="bg-primary-50/50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <span class="section-badge bg-primary-100 text-primary-700 mb-4 inline-block">OUR PRODUCTS</span>
        <h2 class="section-heading text-gray-900 mb-4">Export Quality Products</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Premium Ugandan agricultural produce, certified for international export</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        ${renderProductCard('arabica-coffee.png', 'Arabica/Robusta Coffee', 'Premium Ugandan coffee beans sourced from highland farms')}
        ${renderProductCard('fresh-vegetables.png', 'Fresh Vegetables', 'Farm-fresh vegetables meeting international quality standards')}
        ${renderProductCard('fresh-fruits.jpg', 'Fresh Fruits', 'Tropical fruits packed with nutrition and flavor')}
        ${renderProductCard('grains.jpg', 'Grains', 'High-quality grains and cereals for global markets')}
      </div>

      <!-- Local Supply Banner -->
      <div class="card p-6 flex items-center gap-4 mb-12 reveal">
        <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <i class="fas fa-building text-primary-700 text-lg"></i>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">Local Supply Available</h3>
          <p class="text-gray-500 text-sm">We also supply to restaurants, hotels, and businesses across Uganda</p>
        </div>
      </div>

      <!-- Global Export Solutions -->
      <div class="rounded-3xl px-6 py-10 sm:p-12 text-center reveal" 
           style="background: linear-gradient(135deg, #2d5a2d 0%, #4a7a4a 50%, #8aaa6a 100%);">
        <div class="flex justify-center gap-4 mb-6">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <i class="fas fa-users text-white text-lg"></i>
          </div>
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <i class="fas fa-plane text-white text-lg"></i>
          </div>
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <i class="fas fa-globe text-white text-lg"></i>
          </div>
        </div>
        <h3 class="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">Global Export Solutions</h3>
        <p class="text-white/80 max-w-lg mx-auto mb-8">
          Serving international buyers across Europe, Middle East, and beyond with certified export-quality produce
        </p>
        <a href="/contact" data-link class="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
          <i class="fas fa-file-alt"></i> Request Export Quote
        </a>
      </div>
    </div>
  </section>

  <!-- ============ PACKAGED BEVERAGES ============ -->
  <section class="bev-section relative py-20 lg:py-32 overflow-hidden">
    <!-- rich dark background -->
    <div class="absolute inset-0" style="background: linear-gradient(160deg, #0d1a0d 0%, #1a2e1a 40%, #2a1a08 100%);"></div>
    <!-- subtle grain texture overlay -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'200\\' height=\\'200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E');"></div>
    <!-- decorative coffee ring -->
    <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5" style="border: 40px solid #C8922A;"></div>
    <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5" style="border: 28px solid #C8922A;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-16 reveal">
        <span class="section-badge border border-amber-500/40 text-amber-400 mb-5 inline-flex items-center gap-2" style="background: rgba(200,146,42,0.12);">
          <i class="fas fa-coffee"></i> PREMIUM UGANDAN COFFEE
        </span>
        <h2 class="section-heading text-white mb-4">
          Packaged <span style="background: linear-gradient(135deg,#e0b04a,#C8922A); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Beverages</span>
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Single-origin Ugandan coffee — farm-sourced, roasted with care, packaged for perfection.
        </p>
        <!-- divider -->
        <div class="flex items-center justify-center gap-3 mt-6">
          <div class="h-px w-12 bg-amber-500/40"></div>
          <i class="fas fa-seedling text-amber-500/60 text-xs"></i>
          <div class="h-px w-12 bg-amber-500/40"></div>
        </div>
      </div>

      <!-- Product Cards -->
      <div class="grid lg:grid-cols-2 gap-8 mb-14">

        <!-- Coffee Beans Card -->
        <div class="bev-card reveal-left reveal">
          <!-- image panel -->
          <div class="bev-card-img relative h-72 overflow-hidden rounded-t-2xl">
            <div class="img-placeholder h-full" style="background:#1a2e1a;">
              <i class="fas fa-seedling text-3xl mb-2" style="color:#5a8a5a;"></i>
              <span class="text-gray-500">coffee-beans.jpg</span>
            </div>
            <img src="/coffee-beans.jpg" alt="Afrilia Coffee Beans"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 onerror="this.style.display='none';" />
            <!-- gradient overlay -->
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(13,26,13,0.9) 0%, rgba(13,26,13,0.2) 60%, transparent 100%);"></div>
            <!-- badges -->
            <div class="absolute top-4 left-4 flex gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: rgba(200,146,42,0.9); backdrop-filter: blur(8px);">WHOLE BEANS</span>
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: rgba(45,106,45,0.85); backdrop-filter: blur(8px);"><i class="fas fa-leaf mr-1"></i>ORGANIC</span>
            </div>
            <!-- title over image -->
            <div class="absolute bottom-5 left-6 right-6">
              <h3 class="text-2xl font-black text-white leading-tight">Afrilia Coffee Beans</h3>
              <p class="text-amber-400 text-xs font-semibold mt-1 tracking-widest uppercase">Single Origin · Uganda Highlands</p>
            </div>
          </div>
          <!-- content panel -->
          <div class="p-6">
            <p class="text-gray-400 text-sm leading-relaxed mb-6">Premium whole beans sourced directly from Ugandan highland farms. Rich, full-bodied flavor — grind fresh for the ultimate cup.</p>

            <!-- flavour tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bev-tag"><i class="fas fa-circle text-[6px] mr-1 text-amber-400"></i>Dark Chocolate</span>
              <span class="bev-tag"><i class="fas fa-circle text-[6px] mr-1 text-amber-400"></i>Berry Notes</span>
              <span class="bev-tag"><i class="fas fa-circle text-[6px] mr-1 text-amber-400"></i>Full Body</span>
            </div>

            <!-- pricing -->
            <div class="grid grid-cols-2 gap-3 mb-6">
              <div class="bev-price-box">
                <p class="text-xs text-gray-500 mb-1">250g Pack</p>
                <p class="text-lg font-black text-white">20,000 <span class="text-xs font-normal text-gray-500">UGX</span></p>
                <p class="text-xs text-gray-600 mt-0.5">Starter size</p>
              </div>
              <div class="bev-price-box bev-price-box--featured">
                <span class="bev-best-value">BEST VALUE</span>
                <p class="text-xs text-amber-400 mb-1">500g Pack</p>
                <p class="text-lg font-black text-white">35,000 <span class="text-xs font-normal text-gray-400">UGX</span></p>
                <p class="text-xs text-gray-500 mt-0.5">Most popular</p>
              </div>
            </div>

            <a href="https://wa.me/256788655973?text=Hello%2C%20I%20want%20to%20order%20Afrilia%20Coffee%20Beans"
               target="_blank" rel="noopener noreferrer"
               class="bev-order-btn">
              <i class="fab fa-whatsapp text-lg"></i>
              <span>Order via WhatsApp</span>
              <i class="fas fa-arrow-right text-xs ml-auto opacity-60"></i>
            </a>
          </div>
        </div>

        <!-- Coffee Powder Card -->
        <div class="bev-card reveal-right reveal">
          <!-- image panel -->
          <div class="bev-card-img relative h-72 overflow-hidden rounded-t-2xl">
            <div class="img-placeholder h-full" style="background:#1a1408;">
              <i class="fas fa-mug-hot text-3xl mb-2" style="color:#8a6a3a;"></i>
              <span class="text-gray-500">coffee-powder.jpg</span>
            </div>
            <img src="/coffee-powder.jpg" alt="Afrilia Coffee Powder"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 onerror="this.style.display='none';" />
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(26,20,8,0.9) 0%, rgba(26,20,8,0.2) 60%, transparent 100%);"></div>
            <div class="absolute top-4 left-4 flex gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: rgba(139,90,43,0.9); backdrop-filter: blur(8px);">GROUND FRESH</span>
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: rgba(45,106,45,0.85); backdrop-filter: blur(8px);"><i class="fas fa-leaf mr-1"></i>ORGANIC</span>
            </div>
            <div class="absolute bottom-5 left-6 right-6">
              <h3 class="text-2xl font-black text-white leading-tight">Afrilia Coffee Powder</h3>
              <p class="text-amber-400 text-xs font-semibold mt-1 tracking-widest uppercase">Fine Grind · Ready to Brew</p>
            </div>
          </div>
          <!-- content panel -->
          <div class="p-6">
            <p class="text-gray-400 text-sm leading-relaxed mb-6">Freshly ground premium coffee, ready to brew. Bold aroma, smooth finish — enjoy the authentic taste of Uganda in every cup.</p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bev-tag"><i class="fas fa-circle text-[6px] mr-1 text-amber-400"></i>Smooth Finish</span>
              <span class="bev-tag"><i class="fas fa-circle text-[6px] mr-1 text-amber-400"></i>Caramel Hints</span>
              <span class="bev-tag"><i class="fas fa-circle text-[6px] mr-1 text-amber-400"></i>Medium Roast</span>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-6">
              <div class="bev-price-box">
                <p class="text-xs text-gray-500 mb-1">250g Pack</p>
                <p class="text-lg font-black text-white">20,000 <span class="text-xs font-normal text-gray-500">UGX</span></p>
                <p class="text-xs text-gray-600 mt-0.5">Starter size</p>
              </div>
              <div class="bev-price-box bev-price-box--featured">
                <span class="bev-best-value">BEST VALUE</span>
                <p class="text-xs text-amber-400 mb-1">500g Pack</p>
                <p class="text-lg font-black text-white">35,000 <span class="text-xs font-normal text-gray-400">UGX</span></p>
                <p class="text-xs text-gray-500 mt-0.5">Most popular</p>
              </div>
            </div>

            <a href="https://wa.me/256788655973?text=Hello%2C%20I%20want%20to%20order%20Afrilia%20Coffee%20Powder"
               target="_blank" rel="noopener noreferrer"
               class="bev-order-btn">
              <i class="fab fa-whatsapp text-lg"></i>
              <span>Order via WhatsApp</span>
              <i class="fas fa-arrow-right text-xs ml-auto opacity-60"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Delivery perks bar -->
      <div class="bev-perks-bar reveal">
        <div class="bev-perk">
          <div class="bev-perk-icon"><i class="fas fa-truck"></i></div>
          <div>
            <p class="font-bold text-white text-sm">Quick Delivery</p>
            <p class="text-gray-500 text-xs">Around Kampala</p>
          </div>
        </div>
        <div class="bev-perk-divider"></div>
        <div class="bev-perk">
          <div class="bev-perk-icon"><i class="fas fa-mobile-alt"></i></div>
          <div>
            <p class="font-bold text-white text-sm">Easy Payment</p>
            <p class="text-gray-500 text-xs">Cash or Mobile Money</p>
          </div>
        </div>
        <div class="bev-perk-divider"></div>
        <div class="bev-perk">
          <div class="bev-perk-icon"><i class="fas fa-leaf"></i></div>
          <div>
            <p class="font-bold text-white text-sm">100% Natural</p>
            <p class="text-gray-500 text-xs">Sustainably Sourced</p>
          </div>
        </div>
        <div class="bev-perk-divider"></div>
        <div class="bev-perk">
          <div class="bev-perk-icon"><i class="fas fa-medal"></i></div>
          <div>
            <p class="font-bold text-white text-sm">Quality Assured</p>
            <p class="text-gray-500 text-xs">Every single batch</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ============ IMPACT STATS ============ -->
  <section class="bg-primary-50/40 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <span class="section-badge bg-primary-100 text-primary-700 mb-4 inline-block">OUR IMPACT</span>
        <h2 class="section-heading text-gray-900 mb-4">Global Reach, Local Roots</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Exporting premium Ugandan produce to intercontinental markets with focus on Europe and the Middle East
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${renderStatCard('fa-users', '500', '+', 'Businesses Served', '0.1s')}
        ${renderStatCard('fa-box', '200', '+', 'Organic Commodities', '0.2s')}
        ${renderStatCard('fa-map-marker-alt', '10', '+', 'Countries Delivered To', '0.3s')}
        ${renderStatCard('fa-user-check', '10', '+', 'Years Experience', '0.4s')}
      </div>
    </div>
  </section>

  <!-- ============ CONTACT CTA ============ -->
  <section class="bg-forest py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div class="reveal-left">
          <span class="section-badge bg-white/10 text-white border border-white/20 mb-6 inline-block">CONTACT US</span>
          <h2 class="section-heading text-white mb-6 leading-tight">
            Ready to Import Premium Ugandan Produce?
          </h2>
          <p class="text-gray-300 leading-relaxed mb-10 text-lg">
            Connect with our international export team for inquiries, quotations, or to discuss your bulk order requirements. We serve buyers across Europe, Middle East, and beyond.
          </p>

          <div class="space-y-5 mb-10">
            <div class="feature-row stagger-1">
              <div class="icon-circle bg-gradient-to-br from-primary-700 to-primary-900 flex-shrink-0" style="width:2.75rem;height:2.75rem;min-width:2.75rem">
                <i class="fas fa-phone-alt text-white text-sm"></i>
              </div>
              <div>
                <p class="text-green-300 text-xs font-medium tracking-wide uppercase">International Export Line</p>
                <p class="text-white font-semibold">+256 (0) 788 655973</p>
              </div>
            </div>
            <div class="feature-row stagger-2">
              <div class="icon-circle bg-gradient-to-br from-primary-700 to-primary-900 flex-shrink-0" style="width:2.75rem;height:2.75rem;min-width:2.75rem">
                <i class="fas fa-envelope text-white text-sm"></i>
              </div>
              <div>
                <p class="text-green-300 text-xs font-medium tracking-wide uppercase">Export Inquiries</p>
                <p class="text-white font-semibold">afriliaagro@gmail.com</p>
              </div>
            </div>
            <div class="feature-row stagger-3">
              <div class="icon-circle bg-gradient-to-br from-primary-700 to-primary-900 flex-shrink-0" style="width:2.75rem;height:2.75rem;min-width:2.75rem">
                <i class="fas fa-map-marker-alt text-white text-sm"></i>
              </div>
              <div>
                <p class="text-green-300 text-xs font-medium tracking-wide uppercase">Export Office</p>
                <p class="text-white font-semibold">Kampala, Uganda</p>
              </div>
            </div>
            <div class="feature-row stagger-4">
              <div class="icon-circle bg-gradient-to-br from-primary-700 to-primary-900 flex-shrink-0" style="width:2.75rem;height:2.75rem;min-width:2.75rem">
                <i class="fas fa-clock text-white text-sm"></i>
              </div>
              <div>
                <p class="text-green-300 text-xs font-medium tracking-wide uppercase">Business Hours</p>
                <p class="text-white font-semibold">Mon-Fri: 8AM-6PM EAT</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="/contact" data-link class="btn-primary">
              <i class="fas fa-file-alt"></i> Request Export Quote
            </a>
            <a href="https://wa.me/256788655973" target="_blank" rel="noopener noreferrer" class="btn-outline">
              <i class="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="relative reveal-right">
          <div class="rounded-2xl overflow-hidden shadow-2xl relative">
            <div class="img-placeholder w-full h-[400px] lg:h-[500px] rounded-2xl">
              <i class="fas fa-warehouse text-4xl text-gray-400 mb-2"></i>
              <span>IMAGE PLACEHOLDER</span>
              <span class="text-xs mt-1">Save as: contact-warehouse.jpg</span>
              <span class="text-xs">Location: /public/contact-warehouse.jpg</span>
            </div>
            <img src="/contact-warehouse.jpg" alt="Warehouse with export goods and shipping containers" 
                 class="absolute inset-0 w-full h-full object-cover"
                 onerror="this.style.display='none';" />
          </div>
          <!-- 50+ Countries Badge -->
          <div class="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float">
            <div class="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
              <i class="fas fa-globe-africa text-white"></i>
            </div>
            <div>
              <p class="font-bold text-lg text-gray-900">50+</p>
              <p class="text-xs text-gray-500">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

function renderStep(num: number, icon: string, title: string, description: string): string {
  return `
  <div class="step-card reveal step-stagger-${num}">
    <!-- scan-line shimmer lives in its own clipping wrapper so it doesn't cut the badge/arrow -->
    <div class="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
      <div class="step-scan-line"></div>
    </div>
    <!-- pulsing number badge -->
    <div class="step-badge absolute -top-4 left-5 w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-accent/30 z-10">
      ${num}
    </div>
    <!-- animated icon -->
    <div class="step-icon-wrap relative z-10 w-12 h-12 bg-forest/90 rounded-2xl flex items-center justify-center mt-5 mb-5 shadow-sm">
      <i class="fas ${icon} text-white text-base"></i>
    </div>
    <h3 class="relative z-10 font-bold text-gray-900 mb-3 text-base leading-snug">${title}</h3>
    <p class="relative z-10 text-gray-500 text-sm leading-relaxed font-normal">${description}</p>
    <!-- step connector arrow (hidden on last card via CSS) -->
    <div class="step-arrow-indicator hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-gray-100 rounded-full items-center justify-center shadow-md step-arrow-${num}">
      <i class="fas fa-chevron-right text-accent text-xs"></i>
    </div>
  </div>
  `;
}

function renderProductCard(image: string, title: string, description: string): string {
  return `
  <div class="card overflow-hidden group reveal">
    <div class="img-reveal h-52">
      <div class="img-placeholder h-full">
        <i class="fas fa-image text-2xl text-gray-400 mb-1"></i>
        <span class="text-xs">${image}</span>
      </div>
      <img src="/${image}" alt="${title}" 
           class="absolute inset-0 w-full h-full object-cover"
           onerror="this.style.display='none';" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
        <a href="/contact" data-link class="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-accent-dark transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <i class="fas fa-file-alt"></i> Request a Quote
        </a>
      </div>
    </div>
    <div class="p-5">
      <h3 class="font-bold text-gray-900 mb-1.5 text-base">${title}</h3>
      <p class="text-gray-500 text-sm leading-relaxed">${description}</p>
    </div>
  </div>
  `;
}

function renderStatCard(icon: string, count: string, suffix: string, label: string, delay: string): string {
  return `
  <div class="card p-8 text-center reveal" style="transition-delay: ${delay};">
    <div class="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
      <i class="fas ${icon} text-white text-xl"></i>
    </div>
    <p class="stat-number text-gray-900 mb-1" data-count="${count}" data-suffix="${suffix}">0${suffix}</p>
    <div class="w-8 h-0.5 bg-accent rounded-full mx-auto mb-2"></div>
    <p class="text-gray-500 text-sm font-medium">${label}</p>
  </div>
  `;
}
