export function renderExportProcess(): string {
  return `
  <!-- Hero Banner -->
  <section class="bg-forest py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="section-badge bg-white/10 text-white border border-white/20 mb-4 inline-block">OUR PROCESS</span>
      <h1 class="section-heading text-white mb-4">How We Export</h1>
      <p class="text-gray-300 max-w-2xl mx-auto text-lg">
        From farm to international destination - Our streamlined export process ensures quality, compliance, and timely delivery
      </p>
    </div>
  </section>

  <!-- 4-Step Process -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        ${processStep(1, 'fa-file-alt', 'Quote &amp; Order', 'Submit your export requirements through our quote form. We provide detailed quotations including product specifications, pricing, and shipping options.', '0.1s')}
        ${processStep(2, 'fa-filter', 'Sourcing &amp; Quality Check', 'We source fresh produce from our trusted farmer network. Each batch undergoes rigorous quality inspection to meet international standards.', '0.2s')}
        ${processStep(3, 'fa-stamp', 'Documentation &amp; Compliance', 'We handle all export documentation including phytosanitary certificates, customs declarations, and required certifications for your destination country.', '0.3s')}
        ${processStep(4, 'fa-shipping-fast', 'Shipping &amp; Delivery', 'Products are packed with cold chain management and shipped via air or sea freight. Track your shipment in real-time until arrival at your destination.', '0.4s')}
      </div>

      <!-- Process Flow Arrow Indicators -->
      <div class="hidden lg:block relative mb-20">
        <div class="h-1 bg-gradient-to-r from-primary-700 via-accent to-primary-700 rounded-full max-w-4xl mx-auto"></div>
      </div>

      <!-- Detailed Steps -->
      <div class="space-y-16">
        ${detailedStep(1, 'Quote &amp; Order', 'Your export journey begins here', [
          'Fill out our export quote form with your product requirements',
          'Specify quantities, quality grades, and destination country',
          'Receive a comprehensive quotation within 24 hours',
          'Review pricing, shipping options, and delivery timelines',
          'Confirm your order and agree on payment terms'
        ], 'fa-file-invoice', false)}
        
        ${detailedStep(2, 'Sourcing &amp; Quality Check', 'Ensuring only the best products', [
          'Source products from our network of certified Ugandan farmers',
          'Rigorous quality inspection at collection points',
          'Laboratory testing for food safety compliance',
          'Grading and sorting to meet your specifications',
          'Temperature-controlled storage at our facilities'
        ], 'fa-search', true)}
        
        ${detailedStep(3, 'Documentation &amp; Compliance', 'Seamless cross-border documentation', [
          'Prepare phytosanitary certificates and health inspections',
          'Customs declarations and export permits',
          'Certificate of Origin and trade documentation',
          'Destination-specific compliance certifications',
          'Insurance and logistics documentation'
        ], 'fa-clipboard-check', false)}
        
        ${detailedStep(4, 'Shipping &amp; Delivery', 'Safe and timely global delivery', [
          'Professional packaging with cold-chain management',
          'Choice of air freight or sea freight shipping',
          'Real-time shipment tracking provided',
          'Customs clearance support at destination port',
          'Delivery confirmation and quality verification'
        ], 'fa-globe-americas', true)}
      </div>
    </div>
  </section>

  <!-- Why Choose Our Process -->
  <section class="bg-forest py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <h2 class="section-heading text-white mb-4">Why Our Process Works</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          We have refined our export process to deliver reliability, quality, and speed
        </p>
      </div>

      <div class="grid sm:grid-cols-3 gap-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal" style="transition-delay: 0.1s;">
          <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-clock text-white text-xl"></i>
          </div>
          <h3 class="font-bold text-white mb-2 text-lg">Fast Processing</h3>
          <p class="text-gray-300 text-sm">Orders processed within 24-48 hours. Express shipping options available.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal" style="transition-delay: 0.2s;">
          <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check-circle text-white text-xl"></i>
          </div>
          <h3 class="font-bold text-white mb-2 text-lg">Quality Guarantee</h3>
          <p class="text-gray-300 text-sm">100% quality assurance with full traceability from farm to destination.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal" style="transition-delay: 0.3s;">
          <div class="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-headset text-white text-xl"></i>
          </div>
          <h3 class="font-bold text-white mb-2 text-lg">Dedicated Support</h3>
          <p class="text-gray-300 text-sm">Personal account manager available throughout the export process.</p>
        </div>
      </div>

      <div class="text-center mt-12 reveal">
        <a href="/contact" data-link class="btn-primary text-lg px-10 py-4">
          <i class="fas fa-file-alt"></i> Start Your Export Order
        </a>
      </div>
    </div>
  </section>
  `;
}

function processStep(num: number, icon: string, title: string, desc: string, delay: string): string {
  return `
  <div class="relative reveal" style="transition-delay: ${delay};">
    <div class="bg-primary-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
      <div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mb-6 shadow-md">
        ${num}
      </div>
      <div class="w-12 h-12 bg-forest rounded-xl flex items-center justify-center mb-4">
        <i class="fas ${icon} text-white text-lg"></i>
      </div>
      <h3 class="font-bold text-gray-900 text-lg mb-3">${title}</h3>
      <p class="text-gray-500 text-sm leading-relaxed">${desc}</p>
    </div>
  </div>
  `;
}

function detailedStep(num: number, title: string, subtitle: string, items: string[], icon: string, reverse: boolean): string {
  const orderClass = reverse ? 'lg:order-2' : '';
  const orderClassContent = reverse ? 'lg:order-1' : '';
  
  return `
  <div class="grid lg:grid-cols-2 gap-12 items-center reveal">
    <div class="${orderClass}">
      <div class="bg-primary-50 rounded-2xl p-12 flex items-center justify-center">
        <div class="text-center">
          <div class="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas ${icon} text-white text-3xl"></i>
          </div>
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
            ${num}
          </div>
        </div>
      </div>
    </div>
    <div class="${orderClassContent}">
      <span class="text-accent font-semibold text-sm mb-2 block">Step ${num}</span>
      <h3 class="text-2xl font-heading font-bold text-gray-900 mb-2">${title}</h3>
      <p class="text-gray-500 mb-6">${subtitle}</p>
      <ul class="space-y-3">
        ${items.map(item => `
          <li class="flex items-start gap-3">
            <i class="fas fa-check-circle text-primary-600 mt-1 flex-shrink-0"></i>
            <span class="text-gray-600 text-sm">${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  </div>
  `;
}
