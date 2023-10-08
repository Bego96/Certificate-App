import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import CertificateOverview from "./certificateOverview";
import NewCertificate from "./newCertificate";


const MainContainer = (props) => {
    return (
        <div className={` laptop:absolute transition-all ease-in-out delay-150 laptop:top-16 ${props.showSidebar ? ' laptop:left-[30%] desktop:left-[20%] laptop:w-[70%] desktop:w-[80%]' : ' laptop:left-0 w-[100%]'}`}>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/Certificate-overview' element={<CertificateOverview />}/>
                <Route path='/New-certificate' element={<NewCertificate />}/>
            </Routes>
        </div>
    )
}

export default MainContainer;

