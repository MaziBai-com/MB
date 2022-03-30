import React from 'react'
import bg1 from "../../images/bg1.jpg"
import bg2 from "../../images/bg2.jpg"
import mothercare from "../../images/mothercare.jpg"
import paint from "../../images/paint.jpg"
import gardener from "../../images/gardener.jpg"
import house from "../../images/house.jpg"
import cloths from "../../images/cloths.jpg"
import officeboy from "../../images/officeworker.jpg"
import nurse from "../../images/nurse.jpg"

import {Link} from "react-router-dom"

function Services() {
    const centerStyle = {
        display:'flex',
        justifyContent:'center'
    }
    const ser = [
      {
        name:'Hygienic Kitchen Care',
        desc:'Cleanliness is next to Godliness and a Clean Kitchen is next to Happiness.',
        img:bg1
      },
      {
        name:'Delicious & Nutritious Cook',
        desc:'We not only take care of Taste, but also Nutrition and Hygiene while preparing food.',
        img:bg2
      },
      {
        name:'New Born Baby & Mother Care/Massager',
        desc:'What can be a better gift than giving your baby and new mother, a loving and caring babysitter and massager.',
        img:mothercare
      },
      {
        name:'House Coloring and Painting',
        desc:'To keep your home new and shining forever, try our creative coloring and painting services.',
        img:paint
      },
      {
        name:'Eco-Friendly Gardener',
        desc:'To keep your garden and home surroundings beautiful, attractive, and lush green. Go green with our eco-friendly gardener.',
        img:gardener
      },
      {
        name:'Hygienic House Cleaning',
        desc:'Want to look trendy and classy? To groom you and bring the best out of you.',
        img:house
      },
      {
        name:'Neat & Clean Cloth Washing/Laundry',
        desc:'Neat and Clean Washing for First Class Look.',
        img:cloths
      },
      {
        name:'Office Boy/Office Worker',
        desc:'Disciplined, Sincere, Punctual and Trained manpower.',
        img:officeboy
      },
      {
        name:'Nurturing and Caring Nurses for Elder & Patient Care',
        desc:'To heal patients quickly and support them in their tough times try our experienced service for a family member recovering from Illness. Taking good care of your health recovery is our Responsibility.',
        img:nurse
      },

    ]
  return (
    <>
    <section style={centerStyle}>

      <div class="container py-2">
        <div class="h1 text-center text-dark" id="pageHeaderTitle">Our Services</div>

          {
            ser.map((item , index)=> {
              return <article key={index} class="postcard light blue">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src={item.img} alt="Image Title" />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title blue"><a href="#">{item.name}</a></h1>
    
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">{item.desc}</div>
                <ul class="postcard__tagbox">
                    <Link to={"/book"} class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</Link>
                </ul>
              </div>
            </article>
            })
          }
        

        {/* <article class="postcard light red">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title red"><a href="#">Delicious & Nutritious Cook</a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Experience The First Class Cook's And Taste it to Heaven. </div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light green">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img"src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">Elder/Baby/Patient Care</a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Supportive For a Relative recovering From Illness. <br/>Taking care of
              your health is our Responsibility</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light yellow">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title yellow"><a href="#">House Coloring and Painting</a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Makes your Home Happy with our Joyful Colors</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light green">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">Ecofriendly Gardener</a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Experienced in keeping your garden healthy and productive</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light green">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">
                Hygienic House Cleaning
              </a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Your First Step To Healthy And Hygienic Home</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light green">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">Neat & Clean Cloths Washing/Laundry</a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Neat And clean Washing First Class Look.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light green">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">Office Boy/ Office Worker</a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Your Security is our Duty and always secure you</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>

            </ul>
          </div>
        </article>
        <article class="postcard light green">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={ServiceImg} alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">
                Nurturing & Caring Nurses
              </a></h1>

            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Your First Step To Healthy And Hygienic Home</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Hire Us</li>
            </ul>
          </div>
        </article> */}

      </div>
    </section>

    </>

  )
}

export default Services