
// function flip(){
    
//     document.getElementsByClassName("form1")[0].setAttribute("class","flip");

//     var t = setTimeout(()=>{
        
        

// },900)
// }
function myFunctionhelp(){
    document.getElementById("help").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
   
  }

function myFunctionlogin(){
     document.getElementById("login").style.display = "block";
     document.getElementById("help").style.display = "none";
     document.getElementById("signup").style.display = "none";

  }

function myFunctionsignup(){
    document.getElementById("login").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("signup").style.display = "block";   
    
 }

