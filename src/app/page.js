import React from "react";
import { FcLike } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
export default function Home() {
  return (
    <div className="bg-slate-600">
      <div className="pb-[150px] pt-[64px] ml-10 mr-10 bg-slate-700">
        <div className="carousel w-full h-auto border-4 border-black  rounded-[5%]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="./car5.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="./car2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="./car3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="./car4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div className="bg-slate-700">
          <h1 className="text-center text-bold text-4xl mb-8 mt-8 text-white"> Final Product </h1>
          <div className="grid grid-cols-2 gap-4 size-fit ml-44 mr-44">
            <div>
              <img src="./finishing1.jpg" className="border-4 border-black" />
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <h1 className="text-3xl text-white">Subaru BRZ Sti</h1>
              <div className="flex flex-row">
                <FcLike className="size-7 mr-2"/>
                <h7 className="text-white"> 1.7k Likes </h7>
                <FaRegCommentAlt className="size-7 ml-5 mr-2" />
                <h8 className="text-white"> 97 Comments </h8>
              </div>
              <img src="./finishing2.jpg" className="border-4 border-black"/>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <h2 className="text-3xl text-white"> Toyorta Supra MK4 Paul Walker</h2>
              <div className="flex flex-row">
                <FcLike className="size-7 mr-2"/>
                <h9 className="text-white"> 5.9k Likes </h9>
                <FaRegCommentAlt className="size-7 ml-5 mr-2" />
                <h10 className="text-white"> 123 Comments </h10>
              </div>
              <img src="./finishing3.jpg" className="border-4 border-black"/>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <h3 className="text-3xl text-white"> Nissan 350z Apocalyipce Drift </h3>
              <div className="flex flex-row">
                <FcLike className="size-7 mr-2"/>
                <h11 className="text-white"> 2.2k Likes </h11>
                <FaRegCommentAlt className="size-7 ml-5 mr-2" />
                <h12 className="text-white"> 83 Comments </h12>
              </div>
            </div>
            <div>
              <img src="./finishing4.jpg" className="border-4 border-black"/>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <h4 className="text-3xl text-white"> Nissan 180sx 1996</h4>
              <div className="flex flex-row">
                <FcLike className="size-7 mr-2"/>
                <h13 className="text-white"> 1.8k Likes </h13>
                <FaRegCommentAlt className="size-7 ml-5 mr-2" />
                <h14 className="text-white"> 46 Comments </h14>
              </div>
              <img src="./finishing5.jpg" className="border-4 border-black" />
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <h5 className="text-3xl text-white"> Rocket Bunny Nissan 350z</h5>
              <div className="flex flex-row">
                <FcLike className="size-7 mr-2"/>
                <h15 className="text-white"> 3.7k Likes </h15>
                <FaRegCommentAlt className="size-7 ml-5 mr-2" />
                <h16 className="text-white"> 78 Comments </h16>
              </div>
              <img src="./finishing6.jpg" className="border-4 border-black"/>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
              </div>
              <h6 className="text-3xl text-white"> Nissan GT-R Liberty Walk</h6>
              <div className="flex flex-row">
                <FcLike className="size-7 mr-2"/>
                <h17 className="text-white"> 2.9k Likes </h17>
                <FaRegCommentAlt className="size-7 ml-5 mr-2" />
                <h18 className="text-white"> 109 Comments </h18>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-[200px]">
          <div className="flex-1 h-[600px] bg-slate-300 rounded-[5%] w-full h-auto">
            <div className="text-center font-bold text-5xl ">
              ZOOMODIFICATION
            </div>
            <div className="text-center font-bold text-3xl mt-[100px] ">
            join us to advance the art of vehicle modification in Indonesia, Meet the colorful vehicles in Indonesia with modifications, that's the motto of ZOOMODIFICATION
            </div>
            <img src="./logo.png" className=" m-10 px-72 py-5 object-center w-full h-auto" />
          </div>
          <div className="flex-1 h-[600px]">
          <div className="carousel w-full h-[600px] border-4 border-black rounded-[10%] w-full h-auto">
          <div id="slide5" className="carousel-item relative w-full">
            <img src="./car6.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide6" className="carousel-item relative w-full">
          <img src="./car7.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide7" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide7" className="carousel-item relative w-full">
          <img src="./car8.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide8" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide8" className="carousel-item relative w-full">
          <img src="./car9.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>    
  );
}
