import React, { useState } from "react";

function Login() {
    let [user,setuser]=useState("")
    let [Password,setpassword]=useState("")
    let [Error,setError]=useState(false)
    let [pass,passerror]=useState(false)
   function loginhandler(e){
    user.length<3 || Password.length<3?
    alert("/**Please Enter Valid Information**/")
    :
    alert("/** Your Information is Valid **/")
        e.preventDefault()
    }
    function getUserName(e){
        let item = e.target.value
        item.length<3?
        setError(true)
        : setError(false)
        console.log(e.target.value.length);
        setuser(item)
    }
    function getPassword(e){
        let item = e.target.value
        item.length<3?
        passerror(true)
        : passerror(false)
        setpassword(item)
        console.log(e.target.value.length);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginhandler}>
                <input type="text" placeholder="Enter User Name" onChange={getUserName}/> {Error?<span>User Not Valid</span>:"" }
                <br /><br />
                <input type="password" placeholder="Enter User Password"  onChange={getPassword}/>   {pass?<span>Password Not Valid</span>:"" }
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;