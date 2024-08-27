import React from 'react'
import {motion} from 'framer-motion'
import { IoMdContacts } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaAward } from "react-icons/fa6";


export const SlideUp=(delay)=>{
    return{
      hidden:{
        y: "100%",
        opacity:0,
      },
     show:{
        y:0,
        opacity:1,
        transition:{
          duration: 0.6,
          delay:delay,
        },
      },
    };
  };

const HotDessertDate=[
    {
       id: 1,
       name: "Happy Cliends",
       img: <IoMdContacts />,
       price: "12345",
       delay: 0.4,
    },
    {
        id : 2,
        name : "Project Done",
        img: <TiTick/>,
        price: "12345",
        delay: 0.8,
     },
     {
        id: 3,
        name: "Win Awards",
        img: <FaAward />,
        price: "12345",
        delay: 1.2,
     },
   

    ];


const Details = () => {
  return (
    <>

<section>
    <div className="container ">
        {/* Heading Section
        <motion.h3 
        variants={SlideUp(0)}
        initial="hidden"
        whileInView="show"
        className='text-2xl font-semibold text-darkGreen
        uppercase py-1'>
        </motion.h3> */}

        {/*Grid Section*/}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3
        ">

          {
                HotDessertDate.map((item)=>{
                    return(
                        <motion.div
                        variants={SlideUp(item.delay)}
                        initial="hidden"
                        whileInView="show"
                        className='group  shadow-md m-4  bg-white/40 flex items-center gap-3  hover:bg-blue-300 transition'>
                            <div className="text-center flex text-6xl text-red-500">
                                {item.img}
                            <img src={item.img} alt="" className='w-28 rounded-full img-shadow
                            group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]'/>
                            <div>
                                <h3 className='text-2xl  text-black font-semibold text-center'>{item.name}</h3>
                                <p className='text-2xl text-black text-center'>{item.price}</p>
                            </div>
                            </div>
                            </motion.div>
                    )
                })
            }
        </div>
    </div>
   </section>
    </>
  )
}

export default Details
