



let fullname  =  document.getElementById("fullname");
let email  =  document.getElementById("email");
let github  =  document.getElementById("github");
let button =  document.querySelector(".button button");
let container  =  document.querySelector(".container")
let SecondContainer  =  document.querySelector(".SecondContainer")

let heading  =  document.querySelector(".second-main-heading h1")
let para  =  document.querySelector(".second-main-heading p")
let profile  =  document.querySelector(".full-name")
let githubName  =  document.querySelector(".github p")


 let EmailAlert  =  document.querySelector(".Email-alert");
 let NameAlert  =  document.querySelector(".Name-alert");
 let GithubAlert  =  document.querySelector(".Github-alert");




 


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
button.addEventListener("click",(event)=>{
 event.preventDefault();


   let valid  =  true;

 if (fullname.value.trim()==""){
 
  
  NameAlert.style.display   = "flex";
  valid = false;

 }
 else {


    NameAlert.style.display   = "none";


 }


 if(email.value.trim() === "" || !emailPattern.test(email.value)){
        EmailAlert.style.display = "flex";
        valid = false;
    } 
    
    
    else {
        EmailAlert.style.display = "none";
    }

    // GitHub Validation
    if(github.value.trim() === ""){
        GithubAlert.style.display = "flex";
        valid = false;
    } 
    
    else {
        GithubAlert.style.display = "none";
    }

    
    if (valid){


    heading.innerText = `Congrats, ${fullname.value}!`;
    para.innerHTML=` We've emailed your ticket to <br> ${email.value}  and will send updates in <br> the run up to the event.  `
    profile.innerText=`${fullname.value}`;
    githubName.innerText=`${github.value}`;
       container.style.display = "none"
        SecondContainer.style.display = "flex";

    }





 
  

})


let fileInput = document.getElementById("file-input");
let avatarBox = document.querySelector(".avatar-box");

fileInput.addEventListener("change", () => {
    let file = fileInput.files[0];
    if (file) {
        let imgURL = URL.createObjectURL(file);
        avatarBox.innerHTML = `<img src="${imgURL}" alt="avatar">`;
    }        


    




});









