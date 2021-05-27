let display = document.querySelector('#display')

let getData = (ref) =>{
  let value = ref.value
  display.value += value
}

function clean(){
  display.value = ""
}

let calculate=()=>{
    display.value = eval(display.value)  
}
