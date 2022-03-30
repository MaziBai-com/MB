import React from 'react'
import { Link } from 'react-router-dom'
import BG1 from "../../images/bg1.jpg"
import BG2 from "../../images/bg2.jpg"
import BG3 from "../../images/bg3.jpg"
import BG4 from "../../images/bg4.jpg"
import BG5 from "../../images/bg5.jpg"

function Head() {
  return (
    <>
        <section class="head">
      <div class="bgslider">
        <img src={BG1} alt=""/>
        <img src={BG2} alt=""/>
        <img src={BG3} alt=""/>
        <img src={BG4} alt=""/>
        <img src={BG5} alt=""/>
      </div>
      <div class="animation-area">
        <div class="wilson">

          <div class="banner-text">
            <h1 class="logoName mt-5">MaziBai.Com</h1>
            <p class="logoTagLine">Redefining Home Services</p>
            <p class="logoCaption" style={{fontSize:'30px'}}>We Provide Customised , Personalised , Home Services at affordable rates.</p>
            <div class="banner-btn btnContainer">
              <Link to={'/auth'}><span></span> Login</Link>
              <Link to={'/dashboard/main'}><span></span> Dashboard</Link>
              <Link to={'/book'} class="toggle"><span></span>Book Now</Link>
            </div>

          </div>

        </div>



      </div>


      <div class="chat_icon">
        <i class="fa fa-comments chat-color" aria-hidden="true"></i>
      </div>
      <div class="chat_box">
        <div class="my-conv-form-wrapper">
          <form action="" method="GET" class="hidden">

            <input type="text" name="name"
              data-conv-question="Hello! We Are Happy To Help You..!, <br> Please, Enter your name"/>
            <input type="tel" name="tel" data-conv-question="Hi {name}, <br> Please Enter Your Contact Number"
              length="10"/>

            <select data-conv-question="Services You Are Interested In" name="category">
              <option value="WebDevelopment">Home Maid</option>
              <option value="DigitalMarketing">Baby Sitter</option><br/>
              <option value="DigitalMarketing1">Cook</option>
              <option value="DigitalMarketing2">Cloth Cleaner</option>
            </select>

            <div data-conv-fork="category">
              <div data-conv-case="WebDevelopment">
                <input type="text" name="domainName" data-conv-question="Please, tell me your domain name"/>
              </div>
              <div data-conv-case="DigitalMarketing" data-conv-fork="first-question2">
                <input type="text" name="companyName" data-conv-question="Please, enter your company name"/>
              </div>
            </div>

            <input type="text" name="name" data-conv-question="Please, Enter your name"/>

            <input type="text" data-conv-question="Hi {name}, <br> It's a pleasure to meet you." data-no-answer="true"/>

            <input data-conv-question="Enter your e-mail"
              data-pattern="^[a-zA-Z0-9.!#$%*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              type="email" name="email" required placeholder="What's your e-mail?"/>

            <select data-conv-question="Please Conform">
              <option value="Yes">Confirm</option>
            </select>

          </form>
        </div>
      </div>

      <section>
        <div class="sep-section"></div>
      </section>

    </section>
    </>

  )
}

export default Head