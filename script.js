// Sample data for profile cards
const profileData = [
    {
        id: 1,
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        designation: "Software Engineer",
        year: "2022",
        tags: ["javascript", "python", "data"]
    },
    {
        id: 2,
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        designation: "Product Manager",
        year: "2021",
        tags: ["product", "design"]
    },
    {
        id: 3,
        name: "Emma Johnson",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        designation: "UX Designer",
        year: "2023",
        tags: ["design", "product"]
    },
    {
        id: 4,
        name: "Michael Chen",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        designation: "Data Scientist",
        year: "2020",
        tags: ["python", "data"]
    },
    {
        id: 5,
        name: "Olivia Garcia",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        designation: "Software Engineer",
        year: "2022",
        tags: ["javascript", "python"]
    },
    {
        id: 6,
        name: "William Taylor",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        designation: "Product Manager",
        year: "2023",
        tags: ["product"]
    },
    {
        id: 7,
        name: "Sophia Martinez",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        designation: "Data Scientist",
        year: "2021",
        tags: ["data", "python"]
    },
    {
        id: 8,
        name: "James Wilson",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        designation: "UX Designer",
        year: "2020",
        tags: ["design"]
    },
    {
        id: 9,
        name: "Ava Anderson",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        designation: "Software Engineer",
        year: "2024",
        tags: ["javascript"]
    },
    {
        id: 10,
        name: "David Thompson",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        designation: "Data Scientist",
        year: "2023",
        tags: ["data", "python"]
    },
    {
        id: 11,
        name: "Mia Rodriguez",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        designation: "UX Designer",
        year: "2022",
        tags: ["design", "product"]
    },
    {
        id: 12,
        name: "Benjamin Lee",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        designation: "Product Manager",
        year: "2021",
        tags: ["product"]
    }
];

// DOM elements
const cardGrid = document.getElementById("card-grid");
const searchInput = document.getElementById("search-input");
const designationFilter = document.getElementById("designation-filter");
const yearFilter = document.getElementById("year-filter");
const tagFilter = document.getElementById("tag-filter");
const clearFiltersBtn = document.getElementById("clear-filters");

// State for active filters
let activeFilters = {
    search: "",
    designation: "",
    year: "",
    tag: ""
};

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    populateFilterOptions();
    renderCards(profileData);
    setupEventListeners();
    // createLogo();
});

// Create and append a logo using canvas (if logo.png is not available)
function createLogo() {
    const logoImg = document.querySelector(".logo img");
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 80;
    const ctx = canvas.getContext("2d");
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, "#E33D4F");
    gradient.addColorStop(1, "#8E098B");
    
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 80);
    
    // Add text
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Poppins, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("JAAG", 100, 40);
    
    // Set the canvas data URL as the logo source
    logoImg.src = canvas.toDataURL("image/png");
}

// Populate filter options from profileData
function populateFilterOptions() {
    // Get unique designations
    const designations = [...new Set(profileData.map(profile => profile.designation))];
    designations.sort();
    designations.forEach(designation => {
        const option = document.createElement("option");
        option.value = designation;
        option.textContent = designation;
        designationFilter.appendChild(option);
    });
    
    // Get unique years
    const years = [...new Set(profileData.map(profile => profile.year))];
    years.sort((a, b) => b - a); // Sort years in descending order
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
    
    // Get unique tags
    const tags = [...new Set(profileData.flatMap(profile => profile.tags))];
    tags.sort();
    tags.forEach(tag => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = tag.charAt(0).toUpperCase() + tag.slice(1); // Capitalize first letter
        tagFilter.appendChild(option);
    });
}

// Setup event listeners for filters
function setupEventListeners() {
    // Search input
    searchInput.addEventListener("input", (e) => {
        activeFilters.search = e.target.value.toLowerCase();
        applyFilters();
    });
    
    // Designation filter
    designationFilter.addEventListener("change", (e) => {
        activeFilters.designation = e.target.value;
        applyFilters();
    });
    
    // Year filter
    yearFilter.addEventListener("change", (e) => {
        activeFilters.year = e.target.value;
        applyFilters();
    });
    
    // Tag filter
    tagFilter.addEventListener("change", (e) => {
        activeFilters.tag = e.target.value;
        applyFilters();
    });
    
    // Clear filters
    clearFiltersBtn.addEventListener("click", () => {
        // Reset active filters
        activeFilters = {
            search: "",
            designation: "",
            year: "",
            tag: ""
        };
        
        // Reset UI
        searchInput.value = "";
        designationFilter.value = "";
        yearFilter.value = "";
        tagFilter.value = "";
        
        // Render all cards
        renderCards(profileData);
    });
}

// Apply all filters to the data
function applyFilters() {
    let filteredData = profileData;
    
    // Filter by search input (name)
    if (activeFilters.search) {
        filteredData = filteredData.filter(profile => 
            profile.name.toLowerCase().includes(activeFilters.search)
        );
    }
    
    // Filter by designation
    if (activeFilters.designation) {
        filteredData = filteredData.filter(profile => 
            profile.designation === activeFilters.designation
        );
    }
    
    // Filter by year
    if (activeFilters.year) {
        filteredData = filteredData.filter(profile => 
            profile.year === activeFilters.year
        );
    }
    
    // Filter by tag
    if (activeFilters.tag) {
        filteredData = filteredData.filter(profile =>
            profile.tags.includes(activeFilters.tag)
        );
    }
    
    // Render filtered cards
    renderCards(filteredData);
}

// Render profile cards
function renderCards(data) {
    // Clear existing cards
    cardGrid.innerHTML = "";
    
    // If no results, show message
    if (data.length === 0) {
        const noResults = document.createElement("div");
        noResults.className = "no-results";
        noResults.textContent = "No profiles match your filters. Try adjusting your criteria.";
        cardGrid.appendChild(noResults);
        return;
    }
    
    // Create and append cards
    data.forEach(profile => {
        const card = document.createElement("div");
        card.className = "card";
        
        // Create card HTML
        card.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-name">${profile.name}</h3>
                <p class="card-designation">${profile.designation}</p>
                <p class="card-year">Class of ${profile.year}</p>
                <div class="card-tags">
                    ${profile.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("")}
                </div>
            </div>
        `;
        
        // Append card to grid
        cardGrid.appendChild(card);
    });
}