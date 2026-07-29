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