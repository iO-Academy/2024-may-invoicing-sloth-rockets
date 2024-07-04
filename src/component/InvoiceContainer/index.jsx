import { useEffect, useState } from "react"
import Invoice from "../Invoice"

function InvoiceContainer() {
    const [invoices, setInvoices] = useState([])
    const [sort, setSort] = useState()
    useEffect(() => {
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices?status=${sort}`)
            .then(res => res.json())
            .then((invoiceData) => {
                setInvoices(invoiceData.data)
            })
    }, [sort])

    function statusChange(e) {
        setSort(parseInt(e.target.value))
    }
    return (
        <><div className="grid grid-cols-2 pb-10 pl-2 lg:inline-block lg:relative lg:-right-[35%]">
            <div>
                <label htmlFor="sort"></label>
                <select className="bg-[#F8F9FA] font-semibold text-left" defaultValue="0" name="sort" id="sort" onChange={statusChange} >
                    <option disabled value="0">Sort by</option>
                    <option className="" value="1">Paid</option>
                    <option value="2">Pending</option>
                    <option value="3">Cancelled</option>
                    <option value="">Show all</option>
                </select>
            </div>
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