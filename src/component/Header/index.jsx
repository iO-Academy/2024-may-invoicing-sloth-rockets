import { useEffect, useState } from "react"

function Header() {

    const [unpaid, setUnpaid] = useState (0)

    useEffect( () => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices?status=2')
        .then((res) => {
            return res.json()
        })
        .then((unpaidInvoices) => {
            setUnpaid(unpaidInvoices.data.length)
        })

    }, [] )

    return(
        <header>
            <h1 className="font-bold text-4xl">Invoices</h1>
            <p className="text-gray-500">There are {unpaid} unpaid invoices</p>
        </header>
        
    )

}

export default Header