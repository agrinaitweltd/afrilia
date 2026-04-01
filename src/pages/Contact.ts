export function renderContact(): string {
  return `
  <!-- Hero Banner -->
  <section class="bg-forest py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="section-badge bg-white/10 text-white border border-white/20 mb-4 inline-block">CONTACT US</span>
      <h1 class="section-heading text-white mb-4">Get In Touch</h1>
      <p class="text-gray-300 max-w-2xl mx-auto text-lg">
        Ready to import premium Ugandan produce? Connect with our international export team
      </p>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="reveal-left">
          <h2 class="text-3xl font-heading font-bold text-gray-900 mb-6">
            Ready to Import Premium Ugandan Produce?
          </h2>
          <p class="text-gray-600 leading-relaxed mb-10 text-lg">
            Connect with our international export team for inquiries, quotations, or to discuss your bulk order requirements. We serve buyers across Europe, Middle East, and beyond.
          </p>

          <div class="space-y-6 mb-10">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-phone-alt text-primary-700"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs font-medium">International Export Line</p>
                <p class="text-gray-900 font-semibold">+256 (0) 788 655973</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-envelope text-primary-700"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs font-medium">Export Inquiries</p>
                <p class="text-gray-900 font-semibold">afriliaagro@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-map-marker-alt text-primary-700"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs font-medium">Export Office</p>
                <p class="text-gray-900 font-semibold">Kampala, Uganda</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-clock text-primary-700"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs font-medium">Business Hours</p>
                <p class="text-gray-900 font-semibold">Mon-Fri: 8AM-6PM EAT</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="https://wa.me/256788655973" target="_blank" rel="noopener noreferrer" class="btn-green">
              <i class="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="reveal-right">
          <div class="card p-8 shadow-xl">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-6">Request Export Quote</h3>
            <form id="contact-form" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" name="firstName" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                         placeholder="Your first name" />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                         placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                       placeholder="your@email.com" />
              </div>
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input type="text" id="company" name="company"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                       placeholder="Your company" />
              </div>
              <div>
                <label for="country" class="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input type="text" id="country" name="country"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                       placeholder="Your country" />
              </div>
              <div>
                <label for="product" class="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                <select id="product" name="product" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm text-gray-700">
                  <option value="">Select a product</option>
                  <option value="arabica-coffee">Arabica Coffee</option>
                  <option value="robusta-coffee">Robusta Coffee</option>
                  <option value="fresh-vegetables">Fresh Vegetables</option>
                  <option value="fresh-fruits">Fresh Fruits</option>
                  <option value="grains">Grains</option>
                  <option value="packaged-coffee">Packaged Coffee</option>
                  <option value="multiple">Multiple Products</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm resize-none"
                          placeholder="Tell us about your requirements, quantities, and delivery preferences..."></textarea>
              </div>
              <button type="submit" class="w-full btn-primary justify-center text-lg py-4 rounded-xl">
                <i class="fas fa-paper-plane"></i> Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map / Location -->
  <section class="bg-primary-50/40 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 reveal">
        <h2 class="text-3xl font-heading font-bold text-gray-900 mb-4">Our Location</h2>
        <p class="text-gray-600">Visit us at our export office in Kajjansi, Entebbe, Uganda</p>
      </div>
      <div class="card overflow-hidden reveal">
        <iframe
          src="https://maps.google.com/maps?q=Kajjansi,Entebbe,Uganda&z=15&output=embed"
          width="100%"
          height="400"
          style="border:0; display:block;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Afrilia Agro Uganda Ltd - Kajjansi, Entebbe">
        </iframe>
      </div>
    </div>
  </section>
  `;
}
