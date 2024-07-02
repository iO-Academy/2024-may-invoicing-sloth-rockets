import { useEffect, useState } from "react"
import moment from "moment"

function Invoice({invoiceTotal, invoiceStatus, invoiceStatusName, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMMM YYYY");


    useEffect(setColor, [])

    const [statusColor, setStatusColor] = useState('')
    const [statusBorderColor, setStatusBorderColor] = useState('')

    function setColor() {
        if (invoiceStatus === "Paid") {
            setStatusColor("text-green-500")
            setStatusBorderColor("border-green-500")
        } else if (invoiceStatus === "Pending") {
            setStatusColor("text-yellow-400")
            setStatusBorderColor("border-yellow-400")
        } else if (invoiceStatus === "Overdue") {
            setStatusColor("text-red-600")
            setStatusBorderColor("border-red-600")
        } else {
            setStatusColor("text-zinc-500")
            setStatusBorderColor("border-zinc-500")
        }
        
    }
    console.log(statusColor)
    



    return (
        <>
            <div className="p-2 mb-4 border-2 border-black md:flex md:flex-row md:justify-between ">

                <div className="flex flex-row justify-between p-2">

                    <p className="font-semibold text-base"><span className="text-gray-500">#</span>{invoiceId}</p>
                    <p className=" text-gray-500 text-base font-medium" >Due {formattedDate}</p>
                    <p className="text-gray-500 text-base font-medium text-right ">{clientName}</p>

                </div>

                <div className="p-2 self-center flex flex-row justify-between">
                    <p className="font-semibold text-2xl self-end ">£ {invoiceTotal}</p>
                    <p className={`${statusColor} ${statusBorderColor} border-2 p-2 rounded-sm md:flex md:justify-self-end`} >{invoiceStatus}</p>
                </div>

            </div>
        </>
    )




}

export default Invoice