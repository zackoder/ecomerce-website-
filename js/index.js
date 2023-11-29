const loginbtn = document.querySelector("#loginbtn")
const logupbtn = document.querySelector("#logupbtn")
const logupEl = document.querySelector("#logup")
const loginEl = document.querySelector("#login")

logupbtn.addEventListener("click", () => {
   loginEl.style.zIndex = 1;
})

loginbtn.addEventListener("click" , () =>{
   logupEl.style.zIndex = 1;
})

document.addEventListener("keydown", () =>{
   if (event.key == "Escape") {
      if (logupEl.style.zIndex >= 0 || loginEl.style.zIndex >= 0) {
         logupEl.style.zIndex = -1;
         loginEl.style.zIndex = -1;
      }
   }
})