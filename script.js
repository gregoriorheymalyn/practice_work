function showCategory(category) {
    const products = document.querySelectorAll(".products");

    products.forEach(product => {
        product.style.display = "none";
    });

    document.getElementById(category).style.display = "grid";
}

function showCategory(category, button) {

    // Hide all product sections
    document.querySelectorAll(".products").forEach(product => {
        product.style.display = "none";
    });

    // Show selected section
    document.getElementById(category).style.display = "grid";

    // Remove active class from all buttons
    document.querySelectorAll(".btn01, .btn02, .btn03").forEach(btn => {
        btn.classList.remove("active");
    });

    // Add active class to the clicked button
    button.classList.add("active");
}

// const questions = document.querySelectorAll(".question");

// questions.forEach(question => {
//     question.addEventListener("click", function () {
//         const answer = this.nextElementSibling;
//         answer.classList.toggle("active");
//     });
// });

const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", function () {
        console.log("clicked");
        const answer = this.nextElementSibling;
        answer.classList.toggle("active");
    });
});

// BLOG SECTION

// const blogs = [
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//     {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },
//   {
//     title: "これはダミーテキストです。",
//     date: "00.00.0000",
//     image: "img/blog/blog-img.jpg",
//     detail: "これはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストですこれはダミーテキストです"
//   },

//   // more blogs
// ];

const blogs = [
    {
        id: 1,
        title: "First Blog",
        date: "2026.08.04",
        image: "img/blog/blog-img.jpg",
        detail: "Short description...",
        content: `
            <h2>Heading</h2>
            <p>This is the full article.</p>
            <img src="img/blog/detail1.jpg" alt="">
        `
    },
    {
        id: 2,
        title: "Second Blog",
        date: "2026.08.05",
        image: "img/blog/blog-img.jpg",
        detail: "Another description...",
        content: `
            <p>Different article...</p>
        `
    }
];

const cards = document.querySelector(".cards");

blogs.forEach(blog => {
    cards.innerHTML += `
        <div class="card">
            <img src="${blog.image}" alt="">
            <div class="blog-text">
                <div class="blog-header">
                    <h3>${blog.title}</h3>
                    <p>${blog.date}</p>
                </div>
                <p class="blog-detail">${blog.detail}</p>
            </div>
        </div>
    `;
});