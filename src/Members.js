import { useEffect, useState } from "react"

const Members = () => {
    let [username, setUsername] = useState()
    let [password, setpassword] = useState()
    let [email, setEmail] =useState()
    useEffect( ()=> {
        console.log(parseInt(localStorage.getItem("Users")))
        if (localStorage.getItem("Users")) {
            let users = JSON.parse(localStorage.getItem("Users"))
            let reg = JSON.parse(localStorage.getItem("RegisteredUsers"))
            console.log(reg)
            for (let i = 0; i < reg.length; i++) {
                console.log(String(users))
                console.log(Object.keys(reg))
                console.log(reg[i].userName)
                console.log(typeof users)
                console.log(typeof reg[i].userName)
                console.log(users)
                if (users == reg[i].userName) {
                    console.log("hello")
                    setUsername(reg[i].userName)
                    setpassword(reg[i].password)
                    setEmail(reg[i].Email)
    
                }
                else{
                    console.log("Wats wrong")
                }
            }
        }
        else{
            // alert("Not Logged In")
        }
    }, [] )
    
    if(localStorage.getItem("Users")){
        return (
            <div className="member">
            <h3>Login Details</h3>
            <h5>Email : {email}</h5>
            <h5>Username : {username}</h5>
            <h5>Pasword: {password}</h5>
            
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>Please Login</h3>
            </div>
        )
    }
   
}
export default Members