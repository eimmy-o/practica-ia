const colorBtn = document.getElementById('colorBtn');
const colores = ["#F5EFE6", "#A3A847", "#FFF", "#E7CBA9", "#FFD9B7"];
let indice = 1;

colorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = colores[indice];
    indice = (indice + 1) % colores.length;
});
