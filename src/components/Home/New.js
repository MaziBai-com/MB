import React from 'react'

function New() {
  return (
    <>
    <div class="site-mobile-menu-body">
    <ul class="site-nav-wrap">
                <li class="active"><a href="#home-section" class="nav-link">Home</a></li>
                <li class="has-children"><span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0"></span>
                  <a href="#" class="nav-link">Services <span class="text-right"><i class="fas fa-angle-down"></i></span></a>
                  <ul class="collapse" id="collapseItem0">
                    <li class="has-children"><span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem1"></span>
                      <a href="#">House Cleaning  <span class="float-right"><i class="fas fa-angle-down"></i></span></a>
                      <ul class="collapse" id="collapseItem1">
                        <li><a href="book.html">Hygienic </a></li>
                        <li><a href="book.html">Comprehensive </a></li>
                      
                      </ul>
                    </li>
                    <li><a href="book.html" class="nav-link">Elderly Care</a></li>
                    <li>
                      <a href="book.html">Cook</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Hygienic Kitchen Care</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Baby Sitting</a>
                      
                    </li>
                    <li>
                      <a href="book.html"> Laundry</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Caring Nurses</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Patient Care</a>
                      
                    </li>
                    
                    
                    <li class="has-children"><span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem2"></span>
                      <a href="book.html"> Mother Care  <span class="float-right"><i class="fas fa-angle-down"></i></span> </a>
                      <ul class="collapse" id="collapseItem2">
                        <li><a href="book.html">New Born Baby</a></li>
                        <li><a href="book.html">Massager</a></li>
                        
                      </ul>
                    </li>
                    <li>
                      <a href="book.html">Office Boy</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Painting</a>
                      
                    </li>
                    <li>
                      <a href="book.html"> Beauty Care</a>
                      
                    </li>
                    <li>
                      <a href="book.html"> Gardener </a>
                      
                    </li>
                   
                  </ul>
                </li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="#gallery-section" class="nav-link">Gallery</a></li>
                <li><a href="#contact-section">Contact</a></li>
                
                <div class="mediaIcons">
                 <li class="togglerefer"><a href="#refer" class="nav-link border-btn">Refer a Maid</a></li>
                 <li class="togglewant"><a href="#job" class="nav-link border-btn">Want a Job</a></li>
                 <li class="toggler"><a href="#partner" class="nav-link border-btn ">Register as Partner</a></li>
                 
              </div>
              </ul>
              </div>    
    </>

  )
}

export default New