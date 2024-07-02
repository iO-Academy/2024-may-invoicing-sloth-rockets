import { useEffect, useState } from "react"
import Invoice from "../Invoice"
import Footer from "../Footer"
import Header from "../Header"

function InvoiceContainer() {
    const [invoices, setInvoices] = useState([])
    
    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then((invoiceData) => {
                setInvoices(invoiceData.data)
            })
    }, [])
    
    return (
        <>
            {invoices.map(invoice => <Invoice
                key={invoice.invoice_id}
                invoiceTotal={invoice.invoice_total}
                invoiceStatus={invoice.status_name}
                clientName={invoice.name}
                invoiceId={invoice.invoice_id}
                dueDate={invoice.due} />)}
        </>
    )
}

export default InvoiceContainer