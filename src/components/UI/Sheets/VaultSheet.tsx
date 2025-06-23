import { useClaimToken } from "@/hooks/useClaimTokens";
import { Button } from "../Buttons";
import { CurrentModalState } from "@/store/currentModal";
import { userState } from "@/store/User";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useVaultInfo from "@/hooks/useGetVaultCap";
// import { localizationState } from "@/store/localizations";

const VaultSheet = () => {
  const setCurrentModal = useSetRecoilState(CurrentModalState);
  const user = useRecoilValue(userState);
  const vaultFilledPercentage = useVaultInfo().getVaultStatus();

  // const localization = useRecoilValue(localizationState);

  const { mutate: claimToken } = useClaimToken();

  return (
    <>
      <div className="flex flex-row items-start justify-between gap-4 ">
        <p className="text-[1em] text-left font-josefin text-light-brown font-medium tracking-tighter">
          Your Vault is &nbsp;
          {`${user && vaultFilledPercentage.toFixed(1)}%`}
          &nbsp; full and gives {user?.tokensPerHour.toFixed(2)} $STASH / Hour
        </p>
        <Button
          onClick={() => setCurrentModal("stash")}
          acent="ghost"
          className="text-[.875em] flex flex-row justify-center items-center gap-2 border-2 rounded-[10px] border-[#CEACA7] p-3 w-max "
        >
          <span className=" whitespace-nowrap"> More info</span>
          <div className="w-3 h-3 bg bg-icon-arrow-right"></div>
        </Button>
      </div>
      <Button
        onClick={() => claimToken()}
        disabled={user?.tokensToClaim === 0}
        acent="yellow"
        className="shadow-custom text-[1.12em] flex flex-row justify-center items-center gap-2 rounded-2xl"
      >
        <span>
          Claim Stash &nbsp;
          <span className="text-light-brown">
            {user?.tokensToClaim.toFixed(2)}
          </span>
        </span>
      </Button>
    </>
  );
};

export default VaultSheet;
