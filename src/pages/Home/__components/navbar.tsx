import Pill2 from "@/components/UI/Pills/Pill2";
import { VAULT_NOTIFICATION } from "@/constants/vars";
import useVaultInfo from "@/hooks/useGetVaultCap";
import { attentionViewState } from "@/store/attentionView";
import { CallbackModalState } from "@/store/callbackModal";
import { CurrentModalState } from "@/store/currentModal";
import { VaultNotification } from "@/types/App.t";
import {
  dismissNotification,
  notificationLocalStorageHelper,
} from "@/utils/dissMissRobNotification";
import { useRecoilState, useSetRecoilState } from "recoil";

const Navbar: React.FC<{
  vaultGold: string;
  suspicionPoints: string;
  tokens: string;
  staminaPoints: string;
  robberGold: string;
}> = ({ vaultGold, suspicionPoints, tokens, staminaPoints, robberGold }) => {
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const { getVaultStatus } = useVaultInfo();
  const setAttentionView = useSetRecoilState(attentionViewState);
  const setCallBackModal = useSetRecoilState(CallbackModalState);

  const handleVaultClk = () => {
    let vaultNotification: VaultNotification | null =
      notificationLocalStorageHelper(VAULT_NOTIFICATION);

    if (
      vaultNotification &&
      vaultNotification.notifType &&
      vaultNotification.notified
    ) {
      dismissNotification(VAULT_NOTIFICATION, false, () => {
        setAttentionView("downgraded");
        setCallBackModal("loot-in-vault");
      });
    } else {
      setCurrentModal("loot-in-vault");
    }
  };

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-y-4  justify-evenly z-20 w-full">
      <Pill2
        onClick={handleVaultClk}
        accent={getVaultStatus() > 10 ? "grey" : "red"}
        count={vaultGold}
        className=" text-white text-[1.25em] -ml-3 pl-2  min-w-10 py-0.5 rounded-r-md"
      >
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="bg bg-chip-vault bg-center aspect-square w-[10.63vw] max-w-10 z-10"></div>
        </div>
      </Pill2>
      <div className="flex flex-row items-center justify-center">
        <Pill2
          onClick={() => {
            setCurrentModal("alarm");
          }}
          accent="grey"
          count={suspicionPoints}
          className=" text-white text-[1.25em] -ml-3.5 pl-2 py-0.5 rounded-r-md "
        >
          <div className="z-10 flex flex-col items-center justify-center -mt-1">
            <div className="bg bg-chip-alarm bg-center aspect-square w-[10.63vw] max-w-[42px] z-10 mb-1"></div>
          </div>
        </Pill2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Pill2
          onClick={() => {
            setCurrentModal("stash");
          }}
          accent="grey"
          count={tokens}
          className=" text-white text-[1.25em] -ml-3 pl-2 py-0.5 rounded-r-md min-w-10"
        >
          <div className="z-10 flex flex-col items-center justify-center">
            <div className="bg bg-chip-coin bg-center aspect-square w-[9vw] max-w-[38px] z-10"></div>
          </div>
        </Pill2>
      </div>
      <div className="flex flex-row items-center justify-end">
        <Pill2
          onClick={() => {
            setCurrentModal("stamina");
          }}
          accent="grey"
          count={staminaPoints}
          className=" text-white text-[1.25em] -ml-4 pl-2 py-0.5 rounded-r-md min-w-12"
        >
          <div className="z-10 flex flex-col items-center justify-center">
            <div className="bg bg-chip-stamina bg-center aspect-square w-[9vw] max-w-[34px] z-10"></div>
          </div>
        </Pill2>
      </div>
      <Pill2
        onClick={() => {
          setCurrentModal("loot-in-pockets");
        }}
        accent="grey"
        count={robberGold}
        className=" text-white text-[1.25em] -ml-3.5 pl-2 py-0.5 rounded-r-md min-w-12  "
      >
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="bg bg-chip-loot-pocket bg-center aspect-square w-[10.63vw] max-w-10 z-10"></div>
        </div>
      </Pill2>
      <div className="col-span-3 ml-auto">
        <button
          className="ml-auto bg-yellow px-4 py-0.5 rounded-[30px] "
          onClick={() => {
            setCurrentModal("invite-and-earn");
          }}
        >
          <span className="text-[.825em] leading-non capitalize">
            invite & earn
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
