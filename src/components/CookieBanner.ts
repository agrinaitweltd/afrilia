export function renderCookieBanner(): string {
  return `
  <div id="cookie-banner"
       class="fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-500"
       style="transform: translateY(100%);">
    <div style="background: rgba(11, 25, 11, 0.97); backdrop-filter: blur(16px); border-top: 1px solid rgba(200,146,42,0.25);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <!-- Icon + Text -->
        <div class="flex items-start gap-3 flex-1 min-w-0">
          <div class="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
               style="background: rgba(200,146,42,0.15); border: 1px solid rgba(200,146,42,0.3);">
            <i class="fas fa-cookie-bite text-sm" style="color:#C8922A;"></i>
          </div>
          <div class="min-w-0">
            <p class="text-white font-semibold text-sm mb-0.5">We use cookies</p>
            <p class="text-gray-400 text-xs leading-relaxed">
              We use cookies to improve your experience on our site, analyse traffic, and personalise content.
              By clicking <span class="text-white font-medium">"Accept"</span> you consent to our use of cookies.
              <a href="#" class="underline transition-colors duration-200" style="color:#C8922A;">Learn more</a>
            </p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
          <button id="cookie-decline"
                  class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border"
                  style="border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6); background: transparent;">
            Decline
          </button>
          <button id="cookie-accept"
                  class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-white"
                  style="background: #C8922A; border: 1px solid #C8922A;">
            Accept All
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

export function setupCookieBanner(): void {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  // Don't show if already decided
  if (localStorage.getItem('cookie-consent')) return;

  // Slide in after a short delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      banner.style.transform = 'translateY(0)';
    }, 800);
  });

  const accept = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');

  const dismiss = (value: string) => {
    localStorage.setItem('cookie-consent', value);
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 500);
  };

  accept?.addEventListener('click', () => dismiss('accepted'));
  decline?.addEventListener('click', () => dismiss('declined'));
}
