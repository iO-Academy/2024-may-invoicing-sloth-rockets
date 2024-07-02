import { useEffect } from "react"
import moment from "moment"

function Invoice({invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMMM YYYY");

    return (
        <>
            <div className="p-2 mb-4 border-2 border-black">

                <div className="flex flex-row justify-between p-2">

                    <p className="font-semibold text-base"><span className="text-gray-500">#</span>{invoiceId}</p>
                    <p className=" text-gray-500 text-base font-medium" >Due {formattedDate}</p>
                    <p className="text-gray-500 text-base font-medium ">{clientName}</p>

                </div>

                <div className="p-2 self-center flex flex-row justify-between">
                    <p className="font-semibold text-2xl self-end ">£ {invoiceTotal}</p>
                    <p className="self-end" >{invoiceStatus}</p>
                </div>

            </div>
        </>
    )




}

export default Invoice