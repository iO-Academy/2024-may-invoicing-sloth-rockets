import { useEffect, useState } from "react"
import Dropdown from "../ClientDropdown"
import moment from "moment";
import StatusIcon from "../StatusIcon";
import InvoiceRow from "../InvoiceRow";
import { Link } from "react-router-dom";

function CreateInvoice() {
    const [formattedDateCreated, setFormattedDateCreated] = useState("")
    const [formattedDateDue, setFormattedDateDue] = useState("")

    const [clients, setClients] = useState([])
    const [total, setTotal] = useState(0)
    const [details, setDetails] = useState([{
        "quantity": 0,
        "rate": 0,
        "total": 0,
        "description": "Optional text field"
    }])


    useEffect(() => {
        const dateDue = moment().add(30, 'days')
        const dateCreated = moment()
        setFormattedDateDue(dateDue.format("DD MMMM YYYY"))
        setFormattedDateCreated(dateCreated.format("DD MMMM YYYY"))
        const totalList = [] 
    }, [])

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/clients')
            .then(res => res.json())
            .then((clientsData) => {
                setClients(clientsData.data)
            })
    }, [])

    function addDetails() {
        setDetails(details.concat({
            "quantity": 0,
            "rate": 0,
            "total": 0,
            "description": "Optional text field"
        }))
        console.log(details)
    }
    function minusDetails() {
        if (details.length > 1) {
            setDetails(details.slice(0, -1))
        }

    }


    function setRowDetails(newDetails, id){
        var newList = details.slice()
        setDetails(newList[0]{newDetails})
    }


    return (
        <>
            <Link className="bg-cyan-500 p-3 rounded-sm text-white" to="/CreateInvoice"><i className="bg-black rounded-md px-1 not-italic">+</i> New Invoice</Link>
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
                {details.map(detail => <InvoiceRow key={details.indexOf(detail)} id={details.indexOf(detail)} addDetails={addDetails} minusDetails={minusDetails} setRowDetails={setRowDetails} />)}
                <div className="grid grid-cols-4 p-2 pr-4 bg-yellow-400">
                    <p className="col-span-3 text-right font-semibold">Total</p>
                    <p className="text-right font-semibold">£{total}</p>
                </div>
            </div>
        </>
    )
}

export default CreateInvoice