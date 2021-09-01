const selected = document.querySelector(".selected");
const optionsConteiner = document.querySelector(".option-conteiner");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsConteiner.classList.toggle("active");
});
optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsConteiner.classList.remove("active");
    });
});