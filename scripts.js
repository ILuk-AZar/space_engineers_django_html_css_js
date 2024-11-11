function calculateEngines() {
    const shipWeight = parseFloat(document.getElementById('shipWeight').value);
    const engineThrust = parseFloat(document.getElementById('engineType').value);

    if (isNaN(shipWeight) || isNaN(engineThrust) || shipWeight <= 0) {
        document.getElementById('result').innerText = 'Пожалуйста, введите корректный вес и выберите тип двигателя.';
        return;
    }

    const requiredThrust = shipWeight * 9.81;
    const engineCount = Math.ceil(requiredThrust / engineThrust);

    document.getElementById('result').innerText =
        `Для подъема корабля весом ${shipWeight} кг потребуется ${engineCount} ${engineCount === 1 ? 'двигатель' : 'двигателя'}.`;
    document.getElementById('result').classList.add('animate__pulse');
}

function updateEngineInfo() {
    const engineSelect = document.getElementById('engineType');
    const selectedOption = engineSelect.options[engineSelect.selectedIndex];

    const engineName = selectedOption.getAttribute('data-name');
    const engineCraft = selectedOption.getAttribute('data-craft');
    const engineThrust = selectedOption.value;

    if (engineName && engineCraft) {
        document.getElementById('engineInfo').innerHTML =
            `<strong>${engineName}</strong><br>Подъемность: ${engineThrust} кН<br>Крафт: ${engineCraft}`;
    } else {
        document.getElementById('engineInfo').innerHTML = '';
    }
}

fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);