import { useEffect, useState } from "react"
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Invoice({invoiceTotal, invoiceStatus, invoiceStatusName, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMM YYYY");
    const element = <FontAwesomeIcon icon={faChevronRight} />


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
            <div className="p-2 mb-4 border border-gray-500 bg-white md:flex md:items-center">

                <div className="flex flex-row justify-between p-2">

                    <p className="font-semibold text-base md:pr-5 md:pl-2"><span className="text-gray-500">#</span>{invoiceId}</p>
                    <p className=" text-gray-500 text-base font-medium md:pr-5" >Due {formattedDate}</p>
                    <p className="text-gray-500 text-base font-medium text-right md:pr-5">{clientName}</p>

                </div>

                <span className="p-2 self-center flex flex-row justify-between md:grow">
                    <p className="font-semibold text-2xl self-center">£ {invoiceTotal}</p>
                    <li className={`${statusColor} ${statusBorderColor} border-2 p-2 rounded-md list-disc`} >{invoiceStatus}</li> 
                </span>
                <p className="hidden md:block self-center text-gray-500 p-2">{element}</p>

            </div>
        </>
    )




}

export default Invoice