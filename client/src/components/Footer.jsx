import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <>
    <div className="footer"></div>
    <div className="about-us-container">

<div className="about-us-text">

    <div className="about-firstcolumn">
        <h2>Our Facilities</h2>
        <ul>
            <li>
                <a href="/">About Us</a>
            </li>
            <li>Top Categories</li>
            <li>Trending Sites</li>
            <li>
                <a href="./">Wish List</a>
            </li>
            <li>Host A Site</li>
            <li>
                <a href="./">Reservation</a>
            </li>
            <li>
                <a href="./">Contact Us</a>
            </li>
        </ul>
    </div>

    <div className="about-secondcolumn">
            <img src="assets/logo.png" height="200px" alt="Dreamlet" className="logo-light"/>
    </div>

    <div className="about-thirdcolumn">

        <h2>Contact Us</h2>
        <ul>
            <li>
                <i className="fa-solid fa-mobile"></i>&emsp;
                <span>Phone:</span>
                &emsp;+919876543210
            </li>
            <li>
                <i className="fa-solid fa-phone"></i>&emsp;
                <span>Landline:</span>
                &emsp;(011)-2xxx-xxxx
            </li>
            <li>
                <i className="fa-solid fa-envelope"></i>&emsp;
                <span>Email:</span>
                &emsp;dreamlet123@gmail.com
            </li>
        </ul>
    </div>

</div> 

<div className="follow-icons">
        <div className="about-icon-container">
            <ul>
                <li className="instagram"><i className="fa-brands fa-instagram icon1 icon"></i></li>
                <li className="twitter"><i className="fa-brands fa-twitter icon2 icon"></i></li>
                <li className="youtube"><i className="fa-brands fa-youtube icon3 icon"></i></li>
                <li className="facebook"><i className="fa-brands fa-facebook icon4 icon"></i></li>
            </ul>
        </div>
    </div>

</div>
    </>
  )
}

export default Footer