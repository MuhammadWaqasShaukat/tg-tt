import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";


import { miniApp } from '@telegram-apps/sdk';

async function initializeApp() {
  try {
    await miniApp.mount();
    console.log('Mini App mounted successfully');
  } catch (error) {
    console.error('Failed to mount Mini App:', error);
  }
}
// Initialize SDK
initializeApp();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
