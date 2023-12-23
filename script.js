$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>620){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

         // scroll-up button show/hide script
         if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     // slide-up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

        // typing text animation script
        var typed = new Typed(".typing", {
            strings: ["Recyling.", "Trading.", "Dismantling of plants."],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        var typed = new Typed(".typing-2", {
            strings: ["Recyling.", "Trading.", "Dismantling of plants."],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('#btn i').toggleClass("active");
    })

    //owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000, // Set the autoplay timeout to 2000 milliseconds (2 seconds)
      autoplayHoverPause: false,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
  

});


























const contentArray = [
  {
    imgSrc: 'media/img19.png',
    heading: 'Dismantling of Plants'
  },
  {
    imgSrc: 'media/img1.png',
    heading: 'Copper Scrap'
  },
  {
    imgSrc: 'media/img2.png',
    heading: 'Alluminum Scrap'
  },
  {
    imgSrc: 'media/img3.png',
    heading: 'Brass Scrap'
  },
  {
    imgSrc: 'media/img4.png',
    heading: 'Motor Scrap'
  },
  {
    imgSrc: 'media/img5.png',
    heading: 'SS Scrap'
  },
  {
    imgSrc: 'media/img6.png',
    heading: 'Cables'
  },
  {
    imgSrc: 'media/img7.png',
    heading: 'HMS Scrap'
  },
  {
    imgSrc: 'media/img8.png',
    heading: 'HMS Scrap'
  },
  {
    imgSrc: 'media/img9.png',
    heading: 'HMS Scrap'
  },
  {
    imgSrc: 'media/img10.png',
    heading: 'HMS Scrap'
  },
  {
    imgSrc: 'media/img11.png',
    heading: 'HMS Scrap'
  },
  {
    imgSrc: 'media/img12.png',
    heading: 'HMS Scrap'
  },
  {
    imgSrc: 'media/img13.png',
    heading: 'Old Machinary Scrap'
  },
  {
    imgSrc: 'media/img14.png',
    heading: 'Old Machinary Scrap'
  },
  {
    imgSrc: 'media/img15.png',
    heading: 'Old Machinary Scrap'
  },
  {
    imgSrc: 'media/img16.png',
    heading: 'Old Machinary Scrap'
  },
  {
    imgSrc: 'media/img17.png',
    heading: 'Old Machinary Scrap'
  },
  {
    imgSrc: 'media/img18.png',
    heading: 'Old Machinary Scrap'
  },
  {
    imgSrc: 'media/img19.png',
    heading: 'Dismantling of Plants'
  }
];

// Function to create content based on the array
function createContent() {
  const contentContainer = document.getElementById('conSer');

  let contentHTML = '';

  contentArray.forEach(item => {
    // Create HTML template 
    const itemHTML = `
    <div class="card">
    <div class="card__image">
      <div class="card__content" style="background-image: url('${item.imgSrc}');">
          <span class="card__title" style="text-transform:capitalize;">${item.heading}</span>
      </div>
    </div>
    </div>

  

    `;

    contentHTML += itemHTML;
  });

  // Set the HTML content to the container
  contentContainer.innerHTML = contentHTML;
}

// Call the function to generate content when the page loads
window.onload = createContent;

  


  



  
//for the crousal ()

// const contentArray2 = [
//   {
//     imgSrc: 'media/dowload(1).png',
//     heading: 'Dismantling of Plants'
//   },
//   {
//     imgSrc: 'media/img1.png',
//     heading: 'Copper Scrap'
//   },
//   {
//     imgSrc: 'media/img2.png',
//     heading: 'Alluminum Scrap'
//   },
//   {
//     imgSrc: 'media/img3.png',
//     heading: 'Brass Scrap'
//   },
//   {
//     imgSrc: 'media/img4.png',
//     heading: 'Motor Scrap'
//   },
//   {
//     imgSrc: 'media/img5.png',
//     heading: 'SS Scrap'
//   },
//   {
//     imgSrc: 'media/img6.png',
//     heading: 'Cables'
//   },
//   {
//     imgSrc: 'media/img7.png',
//     heading: 'HMS Scrap'
//   },
//   {
//     imgSrc: 'media/img8.png',
//     heading: 'HMS Scrap'
//   },
//   {
//     imgSrc: 'media/img9.png',
//     heading: 'HMS Scrap'
//   },
//   {
//     imgSrc: 'media/img10.png',
//     heading: 'HMS Scrap'
//   },
//   {
//     imgSrc: 'media/img11.png',
//     heading: 'HMS Scrap'
//   },
//   {
//     imgSrc: 'media/img12.png',
//     heading: 'HMS Scrap'
//   },
//   {
//     imgSrc: 'media/img13.png',
//     heading: 'Old Machinary Scrap'
//   },
//   {
//     imgSrc: 'media/img14.png',
//     heading: 'Old Machinary Scrap'
//   },
//   {
//     imgSrc: 'media/img15.png',
//     heading: 'Old Machinary Scrap'
//   },
//   {
//     imgSrc: 'media/img16.png',
//     heading: 'Old Machinary Scrap'
//   },
//   {
//     imgSrc: 'media/img17.png',
//     heading: 'Old Machinary Scrap'
//   },
//   {
//     imgSrc: 'media/img18.png',
//     heading: 'Old Machinary Scrap'
//   },
//   {
//     imgSrc: 'media/img19.png',
//     heading: 'Dismantling of Plants'
//   }
// ];

// // Function to create content based on the array
// function createContent2() {
//   const contentContainer2 = document.getElementById('carousel');

//   let contentHTML2 = '';

//   contentArray2.forEach(item => {
//     // Create HTML template 
//     const itemHTML = `
//     <div class="card">
//         <div class="box">
//           <img src="${item.imgSrc}" alt="">
//           <div class="text">SREE BALAJI FURNACE </div>
//             <p>${item.heading}</p>
//           </div>
//     </div>  

//     `;

//     contentHTML2 += itemHTML;
//   });

//   // Set the HTML content to the container
//   contentContainer2.innerHTML = contentHTML2;
// }

// // Call the function to generate content when the page loads
// // window.onload = createContent2;
