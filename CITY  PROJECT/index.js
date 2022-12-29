document.addEventListener("keydown",(event)=>{
    let a=event.key;
    // console.log(a);
    light();
})
function light(){
    if(a=='1'){
            // document.querySelector('#a1').style.backgroundImage=(URL("light.jpg"))
        // document.querySelector('#a1').style.background-image(URL("light.jpg"));
        document.querySelector("#a1").setAttribute("class","glow");
       // document.querySelector("#a1").style.background-color("red");
    }
}