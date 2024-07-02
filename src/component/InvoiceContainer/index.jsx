import { useEffect, useState } from "react"
import Invoice from "../Invoice"

function InvoiceContainer(){
    const [invoices, setInvoices] = useState([])
    useEffect(() => {
		// Instructions here on what you need to happen on component mount
		fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then((invoiceData) => {
                setInvoices(invoiceData.data)

            })
    }, [])
    
    return(
        <>
            {invoices.map(invoice => <Invoice invoiceTotal={invoice.invoice_total} invoiceStatus={invoice.status_name} clientName={invoice.name} invoiceId={invoice.invoice_id} dueDate={invoice.due}/>)}

        </>
    )
}

export default InvoiceContainer