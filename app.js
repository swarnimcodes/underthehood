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
            edge: 'rgba(180, 150, 110, 0.5)',
            shadow: 'rgba(255, 255, 255, 0.2)'
        };
    }
    return {
        text: '#2d2d2d',
        fontBg: 'rgba(245, 242, 235, 0.8)',
        car: '#4a4a4a',
        edge: 'rgba(160, 128, 96, 0.5)',
        shadow: 'rgba(100, 80, 60, 0.4)'
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
            shadow: { enabled: true, color: colors.shadow, size: 12, x: 0, y: 4 },
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
            shadow: { enabled: true, color: colors.shadow, size: 12, x: 0, y: 4 },
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
        borderWidth: 3
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
            font: { color: colors.text, background: colors.fontBg },
            shadow: { enabled: true, color: colors.shadow, size: 15, x: 0, y: 6 }
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
    const colors = getColors();
    data.nodes.update({
        id: item.id,
        borderWidth: 5,
        shadow: { enabled: true, color: currentTheme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(160,128,96,0.8)', size: 25, x: 0, y: 0 }
    });
    setTimeout(function() {
        data.nodes.update({
            id: item.id,
            borderWidth: 3,
            shadow: { enabled: true, color: colors.shadow, size: 12, x: 0, y: 4 }
        });
    }, 400);
    const node = data.nodes.get(item.id);
    if (node.group === 'engine') {
        const e = node.data;
        document.getElementById("infoType").textContent = "Engine";
        document.getElementById("infoType").className = "type-badge engine";
        document.getElementById("infoTitle").textContent = e.name;
        document.getElementById("infoDetails").innerHTML = `
            <div class="detail"><span class="detail-label">Displacement</span><span class="detail-value">${e.displacement}</span></div>
            <div class="detail"><span class="detail-label">Power</span><span class="detail-value">${e.power}</span></div>
            <div class="detail"><span class="detail-label">Torque</span><span class="detail-value">${e.torque}</span></div>
            <div class="detail"><span class="detail-label">Aspiration</span><span class="detail-value">${e.aspiration}</span></div>
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

    data.nodes.update({
        id: nodeId,
        borderWidth: 5,
        shadow: { enabled: true, color: currentTheme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(160,128,96,0.8)', size: 25, x: 0, y: 0 }
    });
    setTimeout(function() {
        data.nodes.update({
            id: nodeId,
            borderWidth: 3,
            shadow: { enabled: true, color: colors.shadow, size: 12, x: 0, y: 4 }
        });
    }, 400);

    if (node.group === "engine") {
        const e = node.data;
        infoType.textContent = "Engine";
        infoType.className = "type-badge engine";
        infoTitle.textContent = e.name;
        infoDetails.innerHTML = `
            <div class="detail"><span class="detail-label">Displacement</span><span class="detail-value">${e.displacement}</span></div>
            <div class="detail"><span class="detail-label">Power</span><span class="detail-value">${e.power}</span></div>
            <div class="detail"><span class="detail-label">Torque</span><span class="detail-value">${e.torque}</span></div>
            <div class="detail"><span class="detail-label">Aspiration</span><span class="detail-value">${e.aspiration}</span></div>
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