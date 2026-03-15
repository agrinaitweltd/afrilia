export function renderTestimonials(): string {
  return `
  <!-- Hero Banner -->
  <section class="bg-forest py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="section-badge bg-white/10 text-white border border-white/20 mb-4 inline-block">TESTIMONIALS</span>
      <h1 class="section-heading text-white mb-4">What Our Clients Say</h1>
      <p class="text-gray-300 max-w-2xl mx-auto text-lg">
        Trusted by businesses across Europe, Middle East, and beyond
      </p>
    </div>
  </section>

  <!-- Testimonials Grid -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${testimonialCard(
          'Ahmed Al-Rashidi',
          'Import Manager, Gulf Foods LLC',
          'Dubai, UAE',
          'Afrilia Agro has been our trusted supplier of Ugandan coffee for over 3 years. Their quality consistency and reliable shipping have made them an invaluable partner for our business.',
          5,
          '0.1s'
        )}
        ${testimonialCard(
          'Maria Schmidt',
          'Procurement Director, EuroFresh GmbH',
          'Hamburg, Germany',
          'The fresh vegetables we receive from Afrilia Agro are always of exceptional quality. Their cold-chain management ensures produce arrives in perfect condition every time.',
          5,
          '0.2s'
        )}
        ${testimonialCard(
          'James Okonkwo',
          'CEO, West Africa Trading Co.',
          'Lagos, Nigeria',
          'Working with Afrilia Agro has simplified our sourcing process significantly. Their documentation and compliance handling is thorough and professional.',
          5,
          '0.3s'
        )}
        ${testimonialCard(
          'Sarah Kimani',
          'Operations Manager, Nairobi Fresh',
          'Nairobi, Kenya',
          'As a regional buyer, I appreciate Afrilia Agro\'s commitment to quality and competitive pricing. Their dedicated account manager makes the ordering process seamless.',
          4,
          '0.4s'
        )}
        ${testimonialCard(
          'Hassan Yilmaz',
          'Wholesale Buyer, Istanbul Commodities',
          'Istanbul, Turkey',
          'The grains and coffee we source from Afrilia Agro meet all European food safety standards. Their certifications and traceability give us complete confidence.',
          5,
          '0.5s'
        )}
        ${testimonialCard(
          'Emma Williams',
          'Supply Chain Lead, BritFoods UK',
          'London, UK',
          'Afrilia Agro stands out for their reliability and transparency. From quotation to delivery, every step is professional and well-communicated.',
          5,
          '0.6s'
        )}
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="bg-primary-50/50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-3 gap-8 text-center">
        <div class="reveal" style="transition-delay: 0.1s;">
          <p class="text-4xl font-bold text-primary-700 mb-2" data-count="500" data-suffix="+">0+</p>
          <p class="text-gray-600">Satisfied Clients</p>
        </div>
        <div class="reveal" style="transition-delay: 0.2s;">
          <p class="text-4xl font-bold text-primary-700 mb-2" data-count="50" data-suffix="+">0+</p>
          <p class="text-gray-600">Countries Served</p>
        </div>
        <div class="reveal" style="transition-delay: 0.3s;">
          <p class="text-4xl font-bold text-primary-700 mb-2">4.9/5</p>
          <p class="text-gray-600">Average Rating</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-forest py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <h2 class="text-3xl font-heading font-bold text-white mb-4">Join Our Growing List of Satisfied Clients</h2>
      <p class="text-gray-300 mb-8 text-lg">Experience the Afrilia Agro difference for your business</p>
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

function testimonialCard(name: string, role: string, location: string, text: string, stars: number, delay: string): string {
  const starIcons = Array(5).fill(0).map((_, i) => 
    `<i class="fas fa-star ${i < stars ? 'text-accent' : 'text-gray-300'} text-sm"></i>`
  ).join('');

  return `
  <div class="card p-8 hover:-translate-y-1 transition-all duration-300 reveal" style="transition-delay: ${delay};">
    <div class="flex gap-1 mb-4">${starIcons}</div>
    <p class="text-gray-600 leading-relaxed mb-6 italic">"${text}"</p>
    <div class="flex items-center gap-4 pt-4 border-t border-gray-100">
      <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
        <span class="text-primary-700 font-bold text-lg">${name.charAt(0)}</span>
      </div>
      <div>
        <p class="font-bold text-gray-900 text-sm">${name}</p>
        <p class="text-gray-500 text-xs">${role}</p>
        <p class="text-gray-400 text-xs">${location}</p>
      </div>
    </div>
  </div>
  `;
}
