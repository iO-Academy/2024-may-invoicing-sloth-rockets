import { useParams } from "react-router-dom"
import ViewHeader from "../ViewHeader"
import { useEffect, useState } from "react"
import moment from "moment"

function ViewInvoice({}){
    const {idName, id} = useParams()
    const [clientInvoice,setClientInvoice] = useState({name:"",streetAddress:"",city:"",created:"",due:"",details:[],paidToDate:"",invoiceTotal:"",status:"",statusName:""})
    const {name,streetAddress,city,created,due,details,paidToDate,invoiceTotal,status,statusName} = clientInvoice
    useEffect(()=>{
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices/${id}`)
            .then(res => res.json())
            .then((invoiceData) => {
                console.log(invoiceData.data)
                let data = invoiceData.data
                console.log(invoiceData.data)
                setClientInvoice({name:data.name
                    ,streetAddress:data.street_address
                    ,city:data.city
                    ,created:data.created
                    ,due:data.due
                    ,details:data.details
                    ,paidToDate:data.paid_to_date
                    ,invoiceTotal:data.invoice_total
                    ,status:data.status
                    ,statusName:data.status_name})

            })
    },[])

    const dateDue = moment(due);
    const formattedDateDue = dateDue.format("DD MMMM YYYY");
    const dateCreated = moment(created);
    const formattedDateCreated = dateCreated.format("DD MMMM YYYY");
    return(
        <>
        <ViewHeader idName={idName} />
        <div className="grid grid-cols-2 place-content-around p-3">
            <div className="pl-3">
                <p>From</p>
                <p>Kermit the Frog</p>
                <p>Beverly Hills</p>
                <p>California</p>
                <p>To</p>
                <p>{name}</p>
                <p></p>
                <p>{streetAddress}</p>
                <p>{city}</p>
            </div>
            <div className="text-left justify-self-center">
                <p>Status</p>

                <p>Created</p>
                <p>{formattedDateCreated}</p>
                <p>Due</p>
                <p>{formattedDateDue}</p>
            </div>
        </div>
        </>
    )
}

export default ViewInvoice