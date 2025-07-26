// import { useEffect } from "react";
// import {  getData } from "../../context/DataContext";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import Category from "../Category";

// const Corousel = () => {
//   const { data, fetchProducts } =getData();

//   const SampleNextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
//         <AiOutlineArrowRight className="arrows" style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", left: "0px" }} 
//           onMouseOver="this.style.background=#555"
//         />
//       </div>
//     )
//   }

//   const SamplePrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
//         <AiOutlineArrowLeft className="arrows"style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", left: "0px" }} 
//           onMouseOver="this.style.background=#555"
//         />
//       </div>
//     )
//   }

//   var settings = {
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover:false,
//     nextArrow: <SampleNextArrow to="next" />,
//     prevArrow: <SamplePrevArrow to="prev" />
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <div>
//       <Slider {...settings} className="relative">
//         {data?.slice(0, 7)?.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400-z-10" >
//               <div className="flex gap-10 justify-center h-[600px] items-center px-4">
//                 <div className="space-y-6">
//                   <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] ">
//                     {item.title}
//                   </h1>
//                   <p className="md:w-[500px] line-clamp-3 text-gray-700 pr-7">
//                     {item.description}
//                   </p>
//                 </div>
//                 <div>
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="rounded-full w-[350px] hover:scale-102 transition-all shadow-2xl shadow-red-400"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         <div>
//           <h3>1</h3>
//         </div>
//       </Slider>
//       <Category/>
//     </div>
//   );
// };

// export default Corousel;


import { useEffect } from "react";
import { getData } from "../../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "../Category";

const Corousel = () => {
  const { data, fetchProducts } = getData();

  const SampleNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="z-10 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
    >
      <AiOutlineArrowRight className="text-white bg-red-500 hover:bg-gray-700 rounded-full p-1 text-3xl" />
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="z-10 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
    >
      <AiOutlineArrowLeft className="text-white bg-red-500 hover:bg-gray-700 rounded-full p-1 text-3xl" />
    </div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scroll */}
      <div className="relative w-full"> {/* For arrow positioning */}
        <Slider {...settings}>
          {data?.slice(0, 7)?.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400"
            >
              <div className="flex flex-wrap md:flex-row gap-10 justify-center items-center px-4 h-[600px]">
                <div className="md:space-y-6  space-y-3 max-w-md text-center md:text-left">
                  <h1 className="text-xl md:text-4xl font-bold uppercase line-clamp-2 md:line-clamp-3">
                    {item.title}
                  </h1>
                  <p className="line-clamp-3 text-gray-700 pr-4">
                    {item.description}
                  </p>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Category />
    </div>
  );
};

export default Corousel;

