import React from 'react'

function Cards() {
  return (
    <>
         <section class="usps">
      <center>
        <span class="green fs-3 fw-2" style={{backgroundColor:'#d02f9c',color:'white',padding:'5px',margin:'10px',borderRadius:'4px'}}>Neat, Clean & Hygienic Services</span>
        <div class="usp" style={{marginTop:'30px'}}>
          <div class="inner justify-content-center">
            <div class="common__inner inner1">
              <div class="img">
                <i class="fas fa-handshake fs-5 white"></i>
              </div>
              <div class="title">
                365 DAYS SERVICE
              </div>
              <div class="desc">
                We provide 365 days and 24/7 services if needed, maid replacement in case your regular maid is on leave.
                We provide 1, 2 days 1, 2 weeks or 1, 2 months maid/manpower services if needed.
              </div>
              <div class="button">
              </div>
            </div>
            <div class="common__inner inner2">
              <div class="img">
                <i class="fas fa-clipboard-check fs-5 white"></i>
              </div>
              <div class="title">
                INSTANT BOOKING
              </div>
              <div class="desc">
                We provide instant maid booking and maid replacement in case your regular maid is on leave.
              </div>
              <div class="button">
              </div>
            </div>
            <div class="common__inner inner3">
              <div class="img">
                <i class="fas fa-smile fs-5 white"></i>
              </div>
              <div class="title">
                HAPPY CUSTOMERS
              </div>
              <div class="desc">
                Our maids create free time, to our customers. This time can be utilized for personal or professional
                development or to do things that you always wanted to do but were unable to do because of a lack of time
                and support.
              </div>
              <div class="button">
              </div>
            </div>
          </div>
        </div>
      </center>
    </section>
    </>
  )
}

export default Cards