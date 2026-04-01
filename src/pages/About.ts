export function renderAbout(): string {
  return `
  <style>
    /* ── Windows 2000 Global Theme for About Page ── */
    #about-win2k * {
      font-family: 'Tahoma', 'MS Sans Serif', Arial, sans-serif;
      box-sizing: border-box;
    }
    .win2k-window {
      background: #ECE9D8;
      border: 2px solid;
      border-color: #FFFFFF #808080 #808080 #FFFFFF;
      box-shadow: inset 1px 1px 0 #DFDFDF, 2px 2px 4px rgba(0,0,0,0.4);
    }
    .win2k-title-bar {
      background: linear-gradient(180deg, #3267C2 0%, #5A9EE3 45%, #2052A8 100%);
      padding: 4px 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      user-select: none;
    }
    .win2k-title-bar-text {
      color: #FFFFFF;
      font-size: 11px;
      font-weight: bold;
      flex: 1;
      text-shadow: 1px 1px 0 rgba(0,0,0,0.4);
    }
    .win2k-btn {
      background: #C0C0C0;
      border: 1px solid;
      border-color: #FFFFFF #808080 #808080 #FFFFFF;
      padding: 5px 18px;
      font-size: 11px;
      font-weight: bold;
      cursor: pointer;
      color: #000000;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      line-height: 1;
    }
    .win2k-btn:hover {
      background: #D4D0C8;
    }
    .win2k-btn:active {
      border-color: #808080 #FFFFFF #FFFFFF #808080;
    }
    .win2k-btn-primary {
      background: linear-gradient(180deg, #3267C2 0%, #2052A8 100%);
      border-color: #6696D8 #1A3E90 #1A3E90 #6696D8;
      color: #FFFFFF;
      padding: 6px 22px;
    }
    .win2k-btn-primary:hover {
      background: linear-gradient(180deg, #4070CC 0%, #2A5AB0 100%);
    }
    .win2k-groupbox {
      border: 1px solid #808080;
      border-top: 1px solid #808080;
      position: relative;
      padding: 16px 14px 14px;
      margin-top: 10px;
      background: #FFFFFF;
    }
    .win2k-groupbox-label {
      position: absolute;
      top: -9px;
      left: 10px;
      background: #ECE9D8;
      padding: 0 5px;
      font-size: 11px;
      font-weight: bold;
      color: #000080;
    }
    .win2k-inset {
      background: #FFFFFF;
      border: 2px solid;
      border-color: #808080 #DFDFDF #DFDFDF #808080;
      padding: 10px;
    }
    .win2k-status-bar {
      background: #D4D0C8;
      border-top: 1px solid #808080;
      padding: 3px 8px;
      font-size: 10px;
      color: #444;
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .win2k-progress-bar {
      height: 16px;
      background: #FFFFFF;
      border: 2px inset #808080;
      overflow: hidden;
    }
    .win2k-progress-fill {
      height: 100%;
      background: #000080;
      display: flex;
    }
    .win2k-progress-block {
      width: 10px;
      background: #000080;
      margin-right: 2px;
      flex-shrink: 0;
    }
    .win2k-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
    }
    .win2k-table th {
      background: #D4D0C8;
      border: 1px solid #808080;
      padding: 4px 8px;
      text-align: left;
      font-weight: bold;
    }
    .win2k-table td {
      border: 1px solid #C0C0C0;
      padding: 4px 8px;
      background: #FFFFFF;
    }
    .win2k-table tr:nth-child(even) td {
      background: #F0F0F0;
    }
    .win2k-tooltip {
      background: #FFFFE1;
      border: 1px solid #808080;
      padding: 3px 6px;
      font-size: 11px;
      display: inline-block;
    }
    .win2k-icon-16 {
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      flex-shrink: 0;
    }
    .win2k-taskbar-btn {
      background: #D4D0C8;
      border: 2px outset #FFFFFF;
      padding: 3px 10px;
      font-size: 11px;
      font-weight: bold;
      min-width: 120px;
      text-align: left;
    }
    .win2k-start-btn {
      background: linear-gradient(180deg, #5CA646 0%, #327D1C 100%);
      border: 2px outset #7DC868;
      padding: 3px 12px 3px 8px;
      font-size: 11px;
      font-weight: bold;
      color: #FFFFFF;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .win2k-radio-area {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      margin-bottom: 6px;
    }
    .win2k-checkbox-area {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      margin-bottom: 4px;
    }
    .win2k-scrollable {
      background: #FFFFFF;
      border: 2px inset #808080;
      height: 100px;
      overflow-y: auto;
      padding: 4px 8px;
      font-size: 11px;
      line-height: 1.5;
    }
    .win2k-tab {
      background: #D4D0C8;
      border: 1px solid #808080;
      border-bottom: none;
      padding: 4px 16px;
      font-size: 11px;
      font-weight: bold;
      display: inline-block;
      cursor: pointer;
      color: #000;
      position: relative;
      top: 1px;
    }
    .win2k-tab.active {
      background: #ECE9D8;
      border-bottom: 1px solid #ECE9D8;
      z-index: 1;
    }
    .win2k-tab-content {
      background: #ECE9D8;
      border: 1px solid #808080;
      padding: 16px;
    }
    .win2k-divider {
      height: 0;
      border-top: 1px solid #808080;
      border-bottom: 1px solid #FFFFFF;
      margin: 8px 0;
    }
    .win2k-badge-outset {
      background: #C0C0C0;
      border: 2px outset #FFFFFF;
      padding: 2px 8px;
      font-size: 10px;
      font-weight: bold;
      display: inline-block;
      color: #000;
    }
    .win2k-listview-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 6px 4px;
      border-bottom: 1px solid #E0E0E0;
      font-size: 11px;
    }
    .win2k-listview-item:hover {
      background: #000080;
      color: #FFFFFF;
    }
    .win2k-listview-item:last-child {
      border-bottom: none;
    }
    @keyframes win2k-marquee {
      0%   { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .win2k-marquee-inner {
      animation: win2k-marquee 16s linear infinite;
      white-space: nowrap;
      display: inline-block;
    }
    .win2k-desktop-bg {
      background-color: #244E8A;
    }
  </style>

  <div id="about-win2k">

    <!-- ── Desktop Wallpaper Stripe ── -->
    <div class="win2k-desktop-bg" style="padding: 24px 0 0;">
      <div style="max-width: 900px; margin: 0 auto; padding: 0 16px;">

        <!-- Desktop Icon Bar -->
        <div style="display: flex; gap: 24px; margin-bottom: 18px; align-items: flex-start;">
          <div style="text-align: center; cursor: pointer; width: 64px;">
            <div style="width: 40px; height: 40px; background: #C0C0C0; border: 2px outset #FFF; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🌿</div>
            <div style="font-size: 10px; color: #FFF; background: transparent; text-shadow: 1px 1px 2px #000; line-height: 1.2;">My Company</div>
          </div>
          <div style="text-align: center; cursor: pointer; width: 64px;">
            <div style="width: 40px; height: 40px; background: #C0C0C0; border: 2px outset #FFF; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 20px;">📦</div>
            <div style="font-size: 10px; color: #FFF; background: transparent; text-shadow: 1px 1px 2px #000; line-height: 1.2;">Products</div>
          </div>
          <div style="text-align: center; cursor: pointer; width: 64px;">
            <div style="width: 40px; height: 40px; background: #C0C0C0; border: 2px outset #FFF; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🌍</div>
            <div style="font-size: 10px; color: #FFF; background: transparent; text-shadow: 1px 1px 2px #000; line-height: 1.2;">Global Trade</div>
          </div>
          <div style="text-align: center; cursor: pointer; width: 64px;">
            <div style="width: 40px; height: 40px; background: #C0C0C0; border: 2px outset #FFF; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 20px;">📧</div>
            <div style="font-size: 10px; color: #FFF; background: transparent; text-shadow: 1px 1px 2px #000; line-height: 1.2;">Contact Us</div>
          </div>
          <div style="text-align: center; cursor: pointer; width: 64px;">
            <div style="width: 40px; height: 40px; background: #C0C0C0; border: 2px outset #FFF; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🗑️</div>
            <div style="font-size: 10px; color: #FFF; background: transparent; text-shadow: 1px 1px 2px #000; line-height: 1.2;">Recycle Bin</div>
          </div>
        </div>

        <!-- ══ MAIN WINDOW: About Afrilia Agro ══ -->
        <div class="win2k-window" style="margin-bottom: 16px;">
          <div class="win2k-title-bar">
            <span style="font-size: 14px;">🌿</span>
            <span class="win2k-title-bar-text">About Afrilia Agro Uganda Limited — Company Profile</span>
            <div style="display: flex; gap: 2px;">
              <button style="width: 18px; height: 16px; background: #C0C0C0; border: 1px outset #FFF; font-size: 9px; font-weight: bold; cursor: pointer; padding: 0; line-height: 1;">_</button>
              <button style="width: 18px; height: 16px; background: #C0C0C0; border: 1px outset #FFF; font-size: 9px; font-weight: bold; cursor: pointer; padding: 0; line-height: 1;">□</button>
              <button style="width: 18px; height: 16px; background: #C0433C; border: 1px outset #D06060; font-size: 9px; font-weight: bold; cursor: pointer; padding: 0; line-height: 1; color: #FFF;">✕</button>
            </div>
          </div>

          <!-- Menu Bar -->
          <div style="background: #ECE9D8; border-bottom: 1px solid #ACA899; padding: 2px 4px; display: flex; gap: 2px;">
            <button style="background: none; border: none; font-size: 11px; padding: 2px 8px; cursor: pointer; font-family: Tahoma, Arial, sans-serif;">File</button>
            <button style="background: none; border: none; font-size: 11px; padding: 2px 8px; cursor: pointer; font-family: Tahoma, Arial, sans-serif;">Edit</button>
            <button style="background: none; border: none; font-size: 11px; padding: 2px 8px; cursor: pointer; font-family: Tahoma, Arial, sans-serif;">View</button>
            <button style="background: none; border: none; font-size: 11px; padding: 2px 8px; cursor: pointer; font-family: Tahoma, Arial, sans-serif;">Favorites</button>
            <button style="background: none; border: none; font-size: 11px; padding: 2px 8px; cursor: pointer; font-family: Tahoma, Arial, sans-serif;">Help</button>
          </div>

          <!-- Toolbar -->
          <div style="background: #D4D0C8; border-bottom: 1px solid #ACA899; padding: 4px 6px; display: flex; gap: 4px; align-items: center; flex-wrap: wrap;">
            <a href="/" data-link class="win2k-btn" style="text-decoration:none;">⬅ Back</a>
            <button class="win2k-btn">➡ Forward</button>
            <div class="win2k-divider" style="width: 1px; height: 24px; margin: 0 2px;"></div>
            <a href="/" data-link class="win2k-btn" style="text-decoration:none;">🏠 Home</a>
            <button class="win2k-btn">📁 Folders</button>
            <button class="win2k-btn">🔍 Search</button>
            <div class="win2k-divider" style="width: 1px; height: 24px; margin: 0 2px;"></div>
            <span style="font-size: 11px; margin-left: 4px;">Address:</span>
            <div style="background: #FFFFFF; border: 2px inset #808080; flex: 1; min-width: 160px; padding: 2px 6px; font-size: 11px; color: #000080;">http://www.afrilia-agro.co.ug/about</div>
            <button class="win2k-btn" style="padding: 4px 14px;">Go ➤</button>
          </div>

          <!-- Window Content -->
          <div style="display: flex; background: #ECE9D8; min-height: 400px;">

            <!-- Left Panel: Folders / Nav -->
            <div style="width: 180px; flex-shrink: 0; border-right: 1px solid #ACA899; padding: 8px 0; background: #D4D0C8;">
              <div style="padding: 6px 10px; font-size: 10px; font-weight: bold; color: #000080; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #ACA899; margin-bottom: 4px;">Company Folders</div>
              <div style="padding: 5px 10px; font-size: 11px; cursor: pointer; background: #000080; color: #FFF; display: flex; gap: 6px; align-items: center;">📂 About Us</div>
              <a href="/products" data-link style="text-decoration:none; color: inherit;"><div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center;">📁 Products</div></a>
              <a href="/export-process" data-link style="text-decoration:none; color: inherit;"><div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center;">📁 Export Process</div></a>
              <a href="/testimonials" data-link style="text-decoration:none; color: inherit;"><div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center;">📁 Testimonials</div></a>
              <a href="/contact" data-link style="text-decoration:none; color: inherit;"><div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center;">📁 Contact</div></a>
              <div class="win2k-divider" style="margin: 8px 10px;"></div>
              <div style="padding: 6px 10px; font-size: 10px; font-weight: bold; color: #000080; text-transform: uppercase; letter-spacing: 0.5px;">Quick Links</div>
              <div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center; color: #0000FF; text-decoration: underline;">
                <span>🌐</span> Our Website
              </div>
              <div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center; color: #0000FF; text-decoration: underline;">
                <span>📧</span> Email Us
              </div>
              <div style="padding: 5px 10px; font-size: 11px; cursor: pointer; display: flex; gap: 6px; align-items: center; color: #0000FF; text-decoration: underline;">
                <span>📞</span> Call Now
              </div>

              <!-- System Info Panel -->
              <div style="position: absolute; bottom: 60px; left: 0; width: 180px; padding: 8px; background: #D4D0C8; border-top: 1px solid #ACA899;">
                <div style="font-size: 10px; color: #444; margin-bottom: 4px;">System Details</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  📍 Kampala, Uganda<br>
                  🗓 Est. 2014<br>
                  👥 50+ Staff<br>
                  🌍 12 Countries
                </div>
              </div>
            </div>

            <!-- Right Content Area -->
            <div style="flex: 1; padding: 16px; overflow-x: auto;">

              <!-- WHO WE ARE Section -->
              <div class="win2k-groupbox" style="margin-bottom: 16px;">
                <span class="win2k-groupbox-label">📄 Who We Are</span>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                  <div>
                    <div style="position: relative; background: #C0C0C0; border: 2px inset #808080; overflow: hidden; height: 180px;">
                      <div style="position: absolute; inset: 0; background: #D4D0C8; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #888;">
                        <span style="font-size: 32px; margin-bottom: 4px;">🖼️</span>
                        <span>about-team.jpg</span>
                        <span style="font-size: 10px;">Loading image...</span>
                      </div>
                      <img src="/about-team.jpg" alt="Afrilia Agro team" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';" />
                      <!-- Image toolbar overlay -->
                      <div style="position: absolute; top: 0; left: 0; right: 0; background: linear-gradient(180deg, #3267C2 0%, #2052A8 100%); padding: 2px 4px; display: flex; align-items: center; gap: 4px;">
                        <span style="font-size: 9px; color: #FFF; font-weight: bold;">Preview: Team Photo</span>
                      </div>
                    </div>
                    <div class="win2k-status-bar" style="font-size: 10px; margin-top: 2px;">
                      <span>📁</span> about-team.jpg | 320×180 | JPEG
                    </div>
                  </div>
                  <div>
                    <div class="win2k-scrollable" style="height: 180px; font-size: 11px; line-height: 1.7;">
                      <strong>Afrilia Agro Uganda Limited</strong> is a premier agricultural export company based in Kampala, Uganda. We specialize in sourcing, processing, and exporting high-quality Ugandan agricultural produce to international markets across Europe, the Middle East, and beyond.<br><br>
                      Founded with a mission to bridge the gap between Ugandan farmers and global markets, we have grown into a trusted partner for businesses seeking reliable, certified, and premium agricultural commodities.<br><br>
                      Our commitment to quality, compliance, and sustainable practices sets us apart in the agricultural export industry. Every product we export undergoes rigorous quality checks and meets international standards for food safety and certification.
                    </div>
                    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                      <div style="background: #FFFFFF; border: 2px inset #808080; padding: 10px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: #000080;">500+</div>
                        <div style="font-size: 10px; color: #444; margin-top: 2px;">Businesses Served</div>
                      </div>
                      <div style="background: #FFFFFF; border: 2px inset #808080; padding: 10px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: #000080;">10+</div>
                        <div style="font-size: 10px; color: #444; margin-top: 2px;">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- WHY AFRILIA: Tab Control -->
              <div style="margin-bottom: 16px;">
                <div style="display: flex; gap: 0; align-items: flex-end;">
                  <div class="win2k-tab active">Why Afrilia Agro</div>
                  <div class="win2k-tab">Certifications</div>
                  <div class="win2k-tab">Partners</div>
                </div>
                <div class="win2k-tab-content">
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <!-- Left: Transport image -->
                    <div>
                      <div style="position: relative; background: #C0C0C0; border: 2px inset #808080; overflow: hidden; height: 160px; margin-bottom: 8px;">
                        <div style="position: absolute; inset: 0; background: #D4D0C8; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #888;">
                          <span style="font-size: 32px; margin-bottom: 4px;">🚛</span>
                          <span>hero-transport.jpg</span>
                        </div>
                        <img src="/hero-transport.jpg" alt="Global transport" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';" />
                        <div style="position: absolute; top: 4px; right: 4px;">
                          <div class="win2k-tooltip">✅ Export Certified</div>
                        </div>
                        <div style="position: absolute; bottom: 4px; left: 4px;">
                          <div class="win2k-tooltip">🚢 Global Shipping</div>
                        </div>
                      </div>
                    </div>
                    <!-- Right: Feature list -->
                    <div>
                      <div style="font-size: 11px; font-weight: bold; color: #000080; margin-bottom: 8px;">Premier Export Partner for Ugandan Agricultural Products</div>
                      <div class="win2k-inset" style="padding: 6px 8px; margin-bottom: 8px;">
                        <div class="win2k-listview-item">
                          <span style="flex-shrink:0;">📜</span>
                          <div><strong>Export Excellence &amp; Compliance</strong><br>Full compliance with international export regulations, phytosanitary certifications, and customs documentation.</div>
                        </div>
                        <div class="win2k-listview-item">
                          <span style="flex-shrink:0;">❄️</span>
                          <div><strong>Advanced Logistics &amp; Cold Chain</strong><br>State-of-the-art packaging, temperature-controlled storage, and efficient freight forwarding.</div>
                        </div>
                        <div class="win2k-listview-item">
                          <span style="flex-shrink:0;">👔</span>
                          <div><strong>Dedicated Account Management</strong><br>Personalized service with dedicated account managers and real-time shipment tracking.</div>
                        </div>
                      </div>
                      <a href="/contact" data-link class="win2k-btn-primary win2k-btn" style="text-decoration:none;">
                        📋 Request Export Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mission & Vision -->
              <div class="win2k-groupbox" style="margin-bottom: 16px;">
                <span class="win2k-groupbox-label">🎯 Mission &amp; Vision</span>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div class="win2k-inset">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                      <span style="font-size: 20px;">🎯</span>
                      <strong style="font-size: 12px; color: #000080;">Our Mission</strong>
                    </div>
                    <div class="win2k-scrollable" style="height: 80px; font-size: 11px;">
                      To connect Ugandan farmers with global markets by providing reliable, quality-driven agricultural export services. We are dedicated to ensuring every product meets the highest international standards while empowering local farming communities.
                    </div>
                  </div>
                  <div class="win2k-inset">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                      <span style="font-size: 20px;">👁️</span>
                      <strong style="font-size: 12px; color: #000080;">Our Vision</strong>
                    </div>
                    <div class="win2k-scrollable" style="height: 80px; font-size: 11px;">
                      To become East Africa&apos;s leading agricultural export company, recognized globally for premium quality produce, sustainable farming practices, and unwavering commitment to excellence in international trade.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Core Values as Windows Properties Dialog style -->
              <div class="win2k-groupbox" style="margin-bottom: 16px;">
                <span class="win2k-groupbox-label">🏆 Core Values — Properties</span>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                  <div style="background: #FFFFFF; border: 2px inset #808080; padding: 10px; text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 6px;">🥇</div>
                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 4px;">Quality First</div>
                    <div style="font-size: 10px; color: #666; line-height: 1.4;">Uncompromising commitment to the finest products</div>
                    <!-- mini progress bar as "quality meter" -->
                    <div class="win2k-progress-bar" style="margin-top: 8px; height: 10px;">
                      <div class="win2k-progress-fill" style="width: 96%;">
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                      </div>
                    </div>
                    <div style="font-size: 9px; color: #444; margin-top: 2px;">96%</div>
                  </div>
                  <div style="background: #FFFFFF; border: 2px inset #808080; padding: 10px; text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 6px;">🤝</div>
                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 4px;">Trust &amp; Integrity</div>
                    <div style="font-size: 10px; color: #666; line-height: 1.4;">Lasting relationships through transparency</div>
                    <div class="win2k-progress-bar" style="margin-top: 8px; height: 10px;">
                      <div class="win2k-progress-fill" style="width: 100%;">
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                      </div>
                    </div>
                    <div style="font-size: 9px; color: #444; margin-top: 2px;">100%</div>
                  </div>
                  <div style="background: #FFFFFF; border: 2px inset #808080; padding: 10px; text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 6px;">🌱</div>
                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 4px;">Sustainability</div>
                    <div style="font-size: 10px; color: #666; line-height: 1.4;">Environmentally responsible practices</div>
                    <div class="win2k-progress-bar" style="margin-top: 8px; height: 10px;">
                      <div class="win2k-progress-fill" style="width: 88%;">
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                      </div>
                    </div>
                    <div style="font-size: 9px; color: #444; margin-top: 2px;">88%</div>
                  </div>
                  <div style="background: #FFFFFF; border: 2px inset #808080; padding: 10px; text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 6px;">💡</div>
                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 4px;">Innovation</div>
                    <div style="font-size: 10px; color: #666; line-height: 1.4;">Continuously improving with modern solutions</div>
                    <div class="win2k-progress-bar" style="margin-top: 8px; height: 10px;">
                      <div class="win2k-progress-fill" style="width: 92%;">
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                        <div class="win2k-progress-block"></div>
                      </div>
                    </div>
                    <div style="font-size: 9px; color: #444; margin-top: 2px;">92%</div>
                  </div>
                </div>
              </div>

              <!-- Partners as a Table -->
              <div class="win2k-groupbox" style="margin-bottom: 16px;">
                <span class="win2k-groupbox-label">🤝 Strategic Partners</span>
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px; align-items: start;">
                  <!-- Partner Detail -->
                  <div class="win2k-inset">
                    <table class="win2k-table" style="margin-bottom: 10px;">
                      <thead>
                        <tr>
                          <th colspan="2" style="background: #000080; color: #FFF; padding: 4px 8px; font-size: 11px;">Partner Details — Triport Agro International Limited</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td style="font-weight:bold; width:120px;">Company Name</td><td>Triport Agro International Limited</td></tr>
                        <tr><td style="font-weight:bold;">Type</td><td>Strategic Partner</td></tr>
                        <tr><td style="font-weight:bold;">Phone</td><td><a href="tel:0780391916" style="color:#0000FF;">0780 391 916</a></td></tr>
                        <tr><td style="font-weight:bold;">Email</td><td><a href="mailto:triportagro@gmail.com" style="color:#0000FF;">triportagro@gmail.com</a></td></tr>
                        <tr><td style="font-weight:bold;">Description</td><td>A trusted partner in agricultural trade and international export solutions.</td></tr>
                      </tbody>
                    </table>
                    <div style="display: flex; gap: 8px; align-items: center;">
                      <div style="width: 48px; height: 48px; background: #D4D0C8; border: 2px inset #808080; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
                        <img src="/triport-logo.png" alt="Triport" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.style.display='none';" />
                        <span style="font-size: 20px;">🏢</span>
                      </div>
                      <div style="font-size: 10px; color: #666;">Triport Agro International<br>Verified Partner ✅</div>
                    </div>
                  </div>
                  <!-- Become a Partner: dialog box style -->
                  <div style="background: #ECE9D8; border: 2px outset #FFFFFF; padding: 0;">
                    <div style="background: linear-gradient(180deg, #3267C2, #2052A8); padding: 4px 8px; font-size: 11px; font-weight: bold; color: #FFF; display: flex; align-items: center; gap: 6px;">
                      <span>📋</span> New Partnership
                    </div>
                    <div style="padding: 14px;">
                      <div style="font-size: 11px; margin-bottom: 10px; color: #000;">Interested in collaborating? We welcome partnerships that advance quality agricultural trade.</div>
                      <div class="win2k-radio-area"><input type="radio" name="partner" checked /> Export Partnership</div>
                      <div class="win2k-radio-area"><input type="radio" name="partner" /> Distribution Agreement</div>
                      <div class="win2k-radio-area"><input type="radio" name="partner" /> Research &amp; Development</div>
                      <div class="win2k-divider"></div>
                      <div class="win2k-checkbox-area"><input type="checkbox" checked /> Subscribe to newsletter</div>
                      <div class="win2k-checkbox-area"><input type="checkbox" /> Request product catalog</div>
                      <div style="display: flex; gap: 6px; margin-top: 12px; justify-content: flex-end;">
                        <a href="/contact" data-link class="win2k-btn win2k-btn-primary" style="text-decoration:none; font-size: 11px;">OK</a>
                        <button class="win2k-btn" style="font-size: 11px;">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Status Bar inside content area -->
              <div class="win2k-status-bar">
                <span>📄</span>
                <span>5 objects</span>
                <span style="margin: 0 6px; color: #AAA;">|</span>
                <span>Page loaded successfully</span>
                <span style="margin: 0 6px; color: #AAA;">|</span>
                <span>🔒 Secure Connection</span>
                <span style="flex: 1;"></span>
                <span style="font-size: 10px; color: #888;">Afrilia Agro™ Co. Profile v2.0</span>
              </div>

            </div>
          </div>

          <!-- Window bottom status bar -->
          <div class="win2k-status-bar">
            <div style="flex: 1; overflow: hidden; white-space: nowrap;">
              <span class="win2k-marquee-inner" style="font-size: 10px;">
                🌿 Welcome to Afrilia Agro Uganda Limited — Premier Agricultural Exports &nbsp;|&nbsp; 📦 Products: Coffee, Fresh Fruits, Vegetables, Grains &nbsp;|&nbsp; 🌍 Exporting to Europe, Middle East &amp; Beyond &nbsp;|&nbsp; 📞 +256 788 655 973 &nbsp;|&nbsp; 🏆 10+ Years of Excellence &nbsp;|&nbsp; ✅ Quality Certified &nbsp;|&nbsp;
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Windows Taskbar ── -->
    <div style="background: linear-gradient(180deg, #D4D0C8 0%, #C2BFBA 100%); border-top: 2px solid #FFFFFF; padding: 4px 6px; display: flex; align-items: center; gap: 4px; position: sticky; bottom: 0; z-index: 10;">
      <!-- Start Button -->
      <div class="win2k-start-btn">
        <span style="font-size: 16px;">🪟</span>
        <span>Start</span>
      </div>
      <div style="width: 1px; height: 28px; background: #808080; margin: 0 2px;"></div>
      <!-- Quick Launch -->
      <button class="win2k-btn" style="width: 28px; height: 22px; padding: 0; font-size: 14px; display: flex; align-items: center; justify-content: center;">🌿</button>
      <button class="win2k-btn" style="width: 28px; height: 22px; padding: 0; font-size: 14px; display: flex; align-items: center; justify-content: center;">📦</button>
      <button class="win2k-btn" style="width: 28px; height: 22px; padding: 0; font-size: 14px; display: flex; align-items: center; justify-content: center;">🌍</button>
      <div style="width: 1px; height: 28px; background: #808080; margin: 0 2px;"></div>
      <!-- Open Windows -->
      <button class="win2k-taskbar-btn" style="font-size: 10px; display: flex; align-items: center; gap: 4px;">
        <span>🌿</span> About Afrilia Agro — C...
      </button>
      <!-- Spacer -->
      <div style="flex: 1;"></div>
      <!-- System Tray -->
      <div style="background: #D4D0C8; border: 1px inset #808080; padding: 2px 8px; display: flex; align-items: center; gap: 8px; font-size: 10px; color: #000;">
        <span>📶</span>
        <span>🔊</span>
        <span style="color: #444;">
          <script>
            document.write(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
          <\/script>
          12:00 PM
        </span>
      </div>
    </div>

  </div>
  `;
}
