let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    console.log(sidebar.classList.toggle("active"))
}
    var show = document.querySelectorAll(".show")
    console.log(show)
    var counter = 0
    for(var i of show){
         console.log(i.parentElement.children[1])
  
        i.addEventListener("click", function(){
      if(counter%2==0){
        this.innerHTML = "show less"
      }else{
        this.innerHTML = "show more"
      }
      counter++
      this.parentElement.children[1].classList.toggle("mystyle")
        })
    }
    function myFunction() {
      window.open("tourplaces.html");
    }
    function myRegFunction() {
      window.open("register.html");
    }