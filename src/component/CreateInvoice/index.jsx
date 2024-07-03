import { useEffect, useState } from "react"

function CreateInvoice(){

    const [clients, setClients] = useState([])
    const [clientName, setClientName] = useState('')
    const [clientStreet, setClientStreet] = useState('')
    const [clientCity, setClientCity] =useState('')

    useEffect(()=>{
        fetch('https://invoicing-api.dev.io-academy.uk/clients')
            .then(res => res.json())
            .then((clientsData) => {
                console.log(clientsData.data)
                setClients =(clientsData.data)
                setClientName(data.name) 
                setClientStreet(data.streetAddress)
                setClientCity(data.city)
             })
    }, [])

    return(
        <>
           {clients.map(client => <p>{client.name} {client.streetAddress} {client.city}</p>)}

        </>
    )
}

export default CreateInvoice