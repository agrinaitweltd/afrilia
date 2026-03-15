export function renderProducts(): string {
  return `
  <!-- Hero Banner -->
  <section class="bg-forest py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="section-badge bg-white/10 text-white border border-white/20 mb-4 inline-block">OUR PRODUCTS</span>
      <h1 class="section-heading text-white mb-4">Export Quality Products</h1>
      <p class="text-gray-300 max-w-2xl mx-auto text-lg">
        Premium Ugandan agricultural produce, certified for international export markets
      </p>
    </div>
  </section>

  <!-- Export Products Grid -->
  <section class="bg-primary-50/40 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <h2 class="text-3xl font-heading font-bold text-gray-900 mb-4">Agricultural Export Products</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Fresh from Uganda's fertile lands to your international market</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        ${productExportCard('arabica-coffee.png', 'Arabica/Robusta Coffee', 'Premium highland-grown coffee beans, available in various grades for roasting and blending. Arabica from the slopes of Mt. Elgon and Robusta from central Uganda.')}
        ${productExportCard('fresh-vegetables.png', 'Fresh Vegetables', 'Farm-fresh vegetables including hot peppers, okra, eggplant, and more. Packed under cold-chain management to maintain freshness during transit.')}
        ${productExportCard('fresh-fruits.jpg', 'Fresh Fruits', 'Tropical fruits including pineapples, passion fruits, mangoes, and bananas. Sourced from certified farms and packed for export quality.')}
        ${productExportCard('grains.jpg', 'Grains', 'High-quality grains including maize, beans, sesame, and soya beans. Cleaned, sorted, and packaged to meet international food safety standards.')}
      </div>

      <!-- Local Supply Banner -->
      <div class="card p-6 flex items-center gap-4 mb-16 reveal">
        <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <i class="fas fa-building text-primary-700 text-lg"></i>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">Local Supply Available</h3>
          <p class="text-gray-500 text-sm">We also supply to restaurants, hotels, and businesses across Uganda</p>
        </div>
      </div>

      <!-- Global Export CTA -->
      <div class="rounded-3xl p-12 text-center reveal" 
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
        <h3 class="text-3xl font-heading font-bold text-white mb-4">Global Export Solutions</h3>
        <p class="text-white/80 max-w-lg mx-auto mb-8">
          Serving international buyers across Europe, Middle East, and beyond with certified export-quality produce
        </p>
        <a href="/contact" data-link class="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
          <i class="fas fa-file-alt"></i> Request Export Quote
        </a>
      </div>
    </div>
  </section>

  <!-- Packaged Coffee Section -->
  <section class="bg-primary-50/30 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <span class="section-badge bg-forest text-white mb-4 inline-block">
          <i class="fas fa-coffee mr-1"></i> PREMIUM COFFEE
        </span>
        <h2 class="section-heading text-gray-900 mb-4">Packaged Beverages</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Sustainably sourced Ugandan coffee—perfectly packaged and ready to enjoy</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <!-- Coffee Beans -->
        <div class="card overflow-hidden reveal" style="transition-delay: 0.1s;">
          <div class="relative">
            <span class="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10">PREMIUM BEANS</span>
            <div class="img-placeholder h-64 rounded-t-2xl">
              <i class="fas fa-seedling text-3xl text-gray-400 mb-2"></i>
              <span>IMAGE PLACEHOLDER</span>
              <span class="text-xs">Save as: coffee-beans.jpg</span>
              <span class="text-xs">Location: /public/coffee-beans.jpg</span>
            </div>
            <img src="/coffee-beans.jpg" alt="Afrilia Coffee Beans - Premium whole coffee beans" 
                 class="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                 onerror="this.style.display='none';" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Afrilia Coffee Beans</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">Premium whole coffee beans sourced directly from local Ugandan farmers. Perfect for grinding fresh at home for the ultimate coffee experience.</p>
            
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p class="font-semibold text-sm">250g Pack</p>
                  <p class="text-xs text-gray-500">Perfect for trying</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-lg">20,000</p>
                  <p class="text-xs text-gray-500">UGX</p>
                </div>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-2 border-accent relative">
                <span class="absolute -top-2.5 left-3 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded">BEST VALUE</span>
                <div>
                  <p class="font-semibold text-sm">500g Pack</p>
                  <p class="text-xs text-gray-500">Most popular</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-lg">35,000</p>
                  <p class="text-xs text-gray-500">UGX</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/256788655973?text=Hello%2C%20I%20want%20to%20order%20Afrilia%20Coffee%20Beans" 
               target="_blank" rel="noopener noreferrer"
               class="w-full btn-green justify-center rounded-xl">
              <i class="fab fa-whatsapp text-lg"></i> Order Now via WhatsApp
            </a>
          </div>
        </div>

        <!-- Coffee Powder -->
        <div class="card overflow-hidden reveal" style="transition-delay: 0.2s;">
          <div class="relative">
            <span class="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full z-10">GROUND FRESH</span>
            <div class="img-placeholder h-64 rounded-t-2xl">
              <i class="fas fa-mug-hot text-3xl text-gray-400 mb-2"></i>
              <span>IMAGE PLACEHOLDER</span>
              <span class="text-xs">Save as: coffee-powder.jpg</span>
              <span class="text-xs">Location: /public/coffee-powder.jpg</span>
            </div>
            <img src="/coffee-powder.jpg" alt="Afrilia Coffee Powder - Freshly ground premium coffee" 
                 class="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                 onerror="this.style.display='none';" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Afrilia Coffee Powder</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">Freshly ground premium coffee powder, ready to brew. Enjoy the rich aroma and bold flavor of Ugandan coffee in every cup.</p>
            
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p class="font-semibold text-sm">250g Pack</p>
                  <p class="text-xs text-gray-500">Perfect for trying</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-lg">20,000</p>
                  <p class="text-xs text-gray-500">UGX</p>
                </div>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-2 border-accent relative">
                <span class="absolute -top-2.5 left-3 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded">BEST VALUE</span>
                <div>
                  <p class="font-semibold text-sm">500g Pack</p>
                  <p class="text-xs text-gray-500">Most popular</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-lg">35,000</p>
                  <p class="text-xs text-gray-500">UGX</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/256788655973?text=Hello%2C%20I%20want%20to%20order%20Afrilia%20Coffee%20Powder" 
               target="_blank" rel="noopener noreferrer"
               class="w-full btn-green justify-center rounded-xl">
              <i class="fab fa-whatsapp text-lg"></i> Order Now via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Delivery Features -->
      <div class="card p-8 reveal">
        <div class="grid sm:grid-cols-3 gap-8 text-center">
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
              <i class="fas fa-truck text-primary-700 text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Quick Delivery</h4>
              <p class="text-gray-500 text-xs">Around Kampala</p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
              <i class="fas fa-mobile-alt text-primary-700 text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Easy Payment</h4>
              <p class="text-gray-500 text-xs">Cash or Mobile Money</p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
              <i class="fas fa-leaf text-primary-700 text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">100% Natural</h4>
              <p class="text-gray-500 text-xs">Sustainably Sourced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

function productExportCard(image: string, title: string, description: string): string {
  return `
  <div class="card overflow-hidden group reveal">
    <div class="relative h-52 overflow-hidden">
      <div class="img-placeholder h-full">
        <i class="fas fa-image text-2xl text-gray-400 mb-1"></i>
        <span class="text-xs">${image}</span>
      </div>
      <img src="/${image}" alt="${title}" 
           class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
           onerror="this.style.display='none';" />
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a href="/contact" data-link class="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-dark transition-colors">
          <i class="fas fa-file-alt mr-1"></i> Request a Quote
        </a>
      </div>
    </div>
    <div class="p-5">
      <h3 class="font-bold text-gray-900 mb-2">${title}</h3>
      <p class="text-gray-500 text-sm leading-relaxed">${description}</p>
    </div>
  </div>
  `;
}
