import { useEffect, useState } from "react"
import Invoice from "../Invoice"

function InvoiceContainer(){

    const [invoiceTotal, setInvoiceTotal] = useState(0) 

    useEffect(() => {
		// Instructions here on what you need to happen on component mount
		fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then((invoiceData) => {
                console.log(invoiceData.data[0].invoice_id)
                setInvoiceTotal(invoiceData.data[0].invoice_total)

            })
    }, [])
    
    return(
        <>

            <Invoice invoiceTotal={invoiceTotal} />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />

        </>
    )
}

export default InvoiceContainer