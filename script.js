let string = '';
let buttons = document.querySelectorAll('.btn')
buttons.forEach((numbers)=>{
    numbers.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById('input-number').value = string;   
        }
        else{
            string += e.target.innerHTML;
            document.getElementById('input-number').value = string;
        }
        if(e.target.innerHTML == "AC"){
            string = "";
            document.getElementById('input-number').value = string;   
        }
   }) 
});
