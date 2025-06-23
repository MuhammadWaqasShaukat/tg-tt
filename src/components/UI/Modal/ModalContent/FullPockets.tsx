import { userState } from "@/store/User";
import { Button2 } from "../../Buttons";
import Pill2 from "../../Pills/Pill2";
import { useRecoilValue, useSetRecoilState } from "recoil";
import usePocketInfo from "@/hooks/useGetPocketCap";
import { formatCompactNumber } from "@/utils/formatNumber";
import { useDepositInVaultQuery } from "@/hooks/useDepositInVault";
import { CurrentModalState } from "@/store/currentModal";

// const LootBadge = ({ amount }: { amount: string }) => {
//   return (
//     <Pill2
//       accent="green"
//       count={`-${amount}`}
//       className="text-[1.25em] !bg-[#FFEEE4] pl-4 -ml-4 z-0 !rounded-lg"
//     >
//       <div className="z-10 flex flex-col items-center justify-center mx-auto ">
//         <div className="bg bg-chip-loot bg-center  w-[9vw] aspect-square max-w-[38px] z-10"></div>
//       </div>
//     </Pill2>
//   );
// };

const FullPockets = () => {
  const user = useRecoilValue(userState);
  const { getPocketCap } = usePocketInfo();
  const setModal = useSetRecoilState(CurrentModalState);

  const { mutate: depositInvault } = useDepositInVaultQuery();

  return (
    <div className="flex flex-col items-start justify-start gap-4 ">
      <Pill2
        accent="red"
        count={user?.robberGold.toLocaleString() ?? "0"}
        className="text-[2.25em] text-white -ml-8 pl-8"
        extended={true}
        extendedText={formatCompactNumber(getPocketCap() ?? 0)}
      >
        <div className="max-w-[76px] w-[18.35vw] aspect-square mx-auto z-10 flex flex-col justify-center items-center rounded-[14px]">
          <div className="bg bg bg-chip-loot-pocket bg-center h-[100%] w-[100%] z-10"></div>
        </div>
      </Pill2>

      <p className=" text-light-brown text-left font-josefin text-[1em] leading-5">
        Your pockets can hold limited amount of $LOOT. You can deposit in your
        Vault only when you fill them up!
      </p>

      <Button2
        onClick={() => {
          setModal(null);
          depositInvault();
        }}
        acent="green"
        className="flex-1 w-full p-2.5 text-[1.25em]"
        icon={
          <></>
          //  (
          //   <LootBadge amount={formatCompactNumber(getPocketTax() ?? 0)} />
          // )
        }
        buttonText="100"
      >
        <span>Deposit in vault</span>
      </Button2>

      <p className=" text-light-brown text-left  font-josefin text-[1em] leading-5">
        Every Vault deposit is subject of protection fee. The 10% fee secures
        your $STASH distribution.
      </p>
    </div>
  );
};

export default FullPockets;
