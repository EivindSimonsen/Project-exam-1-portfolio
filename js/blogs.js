const url = "https://www.simsandkrylblogs.online/wp-json/wp/v2/posts?_embed&per_page=100";

const blogsContainer = document.querySelector(".grid");

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);

        const blog = getResults;

        blogsContainer.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            if (i === 8) {
                break;
            } 

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

getProducts();

// I could't find another way to solve the issue of showing more blogs. This code made it work, but i don't think it is the right way.

const viewMore = document.querySelector(".cta-placement-blogs");
const button = document.querySelector(".cta");
viewMore.addEventListener("click", morePosts)

async function morePosts() {

    button.style.display = "none"

    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);

        const blog = getResults;

        blogsContainer.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            if (i === 20) {
                break;
            } 

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

