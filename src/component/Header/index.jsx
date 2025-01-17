import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Header() {
    const [unpaid, setUnpaid] = useState(0)

    let location = useLocation()

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices?status=2')
            .then(res => res.json())
            .then((unpaidInvoices) => {
                setUnpaid(unpaidInvoices.data.length)
            })
    }, [])

    return (
        <header className="pt-8 flex justify-between">
            <div>
                <Link to="/"><h1 className="font-bold text-4xl pb-1">Invoices</h1></Link>
                <p className="text-gray-500 pb-8 text-lg font-medium">There are {unpaid} unpaid invoices</p>
            </div>
            <div className={`flex flex-col justify-center relative ${location.pathname === "/" && "top-16 lg:top-0 z-10"}`}>
                <Link className="bg-cyan-500 px-3 py-2 rounded text-white" to="/CreateInvoice"><i className="bg-black rounded-md px-1 not-italic">+</i> New Invoice</Link>
            </div>
        </header>
    )
}

export default Header