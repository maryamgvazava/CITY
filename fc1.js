class Person{
    constructor(firstname,lastname,numberoremail,password,month,day,year,gender,secret){
        this.firstname = firstname
        this.lastname = lastname
        this.numberoremail = numberoremail
        this.password = password
        this.month = month
        this.day = day
        this.year = year
        this.gender = gender
        this.secret = secret
    }
}
var fname = document.querySelector(".firstname")
var lname = document.querySelector(".lastname")
var numb = document.querySelector(".number")
var pass = document.querySelector(".password")
var pass1 = document.querySelector(".password1")
var save = document.querySelector(".save")
var hidden = document.querySelector(".hidden")
var select1 = document.querySelector(".select1")
var select2 = document.querySelector(".select2")
var select3 = document.querySelector(".select3")
var select4 = document.querySelector(".select4")
var innn = document.querySelector(".innn")
var arr = JSON.parse(localStorage.getItem("arr1")) || []
for(let i = 1; i <= 31; i++){
    var opt = document.createElement("option")
    select2.appendChild(opt)
    opt.innerHTML = i
}
for(let i = 1920; i <= new Date().getFullYear(); i++){
    var opt1 = document.createElement("option")
    select3.appendChild(opt1)
    opt1.innerHTML = i
}
function reg(){
    if(fname.value == "" || lname.value == "" || numb.value == "" || pass.value == "" || pass1.value == "" ||
    select1.value == "" || select2.value == "" || select3.value == "" || select4.value == "" || innn.value == ""){
        hidden.innerText = "Please fill all inputs"
        hidden.style.display = "block"
    }
    else if(pass.value.length < 8){
        hidden.innerText = "Password must be longer that 8 letters"
        hidden.style.display = "block"
    }
    else if(pass.value !== pass1.value){
        hidden.innerText = "Passwords do not match"
        hidden.style.display = "block"
    }
    else if(pass.value.toLowerCase() == pass.value){
        hidden.innerText = "Enter at least 1 Uppercase"
        hidden.style.display = "block"
    }
    else if(pass.value.toUpperCase() == pass.value){
        hidden.innerText = "Enter at least 1 Lowercase"
        hidden.style.display = "block"
    }
    else{
        var obj = new Person(fname.value,lname.value,numb.value,pass.value,select1.value,select2.value,select3.value,select4.value,innn.value)
        arr.push(obj)
        localStorage.setItem("arr1",JSON.stringify(arr))
        fname.value = ""
        lname.value = ""
        numb.value = ""
        pass.value = ""
        pass1.value = ""
        select1.value = ""
        select2.value = ""
        select3.value = ""
        select4.value = ""
        innn.value = ""
        hidden.style.display = "none"
        location.href = "facebook.html"
    }
}
save.addEventListener("click",function(){
    if(arr.length == 0){
        reg()
    }
    else{
        for(let i = 0; i < arr.length; i++){
            if(arr[i].numberoremail == numb.value && numb.value != ""){
                hidden.innerText = "Use different number or email"
                hidden.style.display = "block"
                break
            }
            else{
                reg()
            }
        }
    }
})

localStorage.celar()
