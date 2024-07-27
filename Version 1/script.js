const treeData = [
    {"tree_type": "Paulownia", "firewood": "2x2", "industrial": "4x4"},
    {"tree_type": "Apple", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Pine", "firewood": "2.5x2.5", "industrial": "3.5x3.5"},
    {"tree_type": "Oak", "firewood": "3x3", "industrial": "5x5"},
    {"tree_type": "Maple", "firewood": "2.5x2.5", "industrial": "4x4"},
    {"tree_type": "Cherry", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Plum", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Walnut", "fruit": "6x6", "firewood": "4x4"},
    {"tree_type": "Chestnut", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Beech", "firewood": "3x3", "industrial": "4.5x4.5"},
    {"tree_type": "Birch", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Cedar", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Cypress", "firewood": "2.5x2.5", "industrial": "3.5x3.5"},
    {"tree_type": "Douglas Fir", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Elm", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Eucalyptus", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Hickory", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Holly", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Juniper", "firewood": "2.5x2.5", "industrial": "3.5x3.5"},
    {"tree_type": "Larch", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Lime", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Magnolia", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Mulberry", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Orange", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Peach", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Pecan", "fruit": "6x6", "firewood": "4x4"},
    {"tree_type": "Pear", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Pineapple", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Poplar", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Redwood", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Sequoia", "firewood": "4x4", "industrial": "5x5"},
    {"tree_type": "Spruce", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Sycamore", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Tamarind", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Teak", "firewood": "3x3", "industrial": "4x4"},
    {"tree_type": "Walnut", "fruit": "6x6", "firewood": "4x4"},
    {"tree_type": "Willow", "firewood": "2x2", "industrial": "3x3"},
    {"tree_type": "Yew", "firewood": "2.5x2.5", "industrial": "3.5x3.5"},
    {"tree_type": "Almond", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Apricot", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Avocado", "fruit": "6x6", "firewood": "4x4"},
    {"tree_type": "Banana", "fruit": "2x2", "firewood": "3x3"},
    {"tree_type": "Blackberry", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Blueberry", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Coconut", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Fig", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Grapefruit", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Kiwi", "fruit": "3x3", "firewood": "2x2"},
    {"tree_type": "Lemon", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Lime", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Lychee", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Mango", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Olive", "fruit": "6x6", "firewood": "4x4"},
    {"tree_type": "Papaya", "fruit": "2x2", "firewood": "3x3"},
    {"tree_type": "Passion Fruit", "fruit": "2x2", "firewood": "3x3"},
    {"tree_type": "Persimmon", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Pomegranate", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Raspberry", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Starfruit", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Strawberry", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Tangerine", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Mulberry", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Peach", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Pineapple", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Pomelo", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Quince", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Rambutan", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Soursop", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "White Sapote", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Black Sapote", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Cherimoya", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Durian", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Jackfruit", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Mangosteen", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Longan", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Sapodilla", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Breadfruit", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Dragon Fruit", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Goji Berry", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Jujube", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Kumquat", "fruit": "3x3", "firewood": "2x2"},
    {"tree_type": "Medlar", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Miracle Fruit", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Noni", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Rose Apple", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Santol", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Sugar Apple", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Tamarillo", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Yangmei", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Cempedak", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Finger Lime", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Kaffir Lime", "fruit": "4x4", "firewood": "3x3"},
    {"tree_type": "Langsat", "fruit": "5x5", "firewood": "3x3"},
    {"tree_type": "Pepino", "fruit": "1x1", "firewood": "2x2"},
    {"tree_type": "Salak", "fruit": "5x5", "firewood": "3x3"}
];

function updateSuggestedValues() {
    const treeType = document.getElementById("treeType").value;
    const suggestedValuesDiv = document.getElementById("suggestedValues");

    let suggestions = "";
    
    if (treeType === "Paulownia") {
        suggestions = `
            <p>Suggested distances for Paulownia:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Apple") {
        suggestions = `
            <p>Suggested distances for Apple:</p>
            <ul>
                <li>5x5 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Pine") {
        suggestions = `
            <p>Suggested distances for Pine:</p>
            <ul>
                <li>2.5x2.5 (firewood production)</li>
                <li>3.5x3.5 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Oak") {
        suggestions = `
            <p>Suggested distances for Oak:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>5x5 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Maple") {
        suggestions = `
            <p>Suggested distances for Maple:</p>
            <ul>
                <li>2.5x2.5 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Cherry") {
        suggestions = `
            <p>Suggested distances for Cherry:</p>
            <ul>
                <li>4x4 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Plum") {
        suggestions = `
            <p>Suggested distances for Plum:</p>
            <ul>
                <li>5x5 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Walnut") {
        suggestions = `
            <p>Suggested distances for Walnut:</p>
            <ul>
                <li>6x6 (fruit production)</li>
                <li>4x4 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Chestnut") {
        suggestions = `
            <p>Suggested distances for Chestnut:</p>
            <ul>
                <li>5x5 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Beech") {
        suggestions = `
            <p>Suggested distances for Beech:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>4.5x4.5 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Birch") {
        suggestions = `
            <p>Suggested distances for Birch:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Cedar") {
        suggestions = `
            <p>Suggested distances for Cedar:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Cypress") {
        suggestions = `
            <p>Suggested distances for Cypress:</p>
            <ul>
                <li>2.5x2.5 (firewood production)</li>
                <li>3.5x3.5 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Douglas Fir") {
        suggestions = `
            <p>Suggested distances for Douglas Fir:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Elm") {
        suggestions = `
            <p>Suggested distances for Elm:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Eucalyptus") {
        suggestions = `
            <p>Suggested distances for Eucalyptus:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Hickory") {
        suggestions = `
            <p>Suggested distances for Hickory:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Holly") {
        suggestions = `
            <p>Suggested distances for Holly:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Juniper") {
        suggestions = `
            <p>Suggested distances for Juniper:</p>
            <ul>
                <li>2.5x2.5 (firewood production)</li>
                <li>3.5x3.5 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Larch") {
        suggestions = `
            <p>Suggested distances for Larch:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Lime") {
        suggestions = `
            <p>Suggested distances for Lime:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Magnolia") {
        suggestions = `
            <p>Suggested distances for Magnolia:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Mulberry") {
        suggestions = `
            <p>Suggested distances for Mulberry:</p>
            <ul>
                <li>4x4 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Orange") {
        suggestions = `
            <p>Suggested distances for Orange:</p>
            <ul>
                <li>5x5 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Peach") {
        suggestions = `
            <p>Suggested distances for Peach:</p>
            <ul>
                <li>4x4 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Pecan") {
        suggestions = `
            <p>Suggested distances for Pecan:</p>
            <ul>
                <li>6x6 (fruit production)</li>
                <li>4x4 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Pear") {
        suggestions = `
            <p>Suggested distances for Pear:</p>
            <ul>
                <li>5x5 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Pineapple") {
        suggestions = `
            <p>Suggested distances for Pineapple:</p>
            <ul>
                <li>1x1 (fruit production)</li>
                <li>2x2 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Poplar") {
        suggestions = `
            <p>Suggested distances for Poplar:</p>
            <ul>
                <li>2x2 (firewood production)</li>
                <li>3x3 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Redwood") {
        suggestions = `
            <p>Suggested distances for Redwood:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>5x5 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Sapodilla") {
        suggestions = `
            <p>Suggested distances for Sapodilla:</p>
            <ul>
                <li>4x4 (fruit production)</li>
                <li>3x3 (firewood production)</li>
            </ul>
        `;
    } else if (treeType === "Teak") {
        suggestions = `
            <p>Suggested distances for Teak:</p>
            <ul>
                <li>3x3 (firewood production)</li>
                <li>4x4 (industrial material production)</li>
            </ul>
        `;
    } else if (treeType === "Walnut") {
        suggestions = `
            <p>Suggested distances for Walnut:</p>
            <ul>
                <li>6x6 (fruit production)</li>
                <li>4x4 (firewood production)</li>
            </ul>
        `;
    } else {
        suggestions = `<p>No suggestions available for the selected tree type.</p>`;
    }

    suggestedValuesDiv.innerHTML = suggestions;
}


function updateUnitLabels() {
    const unit = document.getElementById("unit").value;
    document.querySelector('label[for="distanceX"]').innerText = `Enter Distance Between Trees (X) (${unit}):`;
    document.querySelector('label[for="distanceY"]').innerText = `Enter Distance Between Trees (Y) (${unit}):`;
    document.querySelector('label[for="landWidth"]').innerText = `Enter Land Width (${unit}):`;
    document.querySelector('label[for="landHeight"]').innerText = `Enter Land Height (${unit}):`;
}

function calculateTrees() {
    const treeType = document.getElementById("treeType").value;
    const plantingShape = document.getElementById("plantingShape").value;
    let distanceX = parseFloat(document.getElementById("distanceX").value);
    let distanceY = parseFloat(document.getElementById("distanceY").value);
    let landWidth = parseFloat(document.getElementById("landWidth").value);
    let landHeight = parseFloat(document.getElementById("landHeight").value);
    const unit = document.getElementById("unit").value;

    if (unit === "feet") {
        distanceX = convertFeetToMeters(distanceX);
        distanceY = convertFeetToMeters(distanceY);
        landWidth = convertFeetToMeters(landWidth);
        landHeight = convertFeetToMeters(landHeight);
    }

    const numTrees = calculateNumberOfTrees(landWidth, landHeight, distanceX, distanceY, plantingShape);
    displayResult(numTrees);
    drawField(landWidth, landHeight, distanceX, distanceY, plantingShape);
}

function convertFeetToMeters(feet) {
    return feet * 0.3048;
}

function calculateNumberOfTrees(width, height, distanceX, distanceY, shape) {
    let numTrees;
    if (shape === "chess") {
        numTrees = Math.floor(width / distanceX) * Math.floor(height / distanceY);
    } else if (shape === "diagonal") {
        numTrees = Math.floor(width / distanceX) * Math.floor(height / distanceY) - Math.floor((width / distanceX) / 2);
    }
    return numTrees;
}

function displayResult(numTrees) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You can plant approximately ${numTrees} trees on the given land.`;
}

function drawField(width, height, distanceX, distanceY, shape) {
    const canvas = document.getElementById("fieldCanvas");
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scale the canvas to fit the field
    const scale = Math.min(canvas.width / width, canvas.height / height);
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;

    // Draw the field boundary
    ctx.strokeStyle = "#000";
    ctx.strokeRect((canvas.width - scaledWidth) / 2, (canvas.height - scaledHeight) / 2, scaledWidth, scaledHeight);

    // Draw the trees
    ctx.fillStyle = "green";
    for (let x = distanceX / 2; x < width; x += distanceX) {
        for (let y = distanceY / 2; y < height; y += distanceY) {
            const drawX = (x * scale) + (canvas.width - scaledWidth) / 2;
            const drawY = (y * scale) + (canvas.height - scaledHeight) / 2;

            ctx.beginPath();
            ctx.arc(drawX, drawY, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    if (shape === "diagonal") {
        for (let x = distanceX; x < width; x += distanceX) {
            for (let y = distanceY; y < height; y += distanceY) {
                const drawX = ((x - distanceX / 2) * scale) + (canvas.width - scaledWidth) / 2;
                const drawY = ((y - distanceY / 2) * scale) + (canvas.height - scaledHeight) / 2;

                ctx.beginPath();
                ctx.arc(drawX, drawY, 5, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

// Adjust canvas size based on the container size
window.addEventListener("resize", adjustCanvasSize);

function adjustCanvasSize() {
    const container = document.querySelector(".container");
    const canvas = document.getElementById("fieldCanvas");
    canvas.width = container.clientWidth - 40; // Adjust for padding
    canvas.height = canvas.width; // Maintain a square aspect ratio
}

document.addEventListener('DOMContentLoaded', function () {
    const treeTypeSelect = document.getElementById('treeType');
    const suggestedDistancesDiv = document.getElementById('suggestedDistances');

    // Populate tree type dropdown
    treeData.forEach(tree => {
        const option = document.createElement('option');
        option.value = tree.tree_type;
        option.textContent = tree.tree_type;
        treeTypeSelect.appendChild(option);
    });

    // Handle tree type selection
    treeTypeSelect.addEventListener('change', function () {
        const selectedTree = treeData.find(tree => tree.tree_type === this.value);
        suggestedDistancesDiv.innerHTML = ''; // Clear previous suggestions

        if (selectedTree) {
            const firewood = selectedTree.firewood ? `<p>Firewood: ${selectedTree.firewood}</p>` : '';
            const industrial = selectedTree.industrial ? `<p>Industrial: ${selectedTree.industrial}</p>` : '';
            const fruit = selectedTree.fruit ? `<p>Fruit: ${selectedTree.fruit}</p>` : '';
            suggestedDistancesDiv.innerHTML = `${firewood}${industrial}${fruit}`;
        }
    });
});

// Initial call to set suggested values based on the default selected tree type and adjust canvas size
updateSuggestedValues();
updateUnitLabels();
adjustCanvasSize();
