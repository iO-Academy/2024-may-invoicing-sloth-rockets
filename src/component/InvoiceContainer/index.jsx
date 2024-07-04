import { useEffect, useState } from "react"
import Invoice from "../Invoice"
import { Link } from "react-router-dom"

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
        <Link className="bg-cyan-500 p-3 rounded-sm text-white " to="/CreateInvoice"><i className="bg-black rounded-md px-1 not-italic">+</i> New Invoice</Link>
            {invoices.map(invoice => <Invoice
                key={invoice.invoice_id}
                invoiceTotal={invoice.invoice_total}
                invoiceStatus={invoice.status_name}
                clientName={invoice.name}
                invoiceId={invoice.invoice_id}
                id={invoice.id}
                dueDate={invoice.due} />)}
        </>
    )
}

export default InvoiceContainer