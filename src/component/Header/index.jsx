import { useEffect, useState } from "react"

function Header() {
    const [unpaid, setUnpaid] = useState (0)

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices?status=2')
            .then(res => res.json())
            .then((unpaidInvoices) => {
                setUnpaid(unpaidInvoices.data.length)
            })
    }, [])

    return(
        <header className="pt-8 ">
            <h1 className="font-bold text-4xl pb-1">Invoices</h1>
            <p className="text-gray-500 pb-8 text-lg font-medium">There are {unpaid} unpaid invoices</p>
        </header>
    )
}

export default Header