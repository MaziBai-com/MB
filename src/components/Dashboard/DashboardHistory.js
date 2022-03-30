import React, { useState , useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {allBookings} from "../../urls"; 
function DashboardHistory() {
	const navigate = useNavigate(); 
	const [bookings , setbookings] = useState([]); 
	useEffect(() => {
		let authToken = localStorage.getItem('MazibaiToken'); 
		if(!authToken){
			navigate('/'); 
		}
		fetch(allBookings,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'authToken':authToken
            },
        }).then(res => res.json())
        .then(data => {
            if(data.success === true){
                setbookings(data.bookings);
            }else{
                navigate('/')
            }
        })
	}, [])
	const dateToDate = (date) => {
		let string = new Date(date); 
		return string.toLocaleDateString(); 
	  } 
	  const dateToTime = (date) => {
		let string = new Date(date); 
		return string.toLocaleTimeString(); 
	  } 
  return (
    <>
        <main id="chary1" class="history text">
			<h3>History</h3>
			<div class="current">
				{
					bookings.length === 0 && <h1>Start Booking </h1>
				}
				{
					bookings.map((book)=>{
						return <div key={book._id} class="div  presentStatus1">
						<div class="bookingContent">
							<div class="bookingdata">
								<h4 class="h4">{book.service.map((element , index) => {
									return `${index===0 ? '' : ',  ' } ${element}  `
								})}</h4>
								<span>
								<b>{dateToTime(book.date) + '   '+dateToDate(book.date)}</b>
								</span>
								
							</div>
							<div class="statusButton">
								<span class="status">{book.status}</span>
							</div>
						</div>
					</div>
					})
				}
			</div>
		</main>
    </>
  )
}

export default DashboardHistory