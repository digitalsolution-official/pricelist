/* =========================================================
   Logika tampilan — biasanya TIDAK perlu diedit.
   Untuk ubah harga/produk, edit file data.js
   ========================================================= */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rupiah = n => n == null ? 'Tanya Admin' : 'Rp ' + n.toLocaleString('id-ID');
  const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const icon = (id, cls = '') => `<svg viewBox="0 0 24 24" class="${cls}"><use href="#i-${id}"/></svg>`;
  const waLink = text => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;

  const minPrice = app => {
    const ps = app.plans.flatMap(g => g.items.map(i => i.p)).filter(p => p != null);
    return ps.length ? Math.min(...ps) : null;
  };
  const planCount = app => app.plans.reduce((n, g) => n + g.items.length, 0);

  /* ---------- Logo aplikasi ---------- */
  const initials = name => name.replace(/[^A-Za-z0-9+ ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const logoSrc = app => app.logo || `assets/logos/${app.id}.svg`;
  const logoHTML = (app, lg = false) =>
    `<div class="logo${lg ? ' lg' : ''}" data-initials="${esc(initials(app.name))}">
       <img src="${esc(logoSrc(app))}" alt="Logo ${esc(app.name)}" loading="lazy" referrerpolicy="no-referrer">
     </div>`;
  // Jika logo gagal dimuat / terlalu kecil → tampilkan inisial
  const toFallback = img => {
    const box = img.parentElement;
    if (!box || box.classList.contains('fallback')) return;
    box.classList.add('fallback');
    box.textContent = box.dataset.initials;
  };
  document.addEventListener('error', e => { if (e.target.matches?.('.logo img')) toFallback(e.target); }, true);

  /* ---------- State ---------- */
  const state = { cat: 'all', q: '', sort: 'name' };

  /* ---------- Static bits ---------- */
  document.title = `${STORE.name} — ${STORE.tagline}`;
  $('#storeName').textContent = STORE.name;
  $('#storeTagline').textContent = STORE.tagline;
  $('#year').textContent = new Date().getFullYear();
  $('#waNumber').textContent = '+' + STORE.whatsapp.replace(/^(\d{2})(\d{3})(\d{4})(\d+)/, '$1 $2-$3-$4');
  document.querySelectorAll('[data-wa]').forEach(a => {
    a.href = waLink(`Halo admin ${STORE.name}, saya mau tanya-tanya dulu.`);
    a.target = '_blank'; a.rel = 'noopener';
  });

  const totalPlans = APPS.reduce((n, a) => n + planCount(a), 0);
  $('#heroStats').innerHTML = `
    <div><b>${APPS.length}+</b><span>Aplikasi</span></div>
    <div><b>${totalPlans}+</b><span>Pilihan paket</span></div>
    <div><b>${rupiah(Math.min(...APPS.map(minPrice).filter(p => p != null))).replace('Rp ', 'Rp')}</b><span>Mulai dari</span></div>`;

  /* ---------- Category cards + tabs ---------- */
  const countIn = id => APPS.filter(a => a.cat === id).length;
  function renderCats() {
    $('#catGrid').innerHTML = CATEGORIES.map(c => `
      <button class="cat${state.cat === c.id ? ' active' : ''}${c.soon ? ' soon' : ''}" data-cat="${c.id}">
        <span class="count">${c.soon ? 'Segera' : countIn(c.id) + ' app'}</span>
        <div class="cat-ic">${icon(c.icon)}</div>
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.desc)}</p>
      </button>`).join('');

    const tabs = [{ id: 'all', short: 'Semua', icon: 'all' }, ...CATEGORIES];
    $('#tabs').innerHTML = tabs.map(c => `
      <button class="tab${state.cat === c.id ? ' active' : ''}" data-cat="${c.id}" role="tab">
        ${icon(c.icon)} ${esc(c.short)}${c.id !== 'all' && !c.soon ? ` <span class="muted">${countIn(c.id)}</span>` : ''}
      </button>`).join('');
  }

  /* ---------- Search ---------- */
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const haystack = app => norm([
    app.name, app.tagline, app.desc, catById[app.cat]?.name,
    ...app.features, ...app.notes,
    ...app.plans.flatMap(g => [g.group, g.info, ...g.items.map(i => `${i.d} ${i.f || ''}`)])
  ].join(' '));
  const index = new Map(APPS.map(a => [a.id, haystack(a)]));
  const matches = (app, q) => {
    const words = norm(q).split(/\s+/).filter(Boolean);
    const h = index.get(app.id);
    return words.every(w => h.includes(w));
  };
  const nameScore = (app, q) => norm(app.name).includes(norm(q)) ? 0 : 1;
  const hl = text => {
    if (!state.q.trim()) return esc(text);
    const words = state.q.trim().split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return esc(text).replace(new RegExp(`(${words.join('|')})`, 'gi'), '<mark>$1</mark>');
  };

  /* ---------- Product list ---------- */
  const sorters = {
    name: (a, b) => a.name.localeCompare(b.name),
    cheap: (a, b) => (minPrice(a) ?? 1e12) - (minPrice(b) ?? 1e12),
    popular: (a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0) || a.name.localeCompare(b.name),
  };

  const cardHTML = app => `
    <article class="card" tabindex="0" data-app="${app.id}" aria-label="Lihat detail ${esc(app.name)}">
      ${app.badge ? `<span class="badge">${esc(app.badge)}</span>` : ''}
      <div class="card-top">
        ${logoHTML(app)}
        <div><h4>${hl(app.name)}</h4><p class="tag">${hl(app.tagline)}</p></div>
      </div>
      <div class="card-foot">
        <div class="from"><small>Mulai dari</small><b>${rupiah(minPrice(app))}</b></div>
        <span class="plans-n">${planCount(app)} paket</span>
      </div>
    </article>`;

  const soonHTML = c => `
    <div class="empty">
      <div class="cat-ic">${icon(c.icon)}</div>
      <h3>${esc(c.name)} — segera hadir</h3>
      <p>Produk untuk kategori ini sedang disiapkan. Butuh sesuatu? Tanya admin, siapa tahu sudah tersedia.</p>
      <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(`Halo admin ${STORE.name}, apakah sudah ada produk kategori ${c.name}?`)}">${icon('wa', 'ic')} Tanya Admin</a>
    </div>`;

  function renderList() {
    const q = state.q.trim();
    let apps = APPS.filter(a => (state.cat === 'all' || a.cat === state.cat) && (!q || matches(a, q)));
    apps.sort(q ? (a, b) => nameScore(a, q) - nameScore(b, q) || sorters[state.sort](a, b) : sorters[state.sort]);

    const cat = catById[state.cat];
    $('#listTitle').textContent = q ? `Hasil pencarian “${q}”` : (cat ? cat.name : 'Semua Aplikasi');
    $('#listSub').textContent = q
      ? `${apps.length} aplikasi ditemukan${cat ? ' di ' + cat.name : ''}`
      : cat ? cat.desc : `${APPS.length} aplikasi premium dalam ${CATEGORIES.length} kategori`;

    const list = $('#list');
    if (cat?.soon && !apps.length && !q) { list.innerHTML = soonHTML(cat); return; }
    if (!apps.length) {
      list.innerHTML = `<div class="empty"><div class="cat-ic">${icon('search')}</div>
        <h3>Aplikasi tidak ditemukan</h3>
        <p>Coba kata kunci lain, atau tanyakan langsung ke admin.</p>
        <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(`Halo admin ${STORE.name}, apakah ada ${q}?`)}">${icon('wa', 'ic')} Tanya “${esc(q)}”</a></div>`;
      return;
    }

    // Mode "Semua" tanpa pencarian → dikelompokkan per kategori
    if (state.cat === 'all' && !q) {
      list.innerHTML = CATEGORIES.map(c => {
        const items = apps.filter(a => a.cat === c.id);
        return `<div class="group">
          <div class="group-head">
            <div class="cat-ic">${icon(c.icon)}</div>
            <div><h3>${esc(c.name)}</h3><span>${c.soon ? 'Segera hadir' : items.length + ' aplikasi'}</span></div>
            ${items.length ? `<button class="see" data-cat="${c.id}">Lihat kategori ${icon('arrow', 'ic')}</button>` : ''}
          </div>
          ${items.length ? `<div class="grid">${items.map(cardHTML).join('')}</div>` : soonHTML(c)}
        </div>`;
      }).join('');
    } else {
      list.innerHTML = `<div class="grid">${apps.map(cardHTML).join('')}</div>`;
    }
  }

  const render = () => { renderCats(); renderList(); };

  /* ---------- Modal ---------- */
  const modal = $('#modal');
  let lastFocus = null;

  function openModal(id, push = true) {
    const app = APPS.find(a => a.id === id);
    if (!app) return;
    const c = catById[app.cat];
    const orderText = (g, i) =>
      `${STORE.waGreeting}\n\n• Produk : ${app.name}\n• Paket  : ${g.group}\n• Durasi : ${i.d}${i.f ? ' (' + i.f + ')' : ''}\n• Harga  : ${rupiah(i.p)}\n\nTerima kasih!`;

    $('#modalBody').innerHTML = `
      <div class="m-head">
        ${logoHTML(app, true)}
        <div>
          <span class="chip">${icon(c.icon)} ${esc(c.name)}</span>
          <h2 id="mTitle">${esc(app.name)}</h2>
          <p>${esc(app.tagline)}</p>
        </div>
      </div>
      <div class="m-body">
        <div class="m-sec"><h5>Tentang aplikasi</h5><p class="m-desc">${esc(app.desc)}</p></div>

        ${app.features.length ? `<div class="m-sec"><h5>Fitur premium</h5>
          <ul class="feat">${app.features.map(f => `<li>${icon('check')}<span>${esc(f)}</span></li>`).join('')}</ul></div>` : ''}

        <div class="m-sec"><h5>Pilihan paket & harga</h5>
          ${app.plans.map(g => `
            <div class="plan">
              <div class="plan-h"><b>${esc(g.group)}</b>${g.info ? `<p>${esc(g.info)}</p>` : ''}</div>
              ${g.items.map(i => `
                <div class="row">
                  <div class="dur">${esc(i.d)}${i.f ? `<small>${esc(i.f)}</small>` : ''}</div>
                  <div class="price${i.p == null ? ' ask' : ''}">${rupiah(i.p)}</div>
                  <a class="btn btn-primary" target="_blank" rel="noopener" href="${waLink(orderText(g, i))}">Order</a>
                </div>`).join('')}
            </div>`).join('')}
        </div>

        ${app.notes.length ? `<div class="m-sec"><h5>Catatan & ketentuan</h5>
          <div class="notes"><ul>${app.notes.map(n => `<li>${icon('info')}<span>${esc(n)}</span></li>`).join('')}</ul></div></div>` : ''}

        <div class="m-cta">
          <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(`Halo admin ${STORE.name}, saya mau tanya soal ${app.name}.`)}">${icon('wa', 'ic')} Tanya admin soal ${esc(app.name)}</a>
        </div>
      </div>`;

    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lock');
    $('.modal-card').scrollTop = 0;
    $('.modal-close').focus();
    if (push) history.replaceState(null, '', '#app=' + app.id);
  }

  function closeModal() {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lock');
    history.replaceState(null, '', location.pathname + location.search);
    lastFocus?.focus?.();
  }

  /* ---------- Events ---------- */
  const setCat = (id, scroll = true) => {
    state.cat = state.cat === id && id !== 'all' ? 'all' : id;
    render();
    if (scroll) $('.products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.addEventListener('click', e => {
    const catBtn = e.target.closest('[data-cat]');
    if (catBtn) { setCat(catBtn.dataset.cat, !catBtn.classList.contains('tab')); return; }
    const card = e.target.closest('[data-app]');
    if (card) { openModal(card.dataset.app); return; }
    if (e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('[data-home]')) { e.preventDefault(); state.cat = 'all'; state.q = ''; $('#search').value = ''; render(); scrollTo({ top: 0, behavior: 'smooth' }); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.card')) { e.preventDefault(); openModal(e.target.dataset.app); }
    if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); $('#search').focus(); }
  });

  let t;
  $('#search').addEventListener('input', e => {
    clearTimeout(t);
    t = setTimeout(() => {
      state.q = e.target.value;
      if (state.q.trim()) state.cat = 'all';   // pencarian selalu di semua kategori
      render();
    }, 120);
  });
  $('#search').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('.products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; renderList(); });

  addEventListener('scroll', () => $('#nav').classList.toggle('scrolled', scrollY > 8), { passive: true });

  /* ---------- Init ---------- */
  render();
  const m = location.hash.match(/^#app=([\w-]+)/);
  if (m) openModal(m[1], false);
})();
