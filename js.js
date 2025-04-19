document.addEventListener("DOMContentLoaded", function () {
    const buttonOne = document.querySelector(".one");
    const buttonTwo = document.querySelector(".two");
    const filmsContainer = document.querySelector(".films");

    
    const filmPages = {
        "Термінатор": "page2.html",
        "Острів проклятих": "page3.html",
        "Ручна поклажа": "page4.html",
        "Грім у торпіках": "page5.html",
        "Люди в чорному": "page6.html",
        "Безславні виродки": "page7.html",
        "Джанго вільний": "page8.html",
        "Мерзенна вісімка": "page9.html",
        "Ножі наголо": "page10.html",
        "Аватар": "page11.html",
        "Однокласники": "page12.html",
        "Інтерстеллар": "page13.html",
        "Джуманджі": "page14.html",
        "Вовк з Волл Стріт": "page15.html",
        "Маска": "page16.html",
        "Зелена миля": "page17.html",
        "Впіймай мене, якщо зможеш": "page18.html",
        "Сім": "page19.html",
        "Матриця": "page20.html",
        "Година пік": "page21.html",
        "Джентльмени": "page22.html",
        "Легенда": "page23.html",
        "Легенда Г'ю Гласса": "page24.html",
        "Поклик пращурів": "page25.html",
        "Ель Каміно": "page26.html",
        "Великий Стен": "page27.html",
        "Страх": "page28.html",
        "Супер Перці": "page29.html",
        "Прибулець Павло": "page30.html",
        "Мачо і ботан": "page31.html"
    };

    const filmsSet1 = [
        { img: "img/termin.png", name: "Термінатор", quality: "HD 720p", url: "https://www.youtube.com/embed/nGrW-OR2uDk" },
        { img: "img/islend.png", name: "Острів проклятих", quality: "1080p", url: "https://www.youtube.com/embed/YDGldPitxic" },
        { img: "img/pockalza.png", name: "Ручна поклажа", quality: "1080p", url: "https://www.youtube.com/embed/d_ReGxgthpM" },
        { img: "img/tropik.png", name: "Грім у торпіках", quality: "1080p", url: "https://www.youtube.com/embed/ASJvlHExnMA" },
        { img: "img/black.png", name: "Люди в чорному", quality: "1080p", url: "https://www.youtube.com/embed/wnu8SYJtixo" },
        { img: "img/8.png", name: "Безславні виродки", quality: "1080p", url: "https://www.youtube.com/embed/iporxFl2zbw" },
        { img: "img/jango.png", name: "Джанго вільний", quality: "1080p", url: "https://www.youtube.com/embed/Aimn0hq8pgY" },
        { img: "img/7.png", name: "Мерзенна вісімка", quality: "1080p", url: "https://www.youtube.com/embed/D6aesZaVtPM" },
        { img: "img/knife.png", name: "Ножі наголо", quality: "1080p", url: "https://www.youtube.com/embed/tGqPrkecrVM" },
        { img: "img/avatar.png", name: "Аватар", quality: "1080p", url: "https://www.youtube.com/embed/5PSNL1qE6VY" },
        { img: "img/odnok.png", name: "Однокласники", quality: "1080p", url: "https://www.youtube.com/embed/w9ZQihrzick" },
        { img: "img/interstelar.png", name: "Інтерстеллар", quality: "1080p", url: "https://www.youtube.com/embed/zSWdZVtXT7E" },
        { img: "img/jumangi.png", name: "Джуманджі", quality: "1080p", url: "https://www.youtube.com/embed/v_TJKwJwN0E" },
        { img: "img/volf.png", name: "Вовк з Волл Стріт", quality: "1080p", url: "https://www.youtube.com/embed/QH97g33gN3Y" },
        { img: "img/mask.png", name: "Маска", quality: "1080p", url: "https://www.youtube.com/embed/o6XdwKZ8cL8" }
    ];

    const filmsSet2 = [
        { img: "img/greenmile.png", name: "Зелена миля", quality: "HD 720p", url: "https://www.youtube.com/embed/ctRK-4Vt7dA" },
        { img: "img/catchme.png", name: "Впіймай мене, якщо зможеш", quality: "1080p", url: "https://www.youtube.com/embed/71rDQ7z4eFg" },
        { img: "img/seven.png", name: "Сім", quality: "1080p", url: "https://www.youtube.com/embed/znmZoVkCjpI" },
        { img: "img/matrix.png", name: "Матриця", quality: "1080p", url: "https://www.youtube.com/embed/m8e-FF8MsqU" },
        { img: "img/rushhour.png", name: "Година пік", quality: "1080p", url: "https://www.youtube.com/embed/JMiFsFQcFLE" },
        { img: "img/gentlemen.png", name: "Джентльмени", quality: "1080p", url: "https://www.youtube.com/embed/Ify9S7hj480" },
        { img: "img/legend.png", name: "Легенда", quality: "1080p", url: "https://www.youtube.com/embed/YqAeVosG4zI" },
        { img: "img/revenant.png", name: "Легенда Г'ю Гласса", quality: "1080p", url: "https://www.youtube.com/embed/LoebZZ8K5N0" },
        { img: "img/prehistoric.png", name: "Поклик пращурів", quality: "1080p", url: "https://www.youtube.com/embed/5P8R2zAhEwg" },
        { img: "img/elcamino.png", name: "Ель Каміно", quality: "1080p", url: "https://www.youtube.com/embed/1JLUn2DFW4w" },
        { img: "img/bigstan.png", name: "Великий Стен", quality: "1080p", url: "https://www.youtube.com/embed/d4R2KRJPmG8" },
        { img: "img/fear.png", name: "Страх", quality: "1080p", url: "https://www.youtube.com/embed/iDEajJc7cZQ" },
        { img: "img/superbad.png", name: "Супер Перці", quality: "HD 720p", url: "https://www.youtube.com/embed/4eaZ_48ZYog" },
        { img: "img/paul.png", name: "Прибулець Павло", quality: "1080p", url: "https://www.youtube.com/embed/BJxlNYb8sJQ" },
        { img: "img/machobotan.png", name: "Мачо і ботан", quality: "1080p", url: "https://www.youtube.com/embed/RLoKtb4c4W0" }
    ];

    function updateFilms(films, activeButton) {
        filmsContainer.innerHTML = "";

        films.forEach(film => {
            const filmDiv = document.createElement("div");
            filmDiv.className = "film";
            filmDiv.innerHTML = `
                <img src="${film.img}" alt="${film.name}">
                <div class="name"><p>${film.name}</p></div>
                <div class="HD"><p>${film.quality}</p></div>
            `;

            filmDiv.addEventListener("click", () => {
                const page = filmPages[film.name];
                if (page) {
                    window.location.href = page;
                } else {
                    alert("Сторінка фільму не знайдена!");
                }
            });

            filmsContainer.appendChild(filmDiv);
        });


        buttonOne.style.backgroundColor = activeButton === "one" ? "black" : "#444";
        buttonTwo.style.backgroundColor = activeButton === "two" ? "black" : "#444";
    }

    buttonOne.addEventListener("click", () => updateFilms(filmsSet1, "one"));
    buttonTwo.addEventListener("click", () => updateFilms(filmsSet2, "two"));

    updateFilms(filmsSet1, "one"); 
});
    document.addEventListener("DOMContentLoaded", function () {
        const filmsBtn = document.getElementById("filmsBtn");
        if (filmsBtn) {
            filmsBtn.addEventListener("click", () => {
                window.location.href = "index.html";
            });
        }
    });
    
