import React,{useState} from 'react'

const form = () => {
    // javaScript Here
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const HandleSubmit = (e)=>{
        /*t's like saying, "Hey, don't do your usual stuff, website! I want to handle this myself."
         So, when you use e.preventDefault() in your code, you're telling the browser, 
         "Hold on, I'll take care of this event (like form submission) in a custom way, 
         so don't do the default action (like reloading the page) that you usually do." */
    e.preventDefault();

     console.log(name,email,password);

    setName('');
    setEmail('');
    setPassword('');
    } 

// const HandleName = (e)=>{
//     // console.log(e);
//     setName(e.target.value)
// }

// const HandleEmail = (e)=>{
//     // console.log(e);
//     setEmail(e.target.value)
// }

// const HandlePassword = (e)=>{
//     // console.log(e);
// setPassword(e.target.value)
// }

  return (
    <div> 
        
        <form onSubmit={HandleSubmit}>
            <br />
            <br /><br /><br />
            <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br />
            <br />
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <br />
            <input type="password" placeholder='Enter Your Password' value={password}   onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <br />
            <button>Submit</button>
        </form>

    </div>
  )
}

export default form