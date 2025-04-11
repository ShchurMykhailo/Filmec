document.addEventListener("DOMContentLoaded", function () {
    const buttonOne = document.querySelector(".one");
    const buttonTwo = document.querySelector(".two");
    const filmsContainer = document.querySelector(".films");

    const filmsSet1 = [
        { img: "img/termin.png", name: "Термінатор", quality: "HD 720p" },
        { img: "img/islend.png", name: "Острів проклятих", quality: "1080p" },
        { img: "img/pockalza.png", name: "Ручна поклажа", quality: "1080p" },
        { img: "img/tropik.png", name: "Грім у торпіках", quality: "1080p" },
        { img: "img/black.png", name: "Люди в чорному", quality: "1080p" },
        { img: "img/8.png", name: "Безславні виродки", quality: "1080p" },
        { img: "img/jango.png", name: "Джанго вільний", quality: "1080p" },
        { img: "img/7.png", name: "Мерзенна вісімка", quality: "1080p" },
        { img: "img/knife.png", name: "Ножі наголо", quality: "1080p" },
        { img: "img/avatar.png", name: "Аватар", quality: "1080p" },
        { img: "img/odnok.png", name: "Однокласники", quality: "1080p" },
        { img: "img/interstelar.png", name: "Інтерстеллар", quality: "1080p" },
        { img: "img/jumangi.png", name: "Джуманджі", quality: "1080p" },
        { img: "img/volf.png", name: "Вовк з Волл Стріт", quality: "1080p" },
        { img: "img/mask.png", name: "Маска", quality: "1080p" }
    ];

    const filmsSet2 = [
        { img: "img/greenmile.png", name: "Зелена миля", quality: "HD 720p" },
        { img: "img/catchme.png", name: "Впіймай мене, якщо зможеш", quality: "1080p" },
        { img: "img/seven.png", name: "Сім", quality: "1080p" },
        { img: "img/matrix.png", name: "Матриця", quality: "1080p" },
        { img: "img/rushhour.png", name: "Година пік", quality: "1080p" },
        { img: "img/gentlemen.png", name: "Джентльмени", quality: "1080p" },
        { img: "img/legend.png", name: "Легенда", quality: "1080p" },
        { img: "img/revenant.png", name: "Легенда Г'ю Гласса", quality: "1080p" },
        { img: "img/prehistoric.png", name: "Поклик пращурів", quality: "1080p" },
        { img: "img/elcamino.png", name: "Ель Каміно: Пуститися берега", quality: "1080p" },
        { img: "img/bigstan.png", name: "Великий Стен", quality: "1080p" },
        { img: "img/fear.png", name: "Страх", quality: "1080p" },
        { img: "img/superbad.png", name: "Супер Перці", quality: "HD 720p" },
        { img: "img/paul.png", name: "Прибулець Павло", quality: "1080p" },
        { img: "img/machobotan.png", name: "Мачо і ботан", quality: "1080p" }
    ];

    function updateFilms(films, activeButton) {
        filmsContainer.innerHTML = "";
        
        // Оновлюємо фільми
        films.forEach(film => {
            const filmDiv = document.createElement("div");
            filmDiv.innerHTML = `
                <img src="${film.img}">
                <div class="name"><p>${film.name}</p></div>
                <div class="HD"><p>${film.quality}</p></div>
            `;
            filmsContainer.appendChild(filmDiv);
        });

        // Міняємо колір кнопок
        if (activeButton === "one") {
            buttonOne.style.backgroundColor = "black";
            buttonOne.style.color = "white";
            buttonTwo.style.backgroundColor = "#444"; // Темно-сірий
            buttonTwo.style.color = "white";
        } else if (activeButton === "two") {
            buttonTwo.style.backgroundColor = "black";
            buttonTwo.style.color = "white";
            buttonOne.style.backgroundColor = "#444"; // Темно-сірий
            buttonOne.style.color = "white";
        }
    }

    buttonOne.addEventListener("click", function () {
        updateFilms(filmsSet1, "one");
    });

    buttonTwo.addEventListener("click", function () {
        updateFilms(filmsSet2, "two");
    });

    // Початкове завантаження
    updateFilms(filmsSet1, "one");
});
document.addEventListener('DOMContentLoaded', function () {
    const filmImages = document.querySelectorAll('.film img');
    filmImages.forEach(function (image) {
        image.addEventListener('click', function () {
            window.location.href = 'page2.html';
        });
    });
});
