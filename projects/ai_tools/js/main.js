// js/main.js

// Categories Data
const categoriesData = {
    "Video": ["Video Generation", "Animation", "Video Editing", "Video Upscaling", "Screen Recording", "Motion Capture", "3D Animation", "Video Summarization", "Subtitles / Captions", "Special Effects"],
    "Text": ["Writing", "Chatbots", "Summarization", "Translation", "Grammar Check", "SEO Content", "Email Drafting", "Storytelling", "Scripts", "Q&A Assistants"],
    "Image": ["AI Art", "Generative Art", "Photo Editing", "Design", "Background Removal", "Avatar Generators", "Image Upscaling", "Style Transfer", "Memes / Fun Images", "3D Models"],
    "Audio": ["Music Generation", "Voice / TTS", "Sound Effects", "Noise Removal", "Audio Enhancement", "Podcast Editing", "Audio Transcription", "Music Remixing", "Voice Cloning", "Audio Analysis"],
    "Editing": ["Photo Editing", "Video Editing", "Background Removal", "Color Correction", "Image Retouching", "Video Stabilization", "Cropping / Resizing", "Filters / Effects", "Collage Making", "Template Editing"],
    "Code": ["Code / Programming AI", "Data Analysis / AI Analytics", "Code Generation", "Debugging Tools", "API Integration", "Database Tools", "Code Refactoring", "No-Code AI Platforms", "Automation Scripts", "Algorithm Optimization"],
    "Marketing": ["SEO Analysis", "Content Generation", "Social Media Tools", "Email Campaigns", "Analytics / Insights", "Ad Creatives", "Audience Targeting", "Trend Analysis", "Brand Monitoring", "Competitor Analysis"],
    "Productivity": ["Task Automation", "Project Management AI", "Document Summarization", "Note Taking AI", "Calendar / Scheduling AI", "Time Tracking", "Workflow Optimization", "Team Collaboration", "Email Drafting", "AI Assistants"],
    "ShareMarket": ["Stock Analysis", "Portfolio Management", "Market Prediction", "Trading Signals", "News Aggregation", "Technical Analysis", "Sentiment Analysis", "Algorithmic Trading", "Stock Screening", "Investment Insights"],
    "Health": ["Diagnostics", "Fitness Tracking", "Telemedicine", "Mental Health", "Drug Discovery", "Nutrition", "Medical Imaging", "Wearables", "Symptom Checkers", "Health Analytics"],
    "Gaming": ["AI Game Characters", "Procedural Level Generation", "Game Story", "AI Game Testing", "Game Asset Creation", "AI Game Balancing", "Voice / Dialogue Generation", "Animation AI", "AI Game Analytics", "Cheat Detection / Anti-Cheat AI"],
    "Networking": ["Network Monitoring AI", "Traffic Analysis", "Threat Detection", "Performance Optimization", "Network Automation", "Anomaly Detection", "Cybersecurity AI", "Load Balancing AI", "Wi-Fi Optimization", "Packet Analysis"],
    "Food": ["Recipe Generation", "Meal Planning AI", "Nutrition Analysis", "Calorie Tracking", "Food Recognition", "Diet Recommendations", "Menu Optimization", "Smart Kitchen AI", "Ingredient Substitution", "Restaurant Analytics"],
    "Shopping": ["Price Comparison AI", "Product Recommendation", "Visual Search", "Style / Outfit Suggestions", "Smart Cart Management", "Discount & Deal Finder", "Inventory Prediction", "Customer Review Analysis", "Personalized Offers", "E-commerce Analytics"],
    "Education": ["AI Tutoring", "Homework Assistance", "Language Learning", "Exam Preparation", "Personalized Learning", "Quiz / Test Generation", "Content Summarization", "Interactive Lessons", "Virtual Labs", "Learning Analytics"],
    "Entertainment": ["Movie/TV Recommendations", "Music Recommendations", "Playlist Generators", "AI Storytelling", "Interactive Games", "Virtual Concerts", "Voice Cloning for Fun", "Fan Art Generation", "Meme Generation", "AI Quizzes"],
    "Security": ["Face Recognition", "Surveillance AI", "Anomaly Detection", "Cybersecurity Alerts", "Password Management AI", "Threat Prediction", "Smart Lock Control", "Network Monitoring", "Phishing Detection", "Data Encryption AI"],
    "Environment": ["Air Quality Monitoring", "Energy Optimization", "Waste Management AI", "Climate Forecasting", "Water Usage Optimization", "Smart Agriculture", "Traffic Prediction", "Urban Planning AI", "Noise Monitoring", "Sustainable Recommendations"],
    "Lifestyle": ["Fitness Planner AI", "Meal Planning AI", "Meditation & Relaxation AI", "Sleep Tracking", "Fashion AI", "Interior Design Suggestions", "Gardening AI", "Pet Care AI", "Event Planning AI", "Hobby Suggestions AI"],
    "Social": ["AI Chat Companions", "Sentiment Analysis", "Content Suggestion", "Social Media Insights", "Trend Detection", "Influencer Analytics", "Engagement Optimization", "Hashtag Suggestions", "Community Monitoring AI", "Event Promotion AI"],
    "Travel": ["AI Trip Planner", "Flight Price Prediction", "Hotel Recommendations", "Itinerary Generation", "Language Translation", "Local Experience Suggestions", "Travel Chatbots", "Route Optimization", "Tourist Guide AI", "Expense Management AI"],
    "PersonalAssistant": ["Voice Assistants", "Reminder AI", "Task Management", "Email Drafting", "Scheduling", "Calendar Optimization", "Meeting Summaries", "Habit Tracking", "Personal Insights", "AI Concierge"],
    "Research": ["AI Research Search Engines", "Literature Review Assistants", "Data Analysis", "Experiment Design", "Citation & Reference Management", "Literature Mapping", "Collaboration Tools", "Summarization", "Trend Analysis", "Project Management"],
    "Presentation": ["Slide Generation", "Design Templates", "AI Pitch Decks", "Infographics", "Data Visualization", "Content Summarization", "Image / Diagram Creation", "Chart Generation", "Animations", "Speaker Notes Assistance"],
    "Automation": ["Task Automation", "Workflow Automation", "Email Automation", "Marketing Automation", "Process Optimization", "Robotic Process Automation (RPA)", "Scripting AI", "AI Assistants", "Report Automation", "Data Pipeline Automation"]
};

const categoryIcons = {
    "Video": "fas fa-video", "Text": "fas fa-font", "Image": "fas fa-image", "Audio": "fas fa-music",
    "Editing": "fas fa-edit", "Code": "fas fa-code", "Marketing": "fas fa-chart-line",
    "Productivity": "fas fa-tasks", "ShareMarket": "fas fa-chart-simple", "Health": "fas fa-heartbeat",
    "Gaming": "fas fa-gamepad", "Networking": "fas fa-network-wired", "Food": "fas fa-utensils",
    "Shopping": "fas fa-shopping-cart", "Education": "fas fa-graduation-cap", "Entertainment": "fas fa-film",
    "Security": "fas fa-shield-alt", "Environment": "fas fa-leaf", "Lifestyle": "fas fa-smile",
    "Social": "fas fa-users", "Travel": "fas fa-plane", "PersonalAssistant": "fas fa-user-tie",
    "Research": "fas fa-flask", "Presentation": "fas fa-chalkboard", "Automation": "fas fa-robot"
};

const categoryColors = {
    "Video": "from-red-500 to-pink-500", "Text": "from-blue-500 to-cyan-500",
    "Image": "from-purple-500 to-indigo-500", "Audio": "from-green-500 to-teal-500",
    "Editing": "from-yellow-500 to-orange-500", "Code": "from-gray-700 to-gray-900",
    "Marketing": "from-emerald-500 to-green-600", "Productivity": "from-indigo-500 to-blue-600",
    "ShareMarket": "from-amber-500 to-yellow-600", "Health": "from-rose-500 to-red-600",
    "Gaming": "from-violet-500 to-purple-600", "Networking": "from-sky-500 to-blue-500",
    "Food": "from-orange-500 to-amber-600", "Shopping": "from-pink-500 to-rose-500",
    "Education": "from-lime-500 to-green-600", "Entertainment": "from-fuchsia-500 to-pink-600",
    "Security": "from-slate-600 to-gray-700", "Environment": "from-emerald-500 to-teal-600",
    "Lifestyle": "from-cyan-500 to-blue-500", "Social": "from-indigo-400 to-purple-500",
    "Travel": "from-teal-500 to-cyan-600", "PersonalAssistant": "from-blue-400 to-indigo-500",
    "Research": "from-purple-400 to-pink-500", "Presentation": "from-orange-400 to-red-500",
    "Automation": "from-gray-500 to-slate-600"
};

// Make available globally
window.categoriesData = categoriesData;
window.categoryIcons = categoryIcons;
window.categoryColors = categoryColors;

// Load categories on homepage
function loadCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    const categories = Object.keys(categoriesData);

    container.innerHTML = categories.map(cat => {
        const previewSubs = categoriesData[cat].slice(0, 3);
        return `
            <div onclick="window.location.href='category.html?cat=${cat}'" 
                 class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div class="h-32 bg-gradient-to-r ${categoryColors[cat]} flex items-center justify-center">
                    <i class="${categoryIcons[cat]} text-6xl text-white opacity-80"></i>
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-bold group-hover:text-purple-600 transition text-center">${cat}</h3>
                    <div class="flex flex-wrap gap-1 justify-center mt-3">
                        ${previewSubs.map(sub => `<span class="text-xs bg-gray-100 px-2 py-1 rounded-full">${sub}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Search functionality
function setupGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function (e) {
        const term = e.target.value.toLowerCase().trim();

        if (term.length < 2) {
            const resultsDiv = document.getElementById('searchResults');
            if (resultsDiv) resultsDiv.remove();
            const categoriesGrid = document.getElementById('categoriesGrid');
            if (categoriesGrid) categoriesGrid.style.display = 'grid';
            return;
        }

        if (!window.tools) return;

        const results = window.tools.filter(tool =>
            tool.name.toLowerCase().includes(term) ||
            tool.category.toLowerCase().includes(term) ||
            tool.subcategory.toLowerCase().includes(term) ||
            tool.desc.toLowerCase().includes(term)
        );

        let existingResults = document.getElementById('searchResults');
        if (existingResults) existingResults.remove();

        const categoriesGrid = document.getElementById('categoriesGrid');
        if (categoriesGrid) categoriesGrid.style.display = 'none';

        const resultsDiv = document.createElement('div');
        resultsDiv.id = 'searchResults';
        resultsDiv.innerHTML = `
            <div class="mb-6">
                <button onclick="location.reload()" class="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center">
                    <i class="fas fa-arrow-left mr-2"></i> Back to Categories
                </button>
                <h2 class="text-2xl font-bold">Search Results (${results.length} tools found for "${term}")</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${results.slice(0, 30).map(tool => `
                    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-xl font-bold text-purple-600">${escapeHtml(tool.name)}</h3>
                            <span class="text-xs px-2 py-1 rounded-full ${getPriceClass(tool.price)}">${tool.price}</span>
                        </div>
                        <p class="text-gray-500 text-sm mb-2">${tool.category} > ${tool.subcategory}</p>
                        <p class="text-gray-600 mb-4 text-sm">${escapeHtml(tool.desc.substring(0, 120))}${tool.desc.length > 120 ? '...' : ''}</p>
                        <a href="${tool.url}" target="_blank" class="text-purple-600 font-semibold">Try Tool →</a>
                    </div>
                `).join('')}
            </div>
        `;

        categoriesGrid.parentNode.insertBefore(resultsDiv, categoriesGrid);
    });
}

function getPriceClass(price) {
    if (price === 'Free') return 'bg-green-100 text-green-700';
    if (price === 'Free/Paid') return 'bg-blue-100 text-blue-700';
    return 'bg-orange-100 text-orange-700';
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', function () {
    // Only run homepage functions if on index.html
    if (document.getElementById('categoriesGrid')) {
        loadCategories();
        setupGlobalSearch();
    }
});

// ========== CATEGORY PAGE LOGIC ==========
// This runs only on category.html
if (window.location.pathname.includes('category.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');

    if (category) {
        // Update header
        const categoryNameEl = document.getElementById('categoryName');
        const categoryHeader = document.getElementById('categoryHeader');
        const categoryDescEl = document.getElementById('categoryDesc');

        if (categoryNameEl) categoryNameEl.textContent = category + ' AI Tools';
        if (categoryHeader && categoryColors[category]) {
            categoryHeader.className = `bg-gradient-to-r ${categoryColors[category]} text-white py-12`;
        }

        let categoryTools = [];

        // Function to load and display tools
        function loadCategoryTools() {
            if (window.tools && window.tools.length > 0) {
                console.log("Tools loaded:", window.tools.length);
                categoryTools = window.tools.filter(t => t.category === category);
                console.log("Category tools found:", categoryTools.length);

                if (categoryDescEl) {
                    categoryDescEl.textContent = `${categoryTools.length} AI tools found in ${category} category`;
                }

                // Load subcategories
                const subs = categoriesData[category];
                const filterSelect = document.getElementById('subcategoryFilter');
                if (filterSelect && subs) {
                    filterSelect.innerHTML = '<option value="all">All Subcategories</option>' +
                        subs.map(sub => `<option value="${sub}">${sub}</option>`).join('');

                    filterSelect.onchange = () => {
                        const val = filterSelect.value;
                        if (val === 'all') displayTools(categoryTools);
                        else displayTools(categoryTools.filter(t => t.subcategory === val));
                    };
                }

                // Display tools
                displayTools(categoryTools);

                // Setup search
                const searchInput = document.getElementById('searchTools');
                if (searchInput) {
                    searchInput.oninput = (e) => {
                        const term = e.target.value.toLowerCase();
                        if (!term) displayTools(categoryTools);
                        else displayTools(categoryTools.filter(t =>
                            t.name.toLowerCase().includes(term) ||
                            t.desc.toLowerCase().includes(term) ||
                            t.subcategory.toLowerCase().includes(term)
                        ));
                    };
                }
            } else {
                console.log("Waiting for tools to load...");
                setTimeout(loadCategoryTools, 200);
            }
        }

        function displayTools(tools) {
            const container = document.getElementById('toolsGrid');
            const resultsCount = document.getElementById('resultsCount');

            if (!container) return;
            if (resultsCount) resultsCount.textContent = tools.length;

            if (tools.length === 0) {
                container.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                        <p class="text-xl text-gray-500">No tools found in this category</p>
                        <p class="text-gray-400 mt-2">Try a different category or check back later</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = tools.map(tool => `
                <div class="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-purple-600">${escapeHtml(tool.name)}</h3>
                        <span class="text-xs px-2 py-1 rounded-full ${tool.price === 'Free' ? 'bg-green-100 text-green-700' : tool.price === 'Free/Paid' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}">${tool.price}</span>
                    </div>
                    <p class="text-gray-500 text-sm mb-2">${escapeHtml(tool.subcategory)}</p>
                    <p class="text-gray-600 mb-4 text-sm">${escapeHtml(tool.desc.substring(0, 120))}${tool.desc.length > 120 ? '...' : ''}</p>
                    <a href="${tool.url}" target="_blank" class="text-purple-600 font-semibold inline-flex items-center group">
                        Try Tool <i class="fas fa-external-link-alt ml-1 text-xs group-hover:translate-x-1 transition"></i>
                    </a>
                </div>
            `).join('');
        }

        // Start loading tools
        loadCategoryTools();
    }
}