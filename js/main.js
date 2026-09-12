/**
 * L'AURUM ATELIER — MAIN APPLICATION LOGIC
 * Authentic Luxury Astrology & Intention Bracelet Catalogue
 * 
 * Features 22 genuine client intention bracelets, studio photography,
 * mineral stone diagrams, interactive intention filters, and concierge enquiries.
 */

(function () {
  'use strict';

  const BRAND_CONFIG = window.BRAND_CONFIG || {};
  const INTENTION_PILLARS = window.INTENTION_PILLARS || [];
  const BRACELET_CATEGORIES = window.BRACELET_CATEGORIES || [];
  const BRACELET_DATA = window.BRACELET_DATA || [];

// Clear any previous custom test items from localStorage so official dataset renders cleanly
try {
  localStorage.removeItem('laurum_custom_bracelets');
  localStorage.clear();
} catch (e) {
  // Safe fallback
}

console.log(`✦ L'AURUM ATELIER: Loaded ${BRACELET_DATA.length} intention bracelets into catalogue.`);

document.addEventListener('DOMContentLoaded', () => {
  initBrandDetails();
  initIntentionCards();
  initCategoryFilters();
  renderBraceletGrid('all');
  populateEnquirySelect();
  initModal();
  initNavbar();
  initMobileDrawer();
  initEnquiryForm();
  initFooterLinks();
});

/**
 * Initialize brand details & copyright
 */
function initBrandDetails() {
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = BRAND_CONFIG.year;
  }
}

/**
 * Render Intention Concept Cards with Editorial Hierarchy & Imagery
 */
function initIntentionCards() {
  const grid = document.getElementById('intentionsGrid');
  if (!grid) return;

  grid.innerHTML = INTENTION_PILLARS.map(pillar => `
    <article 
      class="intention-card" 
      data-target-category="${pillar.id}" 
      tabindex="0"
      role="button"
      aria-label="Explore ${pillar.title} bracelets for ${pillar.subtitle}"
    >
      <div class="intention-card-header">
        <span class="intention-card-eyebrow">✦ ${pillar.eyebrow}</span>
        <div class="intention-card-thumb">
          <img src="${pillar.image}" alt="${pillar.title} Intention Preview" loading="lazy" width="44" height="44">
        </div>
      </div>

      <h3 class="intention-card-title">${pillar.title}</h3>
      <span class="intention-card-sub">${pillar.subtitle}</span>
      <p class="intention-card-desc">${pillar.description}</p>
      
      <div class="intention-stone-preview">
        ${pillar.stonePreview}
      </div>

      <span class="intention-card-action">
        Explore Intentions 
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </span>
    </article>
  `).join('');

  grid.querySelectorAll('.intention-card').forEach(card => {
    const clickHandler = () => {
      const targetCategory = card.getAttribute('data-target-category');
      activateCategory(targetCategory);
      const collectionSection = document.getElementById('collection');
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    card.addEventListener('click', clickHandler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
  });
}

/**
 * Category Filter Tabs (Data-Driven from BRACELET_CATEGORIES)
 */
function initCategoryFilters() {
  const container = document.getElementById('filterTabsContainer');
  if (!container) return;

  container.innerHTML = BRACELET_CATEGORIES.map((cat, index) => `
    <button 
      class="filter-tab ${index === 0 ? 'active' : ''}" 
      data-category="${cat.id}"
      role="tab"
      aria-selected="${index === 0 ? 'true' : 'false'}"
      id="tab-${cat.id}"
    >
      ${cat.label}
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    const categoryId = tab.getAttribute('data-category');
    activateCategory(categoryId);
  });
}

function activateCategory(categoryId) {
  const container = document.getElementById('filterTabsContainer');
  if (!container) return;

  container.querySelectorAll('.filter-tab').forEach(btn => {
    const isTarget = btn.getAttribute('data-category') === categoryId;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  renderBraceletGrid(categoryId);
}

/**
 * Render Purpose-First Product Cards with Real Photography
 */
function renderBraceletGrid(selectedCategory = 'all') {
  const grid = document.getElementById('braceletGrid');
  if (!grid) return;

  const filteredItems = selectedCategory === 'all'
    ? BRACELET_DATA
    : BRACELET_DATA.filter(item => item.category === selectedCategory);

  if (filteredItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p>No bracelets currently catalogued under this intention.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredItems.map(item => `
    <article 
      class="bracelet-card" 
      data-id="${item.id}" 
      tabindex="0"
      role="button"
      aria-label="View details for ${escapeHTML(item.name)} (${escapeHTML(item.code)})"
    >
      <div class="card-media">
        <span class="card-badge">${escapeHTML(item.categoryLabel)}</span>
        <span class="card-code-pill">✦ ${escapeHTML(item.code)} ✦</span>
        <img 
          src="${escapeHTML(item.image)}" 
          alt="${escapeHTML(item.imageAlt || item.name)}" 
          loading="lazy" 
          width="800" 
          height="800"
          onerror="this.onerror=null; this.src='assets/images/products/dhanyog-studio.jpg';"
        >
      </div>
      
      <div class="card-body">
        <span class="card-category">${escapeHTML(item.categoryLabel)}</span>
        <h3 class="card-title">${escapeHTML(item.name)}</h3>
        <p class="card-positioning-quote">"${escapeHTML(item.positioning)}"</p>
        <p class="card-desc">${escapeHTML(item.shortDescription)}</p>

        <div class="card-stones-container">
          ${item.stones.map(s => `
            <span class="stone-pill" title="${escapeHTML(s.description)}">${escapeHTML(s.name)}</span>
          `).join('')}
        </div>

        <div class="card-footer">
          <span class="card-btn">
            View Details ✦
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span class="card-view-label">Examine Mineral Composition</span>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.bracelet-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openModal(id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.getAttribute('data-id');
        openModal(id);
      }
    });
  });
}

/**
 * Populate piece selector in enquiry form with all 22 bracelets
 */
function populateEnquirySelect() {
  const select = document.getElementById('pieceSelect');
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = '<option value="General Collection Enquiry">General Intention Enquiry</option>';

  BRACELET_DATA.forEach(item => {
    const opt = document.createElement('option');
    opt.value = `${item.name} (${item.code})`;
    opt.textContent = `${item.name} — ${item.code} (${item.categoryLabel})`;
    select.appendChild(opt);
  });

  if (currentVal && Array.from(select.options).some(o => o.value === currentVal)) {
    select.value = currentVal;
  }
}

/**
 * Modal state and lookbook controls
 */
let currentOpenPiece = null;

function initModal() {
  const modal = document.getElementById('braceletModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalEnquireBtn = document.getElementById('modalEnquireBtn');
  if (!modal) return;

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  modalEnquireBtn?.addEventListener('click', () => {
    if (!currentOpenPiece) return;
    const pieceSelectValue = `${currentOpenPiece.name} (${currentOpenPiece.code})`;
    closeModal();

    const select = document.getElementById('pieceSelect');
    if (select) {
      select.value = pieceSelectValue;
    }

    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('clientName')?.focus();
      }, 600);
    }
  });
}

function openModal(id) {
  const piece = BRACELET_DATA.find(item => item.id === id);
  if (!piece) return;

  currentOpenPiece = piece;

  const modal = document.getElementById('braceletModal');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalCode = document.getElementById('modalCode');
  const modalTitle = document.getElementById('modalTitle');
  const modalPositioning = document.getElementById('modalPositioning');
  const modalDescription = document.getElementById('modalDescription');
  const modalStonesGrid = document.getElementById('modalStonesGrid');
  const modalAttributesList = document.getElementById('modalAttributesList');
  const modalDisclaimer = document.getElementById('modalDisclaimer');
  const modalViewToggle = document.getElementById('modalViewToggle');

  if (modalImage) {
    modalImage.src = piece.image;
    modalImage.alt = piece.imageAlt;
  }
  if (modalCategory) modalCategory.textContent = piece.categoryLabel;
  if (modalCode) modalCode.textContent = `✦ ${piece.code} ✦`;
  if (modalTitle) modalTitle.textContent = piece.name;
  if (modalPositioning) modalPositioning.textContent = `"${piece.positioning}"`;
  if (modalDescription) modalDescription.textContent = piece.fullDescription;

  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  if (modalWhatsAppBtn) {
    const waMsg = `Hello SATTVA, I am interested in learning more about the ${piece.name} (${piece.code}) intention bracelet.`;
    modalWhatsAppBtn.href = `https://api.whatsapp.com/send?phone=917666368056&text=${encodeURIComponent(waMsg)}`;
  }

  // View toggle for pieces with full posters
  if (modalViewToggle) {
    if (piece.posterImage) {
      modalViewToggle.style.display = 'flex';
      modalViewToggle.innerHTML = `
        <button type="button" class="modal-toggle-btn active" id="btnShowPhoto">Product View</button>
        <button type="button" class="modal-toggle-btn" id="btnShowPoster">Stone Diagram</button>
      `;

      const btnPhoto = document.getElementById('btnShowPhoto');
      const btnPoster = document.getElementById('btnShowPoster');

      btnPhoto?.addEventListener('click', () => {
        btnPhoto.classList.add('active');
        btnPoster?.classList.remove('active');
        if (modalImage) modalImage.src = piece.image;
      });

      btnPoster?.addEventListener('click', () => {
        btnPoster.classList.add('active');
        btnPhoto?.classList.remove('active');
        if (modalImage) modalImage.src = piece.posterImage;
      });
    } else {
      modalViewToggle.style.display = 'none';
      modalViewToggle.innerHTML = '';
    }
  }

  // Render Stones Breakdown
  if (modalStonesGrid) {
    modalStonesGrid.innerHTML = piece.stones.map(s => `
      <div class="stone-row">
        <span class="stone-row-name">${escapeHTML(s.name)}</span>
        <span class="stone-row-desc">${escapeHTML(s.description)}</span>
      </div>
    `).join('');
  }

  // Render Attributes List
  if (modalAttributesList) {
    modalAttributesList.innerHTML = piece.attributes.map(attr => `
      <span class="modal-attribute-tag">✦ ${escapeHTML(attr)}</span>
    `).join('');
  }

  // Handle subtle disclaimer
  if (modalDisclaimer) {
    if (piece.disclaimer) {
      modalDisclaimer.style.display = 'block';
      modalDisclaimer.textContent = piece.disclaimer;
    } else {
      modalDisclaimer.style.display = 'none';
      modalDisclaimer.textContent = '';
    }
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    document.getElementById('modalCloseBtn')?.focus();
  }, 100);
}

function closeModal() {
  const modal = document.getElementById('braceletModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * Navbar scroll behavior & active link spy
 */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }, { passive: true });
}

/**
 * Mobile navigation drawer
 */
function initMobileDrawer() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const links = document.querySelectorAll('.mobile-link');

  if (!hamburger || !drawer || !overlay) return;

  function toggleDrawer() {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('active');
      overlay.classList.add('active');
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  hamburger.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', toggleDrawer);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer.classList.contains('active')) {
        toggleDrawer();
      }
    });
  });
}

/**
 * Footer Intention Quick Links
 */
function initFooterLinks() {
  document.querySelectorAll('.footer-links [data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      activateCategory(filter);
      const collectionSection = document.getElementById('collection');
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Workable Concierge enquiry form submission (WhatsApp instant dispatch, Gmail Web, and AJAX routing)
 */
function initEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  const statusMsg = document.getElementById('formStatusMsg');
  const whatsappBtn = document.getElementById('submitWhatsAppBtn');
  if (!form || !statusMsg) return;

  function getFormData() {
    const nameInput = document.getElementById('clientName');
    const emailInput = document.getElementById('clientEmail');
    const phoneInput = document.getElementById('clientPhone');
    const pieceSelect = document.getElementById('pieceSelect');
    const messageInput = document.getElementById('clientMessage');

    return {
      name: nameInput?.value.trim() || '',
      email: emailInput?.value.trim() || '',
      phone: phoneInput?.value.trim() || '',
      piece: pieceSelect?.value || 'General Collection Enquiry',
      message: messageInput?.value.trim() || ''
    };
  }

  function validate(requireEmail = true) {
    const data = getFormData();
    if (!data.name) {
      showError('Please provide your name to proceed with your enquiry.');
      document.getElementById('clientName')?.focus();
      return null;
    }
    if (requireEmail && !data.email) {
      showError('Please provide your email address so our concierge can reach you.');
      document.getElementById('clientEmail')?.focus();
      return null;
    }
    if (!data.email && !data.phone) {
      showError('Please provide either your phone number or email address.');
      return null;
    }
    return data;
  }

  function showError(msg) {
    statusMsg.className = 'form-status-msg';
    statusMsg.style.display = 'block';
    statusMsg.style.background = 'rgba(229, 62, 62, 0.15)';
    statusMsg.style.borderColor = 'rgba(229, 62, 62, 0.4)';
    statusMsg.style.color = '#feb2b2';
    statusMsg.textContent = msg;
  }

  function buildWhatsAppMessage(data) {
    return [
      `*✦ SATTVA ATELIER CONCIERGE ENQUIRY ✦*`,
      ``,
      `• *Client Name:* ${data.name}`,
      data.phone ? `• *Phone / WhatsApp:* ${data.phone}` : null,
      data.email ? `• *Email:* ${data.email}` : null,
      `• *Piece of Interest:* ${data.piece}`,
      ``,
      `• *Notes / Sizing:* ${data.message || 'Kindly share availability, stone alignment, and consultation details.'}`
    ].filter(Boolean).join('\n');
  }

  function buildEmailBody(data) {
    return [
      `Dear SATTVA Concierge,`,
      ``,
      `I am inquiring about the following intention bracelet piece:`,
      `Piece: ${data.piece}`,
      ``,
      `Client Information:`,
      `Name: ${data.name}`,
      `Email: ${data.email || 'Not provided'}`,
      data.phone ? `Phone: ${data.phone}` : null,
      ``,
      `Message & Sizing Consultation Notes:`,
      data.message || `Please provide availability, stone consultation, and ordering details.`
    ].filter(Boolean).join('\n');
  }

  // Direct WhatsApp Submission
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = validate(false);
      if (!data) return;

      const lines = buildWhatsAppMessage(data);
      const encodedMsg = encodeURIComponent(lines);
      const waUniversalUrl = `https://api.whatsapp.com/send?phone=917666368056&text=${encodedMsg}`;
      const waShortUrl = `https://wa.me/917666368056?text=${encodedMsg}`;

      // Copy text to clipboard as seamless backup
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lines).catch(() => {});
      }

      statusMsg.className = 'form-status-msg success';
      statusMsg.style.display = 'block';
      statusMsg.style.background = 'rgba(37, 211, 102, 0.12)';
      statusMsg.style.borderColor = 'rgba(37, 211, 102, 0.4)';
      statusMsg.style.color = '#d6f8e2';
      statusMsg.innerHTML = `
        <div style="line-height: 1.6;">
          <strong style="color: #25d366; font-size: 0.95rem;">✦ Connecting to SATTVA WhatsApp Concierge...</strong><br>
          <span style="font-size: 0.85rem; color: #d6f8e2;">Opening WhatsApp with your enquiry for <em>${escapeHTML(data.piece)}</em>.</span>
          <div style="display: flex; flex-direction: column; gap: 0.55rem; margin-top: 0.85rem;">
            <a href="${waUniversalUrl}" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
              Tap Here to Open WhatsApp (+91 76663 68056)
            </a>
            <a href="${waShortUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%; justify-content: center; font-size: 0.72rem;">
              Alternative WhatsApp Link
            </a>
          </div>
        </div>
      `;

      // Direct navigation immediately launches WhatsApp app on mobile without popup blockers
      setTimeout(() => {
        window.location.href = waUniversalUrl;
      }, 250);
    });
  }

  // Email Submission (Form submit)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = validate(true);
    if (!data) return;

    const subject = `SATTVA Intention Bracelet Enquiry — ${data.piece}`;
    const body = buildEmailBody(data);
    const mailtoUrl = `mailto:valo96k@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=valo96k@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const waUrl = `https://api.whatsapp.com/send?phone=917666368056&text=${encodeURIComponent(buildWhatsAppMessage(data))}`;

    // 1. Send silent background delivery via FormSubmit AJAX to ensure valo96k@gmail.com receives the submission
    try {
      fetch('https://formsubmit.co/ajax/valo96k@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          clientName: data.name,
          clientEmail: data.email,
          clientPhone: data.phone || 'Not provided',
          braceletOfInterest: data.piece,
          clientMessage: data.message || 'Consultation request',
          _subject: `SATTVA Intention Enquiry: ${data.piece} from ${data.name}`
        })
      }).catch(() => {});
    } catch (err) {}

    // 2. Copy details to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(body).catch(() => {});
    }

    // 3. Display multi-option dispatch box
    statusMsg.className = 'form-status-msg success';
    statusMsg.style.display = 'block';
    statusMsg.style.background = 'rgba(201, 169, 110, 0.12)';
    statusMsg.style.borderColor = 'rgba(201, 169, 110, 0.4)';
    statusMsg.style.color = '#fdfbf7';
    statusMsg.innerHTML = `
      <div style="line-height: 1.6;">
        <strong style="color: var(--gold-light); font-size: 0.95rem;">✦ Enquiry Prepared for SATTVA Concierge</strong><br>
        <span style="font-size: 0.84rem; color: var(--text-secondary);">
          Piece: <em>${escapeHTML(data.piece)}</em> · Choose how you would like to send your enquiry:
        </span>
        <div style="display: flex; flex-direction: column; gap: 0.55rem; margin-top: 0.85rem;">
          <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.76rem;">
            ✉️ Open Directly in Gmail (Web Browser)
          </a>
          <a href="${mailtoUrl}" class="btn btn-outline" style="width: 100%; justify-content: center; font-size: 0.76rem;">
            📬 Open in Default Mail App (Apple Mail / Outlook)
          </a>
          <a href="${waUrl}" class="btn btn-whatsapp" style="width: 100%; justify-content: center; font-size: 0.76rem;">
            💬 Or Send via WhatsApp (+91 76663 68056)
          </a>
        </div>
      </div>
    `;

    // Attempt mailto launch
    setTimeout(() => {
      try {
        window.location.href = mailtoUrl;
      } catch (err) {}
    }, 400);
  });
}

  function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();

