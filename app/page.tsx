"use client";

import { useEffect } from "react";
import { io } from "socket.io-client";

function Home() {
  const socket = io("http://localhost:3001");
  
  const joinActionHandler = () =>{
    socket.emit("join",{
      userId : socket.id
    })
  }
  useEffect(() => {
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!,id-->",socket.id);
    });
  }, []);
  return (
    <div className="">
      <button className="mt-24 border" onClick={joinActionHandler}>Join auction</button>
    </div>
  );
}

export default Home;
