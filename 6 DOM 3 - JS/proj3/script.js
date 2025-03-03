const courses = [
    {
        name: "Complete JS Course",
        price: "2.3"
    },
    {
        name: "Complete MERN Course",
        price: "2.1"
    },
    {
        name: "Complete Java Course",
        price: "2.9"
    },
    {
        name: "Complete NodeJS Course",
        price: "2.2"
    },
];
function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$"   + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
};

// generateList();

window.addEventListener("load", generateList);

//-------------------------------------------------------------

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price );
    generateList();
});