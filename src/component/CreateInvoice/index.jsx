import { useEffect, useState } from "react"
import Dropdown from "../ClientDropdown"
import moment from "moment";
import StatusIcon from "../StatusIcon";
import InvoiceRow from "../InvoiceRow";
import { useNavigate } from "react-router-dom";

function CreateInvoice() {
    const navigate = useNavigate()
    const [formattedDateCreated, setFormattedDateCreated] = useState("")
    const [formattedDateDue, setFormattedDateDue] = useState("")

    const [selectedClient, setSelectedClient] = useState("")
    const [clients, setClients] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [details, setDetails] = useState([{
        "quantity": 0,
        "rate": 0,
        "total": 0,
        "description": "Optional text field"
    }])

    const total = details.reduce((carry, detail) => carry + detail.total, 0)
    useEffect(() => {
        const dateDue = moment().add(30, 'days')
        const dateCreated = moment()
        setFormattedDateDue(dateDue.format("DD MMMM YYYY"))
        setFormattedDateCreated(dateCreated.format("DD MMMM YYYY"))
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
    }
    function minusDetails() {
        if (details.length > 1) {
            setDetails(details.slice(0, -1))
        }
    }

    function setRowDetails(newDetails, id) {
        let newList = details.slice()
        newList[id] = newDetails
        setDetails(newList)
    }

    function storeClient(id) {
        setSelectedClient(id)
    }

    function sendInvoice() {
        const dataToSend = {
            "client": selectedClient,
            "total": total,
            "details": details
        }
        let detailsValid = true
        dataToSend.details.forEach((detail) => {
            if (detail.description === "") {
                detailsValid = false
            }
        })
        if (dataToSend.client && dataToSend.total && detailsValid) {
            setErrorMessage("")
            fetch('https://invoicing-api.dev.io-academy.uk/invoices', {
                method: "POST",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    navigate("/")
                })
        } else {
            setErrorMessage("Error: please fill all fields!")
        }
    }

    return (
        <>
            <div className="bg-white px-3 pt-2">
                <div className="grid grid-cols-2 place-content-around">
                    <div className="">
                        <p className="font-medium pb-2 pt-2">From</p>
                        <p>Kermit the Frog</p>
                        <p>Beverly Hills</p>
                        <p>California</p>
                        <p className="font-medium pb-2 pt-4">To</p>
                        <Dropdown clients={clients} selectedClient={selectedClient} setSelectedClient={setSelectedClient} storeClient={storeClient} />
                    </div>
                    <div className="text-left justify-self-center">
                        <p className="font-medium pb-2 pt-2">Status</p>
                        <StatusIcon invoiceStatus="Pending" date={formattedDateDue} />
                        <p className="font-medium pb-2 pt-3">Created</p>
                        <p>{formattedDateCreated}</p>
                        <p className="font-medium pb-1 pt-4">Due</p>
                        <p className="mb-2">{formattedDateDue}</p>
                    </div>
                </div>
                <div className="border-gray-300 font-bold grid grid-cols-4 border-b border-t py-2 pl-2">
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Rate</p>
                    <p>Total</p>
                </div>
                {details.map((detail, index) => <InvoiceRow key={index} id={index} addDetails={addDetails} minusDetails={minusDetails} setRowDetails={setRowDetails} />)}
                <div className="bg-yellow-400 grid grid-cols-4 py-2 pr-4 ">
                    <p className="col-span-3 text-right font-semibold">Total</p>
                    <p className="text-right font-semibold">£{total}</p>
                </div>
            </div>
            <div className="bg-white pt-5 pb-5 pr-5 border-b flex justify-end">
                <p className="text-red-600 italic font-mono self-center animate-bounce">{errorMessage}</p>
            </div>
            <div className="bg-white pt-4 pb-10 px-3 flex justify-end gap-2 ">
                <button onClick={sendInvoice} className="bg-green-600 text-white p-2 rounded">Create invoice</button>
                <button onClick={() => navigate("/")} className="bg-red-500 text-white p-2 rounded">Cancel invoice</button>
            </div>
        </>
    )
}

export default CreateInvoice