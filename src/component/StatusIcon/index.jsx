function StatusIcon() {
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

    return (
        <p className={`${statusColor} ${statusBorderColor} border-2 p-2 rounded-md`} ><span className="text-xl">•</span>{invoiceStatus}</p>
    )
}

export default StatusIcon