import { useEffect } from "react"
import moment from "moment"
import { Link } from "react-router-dom";

function Invoice({invoiceTotal, invoiceStatus, clientName, invoiceId, dueDate}) {

    const date = moment(dueDate);
    const formattedDate = date.format("DD MMMM YYYY");

    return (
        <Link to={`/ViewInvoice/${invoiceId}`}>
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
        </Link>
    )

}

export default Invoice