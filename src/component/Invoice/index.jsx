import { useEffect } from "react"
import moment from "moment"

function Invoice({invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMMM YYYY");

    return (
        <>
            <div className="p-10">
                
                <div>
                    <p>{invoiceId}</p>
                    <p>{invoiceTotal}</p>
                </div>
                
                <p>Due {formattedDate}</p>
                
                <div>
                    <p>{clientName}</p>
                    <p>{invoiceStatus}</p>
                </div>

            </div>
        </>
    )

}

export default Invoice