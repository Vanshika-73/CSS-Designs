document.addEventListener('keydown',(event)=>{
    let b=event.key;
    switch (b) {
        case "1":
            chngecolor(1);
            break;
        case "2":
            chngecolor(2);
            break;
        case "3":
            chngecolor(3);
            break;
        case "4":
            chngecolor(4);
            break;
        case "5":
            chngecolor(5);
            break;
        default:
            alert("press key between 1 to 5");
            break;
    }
})
function chngecolor(n){
    let a = document.querySelector(`#img${n}`).getAttribute('class');
    if(a=='dark'){
        document.querySelector(`#img${n}`).removeAttribute('class');
        document.querySelector(`#img${n}`).setAttribute('class','light')
    }
    else if(a=='light'){
        document.querySelector(`#img${n}`).removeAttribute('class');
        document.querySelector(`#img${n}`).setAttribute('class','dark')
    }
    else{
        document.querySelector(`#img${n}`).setAttribute('class','dark')
    }
}