import { BrowserRouter, Route, Routes } from "react-router-dom"
import InvoiceContainer from "./component/InvoiceContainer"
import ViewInvoice from "./component/ViewInvoice"
import CreateInvoice from "./component/CreateInvoice"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* Homepage*/}
          <Route path="/" element={<InvoiceContainer />} />
          {/* ViewInvoice*/}
          <Route path="/ViewInvoice" element={<ViewInvoice />} />
          {/* CreateInvoice*/}
          <Route path="/CreateInvoice" element={<CreateInvoice />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
