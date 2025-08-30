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
        {"name": "Sarah M.", "role": "Solo Entrepreneur", "avatar": "👩💼", "text": "LicenseGuard found $67/month in subscriptions I completely forgot about! The bank connection was seamless and the insights were eye-opening.", "rating": 5, "savings": 67, "subscriptionsFound": 4},
        {"name": "Mike R.", "role": "Startup Founder", "avatar": "👨💻", "text": "This saved our startup $203/month by identifying unused licenses across our team. The ROI was immediate - paid for itself in the first week.", "rating": 5, "savings": 203, "subscriptionsFound": 8},
        {"name": "Jennifer L.", "role": "Freelance Designer", "avatar": "👩🎨", "text": "Perfect for introverts like me - no sales calls, just results. Found 3 design tools I wasn't using that cost $89/month total.", "rating": 5, "savings": 89, "subscriptionsFound": 3},
        {"name": "David Chen", "role": "Remote Developer", "avatar": "👨💼", "text": "The automatic detection is incredibly accurate. It found subscriptions I'd signed up for during free trials and forgotten to cancel.", "rating": 5, "savings": 145, "subscriptionsFound": 6},
        {"name": "Emma K.", "role": "Digital Marketer", "avatar": "👩💻", "text": "Wish I'd found this sooner! Discovered $134/month in marketing tools I tried once and never used again. Simple and effective.", "rating": 5, "savings": 134, "subscriptionsFound": 5}
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
    initializeFirebaseForm();
    
    // Add separate handler for Try Product Demo button
    const tryDemoBtn = document.getElementById('tryDemoBtn');
    if (tryDemoBtn) {
        tryDemoBtn.addEventListener('click', function() {
            showProductDemo();
        });
    }
    
    console.log('Ultimate LicenseGuard Demo Loaded Successfully! 🛡️');
});

// Firebase Form Integration
function initializeFirebaseForm() {
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.email.value;
            const firstname = this.firstname.value;
            const tips = this.tips.checked;
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Joining...';
            submitBtn.disabled = true;
            
            // Save to Firebase Firestore
            if (typeof db !== 'undefined') {
                db.collection("waitlist").add({
                    email: email,
                    firstname: firstname,
                    tips: tips,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    userAgent: navigator.userAgent,
                    referrer: document.referrer || 'direct'
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    
                    // Reset form and show success
                    this.reset();
                    this.style.display = "none";
                    document.getElementById("waitlistSuccess").classList.remove("hidden");
                    
                    // Update waitlist count
                    currentWaitlistCount++;
                    updateWaitlistPositions();
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                    alert("Sorry, there was an error joining the waitlist. Please try again.");
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            } else {
                // Fallback if Firebase is not initialized
                console.warn('Firebase not initialized, simulating form submission');
                setTimeout(() => {
                    this.reset();
                    this.style.display = "none";
                    document.getElementById("waitlistSuccess").classList.remove("hidden");
                    currentWaitlistCount++;
                    updateWaitlistPositions();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
    }
    
    // All Join Waitlist button triggers - FIXED FUNCTION NAMES
    const waitlistButtons = [
        "joinWaitlistBtn", "joinWaitlistHeaderBtn", "finalCtaBtn",
        "joinWaitlistProductBtn", "exitJoinWaitlistBtn", "convertFromDemoBtn",
        "getMyReportBtn", "upgradePlanBtn"  // removed tryDemoBtn from here
    ];
    
    waitlistButtons.forEach(function (id) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', function () {
                joinWaitlist();
            });
        }
    });

    // Close waitlist modal
    const closeBtn = document.getElementById("closeWaitlistBtn");
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.getElementById("waitlistModal").classList.add("hidden");
        });
    }

    // Close modal when clicking overlay
    const modalOverlay = document.querySelector("#waitlistModal .modal__overlay");
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                document.getElementById("waitlistModal").classList.add("hidden");
            }
        });
    }
}

// Waitlist functions
function joinWaitlist() {
    document.getElementById('waitlistModal').classList.remove('hidden');
    document.getElementById('waitlistForm').style.display = 'block';
    document.getElementById('waitlistSuccess').classList.add('hidden');
}

function updateWaitlistPositions() {
    const positions = document.querySelectorAll('#waitlistPosition');
    positions.forEach(el => {
        el.textContent = currentWaitlistCount + 1;
    });
}

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
            <div class="testimonial__rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
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
            <p>${plan.subscriptions} subscriptions</p>
            <ul class="features-list">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn--primary btn--full-width" onclick="joinWaitlist()">Join Waitlist</button>
        </div>
    `).join('');
}

function populateFAQs() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;
    
    faqList.innerHTML = appData.faqs.map((faq, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                ${faq.question}
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Calculator functionality
function initializeCalculator() {
    const toolsSlider = document.getElementById('toolsSlider');
    const costSlider = document.getElementById('costSlider');
    const toolsValue = document.getElementById('toolsValue');
    const costValue = document.getElementById('costValue');
    const totalSpend = document.getElementById('totalSpend');
    const potentialSavings = document.getElementById('potentialSavings');
    const annualSavings = document.getElementById('annualSavings');
    
    if (!toolsSlider || !costSlider) return;
    
    function updateCalculation() {
        const tools = parseInt(toolsSlider.value);
        const cost = parseInt(costSlider.value);
        const total = tools * cost;
        const waste = Math.round(total * 0.36);
        const annual = waste * 12;
        
        toolsValue.textContent = tools;
        costValue.textContent = cost;
        totalSpend.textContent = `$${total}`;
        potentialSavings.textContent = `$${waste}`;
        annualSavings.textContent = `$${annual.toLocaleString()}`;
    }
    
    toolsSlider.addEventListener('input', updateCalculation);
    costSlider.addEventListener('input', updateCalculation);
    updateCalculation();
}

// Event Listeners
function initializeEventListeners() {
    // Demo modal functionality
    initializeDemoModal();
    
    // Subscription table functionality
    initializeSubscriptionsTable();
    
    // Other modal functionalities
    initializeModals();
}

function initializeDemoModal() {
    const startDemoBtn = document.getElementById('startDemoBtn');
    const bankOptions = document.querySelectorAll('.bank-option');
    const demoEmail = document.getElementById('demoEmail');
    
    if (startDemoBtn && demoEmail) {
        startDemoBtn.addEventListener('click', function() {
            if (demoEmail.value) {
                userEmail = demoEmail.value;
                showDemoStep(2);
            }
        });
    }
    
    bankOptions.forEach(option => {
        option.addEventListener('click', function() {
            const bank = this.getAttribute('data-bank');
            showDemoStep(3);
            startDemoProcess(bank);
        });
    });
}

function showDemoStep(step) {
    document.querySelectorAll('.demo-step').forEach(el => el.classList.add('hidden'));
    document.getElementById(`step${step}`).classList.remove('hidden');
}

function startDemoProcess(bank) {
    const loadingText = document.getElementById('loadingText');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    
    const steps = [
        'Connecting to your bank...',
        'Analyzing transactions...',
        'Identifying subscriptions...',
        'Calculating savings...',
        'Preparing dashboard...'
    ];
    
    let currentStep = 0;
    const interval = setInterval(() => {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${Math.round(progress)}%`;
        
        if (currentStep < steps.length) {
            loadingText.textContent = steps[currentStep];
        }
        
        currentStep++;
        
        if (currentStep > steps.length) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('demoModal').classList.add('hidden');
                switchToProductView();
            }, 500);
        }
    }, 1000);
}

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const exitDemoBtn = document.getElementById('exitDemoBtn');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showProductSection(section);
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    if (exitDemoBtn) {
        exitDemoBtn.addEventListener('click', function() {
            switchToMarketingView();
        });
    }
}

function switchToProductView() {
    document.getElementById('marketingHeader').classList.add('hidden');
    document.getElementById('productHeader').classList.remove('hidden');
    document.getElementById('marketingView').classList.add('hidden');
    document.getElementById('productView').classList.remove('hidden');
    currentView = 'product';
}

function switchToMarketingView() {
    document.getElementById('marketingHeader').classList.remove('hidden');
    document.getElementById('productHeader').classList.add('hidden');
    document.getElementById('marketingView').classList.remove('hidden');
    document.getElementById('productView').classList.add('hidden');
    currentView = 'marketing';
}

function showProductSection(section) {
    document.querySelectorAll('.product-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(`${section}Section`).classList.remove('hidden');
    currentSection = section;
    
    if (section === 'reports') {
        initializeCharts();
    }
}

// Product Features
function initializeProductFeatures() {
    populateSubscriptionsTable();
    populateSavingsList();
    initializeCharts();
}

function populateSubscriptionsTable() {
    const subscriptionsTable = document.getElementById('subscriptionsTable');
    if (!subscriptionsTable) return;
    
    subscriptionsTable.innerHTML = filteredSubscriptions.map(subscription => `
        <div class="subscription-row" onclick="showSubscriptionDetail(${subscription.id})">
            <div class="subscription-logo">${subscription.logo}</div>
            <div class="subscription-info">
                <h4>${subscription.name}</h4>
                <p class="subscription-meta">${subscription.description}</p>
            </div>
            <div class="subscription-cost">$${subscription.cost.toFixed(2)}/mo</div>
            <div class="subscription-usage">${subscription.lastUsed}</div>
            <div class="subscription-status ${subscription.status.toLowerCase().replace(' ', '-')}">${subscription.status}</div>
        </div>
    `).join('');
}

function populateSavingsList() {
    const savingsList = document.getElementById('savingsList');
    if (!savingsList) return;
    
    const unusedSubs = appData.subscriptions.filter(sub => sub.status === 'Unused');
    savingsList.innerHTML = unusedSubs.map(sub => `
        <div class="saving-item">
            <span>${sub.name}</span>
            <span class="saving-amount">$${sub.cost.toFixed(2)}/mo</span>
        </div>
    `).join('');
}

function initializeSubscriptionsTable() {
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchSubscriptions');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterSubscriptions);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', filterSubscriptions);
    }
    if (searchInput) {
        searchInput.addEventListener('input', filterSubscriptions);
    }
}

function filterSubscriptions() {
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchSubscriptions');
    
    if (!categoryFilter || !statusFilter || !searchInput) return;
    
    const category = categoryFilter.value;
    const status = statusFilter.value;
    const search = searchInput.value.toLowerCase();
    
    filteredSubscriptions = appData.subscriptions.filter(sub => {
        const matchesCategory = category === 'all' || sub.category.toLowerCase() === category;
        const matchesStatus = status === 'all' || sub.status.toLowerCase().replace(' ', '-') === status;
        const matchesSearch = sub.name.toLowerCase().includes(search);
        
        return matchesCategory && matchesStatus && matchesSearch;
    });
    
    populateSubscriptionsTable();
}

// Subscription Detail Modal
function showSubscriptionDetail(id) {
    const subscription = appData.subscriptions.find(sub => sub.id === id);
    if (!subscription) return;
    
    const modal = document.getElementById('subscriptionModal');
    const detail = document.getElementById('subscriptionDetail');
    
    detail.innerHTML = `
        <div class="subscription-detail">
            <div class="subscription-header">
                <div class="subscription-header-logo">${subscription.logo}</div>
                <div class="subscription-header-info">
                    <h2>${subscription.name}</h2>
                    <p class="subscription-header-meta">
                        <strong>Last Used:</strong> ${subscription.lastUsed}<br>
                        <strong>Days Unused:</strong> ${subscription.daysUnused} days<br>
                        <strong>Next Billing:</strong> ${subscription.nextBilling}<br>
                        <strong>Annual Cost:</strong> $${(subscription.cost * 12).toFixed(2)}
                    </p>
                </div>
            </div>
            
            <div class="detail-sections">
                <div class="detail-section">
                    <h4>💡 Recommendation</h4>
                    ${subscription.status === 'Unused' ? 
                        `<p class="recommendation unused">
                            <strong>Cancel Now:</strong> You haven't used this service in ${subscription.daysUnused} days. 
                            Save $${subscription.cost.toFixed(2)}/month ($${(subscription.cost * 12).toFixed(2)}/year).
                        </p>` :
                        subscription.status === 'At Risk' ?
                        `<p class="recommendation at-risk">
                            <strong>Review Usage:</strong> Low activity detected. Consider if you still need this subscription.
                        </p>` :
                        `<p class="recommendation active">
                            <strong>Keep Active:</strong> Regular usage detected. This subscription appears valuable.
                        </p>`
                    }
                </div>
                
                <div class="detail-section">
                    <h4>📊 Usage Pattern</h4>
                    <div class="usage-chart">
                        <canvas id="usageChart-${subscription.id}"></canvas>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>🔧 How to Cancel</h4>
                    <p><strong>Difficulty:</strong> ${subscription.cancellationDifficulty}</p>
                    <div class="cancel-guide">
                        <div class="cancel-step">
                            <span class="step-number">1</span>
                            <span>Log into your ${subscription.name} account</span>
                        </div>
                        <div class="cancel-step">
                            <span class="step-number">2</span>
                            <span>Navigate to billing or subscription settings</span>
                        </div>
                        <div class="cancel-step">
                            <span class="step-number">3</span>
                            <span>Cancel your subscription before next billing date</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="subscription-actions-detail">
                <a href="${subscription.cancelUrl}" target="_blank" class="btn btn--primary">
                    Cancel Subscription
                </a>
                <button class="btn btn--outline" onclick="closeSubscriptionModal()">
                    Keep Subscription
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Initialize usage chart
    setTimeout(() => initializeUsageChart(subscription), 100);
}

function closeSubscriptionModal() {
    document.getElementById('subscriptionModal').classList.add('hidden');
}

function initializeUsageChart(subscription) {
    const ctx = document.getElementById(`usageChart-${subscription.id}`);
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Usage Hours',
                data: subscription.monthlyUsage,
                backgroundColor: 'rgba(33, 128, 141, 0.2)',
                borderColor: 'rgba(33, 128, 141, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Charts
function initializeCharts() {
    setTimeout(() => {
        initializeWasteChart();
        initializeCategoryChart();
    }, 100);
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
                data: [120, 150, 90, 200, 89, 67],
                borderColor: 'rgba(255, 84, 89, 1)',
                backgroundColor: 'rgba(255, 84, 89, 0.1)',
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
            labels: ['Design', 'Communication', 'Entertainment', 'Productivity', 'Development'],
            datasets: [{
                data: [25, 20, 20, 20, 15],
                backgroundColor: [
                    'rgba(33, 128, 141, 0.8)',
                    'rgba(168, 75, 47, 0.8)',
                    'rgba(255, 84, 89, 0.8)',
                    'rgba(230, 129, 97, 0.8)',
                    'rgba(98, 108, 113, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Modal functionality
function initializeModals() {
    // Close buttons
    document.querySelectorAll('.modal__close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
        });
    });
    
    // Overlay clicks
    document.querySelectorAll('.modal__overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.closest('.modal').classList.add('hidden');
            }
        });
    });
}

// FAQ functionality
function initializeFAQ() {
    // FAQ functionality is handled by toggleFAQ function
}

function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];
    
    // Close all other FAQs
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });
    
    // Toggle clicked FAQ
    clickedItem.classList.toggle('active');
}

// Exit Intent
function initializeExitIntent() {
    let mouseLeaveFired = false;
    
    document.addEventListener('mouseleave', function(e) {
        if (!mouseLeaveFired && !hasExitIntentShown && currentView === 'marketing' && e.clientY <= 0) {
            showExitIntentModal();
            mouseLeaveFired = true;
            hasExitIntentShown = true;
        }
    });
}

function showExitIntentModal() {
    document.getElementById('exitIntentModal').classList.remove('hidden');
}

// Update showProductDemo to handle both views and header
function showProductDemo() {
    document.getElementById('marketingHeader').classList.add('hidden');
    document.getElementById('productHeader').classList.remove('hidden');
    document.getElementById('marketingView').classList.add('hidden');
    document.getElementById('productView').classList.remove('hidden');
    currentView = 'product';
    console.log('Switched to product demo view');
}
