let select = function(){
    let selectHeader = document.querySelectorAll('.select_header');
    let selectItem = document.querySelectorAll('.select_item');

    selectHeader.forEach(item =>{
        item.addEventListener('click', selectToggle);
    });
    selectItem.forEach(item =>{
        item.addEventListener('click', selectChoose)
    });
    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    }
    function selectChoose(){
        let text = this.innerText, 
        //ближайший родитель на который мы поднимаемся, поднимаемся до select
        select = this.closest('.select'),
        //находим select_current
        currentText = select.querySelector('.select_current');
        //меняем значение select_current на то, что нажато
        currentText.innerText = text;
        //убераем меню
        select.classList.remove('is-active');
    }
}
select();