console.log("JS FUNCIONANDO");


const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const btnReset = document.getElementById("btnReset");

if (musica) {
    const estabaActiva = localStorage.getItem("musica") === "on";
    const tiempoGuardado = localStorage.getItem("tiempo");
    const primeraVez = localStorage.getItem("primeraVez") === null;

    if (tiempoGuardado) {
        musica.currentTime = parseFloat(tiempoGuardado);
    }

    if (primeraVez) {
        musica.play().catch(()=>{});
        localStorage.setItem("musica", "on");
        localStorage.setItem("primeraVez", "no");
    } else if (estabaActiva) {
        musica.play().catch(()=>{});
    }

    musica.addEventListener("timeupdate", () => {
        localStorage.setItem("tiempo", musica.currentTime);
    });

    document.addEventListener("click", () => {
        if (musica.paused && localStorage.getItem("musica") === "on") {
            musica.play();
        }
    }, { once: true });
}

btnMusica?.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        localStorage.setItem("musica", "on");
    } else {
        musica.pause();
        localStorage.setItem("musica", "off");
    }
});

btnReset?.addEventListener("click", () => {
    musica.currentTime = 0;
    musica.play();
    localStorage.setItem("musica", "on");
    localStorage.setItem("tiempo", 0);
});


const cartaBox = document.getElementById("cartaBox");
const textoCont = document.getElementById("textoCarta");
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");

const texto = [
    "Mami, primero que todo… Feliz Día de la Madre 💐💛",
    "Realmente no sé por dónde empezar, porque siempre te digo lo mismo, pero es que todo lo que soy tiene un poco de ti ✨",
    "Gracias por cada momento, por cada sonrisa que me has sacado incluso cuando no podía, por enseñarme a seguir siempre adelante 🤍",
    "Has estado en todo, en lo bueno y en lo difícil, sin soltarme nunca, cuidándome, apoyándome y haciéndome sentir que siempre tengo un lugar seguro al que volver 🫶🏻",
    "Hoy y siempre has sido y serás mi fuerza, mi calma y mi hogar 🏡💖",
    "Por y para siempre, cariño… te quiero muchísimo, mami, mi vida. No hay palabras que expresen lo que siento, así que prefiero demostrártelo cada día 💫",
    "Always and forever together… te quiero muchísimo, mi amore mío ♾️💕"

];

let escribiendo = false;

if (btnAbrir && cartaBox && textoCont) {

    btnAbrir.addEventListener("click", () => {

        if (escribiendo) return;

        cartaBox.classList.add("abierta");
        textoCont.innerHTML = "";

        let i = 0;
        escribiendo = true;

        function escribir() {
            if (i < texto.length) {

                const p = document.createElement("p");
                p.textContent = texto[i];

                textoCont.appendChild(p);

                setTimeout(() => {
                    p.style.opacity = 1;
                }, 100);

                i++;
                setTimeout(escribir, 1600);

            } else {
                escribiendo = false;
            }
        }

        escribir();
    });
}

if (btnCerrar && cartaBox && textoCont) {
    btnCerrar.addEventListener("click", () => {
        cartaBox.classList.remove("abierta");
        textoCont.innerHTML = "";
    });
}


const img = document.getElementById("imagen");

if (img) {

    const imagenes = [
        "./foto1.jpg",
        "./foto2.jpg",
        "./foto3.jpg",
        "./foto4.jpg",
        "./foto5.jpg",
        "./foto6.jpg",
        "./foto7.jpg",
        "./foto8.jpg",
        "./foto9.jpg",
        "./foto10.jpg",
        "./foto11.jpg",
        "./foto12.jpg",
        "./foto13.jpg",
        "./foto14.jpg",
        "./foto15.jpg",
        "./foto16.jpg",
        "./foto17.jpg",
        "./foto18.jpg",
        "./foto19.jpg",
        "./foto20.jpg",
        "./foto21.jpg",
        "./foto22.jpg",
        "./foto23.jpg",
        "./foto24.jpg",
        "./foto25.jpg"
    ];

    const frases = [
        "Contigo empezó todo sin darme cuenta",
        "y sin saberlo, empezaste a construir mi mundo",
        "llenándolo de momentos que hoy siguen viviendo en mí",
        "enseñándome a reír incluso cuando no había motivos",
        "haciendo que cada pequeño instante valiera la pena",
        "uniéndonos siempre, incluso cuando todo cambiaba",
        "convirtiendo lo simple en recuerdos que nunca se van",
        "regalándome mil razones para seguir sonriendo",
        "enseñándome que lo importante siempre es estar juntos",
        "haciéndome sentir que todo iba a salir bien, y aún lo haces",
        "cuidándome incluso cuando yo no lo veía",
        "estando en cada paso que daba… y en cada paso que doy",
        "viéndome crecer sin soltarme nunca",
        "enseñándome a ser fuerte sin dejar de sentir",
        "haciendo que todo fuera más fácil… y que hoy lo siga siendo",
        "dándome calma cuando más lo necesitaba, y cuando la necesito",
        "acompañándome en cada momento, por pequeño que parezca",
        "sin soltarme nunca de la mano, ni antes ni ahora",
        "haciéndome sentir que siempre tengo un lugar al que volver",
        "enseñándome a seguir, incluso cuando cuesta",
        "convirtiéndote, sin darme cuenta, en todo para mí",
        "en mi apoyo, mi fuerza y mi hogar",
        "en la persona que sigue siendo mi refugio cada día",
        "porque incluso cuando me caí y todo dolía, estabas ahí para levantarme, abrazarme, hacerme sonreír y demostrarme que nunca iba a estar sola",
        "y ahora entiendo que desde el primer segundo en el que me sostuviste entre tus brazos, ya me estabas dando un amor tan grande que aún hoy me cuida, me guía y me acompaña en cada paso. Te amo con todo mi corazón cariño."
    ];

    const fraseCarrusel = document.getElementById("fraseCarrusel");

    let index = 0;

    fraseCarrusel.textContent = frases[index];

    const botones = document.querySelectorAll(".carrusel button");

    function cambiar(dir) {
        index = (index + dir + imagenes.length) % imagenes.length;

        img.style.opacity = 0;

        setTimeout(() => {
            img.src = imagenes[index];
            img.style.opacity = 1;
            fraseCarrusel.textContent = frases[index];
        }, 200);
    }

    botones[0]?.addEventListener("click", () => cambiar(-1));
    botones[1]?.addEventListener("click", () => cambiar(1));

  
    const modal = document.getElementById("modal");
    const imagenGrande = document.getElementById("imagenGrande");
    const cerrar = document.getElementById("cerrar");
    const fraseModal = document.getElementById("fraseModal");

    const btnPrev = document.querySelector(".modal .prev");
    const btnNext = document.querySelector(".modal .next");

    let currentIndex = 0;
    let zoom = 1;
    let startX = 0;

    function mostrarImagen(i) {
        imagenGrande.style.opacity = 0;

        setTimeout(() => {
            imagenGrande.src = imagenes[i];
            imagenGrande.style.opacity = 1;
            fraseModal.textContent = frases[i];

            zoom = 1;
            imagenGrande.style.transform = "scale(1)";
        }, 150);
    }

    img.addEventListener("click", () => {
        currentIndex = index;
        mostrarImagen(currentIndex);
        modal.classList.remove("hidden");
    });

    cerrar?.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    btnNext?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imagenes.length;
        mostrarImagen(currentIndex);
    });

    btnPrev?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(currentIndex);
    });

    document.addEventListener("keydown", (e) => {
        if (modal.classList.contains("hidden")) return;

        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % imagenes.length;
            mostrarImagen(currentIndex);
        }

        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
            mostrarImagen(currentIndex);
        }

        if (e.key === "Escape") {
            modal.classList.add("hidden");
        }
    });

    
    imagenGrande.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    imagenGrande.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {
            currentIndex = (currentIndex + 1) % imagenes.length;
            mostrarImagen(currentIndex);
        }

        if (endX - startX > 50) {
            currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
            mostrarImagen(currentIndex);
        }
    });

   
    imagenGrande.addEventListener("wheel", (e) => {
        e.preventDefault();

        zoom += e.deltaY < 0 ? 0.1 : -0.1;
        zoom = Math.min(Math.max(zoom, 1), 3);

        imagenGrande.style.transform = `scale(${zoom})`;
    });
}
