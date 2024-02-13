let nav = document.querySelector("nav");
let anchor = document.querySelectorAll("a")
let brand = document.querySelector(".navbar-brand")


window.addEventListener("scroll", () => {
    if (scrollY > 50) {
        nav.classList.add("scroll")
        brand.classList.add("dark")
        
        anchor.forEach(item => {
            item.classList.remove("w")  
            item.classList.add("dark")
        });
        
        
       

    }
    else {
        nav.classList.remove("scroll")
        brand.classList.remove("dark")
        anchor.forEach(item => {
            item.classList.add("w") 
            item.classList.remove("dark")
          });

      
    }
})