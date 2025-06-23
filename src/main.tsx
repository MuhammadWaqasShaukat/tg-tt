import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "./pages/OnBoarding/index.tsx";
import { userState } from "./store/User.ts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/auth",
    element: <Onboarding />,
  },
]);

const queryClient = new QueryClient();

const AppWrapper = () => {
  const user = useRecoilValue(userState);
  return (
    <div
      data-is-tour-active={user?.tutorial ? "true" : "false"}
      className={`${user?.inPrisonUntil ? "bg-jail-full" : "bg-room-full"} `}
    >
      <div id="token-thieves-miniapp" className="sm:max-w-[580px] mx-auto ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>
);
