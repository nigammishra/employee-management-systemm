import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer">
  <div className="container">     
    <div className="row">                       
      <div className="col-lg-4 col-sm-4 col-xs-12">
        <div className="single_footer">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Simply dummy text</a></li>
            <li><a href="#">The printing and typesetting </a></li>
            <li><a href="#">Standard dummy text</a></li>
            <li><a href="#">Type specimen book</a></li>
          </ul>
        </div>
      </div>{/*- END COL */} 
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="single_footer single_footer_address">
          <h4>Page Link</h4>
          <ul>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Simply dummy text</a></li>
            <li><a href="#">The printing and typesetting </a></li>
            <li><a href="#">Standard dummy text</a></li>
            <li><a href="#">Type specimen book</a></li>
          </ul>
        </div>
      </div>{/*- END COL */}
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="single_footer single_footer_address">
          <h4>Subscribe today</h4>
          <div className="signup_form">                           
            <form action="#" className="subscribe">
              <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
              <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane" /></button>
            </form>
          </div>
        </div>
        <div className="social_profile">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#"><i className="fab fa-twitter" /></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
            <li><a href="#"><i className="fab fa-instagram" /></a></li>
          </ul>
        </div>                          
      </div>{/*- END COL */}         
    </div>{/*- END ROW */} 
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <p className="copyright">Copyright © 2019 <a href="#">nigam</a>.</p>
      </div>{/*- END COL */}                 
    </div>{/*- END ROW */}                 
  </div>{/*- END CONTAINER */}
</div>

    </div>
  )
}

export default Footer