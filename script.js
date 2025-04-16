


let a=1;
document.querySelector('.navBars').addEventListener("click", () => {
    
    if(a==1){
    document.querySelector('.navbutton').style.left = "0";
    a=0;
    }
    else{
        document.querySelector('.navbutton').style.left = "-100%";
        a=1;        
    }
});




document.querySelector('.navXmark').addEventListener("click", () => {
    document.querySelector('.navbutton').style.left = "-100%";
});



// Other Source start

let leftA1 =105;
function leftArrow1(){
    if(leftA1<420){
    document.querySelector('.lImgScroll').style.left="-"+leftA1+"%";
    leftA1 = leftA1+105;
    }
}

function rightArrow1(){
    if(leftA1>0){
    leftA1 = leftA1-105;
    document.querySelector('.lImgScroll').style.left="-"+leftA1+"%";
}
}



let leftA2 =105;
function leftArrow2(){
    if(leftA2<420){
    document.querySelector('.lImgScroll-2').style.left="-"+leftA2+"%";
    leftA2 = leftA2+105;
    }
}

function rightArrow2(){
    if(leftA2>0){
    leftA2 = leftA2-105;
    document.querySelector('.lImgScroll-2').style.left="-"+leftA2+"%";
}
}


let leftA3 =105;
function leftArrow3(){
    if(leftA3<420){
    document.querySelector('.lImgScroll-3').style.left="-"+leftA3+"%";
    leftA3 = leftA3+105;
    }
}

function rightArrow3(){
    if(leftA3>0){
    leftA3 = leftA3-105;
    document.querySelector('.lImgScroll-3').style.left="-"+leftA3+"%";
}
}


let leftA4 =105;
function leftArrow4(){
    if(leftA4<420){
    document.querySelector('.lImgScroll-4').style.left="-"+leftA4+"%";
    leftA4 = leftA4+105;
    }
}

function rightArrow4(){
    if(leftA4>0){
    leftA4 = leftA4-105;
    document.querySelector('.lImgScroll-4').style.left="-"+leftA4+"%";
}
}


let navClick =1;

document.querySelector('.ResNavBar').addEventListener('click' , ()=>{
    if(navClick==1){
        document.querySelector('.parsDiv').style.left="0px";
        navClick=0;
    }else{
        document.querySelector('.parsDiv').style.left="-100%";
        navClick=1;
    }
})

document.querySelector('.parsXmark').addEventListener('click' , ()=>{
    document.querySelector('.parsDiv').style.left="-100%";
})


// Other source Closes
