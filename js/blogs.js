const baseUrl = "https://www.simsandkrylblogs.online/wp-json/wp/v2/posts?_embed&per_page=6";

const blogsContainer = document.querySelector(".grid");

async function getProducts(url) {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);

        const blog = getResults;

        blogsContainer.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            blogsContainer.innerHTML +=
            `
            <div class="postBox">
                <div>
                    <img src="${blog[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${blog[i]._embedded['wp:featuredmedia']['0'].alt_text}" />
                </div>
                <div class="seperate">
                    <h2>${blog[i].title.rendered}</h2>
                    <p>${blog[i].excerpt.rendered}</p>
                    <a href="blogspecific.html?id=${blog[i].id}" class="cta cta-placement">Read more</a>
                </div>
            </div>
            `
        }
    }

    catch (error) {
        console.log(error);
        blogsContainer.innerHTML = displayError("Blog posts failed to load from server, try again later!")
    }
}

getProducts(baseUrl);

/*Search*/

const searchBtn = document.querySelector(".search-button");

searchBtn.onclick = function() {
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = baseUrl + `&search=${searchInput}`;
    blogsContainer.innerHTML = "";
    getProducts(newUrl);

    console.log(searchInput);
}

/*View more*/

const viewMore = document.querySelector("#view-more");
const viewLess = document.querySelector("#view-less");

viewLess.style.display = "none"

viewMore.onclick = function() {
    viewMore.style.display = "none";
    viewLess.style.display = "inline";
    const newUrl = baseUrl + "&per_page=20";
    blogsContainer.innerHTML = "";
    getProducts(newUrl);
}

viewLess.onclick = function() {
    viewMore.style.display = "inline";
    viewLess.style.display = "none";
    const newUrl = baseUrl + "&per_page=6";
    blogsContainer.innerHTML = "";
    getProducts(newUrl);
}

