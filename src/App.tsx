import { useEffect } from "react";
import "./App.css";
import Modal from "./components/UI/Modal";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    console.log('Mini App Ready');
  }, []);

  const closeApp = () => {
    (window as any).Telegram.WebApp.close();
  };

  return (
    <div className="flex flex-row items-start justify-center h-screen bg-gray-700 ">
      <div className=" h-screen sm:max-w-[414px] min-h-screen overflow-y-auto relative">
        <Home />
        <Modal />
        <button onClick={closeApp}>Close App</button>
      </div>
    </div>
  );
}

export default App;
