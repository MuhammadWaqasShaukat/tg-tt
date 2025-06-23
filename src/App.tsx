// import { useEffect, useState } from "react";
import { CSSProperties, useLayoutEffect, useRef } from "react";
import "./App.css";
import Modal from "./components/UI/Modal";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { Tooltip } from "react-tooltip";

// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { initializeApp } from "firebase/app";
// import { useFirebaseTokenQuery } from "./hooks/useFirebaseToken";

// const firebaseConfig = {
//   apiKey: "AIzaSyA96U3jwWsbnGTddndQcFlaMjsVjjfKS0Y",
//   authDomain: "token-thieves-test.firebaseapp.com",
//   projectId: "token-thieves-test",
//   storageBucket: "token-thieves-test.firebasestorage.app",
//   messagingSenderId: "188025590188",
//   appId: "1:188025590188:web:aa826b22b05abe3396aa09",
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

function App() {
  // const [deviceToken, setDeviceToken] = useState("");
  // const { mutate: firebaseToken } = useFirebaseTokenQuery();

  // useEffect(() => {
  //   const requestPermission = async () => {
  //     const permission = await Notification.requestPermission();
  //     if (permission === "granted") {
  //       console.log("Notification permission granted.");

  //       try {
  //         const token = await getToken(messaging, {
  //           vapidKey:
  //             "BITklteHb_arvRCqxlU27NTEFntcC3J0bAn60ds9norrzW6U8k7eTEVCzOfSYfOANyunODHlS1n1PLJe4oddw3I",
  //         });

  //         if (token) {
  //           console.log("FCM Token:", token);
  //           setDeviceToken(token);
  //         } else {
  //           console.log("No registration token available.");
  //         }
  //       } catch (err) {
  //         console.error("Error retrieving token:", err);
  //       }
  //     } else {
  //       console.log("Notification permission denied.");
  //     }
  //   };

  //   requestPermission();
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = onMessage(messaging, (payload) => {
  //     if (!payload || !payload.notification) return;

  //     new Notification(payload.notification.title as string, {
  //       body: payload.notification.body,
  //       icon: payload.notification.image || "/favicon.ico",
  //     });
  //   });

  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   if (deviceToken) {
  //     firebaseToken({ firebaseToken: deviceToken });
  //   }
  // }, [deviceToken]);

  const containerRef = useRef<HTMLDivElement>(null);


  const tooltipStyles: CSSProperties = {
    maxWidth: 250,
    width: "max-content",
    backgroundColor: "#FFF",
    color: "#5A1319",
    fontSize: "1em",
    fontFamily: "Josefin Sans",
    fontWeight: 500,
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    lineHeight: "1.25em",
    textAlign: "start"
  };

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="overflow-none relative bg-[#FFEEE4]" ref={containerRef}>
      <Home />
      {/* <Room /> */}
      <Modal />
      <ToastContainer />
      <Tooltip id="tt-tooltip" place="bottom-start" style={tooltipStyles} />
    </div>
  );
}

export default App;
