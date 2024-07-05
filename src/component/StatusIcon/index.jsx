import { useEffect, useState } from "react"
import moment from "moment"

function StatusIcon({ invoiceStatus, date = moment() }) {
    useEffect(iconColor, [invoiceStatus])

    const [statusColor, setStatusColor] = useState('')
    const [overDue, setOverDue] = useState(false)

    function iconColor() {
        if (invoiceStatus === "Paid") {
            setStatusColor("green-500")
            setOverDue(false)
        }
        else if (invoiceStatus === "Cancelled") {
            setStatusColor("zinc-500")
            setOverDue(false)
        }
        else if (moment().isAfter(date)) {
            setOverDue(true)
            setStatusColor("red-600")
        } else if (invoiceStatus === "Pending") {
            setStatusColor("yellow-400")
        }
    }
    return (
        <p className={`text-${statusColor} border-${statusColor} border-2 p-2 rounded-md inline-block`} ><span className="text-xl">•</span>{overDue ? "Overdue" : invoiceStatus}</p>
    )
}
export default StatusIcon