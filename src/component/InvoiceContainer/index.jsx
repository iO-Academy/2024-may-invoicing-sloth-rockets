import { useEffect, useState } from "react"
import Invoice from "../Invoice"

function InvoiceContainer() {
    const [invoices, setInvoices] = useState([])
    const [sort ,setSort] = useState(1)
    useEffect(() => {
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices?status=${sort}`)
            .then(res => res.json())
            .then((invoiceData) => {
                setInvoices(invoiceData.data)
            })
    }, [sort])
    function statusChange(e){
        console.log(parseInt(e.target.value))
        setSort(parseInt(e.target.value))
    }
    return (
        <>
            <label htmlFor="sort">Sort By </label>
            <select name="sort" id="sort" onChange={statusChange} >
                <option value="1">Paid</option>
                <option value="2">Pending</option>
                <option value="3">Cancelled</option>
                <option value="NaN">None</option>
            </select>

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