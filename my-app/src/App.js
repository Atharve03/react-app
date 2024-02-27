import React from "react"
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import RedirectPage from "./RedirectPage";
// import Server from "./Testing";
import QRCode from 'qrcode.react';

function App(){
  const redirectLink = 'http://192.168.1.160:3000/redirectPage?shop=sdfsdf';
  return(
    <div>
    <QRCode value={redirectLink} />
     
      <h1>gfgfh</h1>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/server" element={<Server/>}></Route> */}
        <Route path="/redirectPage" element={<RedirectPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;


