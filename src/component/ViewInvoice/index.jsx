import { useParams } from "react-router-dom"
import ViewHeader from "../ViewHeader"
import { useEffect, useState } from "react"
import moment from "moment"
import Bill from "../Bill"

function ViewInvoice({}){
    const {idName, id} = useParams()
    const [clientInvoice,setClientInvoice] = useState({name:"",streetAddress:"",city:"",created:"",due:"",details:[],paidToDate:"",invoiceTotal:"",status:"",statusName:""})
    const {name,streetAddress,city,created,due,details,paidToDate,invoiceTotal,status,statusName} = clientInvoice
    useEffect(()=>{
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices/${id}`)
            .then(res => res.json())
            .then((invoiceData) => {
                let data = invoiceData.data
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
            <div className="pl-1">

                <p className="font-medium pb-2 pt-2">From</p>
                <p>Kermit the Frog</p>
                <p>Beverly Hills</p>
                <p>California</p>
                <p className="font-medium pb-2 pt-4">To</p>
                <p>{name}</p>
                <p></p>
                <p>{streetAddress}</p>
                <p>{city}</p>

            </div>
            <div className="text-left justify-self-center">

                <p className="font-medium pb-2 pt-2">Status</p>
                <p className="font-medium pb-2">Created</p>
                <p>{formattedDateCreated}</p>
                <p className="font-medium pb-2 pt-4">Due</p>
                <p>{formattedDateDue}</p>

            </div>
        </div>
        <div className="py-4 p pl-5 pr-0 grid grid-cols-5 border-t border-b font-bold md:grid-cols-6 gap-1" >

            <p className="col-span-2 md:col-span-3">Description</p>
            <p>Quantity</p>
            <p>Rate</p>
            <p>Total</p>

        </div>
        {details.map(detail=>{
            return(
                <Bill key={detail.description} detail={detail}/>
            )
        })}
        <div className=" p-4 pr-0 grid grid-cols-5 md:grid-cols-6 border-t border-b">

            <p className="col-span-2 md:col-span-3"></p>
            <p className="text-right">Total</p>
            <p></p>
            <p className="font-bold">£{invoiceTotal}</p>

        </div>
        <div className=" p-4 pr-0 grid  grid-cols-5 md:grid-cols-6 border-t border-b ">

            <p className="col-span-2 md:col-span-3" ></p>
            <p className="text-right">Paid to date</p>
            <p></p>
            <p className="font-bold">£{paidToDate}</p>

        </div>
        <div className="bg-[#FEC007] p-4 pr-0 grid grid-cols-5 md:grid-cols-6 border-t border-b font-bold">

            <p className="col-span-2 md:col-span-3"></p>
            <p className="text-right">Total due</p>
            <p> </p>
            <p>£{parseFloat(invoiceTotal) + parseFloat(paidToDate)}</p>

        </div>
        <p className="border-b pt-4 pb-8">Payments due within 30 days.</p>
        </>
    )
}

export default ViewInvoice