import {useState} from "react";


function Profile(){
    let [loddedin,setlogin]= useState(1)
    return(
        <div>
           {loddedin==1? <h1>Wlcome Darshan</h1>
            : loddedin==2 ? <h1>Welcome Guest1</h1>
           :<h1>Welcome Guest2</h1> }
        </div>
    )
}
export default Profile;