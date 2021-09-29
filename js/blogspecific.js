const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://www.simsandkrylblogs.online/wp-json/wp/v2/posts/" + id;

async function fetchId() {
    try {
        const response = await fetch (url);
        const getId = await response.json();

        console.log(getId)

        createHTML(getId)
    }

    catch(error) {
        console.log(error)
        detailsContainer.innerHTML = displayError("Blog posts failed to load from server, try again later!")
    }
}

fetchId();

function createHTML(getId) {

    document.title = `Blogs | ${getId.title.rendered}`;

    detailsContainer.innerHTML +=
    `
    <div>
        <div>
            <h1 class="indHeader">${getId.title.rendered}</h1>
        </div>
        <div class="flex">
            <div>
                <div class="resize" id="modal" style="cursor: pointer">${getId.content.rendered}</div>
            </div>
            <div>
                <p>${getId.excerpt.rendered}</p>
                <p>${getId.excerpt.rendered}</p>
                <p>${getId.excerpt.rendered}</p>
            </div>
        </div>
        <div class="modal-container">
            <div class="resize" id="modal-image" style="cursor: pointer">${getId.content.rendered}</div>
        </div>
    </div>
    `

    const modalClick = document.querySelector("#modal");
    const modalContainer = document.querySelector(".modal-container");
    
    modalClick.addEventListener("click", modal);

    function modal() {
        modalContainer.style.display = "flex";
    }

    modalContainer.addEventListener("click", function() {
        modalContainer.style.display = "none"
    })

    console.log(modalClick);
}






