import { useEffect, useState } from "react"
import Invoice from "../Invoice"

function InvoiceContainer() {
    const [invoices, setInvoices] = useState([])
    const [sort ,setSort] = useState(NaN)
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
        <><div className="grid-cols-2 pb-10 pl-2 md:flex">
            <span className="">*filling dead space*</span>
            <label htmlFor="sort"></label>
            <select className="bg-[#F8F9FA] font-semibold text-left" name="sort" id="sort" onChange={statusChange} >
                <option disabled selected value>Sort by</option>
                <option className="" value="1">Paid</option>
                <option value="2">Pending</option>
                <option value="3">Cancelled</option>
                <option value="NaN">Show all</option>
            </select>
            <span>*placeholder*</span>
            <span>*placeholder*</span>
            </div>

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