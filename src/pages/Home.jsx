import React from "react";
import Chat from "../components/Chat";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
    return (
        <div className="div--home">
            <div className="div--container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;