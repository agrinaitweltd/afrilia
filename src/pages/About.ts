export function renderAbout(): string {
  return `
  <!-- Hero Banner -->
  <section class="bg-forest py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="section-badge bg-white/10 text-white border border-white/20 mb-4 inline-block">ABOUT US</span>
      <h1 class="section-heading text-white mb-4">Our Story</h1>
      <p class="text-gray-300 max-w-2xl mx-auto text-lg">
        Connecting Ugandan farmers to the world through quality agricultural exports
      </p>
    </div>
  </section>

  <!-- About Content -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="reveal-left">
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <div class="img-placeholder w-full h-56 sm:h-[400px] rounded-2xl">
              <i class="fas fa-users text-4xl text-gray-400 mb-2"></i>
              <span>IMAGE PLACEHOLDER</span>
              <span class="text-xs mt-1">Save as: about-team.jpg</span>
              <span class="text-xs">Location: /public/about-team.jpg</span>
            </div>
            <img src="/about-team.jpg" alt="Afrilia Agro team and farming operations" 
                 class="absolute inset-0 w-full h-full object-cover"
                 style="min-height:14rem;"
                 onerror="this.style.display='none';" />
          </div>
        </div>

        <div class="reveal-right">
          <h2 class="text-3xl font-heading font-bold text-gray-900 mb-6">Who We Are</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            Afrilia Agro Uganda Limited is a premier agricultural export company based in Kampala, Uganda. We specialize in sourcing, processing, and exporting high-quality Ugandan agricultural produce to international markets across Europe, the Middle East, and beyond.
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            Founded with a mission to bridge the gap between Ugandan farmers and global markets, we have grown into a trusted partner for businesses seeking reliable, certified, and premium agricultural commodities.
          </p>
          <p class="text-gray-600 leading-relaxed mb-8">
            Our commitment to quality, compliance, and sustainable practices sets us apart in the agricultural export industry. Every product we export undergoes rigorous quality checks and meets international standards for food safety and certification.
          </p>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-primary-50 rounded-xl p-4 text-center">
              <p class="text-3xl font-bold text-primary-700">500+</p>
              <p class="text-gray-600 text-sm">Businesses Served</p>
            </div>
            <div class="bg-primary-50 rounded-xl p-4 text-center">
              <p class="text-3xl font-bold text-primary-700">10+</p>
              <p class="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY AFRILIA AGRO -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Image -->
        <div class="relative reveal-left">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <div class="img-placeholder w-full h-[400px] lg:h-[500px] rounded-2xl">
              <i class="fas fa-truck text-4xl text-gray-400 mb-2"></i>
              <span>IMAGE PLACEHOLDER</span>
              <span class="text-xs mt-1">Save as: hero-transport.jpg</span>
              <span class="text-xs">Location: /public/hero-transport.jpg</span>
            </div>
            <img src="/hero-transport.jpg" alt="Global transport - truck, airplane, and shipping containers" 
                 class="absolute inset-0 w-full h-full object-cover"
                 onerror="this.style.display='none';" />
          </div>

          <!-- Export Certified Badge -->
          <div class="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float">
            <div class="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
            <div>
              <p class="font-bold text-sm text-gray-900">Export Certified</p>
              <p class="text-xs text-gray-500">International Standards</p>
            </div>
          </div>

          <!-- Global Shipping Badge -->
          <div class="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float" style="animation-delay: 1.5s;">
            <div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <i class="fas fa-ship text-white"></i>
            </div>
            <div>
              <p class="font-bold text-sm text-gray-900">Global Shipping</p>
              <p class="text-xs text-gray-500">Worldwide Delivery</p>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="reveal-right">
          <span class="section-badge bg-gray-100 text-gray-700 mb-6 inline-block">WHY AFRILIA AGRO</span>
          <h2 class="section-heading text-gray-900 mb-6 leading-tight">
            Premier Export Partner for Ugandan Agricultural Products
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8 text-lg">
            As a leading agricultural export company, we specialize in delivering premium Ugandan produce to international markets. Our export operations are built on reliability, quality assurance, and comprehensive logistics management.
          </p>

          <div class="space-y-6 mb-10">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i class="fas fa-certificate text-primary-700 text-lg"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Export Excellence &amp; Compliance</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Full compliance with international export regulations, phytosanitary certifications, and customs documentation for seamless cross-border trade</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i class="fas fa-snowflake text-primary-700 text-lg"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Advanced Logistics &amp; Cold Chain</h3>
                <p class="text-gray-500 text-sm leading-relaxed">State-of-the-art packaging, temperature-controlled storage, and efficient freight forwarding to ensure products arrive in perfect condition</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i class="fas fa-user-tie text-primary-700 text-lg"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Dedicated Export Account Management</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Personalized service with dedicated account managers who understand international trade, provide real-time shipment tracking, and ensure timely delivery</p>
              </div>
            </div>
          </div>

          <a href="/contact" data-link class="btn-primary">
            Request Export Quote <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="bg-primary-50/50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card p-8 reveal" style="transition-delay: 0.1s;">
          <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-bullseye text-white text-xl"></i>
          </div>
          <h3 class="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
          <p class="text-gray-600 leading-relaxed">
            To connect Ugandan farmers with global markets by providing reliable, quality-driven agricultural export services. We are dedicated to ensuring every product meets the highest international standards while empowering local farming communities.
          </p>
        </div>
        <div class="card p-8 reveal" style="transition-delay: 0.2s;">
          <div class="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-eye text-white text-xl"></i>
          </div>
          <h3 class="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
          <p class="text-gray-600 leading-relaxed">
            To become East Africa's leading agricultural export company, recognized globally for premium quality produce, sustainable farming practices, and unwavering commitment to excellence in international trade.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <h2 class="section-heading text-gray-900 mb-4">Our Core Values</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card p-6 text-center reveal" style="transition-delay: 0.1s;">
          <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-award text-primary-700 text-xl"></i>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Quality First</h4>
          <p class="text-gray-500 text-sm">Uncompromising commitment to delivering the finest agricultural products</p>
        </div>
        <div class="card p-6 text-center reveal" style="transition-delay: 0.2s;">
          <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-handshake text-primary-700 text-xl"></i>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Trust &amp; Integrity</h4>
          <p class="text-gray-500 text-sm">Building lasting relationships through transparency and honesty</p>
        </div>
        <div class="card p-6 text-center reveal" style="transition-delay: 0.3s;">
          <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-seedling text-primary-700 text-xl"></i>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Sustainability</h4>
          <p class="text-gray-500 text-sm">Promoting environmentally responsible farming and export practices</p>
        </div>
        <div class="card p-6 text-center reveal" style="transition-delay: 0.4s;">
          <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-lightbulb text-primary-700 text-xl"></i>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Innovation</h4>
          <p class="text-gray-500 text-sm">Continuously improving our processes and adopting modern solutions</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 reveal">
        <span class="section-badge bg-gray-100 text-gray-700 border border-gray-200 mb-4 inline-block">OUR PARTNERS</span>
        <h2 class="section-heading text-gray-900 mb-3">Strategic Partners</h2>
        <p class="text-gray-500 max-w-xl">
          We work alongside trusted companies that share our commitment to quality agricultural trade.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 items-start reveal">
        <!-- Partner detail -->
        <div class="lg:col-span-2 border border-gray-200 rounded-2xl p-8">
          <div class="flex flex-col sm:flex-row gap-6 items-start">
            <div class="w-20 h-20 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <div class="img-placeholder w-full h-full rounded-xl">
                <i class="fas fa-building text-gray-300 text-xl"></i>
              </div>
              <img src="/triport-logo.png" alt="Triport Agro International Limited"
                   class="absolute inset-0 w-full h-full object-contain p-2"
                   style="position:relative;"
                   onerror="this.style.display='none';" />
            </div>
            <div>
              <p class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Strategic Partner</p>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Triport Agro International Limited</h3>
              <p class="text-gray-500 leading-relaxed text-sm mb-5">
                A trusted partner in agricultural trade and international export solutions, helping us connect Ugandan farmers with buyers across global markets.
              </p>
              <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                <a href="tel:0780391916" class="flex items-center gap-2 hover:text-primary-700 transition-colors">
                  <i class="fas fa-phone-alt text-primary-700"></i> 0780 391 916
                </a>
                <a href="mailto:triportagro@gmail.com" class="flex items-center gap-2 hover:text-primary-700 transition-colors">
                  <i class="fas fa-envelope text-primary-700"></i> triportagro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Become a partner -->
        <div class="border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col justify-center text-center reveal" style="transition-delay:0.15s;">
          <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">Join Our Network</p>
          <h4 class="text-lg font-bold text-gray-900 mb-3">Become a Partner</h4>
          <p class="text-gray-500 text-sm leading-relaxed mb-6">
            Interested in collaborating? We welcome partnerships that advance quality agricultural trade.
          </p>
          <a href="/contact" data-link class="btn-primary text-sm">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-forest py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <h2 class="text-3xl font-heading font-bold text-white mb-4">Ready to Partner With Us?</h2>
      <p class="text-gray-300 mb-8 text-lg">Let's work together to bring premium Ugandan produce to your market</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/contact" data-link class="btn-primary">
          <i class="fas fa-file-alt"></i> Request Export Quote
        </a>
        <a href="https://wa.me/256788655973" target="_blank" rel="noopener noreferrer" class="btn-outline">
          <i class="fab fa-whatsapp"></i> WhatsApp Us
        </a>
      </div>
    </div>
  </section>
  `;
}
