const url = "https://www.simsandkrylblogs.online/wp-json/wp/v2/posts?_embed&per_page=6";

const blogsContainer = document.querySelector(".postBoxContainer")

async function getProducts() {
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
                    <a href="blogspecific.html?id=${blog[i].id}" class="cta cta-placement">Read blog</a>
                </div>
            </div>
            `
        }

        const leftArrow = document.querySelector(".fa-chevron-left");
        const rightArrow = document.querySelector(".fa-chevron-right");

        leftArrow.addEventListener("click", prev);
        rightArrow.addEventListener("click", next);

        // I don't know how to make this code slide left, instead of right.
        function prev() {
            const remove = document.querySelector(".postBox");
            remove.parentNode.appendChild(remove);
        }

        function next() {
            const add = document.querySelector(".postBox");
            add.parentNode.appendChild(add);
        }
    }

    catch (error) {
        console.log(error);
        blogsContainer.innerHTML = displayError("Blog posts failed to load from server, try again later!")
    }

}

getProducts();





                