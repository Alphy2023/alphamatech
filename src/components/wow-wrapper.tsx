// "use client";

// import React, { useEffect } from "react";
// import WOW from "wow.js";
// import "animate.css/animate.min.css";

// const WOWWrapper = ({ children }:{children:React.ReactNode}) => {
//     useEffect(() => {
//         // Initialize WOW.js
//         const wow = new WOW({
//           boxClass: "wow", // Class that triggers the animation
//           animateClass: "animate__animated", // Class added for the animation
//           offset: 0, // Distance from the bottom of the viewport to trigger the animation
//           mobile: true, // Enable animations on mobile
//           live: true, // Detect dynamically added elements
//           reset: true, // Allow animations to trigger again when the element comes back into view
//         });
//         wow.init(); // Initialize WOW.js
//       }, []);
//   return (
//     <div>{children}</div>
//   )
// }

// export default WOWWrapper;