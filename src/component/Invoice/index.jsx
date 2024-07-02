import { useEffect } from "react"
import moment from "moment"

function Invoice({invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMMM YYYY");

    return (
        <>
            <div className="p-2 mb-4 border-2 border-black flex flex-row justify-between">
                
                <div className="p-2 self-center">
                    <p className="font-semibold text-base"><span className="text-gray-500">#</span>{invoiceId}</p>
                    <p className="font-semibold text-2xl ">£ {invoiceTotal}</p>
                </div>
                
                <p className="p-2 text-gray-500 text-base font-medium self-center" >Due {formattedDate}</p>
                
                <div className="p-2 flex flex-col" >
                    <p className="text-gray-500 text-base font-medium self-end">{clientName}</p>
                    <p className="self-end" >{invoiceStatus}</p>
                </div>

            </div>
        </>
    )

}

export default Invoice