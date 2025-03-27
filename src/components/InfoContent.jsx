
import React from "react"
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast,FaTag} from "react-icons/fa";

export default function InfoContent(){

     const InfoItem=[
        {
            icons:<FaShippingFast className="text-3xl text-red-500" />,
         tittle:'FreeShipping',
      discription:'Get your orders delivered with no exdra cost'
        },
        {
              icons:<FaHeadset className="text-3xl text-red-500" />,
              tittle:'Support 24/7',
              discription:'We are here to assist you anytime'
         },
         {
            icons:<FaMoneyBillWave className="text-3xl text-red-500" />,
             tittle:'100% Money Back',
                discription:'Full refound if you are not satisfied'
         },
         {
              icons:<FaLock className="text-3xl text-red-500" />,
              tittle:'Payment Secure',
              discription:'your payment information is safe with us'
                    },

         {
               icons:<FaTag className="text-3xl text-red-500" />,
               tittle:'Discount',
              discription:'enjoy the best price on our products'
           }
     ];
 
    return(
       <div className="pb-3 pt-12">
        <div className="container px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5   ">
        {InfoItem.map((info,index)=>(
            <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:scale-105 cursor-pointer transform transition-transform duration-500">
                {info.icons}
                <h3>{info.tittle}</h3>
                <p>{info.discription}</p>
            </div>
        ))} 
        </div>
        </div>
    )
}