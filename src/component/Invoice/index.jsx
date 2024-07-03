import { useEffect, useState } from "react"
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import StatusIcon from "../StatusIcon";

function Invoice({ invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate }) {
    const date = moment(dueDate);
    const formattedDate = date.format("DD MMM YYYY");
    const element = <FontAwesomeIcon icon={faChevronRight} />

    return (
        <div className=" border-gray-500 bg-white p-2 mb-4 border md:flex md:items-center">
            <div className="p-2 flex flex-row justify-between">
                <p className="font-semibold text-base md:pr-5 md:pl-2"><span className="text-gray-500">#</span>{invoiceId}</p>
                <p className=" text-gray-500 text-base font-medium md:pr-5" >Due {formattedDate}</p>
                <p className="text-gray-500 text-base font-medium text-right md:pr-5">{clientName}</p>
            </div>
            <div className="p-2 self-center flex flex-row justify-between md:grow">
                <p className="font-semibold text-2xl self-center">£ {invoiceTotal}</p>
                <StatusIcon invoiceStatus={invoiceStatus} date={date} />
            </div>
            <p className="text-gray-500 p-2 hidden md:block self-center ">{element}</p>
        </div>
    )
}

export default Invoice