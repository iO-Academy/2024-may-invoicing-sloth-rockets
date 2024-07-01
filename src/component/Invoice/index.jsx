import { useEffect } from "react"

function Invoice({invoiceTotal}) {
    
    
    

    return (
        <>
            <div className="p-10">
                
                <div>
                    <p>Invoice Number</p>
                    <p>{invoiceTotal}</p>
                </div>
                
                <p>Due Date</p>
                
                <div>
                    <p>Name</p>
                    <p>Status</p>
                </div>
                


            </div>
        </>
    )

}

export default Invoice