import MainHome from "./Components/MainHome";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserSignUp from "./Components/UserComponent/UserSignUp";
import UserDashboard from "./Components/UserComponent/UserDashboard";
import UserDonation from "./Components/UserComponent/UserDonation";
import PaymentOverview from "./Components/UserComponent/PaymentOverview";
import SuccessPay from "./Components/UserComponent/SuccessPay";

function App() {
  return (
    <div className="App">  
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainHome/>}/>
        <Route exact path="/signup" element={<UserSignUp/>}/>
        <Route exact path="/userdashboard" element={<UserDashboard/>}/>
        <Route exact path="/userdonation" element={<UserDonation/>}/>
        <Route exact path="/userpaymentview" element={<PaymentOverview/>}/>
        <Route exact path="/userpayconfirmation" element={<SuccessPay/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
