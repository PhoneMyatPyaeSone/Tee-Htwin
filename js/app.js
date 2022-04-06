$('.member-box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let currentPlace = document.querySelector(".currentPlace");
let currentMember = document.querySelector(".currentMember");
let allPath = document.querySelectorAll("path");
let place = {
    Kachin : "1",
    Sagaing : "2",
    Chin : "3",
    Rakine : "0",
    Ayeyarwady : "0",
    Magway : "0",
    Kayin : "0",
    Shan : "0",
    Mon : "0",
    Kayah : "0",
    Tanintharyi : "0",
    Yangon : "3",
    Mandalay : "5",
    Bago : "2"
};


allPath.forEach(currentPath=>{
    currentPath.addEventListener("mouseover",_=>{
        allPath.forEach(c=>c.classList.remove("active"));
        currentPath.classList.add("active");
        let getCurrentPlace = currentPath.getAttribute("name");
        // console.log(getCurrentPlace);
        for(let i in place){
            // console.log(i);
            switch(getCurrentPlace){
                case i:
                    currentMember.innerText = place[i];
                    break;
            }
        }
        currentPlace.innerText = getCurrentPlace;
    });
})

document.querySelector("[name='Yangon']").classList.add("active");
currentPlace.innerText = "Yangon";
currentMember.innerText = place["Yangon"];