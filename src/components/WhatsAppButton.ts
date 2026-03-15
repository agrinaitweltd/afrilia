export function renderWhatsAppButton(): string {
  return `
  <a href="https://wa.me/256788655973" 
     target="_blank" 
     rel="noopener noreferrer"
     class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white font-semibold 
            px-5 py-3 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 
            hover:-translate-y-1 flex items-center gap-2 group"
     aria-label="Order Now on WhatsApp">
    <i class="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
    <span class="text-sm font-bold">Order Now</span>
  </a>
  `;
}
