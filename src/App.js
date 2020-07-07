import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name={"xXx-JeanMichelPasContent-xXx"}
        avatar={"https://randomuser.me/api/portraits/thumb/men/99.jpg"}
        online
      />
      <Contact
        name={"JeanMichelSéparou"}
        avatar={"https://randomuser.me/api/portraits/thumb/men/98.jpg"}
        online
      />
      <Contact
        name={"JeanMichel JeanMichel"}
        avatar={"https://randomuser.me/api/portraits/thumb/men/97.jpg"}
      />
    </div>
  );
}

export default App;
