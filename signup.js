const textinput = document.getElementById('inputt1')
const email = document.getElementById('inputt2')
const password = document.getElementById('inputt3')
const confirmpass = document.getElementById('inputt4')
const checkbox = document.getElementById('checkbox1')
data = JSON.parse(localStorage.getItem('userdata')) || []

function register(ev) {
    ev.preventDefault()
    if (textinput.value == "" || email.value == "" || password.value == "" || confirmpass.value == "") {
        alert('All field are Mandatory')
        return
    }else if (checkbox.checked !== true){
        alert('Agree to term and conditions')
    }
    else if(password.value.length < 8){
        alert('Your password is too short')
        return
    }
    else if(password.value !== confirmpass.value){
        alert('Password does not match')
        return
    }
    else{
        let username = {
            fullname : textinput.value,
            email : email.value,
            password:password.value,
            term : checkbox.checked
        }

        let existuser = data.find(username => username.email == email.value)
        data.push(username)
        alert('Account Register')
        localStorage.setItem('userdata',JSON.stringify(data))
        console.log(data);
    }
    
}