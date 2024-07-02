import { BrowserRouter, Route, Routes } from "react-router-dom"
import InvoiceContainer from "./component/InvoiceContainer"
import ViewInvoice from "./component/ViewInvoice"
import CreateInvoice from "./component/CreateInvoice"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage*/}
        <Route path="/" element={<InvoiceContainer />} />
        {/* ViewInvoice*/}
        <Route path="/ViewInvoice/:idName/:id" element={<ViewInvoice />} />
        {/* CreateInvoice*/}
        <Route path="/CreateInvoice" element={<CreateInvoice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
