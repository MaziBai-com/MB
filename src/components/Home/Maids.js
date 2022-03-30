import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"

function Maids() {
  const maids = [
    {
      name:'John',
      job: 'Nurse',
      img:img1
    },
    {
      name:'Chary',
      job: 'Cook',
      img:img2
    },
    {
      name:'Kiran',
      job: 'Washing',
      img:img3
    },
    {
      name:'Kumar',
      job: 'Office Worker',
      img:img4
    },
  ]
  return (
    <>
    <div class="break1 container-fluid text-center">

      <section class="maid">
        <div class="container">
          <div class="title-text">
            <p>OUR BAI'S</p>
            <h1>Check Out Our Maids</h1>
          </div>
          <div class="main-card">
            <div class="cards">
              {
                maids.map((maid , index)=> {
                  return <div key={index} class="card ">
                  <div class="content">
                    <div class="img">
                      <img src={maid.img} alt=""/>
                    </div>
                    <div class="details">
                      <div class="name">{maid.name}</div>
                      <div class="job">{maid.job}</div>
                    </div>
                    <div class="media-icons">
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="hire">
                      <Link to={'/book'}>Hire Me</Link>
                    </div>
                  </div>
                </div>
                })
              }
              
            </div>
          </div>
        </div>
      </section>

    </div>

    </>
  )
}

export default Maids