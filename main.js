document.getElementById('check').onclick = function(){
    let login = document.getElementById('log').value ;
    let password = document.getElementById('pas').value ;
    
    checkLogin = Boolean(login)
    checkPassword = Boolean(password)
    if(checkLogin && checkPassword == true){
        let info = [login,password]
         console.log(info)
    }
}

