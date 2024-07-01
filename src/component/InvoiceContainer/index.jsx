import Invoice from "../Invoice"

function InvoiceContainer(){
    
    useEffect(() => {
		// Instructions here on what you need to happen on component mount
		fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then((invoiceData) => {
                console.log(invoiceData.data[0].invoice_id)

            })
    }, [])
    
    return(
        <>

            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />

        </>
    )
}

export default InvoiceContainer