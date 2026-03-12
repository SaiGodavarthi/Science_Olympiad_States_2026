// ——— DATA ———
const brownData = [
  { event: "Anatomy & Physiology", cumb: 5,  barr: 23, whl: 18, max: 23 },
  { event: "Astronomy",            cumb: 5,  barr: 14, whl: 18, max: 18 },
  { event: "Boomilever",           cumb: 3,  barr: 7,  whl: 33, max: 33 },
  { event: "Bungee Drop",          cumb: 38, barr: 1,  whl: 31, max: 38 },
  { event: "Chemistry Lab",        cumb: 17, barr: 25, whl: 15, max: 25 },
  { event: "Circuit Lab",          cumb: 23, barr: 39, whl: 9,  max: 39 },
  { event: "Codebusters",          cumb: 25, barr: 13, whl: 15, max: 25 },
  { event: "Designer Genes",       cumb: 2,  barr: 14, whl: 33, max: 33 },
  { event: "Disease Detectives",   cumb: 1,  barr: 22, whl: 30, max: 30 },
  { event: "Dynamic Planet",       cumb: 7,  barr: 4,  whl: 14, max: 14 },
  { event: "Electric Vehicle",     cumb: 5,  barr: 2,  whl: 19, max: 19 },
  { event: "Engineering CAD",      cumb: 20, barr: 9,  whl: 4,  max: 20 },
  { event: "Entomology",           cumb: 38, barr: 24, whl: 12, max: 38 },
  { event: "Experimental Design",  cumb: 18, barr: 6,  whl: 17, max: 18 },
  { event: "Forensics",            cumb: 20, barr: 10, whl: 16, max: 20 },
  { event: "Helicopter",           cumb: 19, barr: 2,  whl: 58, max: 58 },
  { event: "Hovercraft",           cumb: 20, barr: 4,  whl: 19, max: 20 },
  { event: "Machines",             cumb: 38, barr: 4,  whl: 14, max: 38 },
  { event: "Materials Science",    cumb: 58, barr: 19, whl: 22, max: 58 },
  { event: "Remote Sensing",       cumb: 28, barr: 18, whl: 8,  max: 28 },
  { event: "Robot Tour",           cumb: 19, barr: 9,  whl: 16, max: 19 },
  { event: "Rocks & Minerals",     cumb: 19, barr: 10, whl: 16, max: 19 },
  { event: "Water Quality",        cumb: 23, barr: 17, whl: 12, max: 23 },
];

const rankData = [
  { event: "Anatomy & Physiology", cur: [1,3,2], opt: [1,3,2] },
  { event: "Astronomy",            cur: [1,2,3], opt: [1,2,3] },
  { event: "Boomilever",           cur: [1,2,3], opt: [1,2,3] },
  { event: "Bungee Drop",          cur: [3,1,2], opt: [2,1,3] },
  { event: "Chemistry Lab",        cur: [2,3,1], opt: [1,3,2] },
  { event: "Circuit Lab",          cur: [2,3,1], opt: [2,3,1] },
  { event: "Codebusters",          cur: [3,1,2], opt: [1,2,3] },
  { event: "Designer Genes",       cur: [1,2,3], opt: [1,2,3] },
  { event: "Disease Detectives",   cur: [1,2,3], opt: [1,2,3] },
  { event: "Dynamic Planet",       cur: [2,1,3], opt: [1,2,3] },
  { event: "Electric Vehicle",     cur: [2,1,3], opt: [1,2,3] },
  { event: "Engineering CAD",      cur: [3,2,1], opt: [2,3,1] },
  { event: "Entomology",           cur: [3,2,1], opt: [1,2,3] },
  { event: "Experimental Design",  cur: [3,1,2], opt: [2,1,3] },
  { event: "Forensics",            cur: [3,1,2], opt: [1,2,3] },
  { event: "Helicopter",           cur: [2,1,3], opt: [2,1,3] },
  { event: "Hovercraft",           cur: [3,1,2], opt: [2,1,3] },
  { event: "Machines",             cur: [3,1,2], opt: [2,1,3] },
  { event: "Materials Science",    cur: [3,1,2], opt: [2,1,3] },
  { event: "Remote Sensing",       cur: [3,2,1], opt: [1,3,2] },
  { event: "Robot Tour",           cur: [3,1,2], opt: [1,2,3] },
  { event: "Rocks & Minerals",     cur: [3,1,2], opt: [1,2,3] },
  { event: "Water Quality",        cur: [3,2,1], opt: [1,3,2] },
];

const roiData = [
  { event: "Chemistry Lab",       members: "Saha, Brayden",               roi: "high",   cur: 2, opt: 1, brown: 17 },
  { event: "Codebusters",         members: "Brayden, Gayathri, Sharvesh", roi: "high",   cur: 3, opt: 1, brown: 25 },
  { event: "Entomology",          members: "Rikin, Anu",                  roi: "high",   cur: 3, opt: 1, brown: 38 },
  { event: "Forensics",           members: "Saha, Neha",                  roi: "high",   cur: 3, opt: 1, brown: 20 },
  { event: "Remote Sensing",      members: "Niru, Sudeepa",               roi: "high",   cur: 3, opt: 1, brown: 28 },
  { event: "Robot Tour",          members: "Sai",                         roi: "high",   cur: 3, opt: 1, brown: 19 },
  { event: "Rocks & Minerals",    members: "Gayathri, Neha",              roi: "high",   cur: 3, opt: 1, brown: 19 },
  { event: "Water Quality",       members: "Sathwika, Aahan",             roi: "high",   cur: 3, opt: 1, brown: 23 },
  { event: "Dynamic Planet",      members: "Himaghna, Saanvi",            roi: "med",    cur: 2, opt: 1, brown: 7  },
  { event: "Electric Vehicle",    members: "Sai, Anu",                    roi: "med",    cur: 2, opt: 1, brown: 5  },
  { event: "Hovercraft",          members: "Rikin, Brayden",              roi: "med",    cur: 3, opt: 2, brown: 20 },
  { event: "Machines",            members: "Shiven, Sharvesh",            roi: "med",    cur: 3, opt: 2, brown: 38 },
  { event: "Experimental Design", members: "Sai, Sudeepa, Shiven",        roi: "med",    cur: 3, opt: 2, brown: 18 },
  { event: "Anatomy & Physiology",members: "Saha, Niru",                  roi: "defend", cur: 1, opt: 1, brown: 5  },
  { event: "Astronomy",           members: "Brayden, Saanvi",             roi: "defend", cur: 1, opt: 1, brown: 5  },
  { event: "Boomilever",          members: "Himaghna, Shiven",            roi: "defend", cur: 1, opt: 1, brown: 3  },
  { event: "Designer Genes",      members: "Sudeepa & Niru",              roi: "defend", cur: 1, opt: 1, brown: 2  },
  { event: "Disease Detectives",  members: "Himaghna, Shiven",            roi: "defend", cur: 1, opt: 1, brown: 1  },
  { event: "Circuit Lab",         members: "Sharvesh, Himaghna",          roi: "tough",  cur: 2, opt: 2, brown: 23 },
  { event: "Engineering CAD",     members: "Sai, Gayathri",               roi: "tough",  cur: 3, opt: 2, brown: 20 },
  { event: "Helicopter",          members: "Rikin, Aahan",                roi: "tough",  cur: 2, opt: 2, brown: 19 },
  { event: "Bungee Drop",         members: "Sai, Anu",                    roi: "tough",  cur: 3, opt: 2, brown: 38 },
  { event: "Materials Science",   members: "—",                           roi: "tough",  cur: 3, opt: 2, brown: 58 },
];

// ——— RENDER BAR CHART ———
function renderBrownChart() {
  const container = document.getElementById('brownchart');
  brownData.forEach(d => {
    const total = d.max || 60;
    const row = document.createElement('div');
    row.className = 'bar-row';
    const shortEvent = d.event.length > 22 ? d.event.substring(0,20)+'…' : d.event;
    row.innerHTML = `
      <div class="bar-event" title="${d.event}">${shortEvent}</div>
      <div class="bar-track">
        <div class="bar-seg cumb tooltip-trigger" style="width:0%" data-val="${d.cumb}" data-pct="${(d.cumb/total*100).toFixed(0)}">
          ${d.cumb <= 8 ? d.cumb : ''}
          <span class="tooltip">Cumberland: ${d.cumb}</span>
        </div>
        <div class="bar-seg barr tooltip-trigger" style="width:0%" data-val="${d.barr}" data-pct="${(d.barr/total*100).toFixed(0)}">
          ${d.barr <= 8 ? d.barr : ''}
          <span class="tooltip">Barrington: ${d.barr}</span>
        </div>
        <div class="bar-seg whl tooltip-trigger" style="width:0%" data-val="${d.whl}" data-pct="${(d.whl/total*100).toFixed(0)}">
          ${d.whl <= 8 ? d.whl : ''}
          <span class="tooltip">Wheeler: ${d.whl}</span>
        </div>
      </div>
      <div class="bar-total">${d.cumb}</div>
    `;
    container.appendChild(row);
  });

  // animate bars after a short delay
  setTimeout(() => {
    document.querySelectorAll('.bar-seg').forEach(seg => {
      seg.style.width = seg.dataset.pct + '%';
    });
  }, 400);
}

// ——— RENDER RANK TABLES ———
function renderRankTable(tableId, key) {
  const table = document.getElementById(tableId);
  const thead = document.createElement('thead');
  thead.innerHTML = `<tr><th>Event</th><th>CUM</th><th>BAR</th><th>WHL</th></tr>`;
  table.appendChild(thead);
  const tbody = document.createElement('tbody');

  let totals = [0,0,0];
  rankData.forEach(d => {
    const vals = d[key];
    totals = totals.map((t,i)=>t+vals[i]);
    const tr = document.createElement('tr');
    const classFor = v => v===1?'rank-1':v===2?'rank-2':'rank-3';

    // highlight improved for optimal
    let classC = classFor(vals[0]);
    let classB = classFor(vals[1]);
    let classW = classFor(vals[2]);
    if (key==='opt') {
      const cur = rankData.find(r=>r.event===d.event).cur;
      if (vals[0] < cur[0]) classC += ' improved';
      if (vals[1] < cur[1]) classB += ' improved';
      if (vals[2] < cur[2]) classW += ' improved';
    }

    tr.innerHTML = `
      <td class="event-name">${d.event}</td>
      <td class="${classC}">${vals[0]}</td>
      <td class="${classB}">${vals[1]}</td>
      <td class="${classW}">${vals[2]}</td>
    `;
    tbody.appendChild(tr);
  });

  const totalRow = document.createElement('tr');
  totalRow.className = 'rank-total';
  totalRow.innerHTML = `
    <td>TOTAL</td>
    <td class="${key==='opt'?'improved':'rank-1'}">${totals[0]}</td>
    <td>${totals[1]}</td>
    <td>${totals[2]}</td>
  `;
  tbody.appendChild(totalRow);
  table.appendChild(tbody);
}

// ——— RENDER GAUGES ———
function renderGauges() {
  // Cumberland scenarios
  const cumbScenarios = [
    { label: 'Current', score: 54, color: 'var(--red)' },
    { label: 'Worst\nCase', score: 37, color: 'var(--gold2)' },
    { label: 'Optimal', score: 31, color: 'var(--green)' },
  ];
  const cumbWrap = document.getElementById('cumbGauge');
  const maxH = 140;
  const maxScore = 60;
  cumbScenarios.forEach(s => {
    const h = Math.round((s.score / maxScore) * maxH);
    const wrap = document.createElement('div');
    wrap.className = 'gauge-bar-wrap';
    wrap.innerHTML = `
      <div style="font-size:11px;color:var(--text2);letter-spacing:1px;text-align:center;line-height:1.3">${s.score} pts</div>
      <div class="gauge-bar" style="background:${s.color};height:0px;width:80px;min-height:20px">
        <span class="gauge-bar-label-top"></span>
      </div>
      <div class="gauge-bar-label">${s.label.replace('\n','<br>')}</div>
    `;
    cumbWrap.appendChild(wrap);
    setTimeout(() => {
      wrap.querySelector('.gauge-bar').style.height = h + 'px';
    }, 600);
  });

  // States projected
  const statesData = [
    { label: 'Cumberland\n(Optimal)', score: 31, color: 'var(--gold)' },
    { label: 'Barrington\n(Projected)', score: 46, color: 'var(--red)' },
    { label: 'Wheeler\n(Projected)', score: 61, color: 'var(--blue)' },
  ];
  const statesWrap = document.getElementById('statesGauge');
  const maxS = 70;
  statesData.forEach(s => {
    const h = Math.round((s.score / maxS) * maxH);
    const wrap = document.createElement('div');
    wrap.className = 'gauge-bar-wrap';
    wrap.innerHTML = `
      <div style="font-size:11px;color:var(--text2);letter-spacing:1px;text-align:center">${s.score} pts</div>
      <div class="gauge-bar" style="background:${s.color};height:0px;width:80px;min-height:20px">
        <span class="gauge-bar-label-top"></span>
      </div>
      <div class="gauge-bar-label" style="white-space:pre-line;font-size:9px;line-height:1.4">${s.label}</div>
    `;
    statesWrap.appendChild(wrap);
    setTimeout(() => {
      wrap.querySelector('.gauge-bar').style.height = h + 'px';
    }, 700);
  });
}

// ——— RENDER ROI GRID ———
function renderROI() {
  const grid = document.getElementById('roiGrid');
  roiData.forEach(d => {
    const badgeClass = d.roi==='high' ? 'roi-high' : d.roi==='med' ? 'roi-med' : d.roi==='defend' ? 'roi-defend' : 'roi-tough';
    const badgeLabel = d.roi==='high' ? 'High ROI' : d.roi==='med' ? 'Medium ROI' : d.roi==='defend' ? 'Defend Lead' : 'Tough Field';
    const card = document.createElement('div');
    card.className = 'roi-card';
    const rankClass = r => r===1?'rank-1':r===2?'rank-2':'rank-3';
    const improved = d.opt < d.cur ? `<span style="color:var(--green);font-size:10px;margin-left:4px">▲ up ${d.cur-d.opt}</span>` : '';
    card.innerHTML = `
      <div class="roi-card-header">
        <div class="roi-event-name">${d.event}${improved}</div>
        <div class="roi-badge ${badgeClass}">${badgeLabel}</div>
      </div>
      <div class="roi-card-members">${d.members}</div>
      <div class="roi-rankings">
        <div class="roi-rank-item">
          <div class="roi-rank-label">Brown</div>
          <div class="roi-rank-val" style="color:var(--text2)">${d.brown}</div>
        </div>
        <div class="roi-rank-item">
          <div class="roi-rank-label">Current Proj</div>
          <div class="roi-rank-val ${rankClass(d.cur)}">${d.cur}</div>
        </div>
        <div class="roi-rank-item">
          <div class="roi-rank-label">Target</div>
          <div class="roi-rank-val ${rankClass(d.opt)}">${d.opt}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ——— STATES TEAM ROSTER ———
const statesRoster = {
  "Saha":     ["Anatomy & Physiology", "Chemistry Lab", "Forensics"],
  "Niru":     ["Anatomy & Physiology", "Designer Genes", "Remote Sensing"],
  "Brayden":  ["Astronomy", "Chemistry Lab", "Codebusters", "Hovercraft"],
  "Saanvi":   ["Astronomy", "Dynamic Planet"],
  "Himaghna": ["Boomilever", "Circuit Lab", "Disease Detectives", "Dynamic Planet"],
  "Shiven":   ["Boomilever", "Disease Detectives", "Experimental Design", "Machines"],
  "Sai":      ["Bungee Drop", "Electric Vehicle", "Engineering CAD", "Experimental Design", "Robot Tour"],
  "Anu":      ["Bungee Drop", "Electric Vehicle", "Entomology", "Experimental Design"],
  "Sharvesh": ["Circuit Lab", "Codebusters", "Machines"],
  "Gayathri": ["Codebusters", "Engineering CAD", "Rocks & Minerals"],
  "Sudeepa":  ["Designer Genes", "Experimental Design", "Remote Sensing"],
  "Rikin":    ["Entomology", "Helicopter", "Hovercraft"],
  "Neha":     ["Forensics", "Rocks & Minerals"],
  "Aahan":    ["Helicopter", "Water Quality"],
  "Sathwika": ["Water Quality"],
};

// lookup roi for a given event
function eventROI(eventName) {
  const found = roiData.find(r => r.event === eventName);
  return found ? found.roi : 'med';
}

function renderRoster() {
  const grid = document.getElementById('rosterGrid');
  Object.entries(statesRoster).forEach(([name, events]) => {
    const card = document.createElement('div');
    card.className = 'roster-card';
    const tagsHTML = events.map(ev => {
      const roi = eventROI(ev);
      return `<div class="roster-event-tag roi-${roi}-tag">${ev}</div>`;
    }).join('');
    card.innerHTML = `
      <div class="roster-name">${name}</div>
      <div class="roster-events">${tagsHTML}</div>
    `;
    grid.appendChild(card);
  });
}

// ——— INTERSECTION OBSERVER for reveal animations ———
function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.07 });
  els.forEach(el => obs.observe(el));
}

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  renderBrownChart();
  renderRankTable('currentTable', 'cur');
  renderRankTable('optimalTable', 'opt');
  renderGauges();
  renderROI();
  renderRoster();
  setupReveal();
});