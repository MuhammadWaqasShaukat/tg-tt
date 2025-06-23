import { useNavigate } from "react-router-dom";
import { Button } from "../../Buttons";
import IconButton from "../../Buttons/IconButton";
import PillButton from "../../Buttons/PillButton";
import Divider from "../../Divider";
import useAppRest from "@/hooks/useAppRest";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/store/User";
import { useEffect, useRef, useState } from "react";
import { CurrentModalState } from "@/store/currentModal";
import { CurrentViewState } from "@/store/currentView";
import { localizationState } from "@/store/localizations";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const resetApp = useAppRest();
  const walletInputRef = useRef<HTMLInputElement>(null);

  const user = useRecoilValue(userState);
  const [editingWallet, setEditingWallet] = useState(false);
  const [walletAddr, setWalletAddr] = useState<string | null>(null);
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const [, setView] = useRecoilState(CurrentViewState);

  const localization = useRecoilValue(localizationState);

  const handleLogoutClk = () => {
    localStorage.clear();
    resetApp();
    navigate("/auth");
  };

  const handleTxClk = () => {
    setCurrentModal(null);
    setView("transactions");
  };

  useEffect(() => {
    if (editingWallet) {
      if (walletInputRef.current) {
        walletInputRef.current.focus();
      }
    }
  }, [editingWallet]);

  return (
    <div className="flex flex-col items-center justify-start w-full gap-6 ">
      <div className="flex flex-row items-end justify-between w-full">
        <div className="flex-1 space-y-4 text-left ">
          <span className="text-[1em] text-left font-josefin  font-medium">
            Telegram ID
          </span>
          <p className="text-[1.25em] font-medium">
            {user?.telegramUser ? "" : "@unassigned"}
          </p>
        </div>
        <IconButton acent="ghost" className=" ml-auto !place-content-start">
          <div className="w-6 h-6 bg-right bg bg-icon-lock-outline"></div>
        </IconButton>
      </div>

      <Divider />

      <div className="flex flex-row items-end justify-between w-full">
        <div className="flex-1 space-y-4 text-left ">
          <span className="text-[1em] text-left font-josefin  font-medium">
            Thief ID
          </span>
          <p className="text-[1.25em] font-medium">#{user?.username}</p>
        </div>
        <IconButton acent="ghost" className=" ml-auto !place-content-start">
          <div className="w-6 h-6 bg-right bg bg-icon-lock-outline"></div>
        </IconButton>
      </div>

      <Divider />

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex-1 space-y-4 text-left ">
          <span className="text-[1em] text-left font-josefin  font-medium">
            Wallet ID
          </span>

          <div className="space-y-4">
            {/* {!walletAddr && !editingWallet && (
              // <p className="text-gray-500">No wallet address added</p>
            )} */}
            {(walletAddr || editingWallet) && (
              <div className="flex flex-row items-center justify-between w-full">
                <div className=" flex-1">
                  {editingWallet && (
                    <input
                      ref={walletInputRef}
                      type="text"
                      value={walletAddr ? walletAddr : ""}
                      placeholder="Enter your wallet address"
                      className="w-full py-2 rounded bg-transparent border-none outline-none placeholder:text-light-brown"
                      onChange={(e) => setWalletAddr(e.target.value)}
                    />
                  )}

                  {walletAddr && !editingWallet && walletAddr !== "" && (
                    <p className="text-[1.25em] font-medium truncate max-w-64">
                      {walletAddr}
                    </p>
                  )}
                </div>

                {!editingWallet && (
                  <IconButton
                    acent="ghost"
                    className=" ml-auto !place-content-center"
                  >
                    <div className="size-6 bg-right bg bg-icon-lock-outline"></div>
                  </IconButton>
                )}
              </div>
            )}
            {editingWallet ? (
              <PillButton
                onClick={() => setEditingWallet(false)}
                acent="yellow"
                className="flex flex-row items-center justify-center gap-2 text-sm w-max"
              >
                <span>Save</span>
              </PillButton>
            ) : (
              <>
                <PillButton
                  onClick={() => setEditingWallet(true)}
                  acent="yellow"
                  className="flex flex-row items-center justify-center gap-2 text-sm w-max"
                >
                  {walletAddr ? (
                    <span>Change your TON wallet</span>
                  ) : (
                    <span>
                      {localization["thief_menu.Thief_menu_wallet_cta"]}
                    </span>
                  )}

                  <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
                </PillButton>

                <PillButton
                  onClick={handleTxClk}
                  acent="yellow"
                  className="flex flex-row items-center justify-center gap-2 text-sm w-max"
                >
                  <span>Transactions</span>
                  <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
                </PillButton>
              </>
            )}
          </div>
        </div>
      </div>

      <Divider />

      <div className=" text-left w-full text-[1em] font-josefin ">
        <span className="font-medium">Contact us to delete your account</span>
        <p className="font-bold">support@tokenthieves.com</p>
      </div>

      <Button
        acent="yellow"
        className="py-3 text-[1em]"
        onClick={handleLogoutClk}
      >
        <span className="">Logout</span>
      </Button>
    </div>
  );
};

export default ProfileInfo;
