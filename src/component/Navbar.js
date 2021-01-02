import React from 'react'
import './Navbar.css'
function Navbar() {
    return ( 
        <div id="navbar"><a href="index.html">
        <img src="./logo.png"></img></a>
         <div id="content">
         <ul class="snip1135">
             <li class="current"><a href="home.html" data-hover="Home">Home</a></li>
            <li><a href="about.html" data-hover="ABOUT US">ABOUT US</a></li>
            <li><a href="non-alcoholic.html" data-hover="NON-ALCOHOLIC">NON-ALCOHOLIC</a></li>
            <li><a href="alcoholic.html" data-hover="ALCOHOLIC">ALCOHOLIC</a></li>       
            <li><a href="contact.php" data-hover="CONTACT US">CONTACT US</a></li>
          </ul>
          </div>
    </div>
    )
}

export default Navbar
