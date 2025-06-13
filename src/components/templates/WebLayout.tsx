import React from "react"
import { Outlet } from "react-router-dom"
import WebHeader from "../organisms/WebHeader"
import WebFooter from "../organisms/WebFooter"



const WebLayout: React.FC = () => {
    return <>
        <WebHeader />
        <Outlet />
        <WebFooter />
    </>
}

export default WebLayout