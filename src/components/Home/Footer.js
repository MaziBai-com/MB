import React from 'react'
function Footer() {

    const footerStyle = {
        display:'flex',
        flexDirection:'column'
    }
  return (
    <>
    <section className="foot" style={{width:'100vw'}}>
    <div className="comments">
      <div className="comts">
      </div>
    </div>
    <footer   >
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">MaziBai</span>
          </div>

        </div>
        <div className="link-boxes">
          <ul className="box" style={footerStyle}>
            <li className="link_name">Company</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
          <ul className="box"style={footerStyle}>
            <li className="link_name" >Services</li>
            <li><a href="#">Baby sitter</a></li>
            <li><a href="#">Coking</a></li>
            <li><a href="#">Cleaning</a></li>
            <li><a href="#">Elderly Care</a></li>
          </ul>
          <ul className="box" style={footerStyle}>
            <li className="link_name">Account</li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Prefrences</a></li>

          </ul>


          <ul className="box" style={footerStyle}>
            <li className="link_name ">Location</li>
            <iframe className="m"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15100.873469138145!2d77.93904483628836!3d18.877391348841904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcde1f278ab727d%3A0xd10f8a504e6e7871!2sBasar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647571851048!5m2!1sen!2sin"
              allowfullscreen="" loading="lazy"></iframe>
        </ul>


        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright &#169; 2021 <a href="#">MaziBai.com</a>All rights reserved</span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>

  </section>

    </>
  )
}

export default Footer