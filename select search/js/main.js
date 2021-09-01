const selected = document.querySelector(".selected");
const optionsConteiner = document.querySelector(".option-conteiner");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsConteiner.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if(optionsConteiner.classList.contains("active")){
        searchBox.focus();
    }
});
optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsConteiner.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if(label.indexOf(searchTerm) != -1){
            option.style.display = "block";
        }else{
            option.style.display = "none";
        }
    });
};