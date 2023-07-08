const ls2 = document.getElementById("ls-2"),
ls3 = document.getElementById("ls-3"),
ls4 = document.getElementById("ls-4");
const ls1 = document.getElementById("ls-1");

let vehicle = document.getElementById("vehicle"),
spaceport = document.getElementById("spaceport"),
capsule = document.getElementById("capsule");

ls1.addEventListener("click", () => {
    ls2.style.borderBottom = "transparent";
    ls3.style.borderBottom = "transparent";
    ls4.style.borderBottom = "transparent";
    ls1.style.borderBottom = "solid"  ; 

    let place = document.getElementById("place");
    let detail = document.getElementById("detail").innerHTML;
    let img = document.querySelector("#destination img");

    let distance = document.getElementById("distance");
    let time = document.getElementById("time");

    place.innerHTML = "MARS";
    detail = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our soloar system. It's two and a half times the size of Everest!"
    img.src = "/images/destination/image-mars.png";

    distance.innerHTML = "225.MLL.KM";
    time.innerHTML = "9 MONTHS"
});

ls2.addEventListener("click", () => {
 ls1.style.borderBottom = "transparent";
 ls3.style.borderBottom = "transparent";
 ls4.style.borderBottom = "transparent";
 ls2.style.borderBottom = "solid"  ; 

 let place = document.getElementById("place");
 let detail = document.getElementById("detail");
 let img = document.querySelector("#destination img");

 let distance = document.getElementById("distance");
 let time = document.getElementById("time");

 place.innerHTML = "MOON";
 detail.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
 img.src = "/images/destination/image-moon.png";

 distance.innerHTML = "180.MLL.KM";
 time.innerHTML = "6 MONTHS";
});

ls3.addEventListener("click", () => {
    ls1.style.borderBottom = "transparent";
    ls2.style.borderBottom = "transparent";
    ls4.style.borderBottom = "transparent";
    ls3.style.borderBottom = "solid"  ; 

    let place = document.getElementById("place");
    let detail = document.getElementById("detail");
    let img = document.querySelector("#destination img");
   
    let distance = document.getElementById("distance");
    let time = document.getElementById("time");
   
    place.innerHTML = "EUROPA";
    detail.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    img.src = "/images/destination/image-europa.png";
   
    distance.innerHTML = "62 MLL.KM";
    time.innerHTML = "3 YEARS";
});

ls4.addEventListener("click", () => {
    ls1.style.borderBottom = "transparent";
    ls2.style.borderBottom = "transparent";
    ls3.style.borderBottom = "transparent";
    ls4.style.borderBottom = "solid"  ; 

    let place = document.getElementById("place");
    let detail = document.getElementById("detail");
    let img = document.querySelector("#destination img");
   
    let distance = document.getElementById("distance");
    let time = document.getElementById("time");
   
    place.innerHTML = "TITAN";
    detail.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    img.src = "/images/destination/image-titan.png";
   
    distance.innerHTML = "1.6 BLL.KM";
    time.innerHTML = "7 YEARS";
});

vehicle.addEventListener("click", () => {
    let img = document.querySelector("#tech img");

    let itemToLaunch = document.getElementById("itemtolaunch");
    let itemToLaunchDetail = document.getElementById("itemdetail");

    spaceport.style.backgroundColor = "transparent";
    spaceport.style.color = "white";
    spaceport.style.border = "thin solid white"

    capsule.style.backgroundColor = "transparent";
    capsule.style.color = "white";
    capsule.style.border = "thin solid white"

    vehicle.style.backgroundColor = "white";
    vehicle.style.color = "black";


    itemToLaunch.innerHTML = "LAUNCH VEHICLE";
    itemToLaunchDetail.innerHTML = "A lauch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the lauch pad! ";
    img.src = "/images/technology/image-launch-vehicle-portrait.jpg";

})
   


spaceport.addEventListener("click", () => {
    let img = document.querySelector("#tech img");

    let itemToLaunch = document.getElementById("itemtolaunch");
    let itemToLaunchDetail = document.getElementById("itemdetail");


    vehicle.style.backgroundColor = "transparent";
    vehicle.style.color = "white";
    vehicle.style.border = "thin solid white"

    capsule.style.backgroundColor = "transparent";
    capsule.style.color = "white";
    capsule.style.border = "thin solid white"

    spaceport.style.backgroundColor = "white";
    spaceport.style.color = "black";

    itemToLaunch.innerHTML = "LAUNCH SPACEPORT";
    itemToLaunchDetail.innerHTML = " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. "

    img.src = "/images/technology/image-spaceport-portrait.jpg";


})

capsule.addEventListener("click", () => {
    let img = document.querySelector("#tech img");


    let itemToLaunch = document.getElementById("itemtolaunch");
    let itemToLaunchDetail = document.getElementById("itemdetail");    

    vehicle.style.backgroundColor = "transparent";
    vehicle.style.color = "white";
    vehicle.style.border = "thin solid white"

    spaceport.style.backgroundColor = "transparent";
    spaceport.style.color = "white";
    spaceport.style.border = "thin solid white"

    capsule.style.backgroundColor = "white";
    capsule.style.color = "black";

    itemToLaunch.innerHTML = "LAUNCH CAPSULE";
    itemToLaunchDetail.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. ";

    img.src = "/images/technology/image-space-capsule-portrait.jpg";

})
   

// nav items

// const navItem1 = document.getElementById("list-1"),
// navItem2 = document.getElementById("list-2"),
// navItem3 = document.getElementById("list-3"),
// navItem4 = document.getElementById("list-4");

// navItem1.addEventListener("click", () => {
//     navItem2.style.borderBottom = "none";
//     navItem3.style.borderBottom = "none";
//     navItem4.style.borderBottom = "none";

//     navItem1.style.borderBottom = "thin solid white";
// })
   

// navItem2.addEventListener("click", () => {
//     navItem1.style.borderBottom = "none";
//     navItem3.style.borderBottom = "none";
//     navItem4.style.borderBottom = "none";

//     navItem2.style.borderBottom = "thin solid white";
// })

// navItem3.addEventListener("click", () => {
//     navItem1.style.borderBottom = "none";
//     navItem2.style.borderBottom = "none";
//     navItem4.style.borderBottom = "none";

//     navItem3.style.borderBottom = "thin solid white";
// })
   

// navItem4.addEventListener("click", () => {
//     navItem1.style.borderBottom = "none";
//     navItem2.style.borderBottom = "none";
//     navItem3.style.borderBottom = "none";

//     navItem4.style.borderBottom = "thin solid white";
// })


const mobileNav = document.getElementById("mobile-nav");
const hamburger = document.getElementById("hamburger");
const antiHamburger = document.getElementById("anti-hamburger");

hamburger.addEventListener("click", () => {
    mobileNav.style.display = "flex";
    hamburger.style.display = "none";
    antiHamburger.style.display = "block";

})

antiHamburger.addEventListener("click", () => {
    mobileNav.style.display = "none";
    antiHamburger.style.display = "none";
    hamburger.style.display = "flex";
})






