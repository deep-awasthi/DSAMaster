// Global state variables
let allProblems = [];
let completedIds = new Set();
let activeFilters = {
  search: '',
  difficulty: 'all',
  status: 'all'
};
let categoryExpandedStates = {};

// SVG Icons (Official brand logos from simple-icons)
const LEETCODE_SVG = `
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
  <title>LeetCode</title>
  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
</svg>`;

const GFG_SVG = `
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
  <title>GeeksforGeeks</title>
  <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"/>
</svg>`;

// DOM Elements
const categoriesList = document.getElementById('categories-list');
const solvedCountEl = document.getElementById('solved-count');
const totalCountEl = document.getElementById('total-count');
const percentageLabelEl = document.getElementById('percentage-label');

// Difficulty stats
const easyRatioEl = document.getElementById('easy-ratio');
const mediumRatioEl = document.getElementById('medium-ratio');
const hardRatioEl = document.getElementById('hard-ratio');

// Controls
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const globalResetBtn = document.getElementById('global-reset-btn');

// Initial Setup
document.addEventListener('DOMContentLoaded', async () => {
  setupEventListeners();
  await loadData();
});

// Setup Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    activeFilters.search = e.target.value.toLowerCase().trim();
    searchClearBtn.style.display = activeFilters.search ? 'block' : 'none';
    renderProblems();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeFilters.search = '';
    searchClearBtn.style.display = 'none';
    searchInput.focus();
    renderProblems();
  });

  // Difficulty Tabs
  document.querySelectorAll('#filter-difficulty .tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#filter-difficulty .tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilters.difficulty = e.target.dataset.value;
      renderProblems();
    });
  });

  // Status Tabs
  document.querySelectorAll('#filter-status .tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#filter-status .tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilters.status = e.target.dataset.value;
      renderProblems();
    });
  });

  // Global Reset
  globalResetBtn.addEventListener('click', handleResetProgress);
}

// Fetch problems database and progress
async function loadData() {
  try {
    allProblems = PROBLEMS;

    const savedProgress =
      JSON.parse(localStorage.getItem('dsa-progress') || '[]');

    completedIds = new Set(savedProgress);

    // Initialize category expanded states
    allProblems.forEach(p => {
      if (categoryExpandedStates[p.category] === undefined) {
        categoryExpandedStates[p.category] = true;
      }
    });

    updateDashboardStats();
    renderProblems();
  } catch (err) {
    console.error(err);
    categoriesList.innerHTML = `
      <div class="empty-state">
        <p style="color: #ff3333; font-weight: bold;">Failed to load problem database.</p>
      </div>
    `;
  }
}

// Update overall & difficulty statistics
function updateDashboardStats() {
  const total = allProblems.length;
  const solved = allProblems.filter(p => completedIds.has(p.id)).length;
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

  solvedCountEl.textContent = solved;
  totalCountEl.textContent = total;
  percentageLabelEl.textContent = `${pct}%`;

  // Difficulty breakdown
  const diffStats = {
    Easy: { solved: 0, total: 0 },
    Medium: { solved: 0, total: 0 },
    Hard: { solved: 0, total: 0 }
  };

  allProblems.forEach(p => {
    const diff = p.difficulty;
    if (diffStats[diff]) {
      diffStats[diff].total++;
      if (completedIds.has(p.id)) {
        diffStats[diff].solved++;
      }
    }
  });

  easyRatioEl.textContent = `${diffStats.Easy.solved}/${diffStats.Easy.total}`;
  mediumRatioEl.textContent = `${diffStats.Medium.solved}/${diffStats.Medium.total}`;
  hardRatioEl.textContent = `${diffStats.Hard.solved}/${diffStats.Hard.total}`;
}

// Render dynamic problems grouped by category
function renderProblems() {
  const categories = {};
  let visibleProblemsCount = 0;

  // Group visible problems
  allProblems.forEach(p => {
    if (checkProblemMatchesFilters(p)) {
      visibleProblemsCount++;
      if (!categories[p.category]) {
        categories[p.category] = {
          all: [],
          solvedCount: 0
        };
      }
      categories[p.category].all.push(p);
      if (completedIds.has(p.id)) {
        categories[p.category].solvedCount++;
      }
    }
  });

  if (visibleProblemsCount === 0) {
    categoriesList.innerHTML = `
      <div class="empty-state">
        <p>No problems match search or filters.</p>
      </div>
    `;
    return;
  }

  let html = '';
  const sortedCategories = Object.keys(categories).sort();

  sortedCategories.forEach(catName => {
    const cat = categories[catName];
    const totalCount = cat.all.length;
    const solvedCount = cat.solvedCount;
    const isOpen = categoryExpandedStates[catName] !== false;

    html += `
      <div class="category-section ${isOpen ? 'open' : ''}" data-category="${catName}">
        <button class="category-header" onclick="toggleCategory('${catName}')">
          <div class="category-title">
            <span class="arrow">&rsaquo;</span>
            <span>${catName}</span>
          </div>
          <span class="category-progress">${solvedCount} / ${totalCount} Solved</span>
        </button>

        <div class="category-body">
          ${cat.all.map(p => generateProblemRowHtml(p)).join('')}
        </div>
      </div>
    `;
  });

  categoriesList.innerHTML = html;
}

// Generate HTML row for a problem
function generateProblemRowHtml(p) {
  const isSolved = completedIds.has(p.id);
  const hasLeetcode = !!p.leetcode_url;
  const hasGfg = !!p.gfg_url;

  return `
    <div class="problem-row ${isSolved ? 'solved' : ''}" id="row-${p.id}">
      <div class="problem-left">
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox-input" ${isSolved ? 'checked' : ''} onchange="toggleProblemSolved('${p.id}', this.checked)">
        </label>
        
        <span class="problem-name-text">${p.name}</span>
      </div>

      <div class="problem-right">
        <!-- Difficulty Badge -->
        <span class="badge ${p.difficulty.toLowerCase()}">${p.difficulty}</span>

        <!-- LeetCode Icon Link -->
        ${hasLeetcode ? `
          <a href="${p.leetcode_url}" target="_blank" class="link-icon-btn leetcode" title="Open on LeetCode">
            ${LEETCODE_SVG}
          </a>
        ` : ''}

        <!-- GFG Icon Link -->
        ${hasGfg ? `
          <a href="${p.gfg_url}" target="_blank" class="link-icon-btn gfg" title="Open on GeeksforGeeks">
            ${GFG_SVG}
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

// Toggle accordion
function toggleCategory(catName) {
  categoryExpandedStates[catName] = !categoryExpandedStates[catName];
  const section = document.querySelector(`.category-section[data-category="${CSS.escape(catName)}"]`);
  if (section) {
    section.classList.toggle('open');
  }
}

// Match filters checking
function checkProblemMatchesFilters(p) {
  if (activeFilters.search) {
    const term = activeFilters.search;
    if (!p.name.toLowerCase().includes(term) && !p.category.toLowerCase().includes(term)) {
      return false;
    }
  }

  if (activeFilters.difficulty !== 'all') {
    if (p.difficulty.toLowerCase() !== activeFilters.difficulty.toLowerCase()) {
      return false;
    }
  }

  if (activeFilters.status !== 'all') {
    const isSolved = completedIds.has(p.id);
    if (activeFilters.status === 'completed' && !isSolved) return false;
    if (activeFilters.status === 'pending' && isSolved) return false;
  }

  return true;
}

// Toggle solved status via backend API
async function toggleProblemSolved(id, done) {
  if (done) {
    completedIds.add(id);
  } else {
    completedIds.delete(id);
  }

  localStorage.setItem(
    'dsa-progress',
    JSON.stringify([...completedIds])
  );

  const row = document.getElementById(`row-${id}`);

  if (row) {
    row.classList.toggle('solved', done);
  }

  updateDashboardStats();

  const problem = allProblems.find(p => p.id === id);

  showToast(
    `${problem ? problem.name : 'Problem'} marked ${done ? 'Solved' : 'Pending'
    }`
  );

  if (activeFilters.status !== 'all') {
    renderProblems();
  } else {
    updateCategoryHeaderStats(problem.category);
  }
}

// Update individual category headers
function updateCategoryHeaderStats(catName) {
  const section = document.querySelector(`.category-section[data-category="${CSS.escape(catName)}"]`);
  if (!section) return;

  const problemRows = section.querySelectorAll('.problem-row');
  const totalCount = problemRows.length;
  let solvedCount = 0;

  problemRows.forEach(row => {
    if (row.classList.contains('solved')) solvedCount++;
  });

  const statsEl = section.querySelector('.category-progress');
  if (statsEl) {
    statsEl.textContent = `${solvedCount} / ${totalCount} Solved`;
  }
}

// Reset progress on backend
async function handleResetProgress() {
  if (!confirm('Reset all progress?')) return;

  completedIds.clear();

  localStorage.removeItem('dsa-progress');

  activeFilters = {
    search: '',
    difficulty: 'all',
    status: 'all'
  };

  searchInput.value = '';
  searchClearBtn.style.display = 'none';

  document
    .querySelectorAll('#filter-difficulty .tab-btn')
    .forEach(btn =>
      btn.classList.toggle(
        'active',
        btn.dataset.value === 'all'
      )
    );

  document
    .querySelectorAll('#filter-status .tab-btn')
    .forEach(btn =>
      btn.classList.toggle(
        'active',
        btn.dataset.value === 'all'
      )
    );

  categoryExpandedStates = {};

  allProblems.forEach(p => {
    categoryExpandedStates[p.category] = true;
  });

  updateDashboardStats();
  renderProblems();

  showToast('Everything has been reset.');
}

// Micro toast notification popup
let toastTimeout;
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.background = isError ? '#cc2222' : '#333333';
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}
