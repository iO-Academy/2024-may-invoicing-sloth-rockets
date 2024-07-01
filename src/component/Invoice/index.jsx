import { useEffect } from "react"

function Invoice({invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate}) {
    
    
    

    return (
        <>
            <div className="p-10">
                
                <div>
                    <p>{invoiceId}</p>
                    <p>{invoiceTotal}</p>
                </div>
                
                <p>{dueDate}</p>
                
                <div>
                    <p>{clientName}</p>
                    <p>{invoiceStatus}</p>
                </div>
                


            </div>
        </>
    )

}

export default Invoice