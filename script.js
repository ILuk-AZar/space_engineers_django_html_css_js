// Данные о двигателях
const enginesData = [
    {
        type: "Атмосферный",
        size: "Малый",
        thrust: 84000,
        image: "images/small_atmo.png",
        description: "Эффективен в атмосфере, не работает в космосе.",
        components: ["Steel Plate", "Motor", "Construction Component"]
    },
    {
        type: "Атмосферный",
        size: "Большой",
        thrust: 4250000,
        image: "images/big_atmo.png",
        description: "Подходит для подъёма больших грузов в атмосфере.",
        components: ["Steel Plate", "Motor", "Construction Component", "Metal Grid"]
    },
    {
        type: "Водородный",
        size: "Малый",
        thrust: 98000,
        image: "images/small_hydro.png",
        description: "Использует водород, подходит для вертикального подъёма.",
        components: ["Steel Plate", "Motor", "Construction Component", "Hydrogen Tank"]
    },
    {
        type: "Водородный",
        size: "Большой",
        thrust: 6000000,
        image: "images/large_hydro.png",
        description: "Мощный подъёмный двигатель, требует запаса водорода.",
        components: ["Steel Plate", "Motor", "Construction Component", "Hydrogen Tank", "Metal Grid"]
    }
];

// Функция для расчета необходимого количества двигателей
function calculateEngines() {
    const weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(weight) || weight <= 0) {
        alert("Введите корректный вес корабля.");
        return;
    }

    const resultsSection = document.getElementById("calculationResults");
    resultsSection.innerHTML = "<h3>Результаты расчета:</h3>";

    enginesData.forEach(engine => {
        const count = Math.ceil(weight / engine.thrust);
        const result = document.createElement("p");
        result.textContent = `${count} x ${engine.size} ${engine.type} двигатель(я)`;
        resultsSection.appendChild(result);
    });
}

// Функция для отображения информации о двигателях
function displayEnginesInfo() {
    const enginesInfoSection = document.getElementById("enginesInfo");
    enginesData.forEach((engine, index) => {
        const engineCard = document.createElement("div");
        engineCard.className = `col-md-6 mb-4 d-flex align-items-stretch engine-info-${index % 2 ? 'right' : 'left'}`;
        engineCard.innerHTML = `
            <div class="card">
                <img src="${engine.image}" class="card-img-top" alt="${engine.size} ${engine.type} Thruster">
                <div class="card-body">
                    <h5 class="card-title">${engine.size} ${engine.type} Thruster</h5>
                    <p class="card-text">${engine.description}</p>
                    <p><strong>Тяга:</strong> ${engine.thrust.toLocaleString()} Н</p>
                    <p><strong>Компоненты:</strong> ${engine.components.join(", ")}</p>
                </div>
            </div>
        `;
        enginesInfoSection.appendChild(engineCard);
    });
}

// Вызов функции для отображения информации о двигателях при загрузке страницы
window.onload = displayEnginesInfo;
