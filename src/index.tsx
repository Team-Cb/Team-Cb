import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Estimation from "./estimation";
import "./common.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinRoom, { CreateRoom } from "./home";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="Team-Cb-1/" element={<JoinRoom />} />
                <Route path="Team-Cb-1/create-room" element={<CreateRoom />} />
                <Route path="Team-Cb-1/estimate" element={<Estimation />} />
            </Routes>
        </BrowserRouter>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
