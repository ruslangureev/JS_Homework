const сelsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
const fahrenheit = (9 / 5) * сelsius + 32;
alert(`Цельсий: ${сelsius}, Фаренгейт: ${fahrenheit.toFixed(1)}`)