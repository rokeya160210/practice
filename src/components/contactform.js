import React from "react";
import { useState } from "react";

const ContactForm = ()=>{
    // const [userName, setuserName] = useState('')
    // const[password, setPassword] = useState('')
    // // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     console.log({
    //         userName, password
    //     })
    // }
    //for reset button
//    const reSet = (e) =>{
//        setuserName('')
//        setPassword('')
//    }
//    //for save with reset
//    const save = (e) =>{
//        e.preventDefault()
//        console.log({
//                 userName, password
//              })
//         setuserName('')
//         setPassword('')      

//    }

const [submitting, setSubmitting] = useState(false);
const handleSubmit = event => {
    event.preventDefault()
    //alert('You have submitted the form')
    setSubmitting(true)

    setTimeout(()=>{
        setSubmitting(false)
    },3000) 
}

    return(
        <div>
        {submitting &&
        <div> Submitting Form</div>
       
    }

       <form onSubmit = {handleSubmit}>
       <fieldset>
       <label>
       <p>Name</p>
       <input name = "name"/>
       </label>
       </fieldset>
       <fieldset/>
       <button type = "submit"> Submit</button>
       </form>
       </div>
        // <form  >
        // <input className = "position"
        // label = "UserName"
        // type = "text"
        // value = {userName}
        // onChange = {(e) =>setuserName( e.target.value)} 
        // />
        // <br/>
        // <br/>
        // <input className = "position"
        // label = " Password"
        // type = "password"
        // value = {password}
        // onChange = {(e) =>setPassword( e.target.value)} 
        // />
        // <br/>
        // <br/>
        // <button className = "position" onClick ={(e)=>{
        //     e.preventDefault()
        //        console.log({
        //      userName, password
        //          })
        // }}> Submit</button>
        // <hr/>
        // <button className = "position" onClick = {reSet}>reset</button>
        // <hr/>
        // <button className = "position" onClick = {save}>saveWithReset</button>
        // </form>
      
        // <div className = "form-group">
        // // <label htmlFor = "username"> UserName</label>
        // // <input 
        // // className = "form-control"
        // // type = "text"
        // // name = "username"
        // // value = {userName}
        // // onChange = {(e) =>setuserName(e.target.value)
        
        // // }
        // // />

        // <form onSubmit = {handleSubmit}>
        // <div className = "form-group">
        // <label htmlFor = "username"> UserName</label>
        // <input 
        // className = "form-control"
        // type = "text"
        // name = "username"
        // value = {userName}
        // onChange = {(e) =>setuserName(e.target.value)
        
        // }
        // />
        // </div>
        // <div className = "form-group">
        // <label htmlFor = "password"> Password</label>
        // <input 
        // className = "form-control"
        // type = "password"
        // name = "password"
        // value = {password}
        // onChange = {(e) =>setPassword(e.target.value)
        
        // }
        // />
        // </div>
        // <button type = "submit"> submit</button>
        // </form>
       //</div> </>
    )

}

export default ContactForm