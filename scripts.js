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
}
