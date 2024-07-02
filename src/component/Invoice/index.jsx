import { useEffect } from "react"
import moment from "moment"

function Invoice({invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMMM YYYY");

    return (
        <>
            <div className="p-2 mb-4 border-2 border-black flex flex-row justify-between">
                
                <div className="p-5">
                    <p className="font-bold text-base"><span className="text-gray-500">#</span>{invoiceId}</p>
                    <p className="font-bold text-2xl">£{invoiceTotal}</p>
                </div>
                
                <p className="p-5 text-gray-500 text-base font-medium" >Due {formattedDate}</p>
                
                <div className="p-5 flex flex-col" >
                    <p className="text-gray-500 text-base font-medium">{clientName}</p>
                    <p className="self-end" >{invoiceStatus}</p>
                </div>

            </div>
        </>
    )

}

export default Invoice