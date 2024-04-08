import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Successfully } from "./components/DesignerProfile/Successfully";
import { Messages } from "./components/DesignerProfile/Messages";
import { MyProjects } from "./components/DesignerProfile/MyProjects";
import { Notifications } from "./components/DesignerProfile/Notifications";
import { Orders } from "./components/DesignerProfile/Orders";
import { Payment } from "./components/DesignerProfile/Payment";
import { Profile } from "./components/DesignerProfile/TheProfile";
import { PaymentView } from "./components/DesignerProfile/PaymentView";
import { Rfq } from "./components/DesignerProfile/Rfq";
import { ReceivedQuotation } from "./components/DesignerProfile/ReceivedQuotation";

import { ChooseAccount } from "./components/ManufacturerFlow/ChooseAccount"
import { CreateAccount } from "./components/ManufacturerFlow/CreateAccount"
import { LoginManufacturer } from "./components/ManufacturerFlow/LoginManufacturer"
import { ManufacturerFlowSuccessfully } from "./components/ManufacturerFlow/ManufacturerFlowSuccessfully"
import { Registration } from "./components/ManufacturerFlow/Registration"

import { SearchManufaturerProfile } from "./components/SearchManufacturer/SearchManufaturerProfile"
import { Portfolio } from "./components/SearchManufacturer/Portfolio"

import { SearchSupplierPortfolio } from "./components/SearchSupplier/SearchSupplierPortfolio"
import { SearchSupplierProfile } from "./components/SearchSupplier/SearchSupplierProfile"
import { SupplierFlowChooseAccount } from "./components/SupplierFlow/SupplierFlowChooseAccount"
import { SupplierFlowCreateAccount } from "./components/SupplierFlow/SupplierFlowCreateAccount"
import { SupplierFlowLogin } from "./components/SupplierFlow/SupplierFlowLogin"
import { SupplierFlowSuccessfully } from "./components/SupplierFlow/SupplierFlowSuccessfully"
import { SupplierFlowRegistration } from "./components/SupplierFlow/SupplierFlowRegistration"

import { Manufacturer } from "./components/Find-professionals/Manufacturer";
import { Designer } from "./components/Find-professionals/Designer";
import { Supplier } from "./components/Find-professionals/Supplier";

// import { CommunityChooseAccount } from "./components/Community/ChooseAccount";
import { CommunityCreateAccount } from "./components/Community/CreateAccount";
import { CommunityPaymentView } from "./components/Community/PaymentView";
import { CommunityPaymentSuccessfull  } from "./components/Community/PaymentSuccessfull";
import { CommunityRegistration } from "./components/Community/Registration";
import { CommunityProfileSuccessfull } from "./components/Community/ProfileSuccessfull";
import { CommunityLogin} from "./components/Community/Login";



import {SupplierProfileMessages} from "./components/SupplierProfile/SupplierProfileMessages"
import { SupplierProfileNotifications } from "./components/SupplierProfile/SupplierProfileNotifications"
import { SupplierProfileOrders } from "./components/SupplierProfile/SupplierProfileOrders"
import { SupplierProfileSuccessfully } from "./components/SupplierProfile/SupplierProfileSuccessfully"
import { SupplierProfilePayment } from "./components/SupplierProfile/SupplierProfilePayment"
import { SupplierProfilePending } from "./components/SupplierProfile/SupplierProfilePending"
import { SupplierProfileProfile } from "./components/SupplierProfile/SupplierProfileProfile"
import { SupplierProfileSentQuotation } from "./components/SupplierProfile/SupplierProfileSentQuotation"
import { SupplierProfileRfq } from "./components/SupplierProfile/SupplierProfileRfq"

import {ManufacturerProfileMessages } from "./components/ManufacturerProfile/ManufacturerProfileMessages"
import {ManufacturerProfileOrders } from "./components/ManufacturerProfile/ManufacturerProfileOrders"
import {ManufacturerProfileNotifications } from "./components/ManufacturerProfile/ManufacturerProfileNotifications"
import {ManufacturerProfilePending } from "./components/ManufacturerProfile/ManufacturerProfilePending"
import {ManufacturerProfileProfile } from "./components/ManufacturerProfile/ManufacturerProfileProfile"
import {ManufacturerProfilePayment } from "./components/ManufacturerProfile/ManufacturerProfilePayment"
import {ManufacturerProfileSentQuotation } from "./components/ManufacturerProfile/ManufacturerProfileSentQuotation"
import {ManufacturerProfileRfq } from "./components/ManufacturerProfile/ManufacturerProfileRfq"
import {ManufacturerProfileSuccessfully } from "./components/ManufacturerProfile/ManufacturerProfileSuccessfully"

import {AdminLogin } from "./components/Admin/AdminLogin"
import {AdminOrders} from "./components/Admin/AdminOrders"
import {AdminPayment} from "./components/Admin/AdminPayment"
import {AdminProfile} from "./components/Admin/AdminProfile"
import {AdminRfq} from "./components/Admin/AdminRfq"
import {AdminSuccessfully} from "./components/Admin/AdminSuccessfully"
import {Dashboard} from "./components/Admin/Dashboard"
import {AdminDesigner} from "./components/Admin/AdminDesigner"
import {Designer2} from "./components/Admin/Designer2"
import {DesignerView} from "./components/Admin/DesignerView"
import {AdminManufacturer} from "./components/Admin/AdminManufacturer"
import {ManufacturerView} from "./components/Admin/ManufacturerView"
import {AdminNotifications} from "./components/Admin/AdminNotifications"
import {AdminSupplier} from "./components/Admin/AdminSupplier"
import {AdminSupplierView} from "./components/Admin/AdminSupplierView"
import {AdminReceivedQuotation} from "./components/Admin/AdminReceivedQuotation"




function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route index element={<Login />} />
      </Route>
   {/* -------------------community--------------------- */}

   {/* <Route path="/Community/ChooseAccount" element={<CommunityChooseAccount />} /> */}
   <Route path="/Community/CreateAccount" element={<CommunityCreateAccount />} />
   <Route path="/Community/PaymentView" element={<CommunityPaymentView />} />
   <Route path="/Community/PaymentSuccessfull" element={<CommunityPaymentSuccessfull />} />
   <Route path="/Community/Registration" element={<CommunityRegistration />} />
   <Route path="/Community/ProfileSuccessfull" element={<CommunityProfileSuccessfull/>} />
   <Route path="/Community/Login" element={<CommunityLogin/>} />




  {/* ------------------find professionals--------------------- */}
      <Route path="/Find-professionals" element={<Manufacturer/>} />
      <Route path="/Find-professionals/Designer" element={<Designer/>} />
      <Route path="/Find-professionals/Supplier" element={<Supplier/>} />
  {/* -------------------Designerprofile--------------------- */}
      <Route path="/Signup" element={<Signup />} />
      <Route path="/DesignerProfile/Successfully" element={<Successfully />} />
      <Route path="/DesignerProfile/Messages" element={<Messages />} />
      <Route path="/DesignerProfile/MyProjects" element={<MyProjects />} />
      <Route path="/DesignerProfile/Notifications" element={<Notifications />} />
      <Route path="/DesignerProfile/Orders" element={<Orders />} />
      <Route path="/DesignerProfile/Payment" element={<Payment />} />
      <Route path="/DesignerProfile/PaymentView" element={<PaymentView />} />
      <Route path="/DesignerProfile/rfq" element={<Rfq />} />
      <Route path="/DesignerProfile/TheProfile" element={<Profile />} />
      <Route path="/DesignerProfile/ReceivedQuotation" element={<ReceivedQuotation />} />
      {/* -------------------ManufacturerFlow--------------------- */}
      <Route path="/ManufacturerFlow/ChooseAccount" element={<ChooseAccount />} />
      <Route path="/ManufacturerFlow" element={<CreateAccount />} />
      <Route path="/ManufacturerFlow/Login" element={<LoginManufacturer />} />
      <Route path="/ManufacturerFlow/Successfully" element={<ManufacturerFlowSuccessfully />} />
      <Route path="/ManufacturerFlow/Registration" element={<Registration />} />
      {/* -------------------SearchManufacturer--------------------- */}
      <Route path="/SearchManufacturer" element={<SearchManufaturerProfile />} />
      <Route path="/SearchManufacturer/Portfolio" element={<Portfolio />} />

      {/*-------------------------------SearchSupplier----------------------------*/}
      <Route path="/SearchSupplier" element={<SearchSupplierProfile />} />
      <Route path="/SearchSupplier/Portfolio" element={<SearchSupplierPortfolio />} />

      {/* -------------------supplierFlow--------------------- */}
      <Route path="/SupplierFlow/ChooseAccount" element={<SupplierFlowChooseAccount />} />
      <Route path="/SupplierFlow" element={<SupplierFlowCreateAccount />} />
      <Route path="/SupplierFlow/Login" element={<SupplierFlowLogin />} />
      <Route path="/SupplierFlow/Successfully" element={<SupplierFlowSuccessfully />} />
      <Route path="/SupplierFlow/Registration" element={<SupplierFlowRegistration />} />


 {/* ------------------supplier-profile-------------------- */}
      <Route path="/SupplierProfile/Messages" element={<SupplierProfileMessages />} />
      <Route path="/SupplierProfile/Notifications" element={<SupplierProfileNotifications />} />
      <Route path="/SupplierProfile/Orders" element={<SupplierProfileOrders />} />
      <Route path="/SupplierProfile/Successfully" element={<SupplierProfileSuccessfully />} />
      <Route path="/SupplierProfile/Payment" element={<SupplierProfilePayment />} />
      <Route path="/SupplierProfile/Pending" element={<SupplierProfilePending />} />
      <Route path="/SupplierProfile" element={<SupplierProfileProfile />} />
      <Route path="/SupplierProfile/SentQuotation" element={ <SupplierProfileSentQuotation />} />
      <Route path="/SupplierProfile/Rfq" element={ <SupplierProfileRfq />} />


        {/* ------------------ManufacturerProfile-------------------- */}
        <Route path="/ManufacturerProfile/Messages" element={ <ManufacturerProfileMessages />} />
        <Route path="/ManufacturerProfile/Orders" element={ <ManufacturerProfileOrders />} />
        <Route path="/ManufacturerProfile/Notifications" element={ <ManufacturerProfileNotifications />} />
        <Route path="/ManufacturerProfile/Pending" element={ <ManufacturerProfilePending />} />
        <Route path="/ManufacturerProfile" element={ < ManufacturerProfileProfile />} />
        <Route path="/ManufacturerProfile/Payment" element={ <ManufacturerProfilePayment />} />
        <Route path="/ManufacturerProfile/SentQuotation" element={ <ManufacturerProfileSentQuotation />} />
        <Route path="/ManufacturerProfile/Rfq" element={ <  ManufacturerProfileRfq />} />
        <Route path="/ManufacturerProfile/Successfully" element={ <ManufacturerProfileSuccessfully />} />
    
       
        
  {/* ------------------Admin-------------------- */}
     <Route path="/Admin" element={ <AdminLogin />} />
     <Route path="/Admin/Orders" element={ <AdminOrders />} />
     <Route path="/Admin/Payment" element={ <AdminPayment />} />
     <Route path="/Admin/Profile" element={ <AdminProfile />} />
     <Route path="/Admin/Rfq" element={ <AdminRfq />} />
     <Route path="/Admin/Successfully" element={ < AdminSuccessfully />} />
     <Route path="/Admin/Dashboard" element={ < Dashboard />} />
     <Route path="/Admin/AdminDesigner" element={ <  AdminDesigner/>} />
     <Route path="/Admin/Designer2" element={ <  Designer2 />} />
     <Route path="/Admin/DesignerView" element={ <  DesignerView />} />
     <Route path="/Admin/AdminManufacturer" element={ <  AdminManufacturer />} />
     <Route path="/Admin/ManufacturerView" element={ <ManufacturerView />} />
     <Route path="/Admin/Notifications" element={ <AdminNotifications />} />
     <Route path="/Admin/Supplier" element={ <AdminSupplier />} />
     <Route path="/Admin/SupplierView" element={ < AdminSupplierView />} />
     <Route path="/Admin/ReceivedQuotation" element={ < AdminReceivedQuotation />} />
     

    
    </Routes>
  );
}

export default App;