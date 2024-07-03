import { useEffect, useState } from "react"

function StatusIcon({ invoiceStatus }) {
    useEffect(iconColor, [])

    const [statusColor, setStatusColor] = useState('')

    function iconColor() {
        if (invoiceStatus === "Paid") {
            setStatusColor("green-500")
        } else if (invoiceStatus === "Pending") {
            setStatusColor("yellow-400")
        } else if (invoiceStatus === "Overdue") {
            setStatusColor("red-600")
        } else {
            setStatusColor("zinc-500")
        }
    }

    return (
        <p className={`text-${statusColor} border-${statusColor} border-2 p-2 rounded-md`} ><span className="text-xl">•</span>{invoiceStatus}</p>
    )
}

export default StatusIcon