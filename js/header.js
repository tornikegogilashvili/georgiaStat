const navBar = ["მემცენარეობა", "მეცხოველეობა", "სასურსათო <br> ბალანსი", "აკვაკულტურა", "ძირითადი <br>მაჩვენებლები"];
const navLink = ["memcenareoba.html", "mecxoveleoba.html", "sasursatoBalansi.html", "akvakultura.html", "dziritadiMachveneblebi.html"]
let navText = "<ul id="+"dziritadi_nav_ul"+">";
let navbarlength = navBar.length;

for (let i = 0; i < navbarlength; i++){
    navText += "<li id="+"dziritadi_nav_ul_li"+" class="+"dziritadi_nav_ul_li"+"><a href="+navLink[i]+">" + navBar[i] + "</a></li>"
}
navText += "</ul>"


const headerInfo = `
<h1 class="header_h1_logo" ><a href="index.html" >საქართველოს სტატისტიკის ეროვნული სამსახური</a></h1>
<h1 class="header_h1_text" ><a href="index.html" ></a></h1>
<nav class="nav" >${navText}</nav>
<div class="header_info_div">
    <div class="language_changer_div">
        <p><i class="fa-solid fa-globe"></i></p>
        <p>ქარ</p>
        <p><i class="fa-solid fa-check"></i></p>
    </div>
    <div class="socialnetwork_div" >
        <p><i class="fa-brands fa-facebook-f"></i></p>
        <p class="twitter_p"><i class="fa-brands fa-twitter"></i></p>
        <p><i class="fa-brands fa-linkedin-in"></i></p>
    </div>
</div>`

document.getElementById("header").innerHTML = headerInfo;





// $('.navbar-nav').on('click', 'li', function() {
//     $('.navbar-nav li.active').removeClass('active');
//     $(this).addClass('active');
//   });


 