import logo from './logo.svg';
import './App.css';
// import Profile from './Profile';
// import {useState} from 'react';
// function App() {
    //   let[name,setname]=useState("")
    //   let [tnc,settnc]= useState(false)
    //   let [movie,setmovie]=useState("")
    //   function getData(e){
        //   e.preventDefault()
        //   console.log(name,tnc,movie);
        //   }
        //   return (
            //     <div className="App">
            //       <h1>Handle Form In React!</h1>
            //       <form onSubmit={getData}>
            //          <input type="text" placeholder='Enter Name'  onChange={(e)=>setname(e.target.value)}/> <br></br><br/>
            //       <select onChange={(e)=>setmovie(e.target
            //         .value)}>
            //         <option>Select Your Choice</option>
            //         <option>Marvel</option>
//         <option>Bollywood</option>
//       </select><br/><br/>
//       <input type="checkbox"onChange={(e)=>settnc(e.target.checked)}/>
//       <span> Accept Terms & Condition </span>
//      <br/><br/>
//      <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;



/************************************************ */
// function App(){
//   return(
    //     <div className='App'>
    //       {/* <h1>Conditional Rendering!</h1> */}
//       <Profile />
//     </div>
//   )
// }
// export default App;




/******************************************** */
// import Login from './Login';
// function App(){
    //   let data = true;
//   return(
    //     <div className='App'>
//       <Login />
//     </div>
//   )
// }
// export default App;



/******************************************** */
// import User from './User';
// import Member from './Member';
// function App() {
//   function getData() {
//     alert("Good Afternoon User@@@")
//   }
//   return (
    //     <div className='App'style={{backgroundColor:"green"}}>
    //       <User data={getData} />
    //       <div style={{backgroundColor:"red"}}>
    //         <Member data ={getData}/>
    //       </div>
    //     </div>
    //   )
// }
// export default App;
import { useState } from 'react';
function App(){
    let [data,incrdata]=useState(0)
    // let [d,decredata]=useState(0)
    function Increment(){
      incrdata(data+1)
    }
    function Decrement(){
       incrdata(data-1)
       if(data<=1){
        alert("Your Data will Pass near to 0!!")
       }
    }
   
    return(
        <div className='App'>
            <h1>{data}</h1>
            {/* <h2>{deta}</h2> */}
            <button onClick={()=>Increment()} style={{margin:10}}>Increment</button>
            <button disabled={data<=0} onClick={()=>Decrement()}>Decrement</button>
            </div>
    )
}
export default App;
