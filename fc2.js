var em = document.querySelector(".em")
var pa = document.querySelector(".pa")
var bt1 = document.querySelector(".bt1")
var hh = document.querySelector(".hh")
var hhh = document.querySelector(".hhh")
var inpt = document.querySelector(".inpt")
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var sec = document.querySelector(".sec")
var change = document.querySelector(".change")
var hidden = document.querySelector(".hidden")
var arr3 = JSON.parse(localStorage.getItem("arr1"))
bt1.addEventListener("click",function(){
    for(var i = 0; i < arr3.length; i++){
        if(em.value == "" || pa.value == ""){
            hh.innerText = "Please fill both inputs"
            hh.style.display = "block"
            hh.style.color = "red"
        }
        else if(em.value == "admin" && pa.value == "admin"){
            em.value = ""
            pa.value = ""
            hh.style.display = "none"
            window.location.assign("admin.html")
        }
        else if(arr3[i].numberoremail == em.value && arr3[i].password == pa.value){
            hh.innerText = "Login successful"
            hh.style.display = "block"
            hh.style.color = "green"
            em.value = ""
            pa.value = ""
            break
        }
        else{
            hh.innerText = "User doesn't exist"
            hh.style.display = "block"
            hh.style.color = "red"
        }
    }
})
btn1.addEventListener("click",function(){
    window.location.assign("facebook.html")
})
btn2.addEventListener("click",function(){
    for(var i = 0; i < arr3.length; i++){
        if(inpt.value == "" || sec.value == ""){
            hhh.style.display = "block"
            hhh.innerHTML = "Please fill both inputs"
            hhh.style.color = "red"
        }
        else if(arr3[i].numberoremail == inpt.value && arr3[i].secret == sec.value){
            hhh.style.display = "block"
            hhh.innerHTML = "Account found"
            hhh.style.color = "green"
            inpt.value = ""
            sec.value = ""
            change.style.display = "block"
            hidden.style.display = "block"
            inpt.style.display = "none"
            sec.style.display = "none"
            btn1.style.display = "none"
            btn2.style.display = "none"
            change.addEventListener("click",function(){
                arr3[i].password = hidden.value
                hidden.value = ""
                hhh.style.display = "block"
                hhh.innerHTML = "Password changed"
                localStorage.setItem("arr1",JSON.stringify(arr3))
            })
            break
        }
        else{
            hhh.style.display = "block"
            hhh.innerHTML = "Wrong email, phone or secret word"
            hhh.style.color = "red"
        }
    }
})

localStorage.celar()
