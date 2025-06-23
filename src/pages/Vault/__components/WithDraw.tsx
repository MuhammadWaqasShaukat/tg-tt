import { Button } from "@/components/UI/Buttons";
import { MIN_WITHDRAW_AMOUNT, PAID_LEAGUE_START } from "@/constants/vars";
import { useInfoModal } from "@/hooks/useInfoModal";
import { CurrentViewState } from "@/store/currentView";
import { userState } from "@/store/User";
import { useRecoilValue, useSetRecoilState } from "recoil";

const WithDraw = () => {
  const setView = useSetRecoilState(CurrentViewState);
  const user = useRecoilValue(userState);

  const canWithdraw = () => {
    if (!user) return false;
    return (
      user.leagueId >= PAID_LEAGUE_START &&
      user.vaultGold >= MIN_WITHDRAW_AMOUNT
    );
  };
  const { openInfoModal } = useInfoModal();

  return (
    <div className="w-full space-y-3">
      {user && (
        <Button
          onClick={() => canWithdraw() ? setView("withdraw") : setView("upgrade-league-faster")  }
          acent={!canWithdraw() ? "ghost" : "red"}
          className="border-2 max-h-14 border-[#CEACA7] text-[1.25em] shadow-custom flex flex-row justify-center items-center gap-2 rounded-2xl"
        >
          {!canWithdraw() ? (
            <div className="w-4 h-4 bg bg-icon-lock"></div>
          ) : (
            <div className="max-w-6 max-h-6 w-[5.80vw] aspect-square z-10">
              <div className="bg bg bg-chip-loot bg-center h-[100%] w-[100%] z-10"></div>
            </div>
          )}
          <span>Withdraw</span>
        </Button>
      )}

      {user && user.leagueId < 16 ? (
        <div className="flex flex-row items-center justify-center gap-2 ">
          <div
            className="size-5 bg bg-icon-info"
            onClick={() => {
              openInfoModal("vault_screen.info_tip_league_needed");
            }}
          ></div>
          <span
            className=" text-[1em] font-josefin text-light-brown"
            onClick={() => setView("upgrade-league-faster")}
          >
            League <span className="font-bold ">“Masters”</span> needed
          </span>
        </div>
      ) : user && user?.vaultGold < MIN_WITHDRAW_AMOUNT ? (
        <div className="flex flex-row items-center justify-center gap-2 ">
          <span className=" text-[1em] font-josefin text-light-brown">
            Withdraw your LOOT
          </span>
        </div>
      ) : (
        <div
          className="flex flex-row items-center justify-center gap-2 "
          onClick={() => setView("upgrade-league-faster")}
        >
          <span className=" text-[1em] font-josefin text-light-brown">
            No sufficient balance. You need 1M min.
          </span>
        </div>
      )}
    </div>
  );
};

export default WithDraw;
