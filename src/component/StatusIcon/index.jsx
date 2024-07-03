import { useEffect, useState } from "react"
import moment from "moment"

function StatusIcon({ invoiceStatus, date }) {
    useEffect(iconColor, [])

    const [statusColor, setStatusColor] = useState('')

    function iconColor() {
        if (moment().isAfter(date)) {
            setStatusColor("red-600")
            invoiceStatus = "overdue"
        } else if (invoiceStatus === "Pending") {
            setStatusColor("yellow-400")
        } else if (invoiceStatus === "Paid") {
            setStatusColor("green-500")
        } else {
            setStatusColor("zinc-500")
        }
    }
    console.log(moment())

    return (
        <p className={`text-${statusColor} border-${statusColor} border-2 p-2 rounded-md`} ><span className="text-xl">•</span>{invoiceStatus}</p>
    )
}

export default StatusIcon