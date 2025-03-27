import React from "react"
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast,FaTag} from "react-icons/fa";

export default function InfoSection(){

    const InfoItem =[
        

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
        

        ]

     
 
    return(
        <div className="">
            {InfoItem.map((info,index)=>(

                <div key={index}>
                    <h1>{info.tittle}</h1>
                </div>
            ))}
          
              
        </div>
    )
}