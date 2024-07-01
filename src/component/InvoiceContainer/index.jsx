import { useEffect, useState } from "react"
import Invoice from "../Invoice"

function InvoiceContainer(){

    const [invoiceTotal, setInvoiceTotal] = useState(0)
    const [invoiceStatus, setInvoiceStatus] = useState(0)
    const [clientName, setClientName] = useState(0)
    const [invoiceId, setInvoiceId] = useState(0)
    const [dueDate, setdueDate] = useState(0)

    useEffect(() => {
		// Instructions here on what you need to happen on component mount
		fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then((invoiceData) => {
                setInvoiceTotal(invoiceData.data[0].invoice_total)
                setInvoiceStatus(invoiceData.data[0].status_name)
                setClientName(invoiceData.data[0].name)
                setInvoiceId(invoiceData.data[0].invoice_id)
                setdueDate(invoiceData.data[0].due)

            })
    }, [])
    
    return(
        <>

            <Invoice invoiceTotal={invoiceTotal} invoiceStatus={invoiceStatus} clientName={clientName} invoiceId={invoiceId} dueDate={dueDate}/>
            <Invoice invoiceTotal={invoiceTotal} invoiceStatus={invoiceStatus} clientName={clientName} invoiceId={invoiceId} dueDate={dueDate}/>
            <Invoice invoiceTotal={invoiceTotal} invoiceStatus={invoiceStatus} clientName={clientName} invoiceId={invoiceId} dueDate={dueDate}/>
            <Invoice invoiceTotal={invoiceTotal} invoiceStatus={invoiceStatus} clientName={clientName} invoiceId={invoiceId} dueDate={dueDate}/>
            <Invoice invoiceTotal={invoiceTotal} invoiceStatus={invoiceStatus} clientName={clientName} invoiceId={invoiceId} dueDate={dueDate}/>

        </>
    )
}

export default InvoiceContainer