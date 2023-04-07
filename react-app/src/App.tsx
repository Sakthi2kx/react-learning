import { useEffect } from "react";

const connect = () => console.log("connecting to chat server");
const disconnect = () => console.log("Disconnecting from the chat server");

function App() {
  useEffect(() => {
    connect();
    return () => disconnect(); // clean up function
  })
  return <></>;
}

export default App;
