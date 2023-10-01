
import React from "react"

import { useSearchParams } from "react-router-dom"

const SuccessPage = () => {

    const searchQuery = useSearchParams()[0]

    const referenceNumber = searchQuery.get("reference")

    console.log(referenceNumber);

   return(

    <div style={{ height: '800px',display : 'flex' , flexDirection: "column" , justifyContent : 'center' , alignItems : 'center'}}>
        <h1>Order Reference Bumber</h1>
        <h4>Reference Number : {referenceNumber}</h4>
    </div>
    
   )
}

export default SuccessPage