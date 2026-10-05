// ================= MOBILE MENU =================

function toggleMenu() {

    document.getElementById("navMenu")
        .classList.toggle("active");

}


// ================= MOVIE SEARCH =================

const searchInput = document.getElementById("movieSearch");

const movieCards = document.querySelectorAll(
    "#movieContainer .movie-card"
);

const noResults = document.getElementById("noResults");


searchInput.addEventListener("input", function () {

    const searchValue =
        this.value.toLowerCase().trim();

    let foundMovies = 0;


    movieCards.forEach(card => {

        const movieName =
            card.dataset.title.toLowerCase();

        if (movieName.includes(searchValue)) {

            card.style.display = "block";

            foundMovies++;

        } else {

            card.style.display = "none";

        }

    });


    if (foundMovies === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


// ================= TRAILER MODAL =================

const modal =
    document.getElementById("trailerModal");


function openTrailer() {

    modal.classList.add("active");

}


function closeTrailer() {

    modal.classList.remove("active");

}


// Close modal when clicking outside

modal.addEventListener("click", function(e) {

    if (e.target === modal) {

        closeTrailer();

    }

});


// ================= SUBSCRIBE =================

document
.getElementById("subscribeForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
        "Thank you for subscribing to CineMax!"
    );

    this.reset();

});


// ================= NAVBAR =================

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,.98)";

    } else {

        navbar.style.background =
            "rgba(5,5,5,.85)";

    }

});