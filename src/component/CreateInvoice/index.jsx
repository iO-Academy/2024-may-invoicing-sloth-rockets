import { useEffect, useState } from "react"
import Dropdown from "../Dropdown"

function CreateInvoice(){

    const [clients, setClients] = useState([])
    const [clientName, setClientName] = useState('')
    const [clientStreet, setClientStreet] = useState('')
    const [clientCity, setClientCity] = useState('')

    useEffect(()=>{
        fetch('https://invoicing-api.dev.io-academy.uk/clients')
            .then(res => res.json())
            .then((clientsData) => {
                console.log(clientsData.data)
                setClients(clientsData.data)
                setClientName(clients.name) 
                setClientStreet(clients.street_address)
                setClientCity(clients.city)
                
             })
    }, [])

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

                    <p className="font-medium pb-2">Created</p>
                    <p>date created</p>
                    <p className="font-medium pb-2 pt-4">Due</p>
                    <p>formattedDateDue</p>
                </div>
        </div>
            
    
        </>
    )
}

export default CreateInvoice