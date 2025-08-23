// Application Data
const appData = {
  subscriptions: [
    {"id": 1, "name": "Adobe Creative Cloud", "cost": 52.99, "lastUsed": "67 days ago", "status": "Unused", "category": "Design", "daysUnused": 67, "logo": "🎨", "cancelUrl": "https://adobe.com/cancel", "monthlyUsage": [0, 0, 0, 1, 0, 0], "description": "Professional creative software suite", "nextBilling": "2025-09-15", "cancellationDifficulty": "Medium"},
    {"id": 2, "name": "Dropbox Plus", "cost": 11.99, "lastUsed": "45 days ago", "status": "Unused", "category": "Storage", "daysUnused": 45, "logo": "📦", "cancelUrl": "https://dropbox.com/cancel", "monthlyUsage": [0, 0, 1, 0, 0, 0], "description": "Cloud storage and file synchronization", "nextBilling": "2025-09-10", "cancellationDifficulty": "Easy"},
    {"id": 3, "name": "Zoom Pro", "cost": 14.99, "lastUsed": "23 days ago", "status": "At Risk", "category": "Communication", "daysUnused": 23, "logo": "📹", "cancelUrl": "https://zoom.us/cancel", "monthlyUsage": [2, 1, 0, 3, 1, 0], "description": "Video conferencing platform", "nextBilling": "2025-09-05", "cancellationDifficulty": "Easy"},
    {"id": 4, "name": "Canva Pro", "cost": 12.99, "lastUsed": "18 days ago", "status": "At Risk", "category": "Design", "daysUnused": 18, "logo": "🎨", "cancelUrl": "https://canva.com/cancel", "monthlyUsage": [3, 2, 1, 4, 2, 1], "description": "Graphic design platform", "nextBilling": "2025-09-20", "cancellationDifficulty": "Easy"},
    {"id": 5, "name": "Netflix", "cost": 15.99, "lastUsed": "2 days ago", "status": "Active", "category": "Entertainment", "daysUnused": 2, "logo": "🎬", "cancelUrl": "https://netflix.com/cancel", "monthlyUsage": [25, 28, 22, 30, 26, 24], "description": "Streaming entertainment service", "nextBilling": "2025-09-01", "cancellationDifficulty": "Easy"},
    {"id": 6, "name": "Slack Pro", "cost": 8.00, "lastUsed": "Today", "status": "Active", "category": "Communication", "daysUnused": 0, "logo": "💬", "cancelUrl": "https://slack.com/cancel", "monthlyUsage": [45, 42, 38, 50, 47, 44], "description": "Team communication platform", "nextBilling": "2025-09-03", "cancellationDifficulty": "Medium"},
    {"id": 7, "name": "GitHub Pro", "cost": 4.00, "lastUsed": "1 day ago", "status": "Active", "category": "Development", "daysUnused": 1, "logo": "💻", "cancelUrl": "https://github.com/cancel", "monthlyUsage": [20, 22, 18, 25, 23, 21], "description": "Code repository and collaboration", "nextBilling": "2025-09-12", "cancellationDifficulty": "Easy"},
    {"id": 8, "name": "Microsoft 365", "cost": 12.99, "lastUsed": "Today", "status": "Active", "category": "Productivity", "daysUnused": 0, "logo": "📊", "cancelUrl": "https://microsoft.com/cancel", "monthlyUsage": [35, 32, 30, 38, 36, 33], "description": "Office productivity suite", "nextBilling": "2025-09-08", "cancellationDifficulty": "Medium"},
    {"id": 9, "name": "Spotify Premium", "cost": 9.99, "lastUsed": "Yesterday", "status": "Active", "category": "Entertainment", "daysUnused": 1, "logo": "🎵", "cancelUrl": "https://spotify.com/cancel", "monthlyUsage": [60, 65, 58, 70, 68, 62], "description": "Music streaming service", "nextBilling": "2025-09-18", "cancellationDifficulty": "Easy"},
    {"id": 10, "name": "Figma Professional", "cost": 15.00, "lastUsed": "34 days ago", "status": "Unused", "category": "Design", "daysUnused": 34, "logo": "✏️", "cancelUrl": "https://figma.com/cancel", "monthlyUsage": [0, 1, 0, 0, 0, 0], "description": "Collaborative design platform", "nextBilling": "2025-09-25", "cancellationDifficulty": "Easy"},
    {"id": 11, "name": "Notion Pro", "cost": 8.00, "lastUsed": "5 days ago", "status": "Active", "category": "Productivity", "daysUnused": 5, "logo": "📝", "cancelUrl": "https://notion.so/cancel", "monthlyUsage": [15, 18, 12, 20, 17, 14], "description": "All-in-one workspace", "nextBilling": "2025-09-14", "cancellationDifficulty": "Easy"},
    {"id": 12, "name": "Grammarly Premium", "cost": 11.66, "lastUsed": "28 days ago", "status": "At Risk", "category": "Writing", "daysUnused": 28, "logo": "✍️", "cancelUrl": "https://grammarly.com/cancel", "monthlyUsage": [2, 1, 0, 3, 1, 0], "description": "Writing assistant and grammar checker", "nextBilling": "2025-09-22", "cancellationDifficulty": "Medium"}
  ],
  testimonials: [
    {"name": "Sarah M.", "role": "Solo Entrepreneur", "avatar": "👩‍💼", "text": "LicenseGuard found $67/month in subscriptions I completely forgot about! The bank connection was seamless and the insights were eye-opening.", "rating": 5, "savings": 67, "subscriptionsFound": 4},
    {"name": "Mike R.", "role": "Startup Founder", "avatar": "👨‍💻", "text": "This saved our startup $203/month by identifying unused licenses across our team. The ROI was immediate - paid for itself in the first week.", "rating": 5, "savings": 203, "subscriptionsFound": 8},
    {"name": "Jennifer L.", "role": "Freelance Designer", "avatar": "👩‍🎨", "text": "Perfect for introverts like me - no sales calls, just results. Found 3 design tools I wasn't using that cost $89/month total.", "rating": 5, "savings": 89, "subscriptionsFound": 3},
    {"name": "David Chen", "role": "Remote Developer", "avatar": "👨‍💼", "text": "The automatic detection is incredibly accurate. It found subscriptions I'd signed up for during free trials and forgotten to cancel.", "rating": 5, "savings": 145, "subscriptionsFound": 6},
    {"name": "Emma K.", "role": "Digital Marketer", "avatar": "👩‍💻", "text": "Wish I'd found this sooner! Discovered $134/month in marketing tools I tried once and never used again. Simple and effective.", "rating": 5, "savings": 134, "subscriptionsFound": 5}
  ],
  features: [
    {"icon": "🏦", "title": "Secure Bank Connection", "description": "Connect unlimited bank accounts and credit cards with bank-grade security"},
    {"icon": "🤖", "title": "AI-Powered Detection", "description": "Automatically identify 200+ SaaS subscriptions with 95%+ accuracy"},
    {"icon": "📊", "title": "Smart Analytics", "description": "Track usage patterns and get personalized savings recommendations"},
    {"icon": "📧", "title": "Intelligent Alerts", "description": "Get notified about unused subscriptions and upcoming renewals"},
    {"icon": "💰", "title": "Savings Tracking", "description": "Monitor your total savings and ROI from canceled subscriptions"},
    {"icon": "📱", "title": "Mobile Access", "description": "Manage your subscriptions on-the-go with our responsive design"}
  ],
  pricing: [
    {"plan": "Starter", "price": 9, "originalPrice": 15, "subscriptions": "Up to 10", "popular": false, "features": ["Bank connection", "Automatic detection", "Monthly reports", "Email alerts", "Basic analytics", "Cancel guides"]},
    {"plan": "Growth", "price": 19, "originalPrice": 29, "subscriptions": "Up to 30", "popular": true, "features": ["Everything in Starter", "Weekly reports", "Usage predictions", "Cancel recommendations", "Priority support", "Team sharing", "Advanced analytics"]},
    {"plan": "Scale", "price": 29, "originalPrice": 49, "subscriptions": "Unlimited", "popular": false, "features": ["Everything in Growth", "Real-time monitoring", "Custom reports", "API access", "Advanced analytics", "Dedicated support", "White-label options"]}
  ],
  faqs: [
    {"question": "How much money can I save with SaaS subscription tracking?", "answer": "Most users save $89-247 per month by canceling unused subscriptions. Our data shows companies waste an average of 36% of their software licenses, which adds up to significant savings over time."},
    {"question": "Is my bank data safe with subscription trackers?", "answer": "Absolutely. We use bank-grade 256-bit encryption and never store your login credentials. All connections are read-only through Plaid, and we're SOC 2 certified for data security."},
    {"question": "What SaaS subscriptions can be tracked automatically?", "answer": "We detect 200+ services including Netflix, Adobe, Zoom, Slack, Dropbox, Canva, GitHub, Microsoft, and many more. Our AI continuously learns to identify new subscription patterns."},
    {"question": "How accurate is the subscription detection?", "answer": "Our detection accuracy is over 95% for known SaaS providers. We use advanced pattern recognition to identify recurring charges and match them to subscription services."},
    {"question": "Can I cancel subscriptions directly through LicenseGuard?", "answer": "While we can't cancel directly, we provide step-by-step instructions and direct links to cancel each subscription. Many users save their target amounts within the first week."},
    {"question": "Do you support multiple bank accounts and credit cards?", "answer": "Yes! Connect unlimited bank accounts and credit cards to get a complete picture of all your subscription spending across different payment methods."}
  ]
};

let currentWaitlistCount = 1247;
let userEmail = '';
let hasExitIntentShown = false;
let currentView = 'marketing';
let currentSection = 'dashboard';
let filteredSubscriptions = [...appData.subscriptions];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Ultimate LicenseGuard Demo...');
    
    initializeCalculator();
    populateMarketingContent();
    initializeEventListeners();
    initializeFAQ();
    initializeNavigation();
    initializeExitIntent();
    updateWaitlistPositions();
    initializeProductFeatures();
    
    console.log('Ultimate LicenseGuard Demo Loaded Successfully! 🛡️');
});

// Marketing Content Population
function populateMarketingContent() {
    populateTestimonials();
    populateFeatures();
    populatePricing();
    populateFAQs();
}

function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial">
            <div class="testimonial__rating">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial__text">"${testimonial.text}"</p>
            <div class="testimonial__author">
                <div class="testimonial__avatar">${testimonial.avatar}</div>
                <div>
                    <div class="testimonial__name">${testimonial.name}</div>
                    <div class="testimonial__role">${testimonial.role}</div>
                    <div class="testimonial__savings">Saved $${testimonial.savings}/month</div>
                </div>
            </div>
        </div>
    `).join('');
}

function populateFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = appData.features.map(feature => `
        <div class="feature">
            <div class="feature__icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

function populatePricing() {
    const pricingGrid = document.getElementById('pricingGrid');
    if (!pricingGrid) return;
    
    pricingGrid.innerHTML = appData.pricing.map(plan => `
        <div class="pricing-card ${plan.popular ? 'popular' : ''}">
            ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
            <h3>${plan.plan}</h3>
            <div class="price">
                <span class="price-current">$${plan.price}</span>
                <span class="price-original">$${plan.originalPrice}</span>
                <span class="price-period">/month</span>
            </div>
            <ul class="features-list">
                <li>${plan.subscriptions} subscriptions</li>
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn ${plan.popular ? 'btn--primary' : 'btn--outline'} btn--full-width pricing-btn">Join Waitlist</button>
        </div>
    `).join('');
    
    // Re-attach event listeners for pricing buttons
    document.querySelectorAll('.pricing-btn').forEach(btn => {
        btn.addEventListener('click', openWaitlistModal);
    });
}

function populateFAQs() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;
    
    faqList.innerHTML = appData.faqs.map(faq => `
        <div class="faq-item">
            <button class="faq-question">
                ${faq.question}
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                ${faq.answer}
            </div>
        </div>
    `).join('');
}

// Calculator functionality
function initializeCalculator() {
    const toolsSlider = document.getElementById('toolsSlider');
    const costSlider = document.getElementById('costSlider');
    
    if (toolsSlider && costSlider) {
        updateCalculator();
        toolsSlider.addEventListener('input', updateCalculator);
        costSlider.addEventListener('input', updateCalculator);
    }
}

function updateCalculator() {
    const toolsSlider = document.getElementById('toolsSlider');
    const costSlider = document.getElementById('costSlider');
    const toolsValue = document.getElementById('toolsValue');
    const costValue = document.getElementById('costValue');
    const totalSpend = document.getElementById('totalSpend');
    const potentialSavings = document.getElementById('potentialSavings');
    const annualSavings = document.getElementById('annualSavings');
    
    if (!toolsSlider || !costSlider) return;
    
    const tools = parseInt(toolsSlider.value);
    const cost = parseInt(costSlider.value);
    const totalSpendValue = tools * cost;
    const wastePercentage = 0.36; // 36% waste based on data
    const potentialSavingsValue = Math.round(totalSpendValue * wastePercentage);
    const annualSavingsValue = potentialSavingsValue * 12;
    
    if (toolsValue) toolsValue.textContent = tools;
    if (costValue) costValue.textContent = cost;
    if (totalSpend) totalSpend.textContent = `$${totalSpendValue}`;
    if (potentialSavings) potentialSavings.textContent = `$${potentialSavingsValue}`;
    if (annualSavings) annualSavings.textContent = `$${annualSavingsValue.toLocaleString()}`;
}

// Event Listeners
function initializeEventListeners() {
    // Demo buttons
    addEventListenerIfExists('tryDemoBtn', 'click', openDemoModal);
    addEventListenerIfExists('getMyReportBtn', 'click', openDemoModal);
    
    // Waitlist buttons
    addEventListenerIfExists('joinWaitlistBtn', 'click', openWaitlistModal);
    addEventListenerIfExists('joinWaitlistHeaderBtn', 'click', openWaitlistModal);
    addEventListenerIfExists('finalCtaBtn', 'click', openWaitlistModal);
    addEventListenerIfExists('joinWaitlistProductBtn', 'click', openWaitlistModal);
    addEventListenerIfExists('convertFromDemoBtn', 'click', openWaitlistModal);
    
    // Demo flow
    addEventListenerIfExists('startDemoBtn', 'click', startDemo);
    addEventListenerIfExists('exitDemoBtn', 'click', exitProductDemo);
    
    // Bank options
    document.querySelectorAll('.bank-option').forEach(option => {
        option.addEventListener('click', (e) => {
            selectBank(e.currentTarget.dataset.bank);
        });
    });
    
    // Product Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchProductSection(e.currentTarget.dataset.section);
        });
    });
    
    // Modal close buttons
    addEventListenerIfExists('closeDemoBtn', 'click', closeDemoModal);
    addEventListenerIfExists('closeWaitlistBtn', 'click', closeWaitlistModal);
    addEventListenerIfExists('closeExitBtn', 'click', closeExitIntentModal);
    addEventListenerIfExists('closeSubscriptionBtn', 'click', closeSubscriptionModal);
    
    // Modal overlays
    document.querySelectorAll('.modal__overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });
    
    // Waitlist form
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', handleWaitlistSubmission);
    }
    
    // Exit intent and audit buttons
    addEventListenerIfExists('orderAuditBtn', 'click', handleAuditOrder);
    addEventListenerIfExists('exitJoinWaitlistBtn', 'click', () => {
        closeExitIntentModal();
        openWaitlistModal();
    });
    
    // Product interactions
    addEventListenerIfExists('refreshDataBtn', 'click', refreshData);
    addEventListenerIfExists('addAccountBtn', 'click', () => alert('In the full version, this would open bank connection flow'));
    addEventListenerIfExists('exportReportBtn', 'click', exportReport);
    addEventListenerIfExists('generateReportBtn', 'click', generateReport);
    
    // Filters
    addEventListenerIfExists('categoryFilter', 'change', applyFilters);
    addEventListenerIfExists('statusFilter', 'change', applyFilters);
    addEventListenerIfExists('searchSubscriptions', 'input', applyFilters);
}

function addEventListenerIfExists(elementId, event, handler) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener(event, handler);
    }
}

// Navigation functionality
function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.startsWith('#') && !document.querySelector(href)) {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const targetId = href;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Demo Modal Functions
function openDemoModal() {
    const demoModal = document.getElementById('demoModal');
    if (demoModal) {
        demoModal.classList.remove('hidden');
        showDemoStep(1);
        trackEvent('demo_started');
    }
}

function closeDemoModal() {
    const demoModal = document.getElementById('demoModal');
    if (demoModal) {
        demoModal.classList.add('hidden');
        resetDemoFlow();
    }
}

function showDemoStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.demo-step').forEach(step => {
        step.classList.add('hidden');
    });
    
    // Show current step
    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) {
        currentStep.classList.remove('hidden');
    }
}

function startDemo() {
    const demoEmail = document.getElementById('demoEmail');
    if (!demoEmail) return;
    
    const email = demoEmail.value;
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    userEmail = email;
    showDemoStep(2);
}

function selectBank(bankName) {
    showDemoStep(3);
    simulateBankConnection();
}

function simulateBankConnection() {
    const loadingText = document.getElementById('loadingText');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    
    const loadingSteps = [
        'Connecting to your bank...',
        'Analyzing transaction history...',
        'Identifying subscription patterns...',
        'Detecting unused services...',
        'Calculating potential savings...',
        'Preparing your dashboard...'
    ];
    
    let currentStep = 0;
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressPercent) progressPercent.textContent = `${Math.round(progress)}%`;
        
        if (currentStep < loadingSteps.length - 1 && progress > (currentStep + 1) * 16.67) {
            currentStep++;
            if (loadingText) loadingText.textContent = loadingSteps[currentStep];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                closeDemoModal();
                enterProductDemo();
            }, 500);
        }
    }, 200);
}

// Product Demo Functions
function enterProductDemo() {
    currentView = 'product';
    
    // Hide marketing view and show product view
    const marketingView = document.getElementById('marketingView');
    const productView = document.getElementById('productView');
    const marketingHeader = document.getElementById('marketingHeader');
    const productHeader = document.getElementById('productHeader');
    
    if (marketingView) marketingView.classList.add('hidden');
    if (productView) productView.classList.remove('hidden');
    if (marketingHeader) marketingHeader.classList.add('hidden');
    if (productHeader) productHeader.classList.remove('hidden');
    
    // Initialize product features
    initializeProductDashboard();
    initializeReports();
    
    trackEvent('product_demo_entered');
}

function exitProductDemo() {
    currentView = 'marketing';
    
    // Show marketing view and hide product view
    const marketingView = document.getElementById('marketingView');
    const productView = document.getElementById('productView');
    const marketingHeader = document.getElementById('marketingHeader');
    const productHeader = document.getElementById('productHeader');
    
    if (marketingView) marketingView.classList.remove('hidden');
    if (productView) productView.classList.add('hidden');
    if (marketingHeader) marketingHeader.classList.remove('hidden');
    if (productHeader) productHeader.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    trackEvent('product_demo_exited');
}

function switchProductSection(section) {
    currentSection = section;
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`)?.classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.product-section').forEach(sec => {
        sec.classList.add('hidden');
    });
    
    // Show current section
    const currentSectionEl = document.getElementById(`${section}Section`);
    if (currentSectionEl) {
        currentSectionEl.classList.remove('hidden');
    }
    
    // Initialize section-specific features
    if (section === 'reports') {
        setTimeout(initializeCharts, 100);
    }
    
    trackEvent('section_switched', { section });
}

// Product Features Initialization
function initializeProductFeatures() {
    initializeProductDashboard();
    initializeFilters();
}

function initializeProductDashboard() {
    populateSubscriptionsTable();
    populateSavingsList();
}

function populateSubscriptionsTable() {
    const subscriptionsTable = document.getElementById('subscriptionsTable');
    if (!subscriptionsTable) return;
    
    const tableHTML = filteredSubscriptions.map(subscription => `
        <div class="subscription-row" data-category="${subscription.category.toLowerCase()}" data-status="${subscription.status.toLowerCase().replace(' ', '-')}" onclick="showSubscriptionDetail(${subscription.id})">
            <div class="subscription-logo">${subscription.logo}</div>
            <div class="subscription-info">
                <h4>${subscription.name}</h4>
                <p class="subscription-meta">${subscription.category} • Next billing: ${subscription.nextBilling}</p>
            </div>
            <div class="subscription-cost">$${subscription.cost.toFixed(2)}/mo</div>
            <div class="subscription-usage">${subscription.lastUsed}</div>
            <div class="subscription-status ${subscription.status.toLowerCase().replace(' ', '-')}">${subscription.status}</div>
        </div>
    `).join('');
    
    subscriptionsTable.innerHTML = tableHTML;
}

function populateSavingsList() {
    const savingsList = document.getElementById('savingsList');
    if (!savingsList) return;
    
    const unusedSubs = appData.subscriptions.filter(sub => sub.status === 'Unused');
    const atRiskSubs = appData.subscriptions.filter(sub => sub.status === 'At Risk');
    
    let savingsHTML = '<h4>Immediate Savings (Cancel Now)</h4>';
    savingsHTML += unusedSubs.map(sub => `
        <div class="saving-item">
            <span>${sub.name} - unused ${sub.daysUnused} days</span>
            <span class="saving-amount">$${sub.cost.toFixed(2)}/mo</span>
        </div>
    `).join('');
    
    savingsHTML += '<h4 style="margin-top: 20px;">Review & Consider (At Risk)</h4>';
    savingsHTML += atRiskSubs.map(sub => `
        <div class="saving-item">
            <span>${sub.name} - low usage</span>
            <span class="saving-amount">$${sub.cost.toFixed(2)}/mo</span>
        </div>
    `).join('');
    
    savingsList.innerHTML = savingsHTML;
}

function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchSubscriptions');
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (statusFilter) statusFilter.addEventListener('change', applyFilters);
    if (searchInput) searchInput.addEventListener('input', applyFilters);
}

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchSubscriptions');
    
    let filtered = [...appData.subscriptions];
    
    // Apply category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filtered = filtered.filter(sub => sub.category.toLowerCase() === categoryFilter.value);
    }
    
    // Apply status filter
    if (statusFilter && statusFilter.value !== 'all') {
        filtered = filtered.filter(sub => sub.status.toLowerCase().replace(' ', '-') === statusFilter.value);
    }
    
    // Apply search filter
    if (searchInput && searchInput.value.trim()) {
        const search = searchInput.value.trim().toLowerCase();
        filtered = filtered.filter(sub => 
            sub.name.toLowerCase().includes(search) ||
            sub.category.toLowerCase().includes(search)
        );
    }
    
    filteredSubscriptions = filtered;
    populateSubscriptionsTable();
}

// Reports and Charts
function initializeReports() {
    setTimeout(initializeCharts, 100);
}

function initializeCharts() {
    initializeWasteChart();
    initializeCategoryChart();
}

function initializeWasteChart() {
    const ctx = document.getElementById('wasteChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Wasted Amount',
                data: [120, 95, 89, 110, 89, 75],
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });
}

function initializeCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Design', 'Productivity', 'Communication', 'Entertainment', 'Development'],
            datasets: [{
                data: [78.98, 29.98, 22.99, 25.98, 4.00],
                backgroundColor: [
                    '#1FB8CD',
                    '#FFC185', 
                    '#B4413C',
                    '#5D878F',
                    '#DB4545'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Subscription Detail Modal
function showSubscriptionDetail(subscriptionId) {
    const subscription = appData.subscriptions.find(sub => sub.id === subscriptionId);
    if (!subscription) return;
    
    const modal = document.getElementById('subscriptionModal');
    const detail = document.getElementById('subscriptionDetail');
    
    if (!modal || !detail) return;
    
    const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const usage = subscription.monthlyUsage;
    
    detail.innerHTML = `
        <div class="subscription-detail">
            <div class="subscription-header">
                <div class="subscription-header-logo">${subscription.logo}</div>
                <div class="subscription-header-info">
                    <h2>${subscription.name}</h2>
                    <p class="subscription-header-meta">${subscription.description}</p>
                    <p class="subscription-header-meta">$${subscription.cost.toFixed(2)}/month • ${subscription.category} • ${subscription.status}</p>
                </div>
            </div>
            
            <div class="detail-sections">
                <div class="detail-section">
                    <h4>📊 Usage Analysis</h4>
                    <p><strong>Last Used:</strong> ${subscription.lastUsed}</p>
                    <p><strong>Days Unused:</strong> ${subscription.daysUnused} days</p>
                    <p><strong>Next Billing:</strong> ${subscription.nextBilling}</p>
                    <p><strong>Annual Cost:</strong> $${(subscription.cost * 12).toFixed(2)}</p>
                </div>
                
                <div class="detail-section">
                    <h4>💡 Recommendation</h4>
                    ${subscription.status === 'Unused' ? 
                        `<p style="color: var(--color-error)"><strong>Cancel Now:</strong> You haven't used this service in ${subscription.daysUnused} days. Save $${subscription.cost.toFixed(2)}/month ($${(subscription.cost * 12).toFixed(2)}/year).</p>` :
                        subscription.status === 'At Risk' ?
                        `<p style="color: var(--color-warning)"><strong>Review Usage:</strong> Low activity detected. Consider if you still need this subscription.</p>` :
                        `<p style="color: var(--color-success)"><strong>Keep Active:</strong> Regular usage detected. This subscription appears valuable.</p>`
                    }
                </div>
                
                <div class="detail-section">
                    <h4>📋 Cancellation Guide</h4>
                    <p><strong>Difficulty:</strong> ${subscription.cancellationDifficulty}</p>
                    <div class="cancel-guide">
                        <div class="cancel-step">
                            <div class="step-number">1</div>
                            <span>Visit ${subscription.name} account settings</span>
                        </div>
                        <div class="cancel-step">
                            <div class="step-number">2</div>
                            <span>Navigate to billing or subscription section</span>
                        </div>
                        <div class="cancel-step">
                            <div class="step-number">3</div>
                            <span>Click "Cancel Subscription" or "End Membership"</span>
                        </div>
                        <div class="cancel-step">
                            <div class="step-number">4</div>
                            <span>Follow prompts and confirm cancellation</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="subscription-actions-detail">
                <button class="btn btn--primary" onclick="window.open('${subscription.cancelUrl}', '_blank')">Cancel Subscription</button>
                <button class="btn btn--outline" onclick="markAsReviewed(${subscription.id})">Mark as Reviewed</button>
                <button class="btn btn--secondary" onclick="closeSubscriptionModal()">Close</button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    trackEvent('subscription_detail_viewed', { subscriptionId, name: subscription.name });
}

function closeSubscriptionModal() {
    const modal = document.getElementById('subscriptionModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function markAsReviewed(subscriptionId) {
    alert(`${appData.subscriptions.find(s => s.id === subscriptionId)?.name} marked as reviewed!\n\nIn the full product, this would update the subscription status and send you a reminder in 30 days.`);
    closeSubscriptionModal();
}

// Product Actions
function refreshData() {
    alert('🔄 Refreshing data...\n\nIn the full product, this would sync with your bank accounts and update subscription information in real-time.');
    trackEvent('data_refreshed');
}

function exportReport() {
    alert('📊 Exporting PDF Report...\n\nIn the full product, this would generate a comprehensive PDF report with:\n\n• Detailed savings analysis\n• Usage patterns\n• Cancellation recommendations\n• Historical data\n\nThe report would be emailed to you within minutes.');
    trackEvent('report_exported');
}

function generateReport() {
    alert('📈 Generating Custom Report...\n\nIn the full product, this would create a personalized report based on:\n\n• Your usage patterns\n• Savings opportunities\n• Industry benchmarks\n• Recommendations\n\nReport would be ready in 2-3 minutes.');
    trackEvent('custom_report_generated');
}

// Waitlist Modal Functions
function openWaitlistModal() {
    const waitlistModal = document.getElementById('waitlistModal');
    const waitlistForm = document.getElementById('waitlistForm');
    const waitlistSuccess = document.getElementById('waitlistSuccess');
    
    if (waitlistModal) {
        waitlistModal.classList.remove('hidden');
    }
    if (waitlistForm) {
        waitlistForm.classList.remove('hidden');
    }
    if (waitlistSuccess) {
        waitlistSuccess.classList.add('hidden');
    }
    
    trackEvent('waitlist_opened');
}

function closeWaitlistModal() {
    const waitlistModal = document.getElementById('waitlistModal');
    if (waitlistModal) {
        waitlistModal.classList.add('hidden');
    }
}

function handleWaitlistSubmission(e) {
    e.preventDefault();
    
    const waitlistForm = document.getElementById('waitlistForm');
    const waitlistSuccess = document.getElementById('waitlistSuccess');
    const successPosition = document.getElementById('successPosition');
    
    // Simulate form submission
    setTimeout(() => {
        if (waitlistForm) waitlistForm.classList.add('hidden');
        if (waitlistSuccess) waitlistSuccess.classList.remove('hidden');
        
        currentWaitlistCount++;
        if (successPosition) successPosition.textContent = currentWaitlistCount;
        updateWaitlistPositions();
        
        trackEvent('waitlist_joined');
    }, 500);
}

function updateWaitlistPositions() {
    document.querySelectorAll('#waitlistPosition').forEach(el => {
        el.textContent = currentWaitlistCount + 1;
    });
}

// FAQ Functionality
function initializeFAQ() {
    // Use event delegation for FAQ items
    document.addEventListener('click', (e) => {
        if (e.target.closest('.faq-question')) {
            e.preventDefault();
            const faqItem = e.target.closest('.faq-item');
            if (!faqItem) return;
            
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        }
    });
}

// Exit Intent Detection
function initializeExitIntent() {
    let hasTriggered = false;
    
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0 && !hasTriggered && !hasExitIntentShown && currentView === 'marketing') {
            hasTriggered = true;
            hasExitIntentShown = true;
            setTimeout(() => {
                openExitIntentModal();
            }, 100);
        }
    });
    
    // Reset trigger after some time
    document.addEventListener('mouseenter', () => {
        setTimeout(() => {
            hasTriggered = false;
        }, 2000);
    });
}

function openExitIntentModal() {
    const demoModal = document.getElementById('demoModal');
    const waitlistModal = document.getElementById('waitlistModal');
    const exitIntentModal = document.getElementById('exitIntentModal');
    
    // Don't show if other modals are open
    if ((!demoModal || !demoModal.classList.contains('hidden')) || 
        (!waitlistModal || !waitlistModal.classList.contains('hidden'))) {
        return;
    }
    
    if (exitIntentModal) {
        exitIntentModal.classList.remove('hidden');
    }
}

function closeExitIntentModal() {
    const exitIntentModal = document.getElementById('exitIntentModal');
    if (exitIntentModal) {
        exitIntentModal.classList.add('hidden');
    }
}

// Audit Order Handler
function handleAuditOrder() {
    alert(`🎉 Manual Audit Order\n\nPrice: $29 (Limited Time)\n\nThis would normally redirect to a payment processor like Stripe.\n\nYou'll receive:\n• Personal audit by our experts\n• Custom cancellation guide\n• Average $127 savings found\n• 48-hour delivery\n\nFor this demo, we'll add you to the waitlist instead!`);
    
    closeExitIntentModal();
    closeDemoModal();
    openWaitlistModal();
}

// Utility Functions
function closeAllModals() {
    const demoModal = document.getElementById('demoModal');
    const waitlistModal = document.getElementById('waitlistModal');
    const exitIntentModal = document.getElementById('exitIntentModal');
    const subscriptionModal = document.getElementById('subscriptionModal');
    
    if (demoModal) demoModal.classList.add('hidden');
    if (waitlistModal) waitlistModal.classList.add('hidden');
    if (exitIntentModal) exitIntentModal.classList.add('hidden');
    if (subscriptionModal) subscriptionModal.classList.add('hidden');
}

function resetDemoFlow() {
    const demoEmail = document.getElementById('demoEmail');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const loadingText = document.getElementById('loadingText');
    
    showDemoStep(1);
    
    if (demoEmail) demoEmail.value = '';
    if (progressFill) progressFill.style.width = '0%';
    if (progressPercent) progressPercent.textContent = '0%';
    if (loadingText) loadingText.textContent = 'Connecting to your bank...';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Analytics tracking (simulated)
function trackEvent(eventName, data = {}) {
    console.log('Analytics Event:', eventName, data);
    // In a real app, this would send to analytics service
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Make functions available globally for onclick handlers
window.showSubscriptionDetail = showSubscriptionDetail;
window.closeSubscriptionModal = closeSubscriptionModal;
window.markAsReviewed = markAsReviewed;