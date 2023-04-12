let date_zone = document.getElementById('date');
let today = new Date().toISOString().slice(0, 10);

date_zone.append(today);

console.log(today)