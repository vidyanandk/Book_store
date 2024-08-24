import React, {useState,useEffect} from "react";
import Cards from "./Cards";

// react slick for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json";
import axios from "axios";

function Freebook() {
  
  const url="http://localhost:4001/book";
  const [book, setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
      const res=await axios.get(url);
      const data=res.data.filter((data) => data.catagory === "Free");
      console.log(data);
      setBook(data);
      }catch(error){
        console.log(error);
      }
    };
    getBook();
  },[])

  // using filter to get only free books
  // const freebook = list.filter((data) => data.catagory === "Free");

  // settings for react slick
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered book</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, delectus.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
