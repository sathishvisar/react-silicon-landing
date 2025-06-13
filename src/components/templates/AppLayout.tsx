import React, { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"



const AppLayout: React.FC = (props: PropsWithChildren) => {
    return <div>
        <Outlet />
    </div>
}

export default AppLayout