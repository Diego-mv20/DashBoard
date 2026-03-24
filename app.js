// ===== SELECTORES =====
const opciones = document.querySelectorAll(".menu li");
const titulo = document.querySelector(".header h1");
const input = document.querySelector(".header input");
const cards = document.querySelectorAll(".card");


// ===== 1. ACTIVAR MENÚ =====
function activarMenu(e) {
    opciones.forEach(op => op.classList.remove("activo"));
    e.target.classList.add("activo");

    // cambiar título
    titulo.textContent = e.target.textContent.trim();
}

opciones.forEach(op => {
    op.addEventListener("click", activarMenu);
});


// ===== 2. FILTRO POR BÚSQUEDA =====
function filtrar() {
    const texto = input.value.toLowerCase();

    cards.forEach(card => {
        const contenido = card.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

input.addEventListener("input", filtrar);


// ===== 3. ANIMAR NÚMEROS =====
function animarNumeros() {
    const valores = [12400, 1240, 18, 320];

    cards.forEach((card, i) => {
        let actual = 0;
        const final = valores[i];
        const h2 = card.querySelector("h2");

        const intervalo = setInterval(() => {
            actual += Math.ceil(final / 30);

            if (actual >= final) {
                actual = final;
                clearInterval(intervalo);
            }

            h2.textContent = actual.toLocaleString();
        }, 30);
    });
}

window.addEventListener("load", animarNumeros);


// ===== 4. HOVER DINÁMICO (extra visual) =====
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});