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

    useEffect(()=>{
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
    const [rate, setRate] = useState(0)
    const [total, setTotal] = useState(0)

    function handleQuantity(e) {
        setQuantity(Number(e.target.value))
        calcTotalTotal()
    }

    function handleRate(e) {
        setRate(Number(e.target.value))
        calcTotal
    }

    function calcTotal() {
        setTotal(quantity * rate)
    }

    return(
        <>  
            <div className="grid grid-cols-2 place-content-around p-3">
                <div className="pl-3">
                    <p className="font-medium pb-2 pt-2">From</p>
                    <p>Kermit the Frog</p>
                    <p>Beverly Hills</p>
                    <p>California</p>
                    <p className="font-medium pb-2 pt-4">To</p>
                    <Dropdown clients={clients}/>
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

        <div className="grid grid-cols-4">
            <p>Description</p>
            <p>Quantity</p>
            <p>Rate</p>
            <p>Total</p>
        </div>
        <div className="grid grid-cols-4">
            <textarea>Description</textarea>
            <input onChange={handleQuantity} type='number' min ='1' max='100' value ='1' step='1'></input>
            <input onChange={handleRate} type='number' min ='1' max='100' value ='£' step='1'></input>
            <p>£{total}</p>

        </div>    
    
        </>
    )
}

export default CreateInvoice