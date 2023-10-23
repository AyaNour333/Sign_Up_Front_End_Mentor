let input = document.querySelector("input[type= text]")
let submit = document.querySelector("input[type= button]")
let sign = document.querySelector(".container")
let label = document.querySelector(".label .invalid")

console.log(input);
// let reg = /\w+@\w+.com/ig
let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
input.oninput = function(){
    if(reg.test(input.value)){
        submit.classList.add('active')
    }
}

submit.onclick = function(e){
    if(reg.test(input.value)){
        console.log(true);
        sign.remove()
        let message = document.createElement("div")
        message.className = 'success'
        let img = document.createElement("img")
        img.src = './assets/images/icon-success.svg'
        let head = document.createElement("h2")
        head.appendChild(document.createTextNode("Thanks for subscribing!"))
        let p = document.createElement("p")
        p.innerHTML = 'A confirmation email has been sent to <span>ash@loremcompany.com.</span>  Please open it and click the button inside to confirm your subscription.'
        let miss = document.createElement("input")
        miss.type = 'submit'
        let inputContain = document.createElement("div")
        inputContain.className = 'input-contain'
        inputContain.appendChild(miss)
        miss.value = "Dismiss message"
        message.appendChild(img)
        message.appendChild(head)
        message.appendChild(p)
        message.appendChild(inputContain)
        document.body.appendChild(message)
    }
    else{
        console.log('f');
        // e.preventDefault();
        input.classList.add("error")
        label.classList.add("active")
    }
}

