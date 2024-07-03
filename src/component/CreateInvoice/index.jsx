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

    // <p>{client.name}, {client.street_address}, {client.city}</p>)}

    return(
        <>  
            <Dropdown clients={clients}/>
    
        </>
    )
}

export default CreateInvoice