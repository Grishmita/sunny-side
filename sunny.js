

const  hamburgerEl = document.getElementsByClassName("hamburger")[0];
console.log(hamburgerEl)

const  navliEl = document.getElementsByClassName("nav-ul")[0];
console.log(navliEl)



hamburgerEl.addEventListener("click", () =>{
    navliEl.classList.toggle('active')
    console.log("fucntion runned")
    console.log(navliEl)
})