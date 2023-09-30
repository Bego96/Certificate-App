import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import CertificateOverview from "./certificateOverview";
import NewCertificate from "./newCertificate";


const MainContainer = (props) => {
    return (
        <div className={` laptop:absolute laptop:top-16 box-border p-10 ${props.showSidebar ? ' laptop:left-[30%] desktop:left-[20%] laptop:w-[70%] desktop:w-[80%]' : ' laptop:left-0 max-w-full'}`}>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/Certificate-overview' element={<CertificateOverview />}/>
                <Route path='/New-certificate' element={<NewCertificate />}/>
            </Routes>
        </div>
    )
}

export default MainContainer;

