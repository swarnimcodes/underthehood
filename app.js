const engines = [
    {
        id: "fiat-multijet-II",
        name: "Fiat Multijet Diesel II",
        displacement: "2.0L",
        power: "170 HP",
        fuel: "diesel",
        family: "Multijet",
        cylinders: 4,
        yearRange: "2019-present"
    },
    {
        id: "suzuki-k15C",
        name: "Suzuki K15C",
        displacement: "1.5L",
        power: "103 HP",
        fuel: "petrol",
        family: "K",
        cylinders: 4,
        yearRange: "2022-present",
        notes: "Mild Hybrid"
    },
    {
        id: "toyota-m15D-FXE",
        name: "Toyota M15D-FXE",
        displacement: "1.5L",
        power: "92 HP",
        fuel: "hybrid",
        family: "M15D",
        cylinders: 3,
        yearRange: "2022-present",
        notes: "Strong Hybrid"
    },
    {
        id: "hyundai-g4fl",
        name: "Smartstream G1.5 MPi",
        displacement: "1.5L",
        power: "115 HP",
        fuel: "petrol",
        family: "Gamma",
        cylinders: 4,
        code: "G4FL",
        yearRange: "2019-present"
    },
    {
        id: "hyundai-g4lh",
        name: "Smartstream G1.5 T-GDi",
        displacement: "1.5L",
        power: "160 HP",
        fuel: "petrol",
        family: "Kappa",
        cylinders: 4,
        code: "G4LH",
        yearRange: "2019-present",
        notes: "Turbocharged"
    },
    {
        id: "hyundai-d4fb",
        name: "1.5L CRDi VGT",
        displacement: "1.5L",
        power: "115 HP",
        fuel: "diesel",
        family: "U2",
        cylinders: 4,
        code: "D4FB",
        yearRange: "2019-present"
    },
    {
        id: "honda-l15b",
        name: "Honda L15B",
        displacement: "1.5L",
        power: "121 HP",
        fuel: "petrol",
        family: "L-series",
        cylinders: 4,
        yearRange: "2019-present",
        notes: "i-VTEC, DOHC, Atkinson Cycle"
    },
    {
        id: "honda-l15b-hev",
        name: "Honda L15B e:HEV",
        displacement: "1.5L",
        power: "98 HP",
        fuel: "hybrid",
        family: "L15B",
        cylinders: 4,
        code: "LEB-H5",
        yearRange: "2020-present",
        notes: "Strong Hybrid"
    },
    {
        id: "toyota-1gd-ftv",
        name: "Toyota 1GD-FTV",
        displacement: "2.8L",
        power: "201 HP",
        fuel: "diesel",
        family: "GD",
        cylinders: 4,
        code: "1GD-FTV",
        yearRange: "2015-present",
        notes: "Turbocharged Diesel"
    },
    {
        id: "toyota-m20a-fks",
        name: "Toyota M20A-FKS",
        displacement: "2.0L",
        power: "174 HP",
        fuel: "petrol",
        family: "Dynamic Force",
        cylinders: 4,
        code: "M20A-FKS",
        yearRange: "2018-present",
        notes: "Dual VVT-i"
    },
    {
        id: "toyota-m20a-fxs",
        name: "Toyota M20A-FXS",
        displacement: "2.0L",
        power: "186 HP",
        fuel: "hybrid",
        family: "Dynamic Force",
        cylinders: 4,
        code: "M20A-FXS",
        yearRange: "2018-present",
        notes: "Strong Hybrid"
    },
    {
        id: "toyota-a25a-fxs",
        name: "Toyota A25A-FXS",
        displacement: "2.5L",
        power: "176 HP",
        fuel: "hybrid",
        family: "Dynamic Force",
        cylinders: 4,
        code: "A25A-FXS",
        yearRange: "2018-present",
        notes: "Strong Hybrid"
    },
    {
        id: "suzuki-k15b",
        name: "Suzuki K15B",
        displacement: "1.5L",
        power: "103 HP",
        fuel: "petrol",
        family: "K",
        cylinders: 4,
        code: "K15B",
        yearRange: "2018-present"
    },
    {
        id: "vw-ea211-tsi",
        name: "VW EA211 TSI",
        displacement: "1.0L",
        power: "115 HP",
        fuel: "petrol",
        family: "EA211",
        cylinders: 3,
        code: "EA211",
        yearRange: "2017-present",
        notes: "Turbocharged"
    },
    {
        id: "vw-ea211-evo2",
        name: "VW EA211 EVO2 TSI",
        displacement: "1.5L",
        power: "150 HP",
        fuel: "petrol",
        family: "EA211",
        cylinders: 4,
        code: "EA211 EVO2",
        yearRange: "2020-present",
        notes: "Turbocharged, Miller Cycle"
    },
    {
        id: "mahindra-mhawk",
        name: "Mahindra mHawk 2.2",
        displacement: "2.2L",
        power: "172 HP",
        fuel: "diesel",
        family: "mHawk",
        cylinders: 4,
        code: "mHawk 2.2",
        yearRange: "2019-present",
        notes: "CRDi, VGT"
    },
    {
        id: "mahindra-mstallion",
        name: "Mahindra mStallion",
        displacement: "2.0L",
        power: "200 HP",
        fuel: "petrol",
        family: "Gecko",
        cylinders: 4,
        code: "mStallion",
        yearRange: "2020-present",
        notes: "Turbocharged"
    },
    {
        id: "honda-l15c7",
        name: "Honda L15C7",
        displacement: "1.5L",
        power: "178 HP",
        fuel: "petrol",
        family: "L-series",
        cylinders: 4,
        code: "L15C7",
        yearRange: "2022-present",
        notes: "Turbo, VTEC"
    }
];

const cars = [
    {
        id: "tata-harrier",
        name: "Tata Harrier",
        brand: "Tata",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "tata-safari",
        name: "Tata Safari",
        brand: "Tata",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "mg-hector",
        name: "MG Hector",
        brand: "MG",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "jeep-meridian",
        name: "Jeep Meridian",
        brand: "Jeep",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "jeep-compass",
        name: "Jeep Compass",
        brand: "Jeep",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "toyota-hyryder",
        name: "Toyota Hyryder",
        brand: "Toyota",
        engines: ["suzuki-k15C", "toyota-m15D-FXE"]
    },
    {
        id: "suzuki-grand-vitara",
        name: "Suzuki Grand Vitara",
        brand: "Suzuki",
        engines: ["suzuki-k15C", "toyota-m15D-FXE"]
    },
    {
        id: "kia-seltos",
        name: "Kia Seltos",
        brand: "Kia",
        engines: ["hyundai-g4fl", "hyundai-g4lh", "hyundai-d4fb"]
    },
    {
        id: "kia-sonet",
        name: "Kia Sonet",
        brand: "Kia",
        engines: ["hyundai-g4fl", "hyundai-g4lh", "hyundai-d4fb"]
    },
    {
        id: "hyundai-creta",
        name: "Hyundai Creta",
        brand: "Hyundai",
        engines: ["hyundai-g4fl", "hyundai-g4lh", "hyundai-d4fb"]
    },
    {
        id: "honda-city",
        name: "Honda City",
        brand: "Honda",
        engines: ["honda-l15b", "honda-l15b-hev"]
    },
    {
        id: "honda-elevate",
        name: "Honda Elevate",
        brand: "Honda",
        engines: ["honda-l15b"]
    },
    {
        id: "toyota-fortuner",
        name: "Toyota Fortuner",
        brand: "Toyota",
        engines: ["toyota-1gd-ftv"]
    },
    {
        id: "toyota-hilux",
        name: "Toyota Hilux",
        brand: "Toyota",
        engines: ["toyota-1gd-ftv"]
    },
    {
        id: "toyota-innova-hycross",
        name: "Toyota Innova Hycross",
        brand: "Toyota",
        engines: ["toyota-m20a-fks", "toyota-m20a-fxs"]
    },
    {
        id: "toyota-corolla",
        name: "Toyota Corolla",
        brand: "Toyota",
        engines: ["toyota-m20a-fxs", "toyota-a25a-fxs"]
    },
    {
        id: "toyota-camry",
        name: "Toyota Camry",
        brand: "Toyota",
        engines: ["toyota-a25a-fxs"]
    },
    {
        id: "suzuki-jimny",
        name: "Suzuki Jimny",
        brand: "Suzuki",
        engines: ["suzuki-k15b"]
    },
    {
        id: "suzuki-ciaz",
        name: "Suzuki Ciaz",
        brand: "Suzuki",
        engines: ["suzuki-k15b"]
    },
    {
        id: "vw-virtus",
        name: "VW Virtus",
        brand: "Volkswagen",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "skoda-slavia",
        name: "Skoda Slavia",
        brand: "Skoda",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "vw-taigun",
        name: "VW Taigun",
        brand: "Volkswagen",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "skoda-kushaq",
        name: "Skoda Kushaq",
        brand: "Skoda",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "mahindra-thar-roxx",
        name: "Mahindra Thar Roxx",
        brand: "Mahindra",
        engines: ["mahindra-mhawk", "mahindra-mstallion"]
    },
    {
        id: "mahindra-xuv700",
        name: "Mahindra XUV700",
        brand: "Mahindra",
        engines: ["mahindra-mhawk", "mahindra-mstallion"]
    },
    {
        id: "mahindra-xuv7xo",
        name: "Mahindra XUV 7XO",
        brand: "Mahindra",
        engines: ["mahindra-mhawk", "mahindra-mstallion"]
    },
    {
        id: "honda-civic",
        name: "Honda Civic",
        brand: "Honda",
        engines: ["honda-l15c7"]
    }
];

const fuelColors = {
    diesel: "#c75b39",
    petrol: "#d4a84b",
    hybrid: "#5a9c6d"
};

let currentTheme = 'light';

function getColors() {
    if (currentTheme === 'dark') {
        return {
            text: '#e8e8e8',
            fontBg: 'rgba(13, 13, 13, 0.85)',
            car: '#b0b0b0',
            edge: 'rgba(180, 150, 110, 0.5)'
        };
    }
    return {
        text: '#2d2d2d',
        fontBg: 'rgba(245, 242, 235, 0.8)',
        car: '#4a4a4a',
        edge: 'rgba(160, 128, 96, 0.5)'
    };
}

function buildGraph() {
    const colors = getColors();
    const nodes = [];
    const edges = [];

    engines.forEach(engine => {
        nodes.push({
            id: engine.id,
            label: engine.name,
            group: "engine",
            shape: "hexagon",
            size: 26,
            color: {
                background: fuelColors[engine.fuel],
                border: fuelColors[engine.fuel],
                highlight: { background: fuelColors[engine.fuel], border: colors.text }
            },
            font: { color: colors.text, background: colors.fontBg },
            data: engine
        });
    });

    cars.forEach((car, i) => {
        nodes.push({
            id: car.id,
            label: car.name,
            group: "car",
            shape: "dot",
            size: 20,
            color: {
                background: colors.car,
                border: colors.car,
                highlight: { background: "#fff", border: "#fff" }
            },
            font: { color: colors.text, background: colors.fontBg },
            data: car
        });

        car.engines.forEach(engineId => {
            edges.push({
                from: car.id,
                to: engineId,
                color: { color: colors.edge, highlight: colors.edge },
                width: 2,
                smooth: { type: "continuous" }
            });
        });
    });

    return { nodes, edges };
}

const graphData = buildGraph();
const container = document.getElementById("network");
const data = { nodes: new vis.DataSet(graphData.nodes), edges: new vis.DataSet(graphData.edges) };

const options = {
    nodes: {
        borderWidth: 3,
        shadow: { enabled: true, color: "rgba(160, 128, 96, 0.3)", size: 10, x: 0, y: 4 }
    },
    edges: {
        arrows: { to: { enabled: true, scaleFactor: 0.6 } }
    },
    physics: {
        enabled: true,
        solver: "forceAtlas2Based",
        forceAtlas2Based: { 
            gravitationalConstant: -100, 
            centralGravity: 0.01, 
            springLength: 150,
            springConstant: 0.02
        },
        stabilization: { iterations: 300 }
    },
    interaction: {
        hover: true,
        tooltipDelay: 200
    }
};

const network = new vis.Network(container, data, options);

network.once("stabilized", function() {
    network.moveTo({ scale: 1.0, animation: true });
});

network.on("hoverNode", function () {
    container.style.cursor = 'pointer';
});

network.on("blurNode", function () {
    container.style.cursor = 'grab';
});

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        currentTheme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
    }
    applyTheme(false);
}

function applyTheme(save) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = currentTheme === 'light' ? 'Switch to Dark' : 'Switch to Light';

    const colors = getColors();
    data.nodes.forEach(function(node) {
        const isCar = node.group === 'car';
        data.nodes.update({
            id: node.id,
            color: {
                background: isCar ? colors.car : node.color.background,
                border: isCar ? colors.car : node.color.border,
                highlight: { background: isCar ? '#fff' : node.color.background, border: colors.text }
            },
            font: { color: colors.text, background: colors.fontBg }
        });
    });
    
    data.edges.forEach(function(edge) {
        data.edges.update({
            id: edge.id,
            color: { color: colors.edge, highlight: colors.edge }
        });
    });

    if (save) {
        localStorage.setItem('theme', currentTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(true);
}

initTheme();

const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
let searchIndex = 0;
let filteredResults = [];
let allSearchItems = [];

function buildSearchIndex() {
    allSearchItems = [];
    engines.forEach(e => {
        allSearchItems.push({
            id: e.id,
            name: e.name,
            code: e.code || '',
            type: 'engine',
            data: e
        });
    });
    cars.forEach(c => {
        allSearchItems.push({
            id: c.id,
            name: c.name,
            code: '',
            type: 'car',
            data: c
        });
    });
}

function search(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];
    return allSearchItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.code.toLowerCase().includes(query)
    );
}

function renderResults(results) {
    searchResults.innerHTML = '';
    results.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'search-result' + (i === searchIndex ? ' selected' : '');
        div.innerHTML = `
            <span class="search-result-name">${item.name}</span>
            <span class="search-result-type">${item.type}</span>
        `;
        div.onclick = () => selectResult(item);
        searchResults.appendChild(div);
    });
}

function openSearch() {
    searchModal.classList.add("visible");
    searchInput.value = '';
    searchIndex = 0;
    filteredResults = search('');
    renderResults(filteredResults);
    searchInput.focus();
}

function closeSearch() {
    searchModal.classList.remove("visible");
    searchInput.blur();
}

function selectResult(item) {
    closeSearch();
    network.selectNodes([item.id]);
    network.focus(item.id, { scale: 1.5, animation: true });
    const node = data.nodes.get(item.id);
    if (node.group === 'engine') {
        const e = node.data;
        document.getElementById("infoType").textContent = "Engine";
        document.getElementById("infoType").className = "type-badge engine";
        document.getElementById("infoTitle").textContent = e.name;
        document.getElementById("infoDetails").innerHTML = `
            <div class="detail"><span class="detail-label">Displacement</span><span class="detail-value">${e.displacement}</span></div>
            <div class="detail"><span class="detail-label">Power</span><span class="detail-value">${e.power}</span></div>
            <div class="detail"><span class="detail-label">Fuel</span><span class="detail-value" style="text-transform:capitalize">${e.fuel}</span></div>
            <div class="detail"><span class="detail-label">Cylinders</span><span class="detail-value">${e.cylinders}</span></div>
            ${e.code ? `<div class="detail"><span class="detail-label">Code</span><span class="detail-value">${e.code}</span></div>` : ""}
            <div class="detail"><span class="detail-label">Years</span><span class="detail-value">${e.yearRange}</span></div>
            ${e.notes ? `<div class="detail"><span class="detail-label">Notes</span><span class="detail-value">${e.notes}</span></div>` : ""}
        `;
    } else {
        const c = node.data;
        const engineNames = c.engines.map(id => {
            const eng = engines.find(e => e.id === id);
            return eng ? eng.name : id;
        }).join(", ");
        document.getElementById("infoType").textContent = "Car";
        document.getElementById("infoType").className = "type-badge car";
        document.getElementById("infoTitle").textContent = c.name;
        document.getElementById("infoDetails").innerHTML = `
            <div class="detail"><span class="detail-label">Brand</span><span class="detail-value">${c.brand}</span></div>
            <div class="detail"><span class="detail-label">Engines</span><span class="detail-value" style="font-size:11px">${engineNames}</span></div>
        `;
    }
    document.getElementById("infoPanel").classList.add("visible");
}

document.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        openSearch();
    }
    if (!searchModal.classList.contains('visible')) return;
    
    if (e.key === 'Escape') {
        closeSearch();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchIndex = Math.min(searchIndex + 1, filteredResults.length - 1);
        renderResults(filteredResults);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchIndex = Math.max(searchIndex - 1, 0);
        renderResults(filteredResults);
    } else if (e.key === 'Enter' && filteredResults.length > 0) {
        e.preventDefault();
        selectResult(filteredResults[searchIndex]);
    }
});

searchInput.addEventListener('input', function() {
    searchIndex = 0;
    filteredResults = search(this.value);
    renderResults(filteredResults);
});

buildSearchIndex();

const infoPanel = document.getElementById("infoPanel");
const infoType = document.getElementById("infoType");
const infoTitle = document.getElementById("infoTitle");
const infoDetails = document.getElementById("infoDetails");

network.on("click", function (params) {
    if (params.nodes.length === 0) {
        infoPanel.classList.remove("visible");
        resetEdgeStyles();
        return;
    }

    const nodeId = params.nodes[0];
    const node = data.nodes.get(nodeId);
    const colors = getColors();

    if (node.group === "engine") {
        const e = node.data;
        infoType.textContent = "Engine";
        infoType.className = "type-badge engine";
        infoTitle.textContent = e.name;
        infoDetails.innerHTML = `
            <div class="detail"><span class="detail-label">Displacement</span><span class="detail-value">${e.displacement}</span></div>
            <div class="detail"><span class="detail-label">Power</span><span class="detail-value">${e.power}</span></div>
            <div class="detail"><span class="detail-label">Fuel</span><span class="detail-value" style="text-transform:capitalize">${e.fuel}</span></div>
            <div class="detail"><span class="detail-label">Cylinders</span><span class="detail-value">${e.cylinders}</span></div>
            ${e.code ? `<div class="detail"><span class="detail-label">Code</span><span class="detail-value">${e.code}</span></div>` : ""}
            <div class="detail"><span class="detail-label">Years</span><span class="detail-value">${e.yearRange}</span></div>
            ${e.notes ? `<div class="detail"><span class="detail-label">Notes</span><span class="detail-value">${e.notes}</span></div>` : ""}
        `;

        data.edges.forEach(function(edge) {
            if (edge.to === nodeId || edge.from === nodeId) {
                data.edges.update({
                    id: edge.id,
                    color: { color: colors.text, highlight: colors.text },
                    width: 3
                });
            }
        });
    } else {
        const c = node.data;
        const engineNames = c.engines.map(id => {
            const eng = engines.find(e => e.id === id);
            return eng ? eng.name : id;
        }).join(", ");
        infoType.textContent = "Car";
        infoType.className = "type-badge car";
        infoTitle.textContent = c.name;
        infoDetails.innerHTML = `
            <div class="detail"><span class="detail-label">Brand</span><span class="detail-value">${c.brand}</span></div>
            <div class="detail"><span class="detail-label">Engines</span><span class="detail-value" style="font-size:11px">${engineNames}</span></div>
        `;

        c.engines.forEach(function(engineId) {
            data.edges.forEach(function(edge) {
                if ((edge.from === nodeId && edge.to === engineId) || (edge.from === engineId && edge.to === nodeId)) {
                    data.edges.update({
                        id: edge.id,
                        color: { color: colors.text, highlight: colors.text },
                        width: 3
                    });
                }
            });
        });
    }

    infoPanel.classList.add("visible");
});

function resetEdgeStyles() {
    const colors = getColors();
    data.edges.forEach(function(edge) {
        data.edges.update({
            id: edge.id,
            color: { color: colors.edge, highlight: colors.edge },
            width: 2
        });
    });
}
