import { useEffect, useState } from "react"
import Dropdown from "../ClientDropdown"
import moment from "moment";
import StatusIcon from "../StatusIcon";
import InvoiceRow from "../InvoiceRow";
import { Link } from "react-router-dom";

function CreateInvoice() {
    const [formattedDateCreated, setFormattedDateCreated] = useState("")
    const [formattedDateDue, setFormattedDateDue] = useState("")

    const [selectedClient, setSelectedClient] = useState("1")
    const [clients, setClients] = useState([{id:""}])

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
    
    function setRowDetails(newDetails, id){
        var newList = details.slice()
        newList[id] = newDetails
        setDetails(newList)
    }   

    function storeClient(id) {
        setSelectedClient(id)
    }
    
    function sendInvoice() {
        const dataToSend = {
            "client": selectedClient,
            "total": details.reduce((carry, detail) => carry + detail.total, 0),
            "details": details
        }

        if (dataToSend.client && dataToSend.total && dataToSend.details.description) {
            fetch('https://invoicing-api.dev.io-academy.uk/invoices', {
                method: "POST",
                body: JSON.stringify(dataToSend),
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                }
              })
            console.log("sent")
        } else {
            console.log('error')
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

                <div className="border-gray-300 grid grid-cols-4 font-bold border-b border-t py-2 pl-2">
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Rate</p>
                    <p>Total</p>
                </div>
                {details.map((detail, index) => <InvoiceRow key={index} id={index} addDetails={addDetails} minusDetails={minusDetails} setRowDetails={setRowDetails} />)}
                <div className="grid grid-cols-4 py-2 pr-4 bg-yellow-400">
                    <p className="col-span-3 text-right font-semibold">Total</p>
                    <p className="text-right font-semibold">£{details.reduce((carry, detail) => carry + detail.total, 0)}</p>
                </div>
                <div></div>
            </div>
                <div className="bg-white pt-10 border-b">
            </div>
            <div className="bg-white flex justify-end gap-2 pt-4 pb-10 px-3">
                <button onClick={sendInvoice} className="bg-green-600 text-white p-2 rounded">Create invoice</button>
                <button className="bg-red-500 text-white p-2 rounded">Cancel invoice</button>
            </div>
        </>
    )
}

export default CreateInvoice