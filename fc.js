var numberr = document.querySelector(".number")
var passwordd = document.querySelector(".password")
var submit = document.querySelector(".submit")
var ht = document.querySelector(".ht")
var myarr = JSON.parse(localStorage.getItem("arr1"))
submit.addEventListener("click",function(){
    for(var i = 0; i < myarr.length; i++){
        if(numberr.value == "" || passwordd.value == ""){
            ht.innerText = "Please fill both inputs"
            ht.style.display = "block"
            ht.style.color = "red"
        }
        else if(numberr.value == "admin" && passwordd.value == "admin"){
            numberr.value = ""
            passwordd.value = ""
            ht.style.display = "none"
            window.location.assign("admin.html")
        }
        else if(myarr[i].numberoremail == numberr.value && myarr[i].password == passwordd.value){
            ht.innerText = "Login successful"
            ht.style.display = "block"
            ht.style.color = "green"
            numberr.value = ""
            passwordd.value = ""
            break
        }
        else{
            ht.innerText = "User doesn't exist"
            ht.style.display = "block"
            ht.style.color = "red"
        }
    }
})


localStorage.celar()
