import { useEffect, useState } from "react"
import Dropdown from "../ClientDropdown"
import moment from "moment";
import StatusIcon from "../StatusIcon";

function CreateInvoice() {
    const [formattedDateCreated, setFormattedDateCreated] = useState("")
    const [formattedDateDue, setFormattedDateDue] = useState("")

    useEffect(() => {
        const dateDue = moment().add(30, 'days')
        const dateCreated = moment()
        setFormattedDateDue(dateDue.format("DD MMMM YYYY"))
        setFormattedDateCreated(dateCreated.format("DD MMMM YYYY"))
    }, [])

    const [clients, setClients] = useState([])
    const [clientName, setClientName] = useState('')
    const [clientStreet, setClientStreet] = useState('')
    const [clientCity, setClientCity] = useState('')

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/clients')
            .then(res => res.json())
            .then((clientsData) => {
                setClients(clientsData.data)
                setClientName(clients.name)
                setClientStreet(clients.street_address)
                setClientCity(clients.city)

            })
    }, [])

    const [quantity, setQuantity] = useState(0)
    const [rate, setRate] = useState(Number(0))

    function handleQuantity(e) {
        setQuantity(Number(e.target.value))

    }
    function handleRate(e) {
        setRate(Number(e.target.value))

    }


    return (
        <div className="bg-white">
            <div className="grid grid-cols-2 place-content-around p-3">
                <div className="pl-3">
                    <p className="font-medium pb-2 pt-2">From</p>
                    <p>Kermit the Frog</p>
                    <p>Beverly Hills</p>
                    <p>California</p>
                    <p className="font-medium pb-2 pt-4">To</p>
                    <Dropdown clients={clients} />
                </div>
                <div className="text-left justify-self-center">
                    <p className="font-medium pb-2 pt-2">Status</p>
                    <StatusIcon invoiceStatus="Pending" date={formattedDateDue} />
                    <p className="font-medium pb-2">Created</p>
                    <p>{formattedDateCreated}</p>
                    <p className="font-medium pb-2 pt-4">Due</p>
                    <p>{formattedDateDue}</p>
                </div>
            </div>

            <div className="grid grid-cols-4 font-bold my-1 border-b border-t border-gray-300  ">
                <p>Description</p>
                <p>Quantity</p>
                <p>Rate</p>
                <p>Total</p>
            </div>
            <div className="grid grid-cols-4">
                <textarea className="border border-gray-300 m-2 p-2" placeholder='Description'></textarea>
                <input className="border border-gray-300 m-2 p-2 h-1/3	" onChange={handleQuantity} type='number' min='1' max='100' placeholder='Quantity' step='1'></input>
                <input className="border border-gray-300 m-2 p-2 h-1/3	" onChange={handleRate} type='number' min='1' max='100' placeholder='Rate' step='1'></input>

                <div className="grid grid-cols-2">
                    <p>£{parseFloat(parseFloat(quantity * rate).toFixed(2)).toLocaleString()}</p>
                    <button className="p-2 m-1 text-white bg-green-400 rounded">+</button>
                    <span></span>
                    <button className="p-2 m-1 text-white bg-red-500 rounded">-</button>
                </div>
            </div>

        </div>
    )
}

export default CreateInvoice