VANTA.FOG({
    el: "#main-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x4565b0,
    midtoneColor: 0xffab00,
    blurFactor: 0.54,
    speed: 1.50,
    zoom: 1.30
  })



// const slides = document.querySelectorAll('.slide')

// for (const slide of slides) {
//     slide.addEventListener('click', () => {
//         clearActiveClasses()

//         slide.classList.add('active')
//     })
// }

// function clearActiveClasses() {
//     slides.forEach((slide) => {
//         slide.classList.remove('active')
//     })
// }

const slides = document.querySelectorAll('.slide')
let activeSlideIndex = 0

// Вызываем функцию автоматической смены слайдов каждые 3 секунды
setInterval(() => {
  clearActiveClasses()
  activeSlideIndex++
  if (activeSlideIndex === slides.length) {
    activeSlideIndex = 0
  }
  slides[activeSlideIndex].classList.add('active')
}, 3000)

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}





// AOS.init();
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

/* To connect using MetaMask */
async function connect() {
    if (window.ethereum) {
    
     await window.ethereum.request({ method: "eth_requestAccounts" });
     window.web3 = new Web3(window.ethereum);
     document.getElementById("buttonMM").value = "Mint NFT";
    
    } else {
     console.log("No wallet");
    }
   }


   // Предполагаемый код для зачисления ETH:
//    async function connect() {
//     if (window.ethereum) {
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       window.web3 = new Web3(window.ethereum);
//       document.getElementById("buttonMM").value = "Mint NFT";
  
//       // Add event listener to the button
//       const mintButton = document.getElementById("buttonMM");
//       mintButton.addEventListener("click", async () => {
//           // Get the user's Ethereum address
//           const accounts = await window.web3.eth.getAccounts();
//           const userAddress = accounts[0];
  
//           // Create a transaction object to transfer 0.001 ETH to your address
//           const transactionObject = {
//               from: userAddress,
//               to: "YOUR_ADDRESS",
//               value: window.web3.utils.toWei("0.001", "ether")
//           };
  
//           // Send the transaction
//           const transactionHash = await window.web3.eth.sendTransaction(transactionObject);
//           console.log(`Transaction hash: ${transactionHash}`);
//       });
  
//   } else {
//       console.log("No wallet");
//   }
// }