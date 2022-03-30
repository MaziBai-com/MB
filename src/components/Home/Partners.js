import React , {useState} from 'react'
import {PartnerUrl} from "../../urls"; 
function Partners(props) {
    const [input , setinput] = useState({})
    const handleChange = (e) => {
        setinput({...input , [e.target.name]:e.target.value}); 
    }
    const [error , seterror ] = useState(''); 
    const handleSubmit = () => {
        fetch(PartnerUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
			body:JSON.stringify(input)
        }).then(res => res.json())
        .then(data => {
            if(data.success ===  true){
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
    <div class="reg-contact " id="123c">
      <h3 align="center">Register As Partner</h3>
      <span>If you are in a similar business and want to increase your business and network, want to have job
        satisfaction, and at the same time want to make positive changes to society by adding happiness to the lives of
        many then join us.</span>
        <p style={{color:'red',textAlign:'center'}} >{error}</p>
      <hr/>
      <div class="scroll">
        <form>
          <input class="chinput" type="text" onChange={handleChange} name="name" placeholder="Name" required/>
          <input class="chinput" type="tel" onChange={handleChange} name="phone" placeholder="Phone" required/>
          <input class="chinput" type="email" onChange={handleChange} name="email" placeholder="example@gmail.com"/>
          <input class="chinput" type="service" onChange={handleChange} name="service" placeholder="Phone Number" required/>
          <input type="button" onClick={handleSubmit} value="Submit"/>
        </form>
      </div>
      <span class="wrong toggler"> <i onClick={props.setZero} class="fas fa-times"></i></span>
      <hr/>
      <h5 class="text-center">Partner with us!</h5>
      <h5 class="text-center"> Happy to connect with you <i class="fas fa-smile color-green  "></i>
        Will call you shortly!</h5>
    </div>
    </>
  )
}

export default Partners