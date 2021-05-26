
const dropMenu = document.querySelectorAll("#dropdown");
const iconMenu = document.querySelector("#icon");
const btnHamburger = document.querySelector(".header__hamburger");
const headerMenu = document.querySelector(".header__menu");

dropMenu.forEach(function(menuItem){

    let item = menuItem.querySelector(".dropdown__menu");
    let iconMenu = menuItem.querySelector("#icon");
    window.addEventListener("click", function(e){
        if(menuItem.contains(e.target)){
            if(!item.classList.contains("show") && !iconMenu.classList.contains("fa-rotate-180")){
                item.classList.add("show");
                iconMenu.classList.add("fa-rotate-180");
            }else{
                item.classList.remove("show");
                iconMenu.classList.remove("fa-rotate-180");
            }
        }else{
            item.classList.remove("show");
            iconMenu.classList.remove("fa-rotate-180");
        }
    })

    
})

btnHamburger.addEventListener("click", function(event){
    if(headerMenu.classList.contains("show")){
        headerMenu.classList.remove("show");
        
        btnHamburger.classList.remove("open");
    }else{
        headerMenu.classList.add("show");
        
        btnHamburger.classList.add("open");
    }
});

