let screen = document.getElementById("txt");
let buttons = document.querySelectorAll("input");
let c = document.getElementById('container');


buttons.forEach(el => {
    el.onclick = function(){
        if(el.id == "dark_mode"){
            c.style.backgroundColor="black";
        }
        else if(el.id == "light_mode"){
            c.style.backgroundColor="white";
        }
        else if(el.value == 'C'){
            screen.value = '';
        }
        else if(el.value == '='){
            try{
                screen.value = eval(screen.value);
            }
            catch(e){
                screen.value = "error";
            }
        }
        else{
            screen.value += el.value; 
    }
}
})


