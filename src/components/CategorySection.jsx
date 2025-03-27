import React from "react";
import Mens from '../assets/Image/style.jpg'
import Women from '../assets/Image/women.avif'
import Kids from '../assets/Image/kids.webp'




export default function CategorySection(){
   

    const Categorys=[

        {
            img:Mens,
            tittle:'Man',
        },
        {
            img:Women,
            tittle:'Woman'
        },
        {
            img:Kids,
            tittle:'Kids'
        }
    ]

    return(

        <div className="">
        <div className=" container  px-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3  text-center py-5 cursor-pointer "  >
            {Categorys.map((categry ,index)=>(

                <div key={index} className="   px-5 opacity-50  hover:opacity-100 transform hover:scale-75 duration-1000 ">
                  
                    <img src={categry.img} alt="" className="shadow-md" />
            
                    <p>{categry.tittle} </p>
                </div>
            ))}
        </div>
        </div>
    )
}