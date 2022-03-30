import React, { useState } from 'react'
import {wantJob} from "../../urls"
function WantJob(props) {
    const [input , setinput] = useState({})
    const handleChange = (e) => {
        setinput({...input , [e.target.name]:e.target.value}); 
    }
    const [error , seterror ] = useState(''); 
    const handleSubmit = () => {
        fetch(wantJob,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
			body:JSON.stringify(input)
        }).then(res => res.json())
        .then(data => {
            if(data.success === true){
				seterror('Success'); 
                setTimeout(() => {
                    props.setZero(); 
                }, 1500);
			}
            else{
                seterror(data.msg); 
                setTimeout(() => {
                    seterror('') 
                }, 2000);

            }
		})
	}        

  return (
    <>
     <div class="want-contact" id="123job">
      <h3 align="center">Want a Job?</h3>
      <p style={{color:'red'}}>{error}</p>
      <hr/>
      <div class="scroll">
        <form>
          <input class="chinput" type="text" onChange={handleChange} name="name" placeholder="Name" required={true}/>
          <input class="chinput" type="tel" onChange={handleChange} maxLength={10} name="phone" placeholder="Phone Number" required={true}/>
          <input class="chinput" type="number" onChange={handleChange} maxlength="10" name="zipcode" placeholder="Zip Code" required={true}/>
          <input class="chinput" type="text" onChange={handleChange} name="place" placeholder="place" required={true}/>
          <input class="btn-primary" type="button"value={'Submit'} onClick={handleSubmit} required={true} />
        </form>
      </div>
      <span class="wrong togglewant"> <i onClick={props.setZero} class="fas fa-times"></i></span>
      <hr/>
      <h5 class="text-center"></h5>
    </div>
    </>
  )
}

export default WantJob