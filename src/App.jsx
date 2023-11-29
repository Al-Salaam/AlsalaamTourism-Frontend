import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/authetication/login/index";
import Destinations from "./pages/destinations/index";
import About from "./pages/about";
import Dubai from "./pages/destinations/dubai";
import AbuDhabi from "./pages/destinations/abuDhabi";
import Fujairah from "./pages/destinations/fujairah";
import Sharjah from "./pages/destinations/sharjah";
import RasAlKhaima from "./pages/destinations/RasAlKhaima";
import { Toaster } from "react-hot-toast";
import ActivityPage from "./pages/activityPage";
import SingleActivity from "./pages/singleActivity";
import SignUp from "./pages/authetication/signup";
import ContactUs from "./pages/contactUs";
import Packages from "./pages/packages";
import SinglePackage from "./pages/singlePackage";

import UserPanelSide from "./pages/userPanelSide";
import BookingHistory from "./components/userPanelComponents/bookingHistory";
import Wishlist from "./components/userPanelComponents/Wishlist";
import UserForm from "./components/userPanelComponents/userForm";
import Inbox from "./components/userPanelComponents/Inbox";
import SideBar from "./components/userPanelComponents/SideBar";

import NotFound from "./pages/notFound";
import SuccessfulMessage from "./pages/actionMessage/successful";
import CancelledMessage from "./pages/actionMessage/cancelled";
import ThanksMessage from "./pages/actionMessage/thanks";
import FloatingWhatsapp from "./components/whatsappIcon";

import Protected from "./helpers/protectedRoute/Protected";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "./redux/actions/authAction";


function App() {
      const dispatch = useDispatch();

      const {isAuthenticated } = useSelector((state) => state.auth)
      useEffect(() => {
        dispatch(fetchUserProfile())
      },[dispatch])
  
      const storedUser =  JSON.parse(localStorage.getItem("user"));
      const isSignedIn = storedUser?.user;
    
      useEffect(() => {
        if(isAuthenticated) {
          dispatch(fetchUserProfile())
        }
      
      },[dispatch, isAuthenticated])
  return (
    <div>
      <Routes>
        <Route
          path="/user-panel"
          element={
            <Protected isSignedIn={isSignedIn}>
              <UserPanelSide />
            </Protected>
          }
        >
          <Route index element={<SideBar />} />
          <Route
            path="inquiry"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Inbox />
              </Protected>
            }
          />
          <Route
            path="booking-history"
            element={
              <Protected isSignedIn={isSignedIn}>
                <BookingHistory />
              </Protected>
            }
          />
          <Route
            path="wishlist"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Wishlist />
              </Protected>
            }
          />
          <Route
            path="user-form"
            element={
              <Protected isSignedIn={isSignedIn}>
                <UserForm />
              </Protected>
            }
          />
        </Route>

        <Route path="/thanks" element={<ThanksMessage />} />
        <Route path="/cancel" element={<CancelledMessage />} />
        <Route
          path="/success"
          element={
            <Protected isSignedIn={isSignedIn}>
              <SuccessfulMessage />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/activity/:slug" element={<SingleActivity />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/abuDhabi" element={<AbuDhabi />} />
        <Route path="/fujairah" element={<Fujairah />} />
        <Route path="/sharjah" element={<Sharjah />} />
        <Route path="/rasAlKhaima" element={<RasAlKhaima />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/packages/:slug" element={<SinglePackage />} />
      </Routes>
      <Toaster />
      {/* <WhatsAppOutlined style={{color:"red"}}/> */}
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
