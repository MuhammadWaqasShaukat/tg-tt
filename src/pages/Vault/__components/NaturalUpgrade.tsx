import { Button } from "@/components/UI/Buttons";
import Pill2 from "@/components/UI/Pills/Pill2";
import TutorialArrow from "@/components/UI/TutorialArrow";
import useVaultInfo from "@/hooks/useGetVaultCap";
import { userState } from "@/store/User";
import { formatCompactNumberHome } from "@/utils/formatNumber";
import { enableTourElements } from "@/utils/tourGuideHelper";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const NaturalUpgrade: React.FC<{ clkHandler: () => void }> = ({
  clkHandler,
}) => {
  const { getVaultTax } = useVaultInfo();
  const user = useRecoilValue(userState);
    useEffect(() => {
      enableTourElements();
    }, []);

  return (
    <>
      <Button
        data-tour-step="8"
        onClick={clkHandler}
        acent="green"
        className="shadow-custom text-[1.25em] flex flex-row justify-center items-center gap-2 rounded-2xl max-h-14"
      >
        <div className=" flex flex-row justify-center items-center gap-2 relative">
          {user?.tutorial && user?.vaultGold && (
            <TutorialArrow className="-top-14 left-1/2 -translate-x-1/2" />
          )}

          <span>Upgrade League</span>
          <Pill2
            accent="brown"
            count={formatCompactNumberHome(getVaultTax() ?? 0)}
            className="text-[1.25em] -ml-2 rounded-r-md py-0.5"
            extended={false}
          >
            <div className="min-w-[38px] aspect-square  max-h-[38px] max-w-[38px] z-10">
              <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          </Pill2>
        </div>
      </Button>
      <div className="text-center ">
        <span className=" text-[1em] font-josefin text-light-brown">
          Your Vault is full and you need to Upgrade League to get a bigger one.
        </span>
      </div>
    </>
  );
};

export default NaturalUpgrade;
