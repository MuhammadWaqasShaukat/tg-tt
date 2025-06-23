import { Button } from "@/components/UI/Buttons";
import VaultChip from "@/components/UI/Chips/ChipVault";
import AlarmChip from "@/components/UI/Chips/ChipAlarm";
import StaminaChip from "@/components/UI/Chips/ChipStamina";
import LootPocketChip from "@/components/UI/Chips/ChipLootPocket";
import SlideUp from "@/components/UI/SlideUp";
import HitList from "../HitList";
import StashChip from "@/components/UI/Chips/ChipStash";
import { CurrentModalState } from "@/store/currentModal";
import { useRecoilState } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { View } from "@/types/View.t";
import History from "../History";
import ThiefShop from "../ThiefShop";
import Achievements from "../Achievements";
import Alarm from "../Alarm";
import GaurdDog from "../GaurdDog";
import Vault from "../Vault";
import BuyStashToken from "../BuyStashToken";
import Leaderboard from "../Leaderboard";
import LeaderboardPool from "../LeaderboardPool";
import Statistics from "../Statistics";

const Home = () => {
  const [, setCurrentModal] = useRecoilState(CurrentModalState);
  const [view, setView] = useRecoilState(CurrentViewState);

  const toggleSlide = (currentView: View | null) => {
    setView(currentView);
  };

  return (
    <div className="relative flex flex-col items-start justify-between w-full h-screen p-6 bg-cover bg bg-home-screen">
      <div className="flex flex-row flex-wrap items-center justify-start w-full mt-5 gap-x-14 gap-y-10">
        <VaultChip
          count="+11k"
          className="!bg-[#9DC2C9] text-white text-[20px] leading-5 h-6"
        />
        <AlarmChip
          count="2/12"
          iconSize="!bg-transparent h-[46px] w-[46px] -left-2.5 -top-6"
          className="!bg-[#9DC2C9] text-white text-[20px] leading-5 h-6"
        />
        <StashChip
          count="2/12"
          iconSize="!bg-transparent"
          className="!bg-[#9DC2C9] text-white text-[20px] leading-5 h-6"
        />
        <StaminaChip
          count="2"
          iconSize="!bg-transparent -left-2.5"
          className="!bg-[#9DC2C9] text-white text-[20px] leading-5 h-6"
        />
        <LootPocketChip
          count="2/12"
          iconSize="!bg-transparent"
          className="!bg-[#9DC2C9] text-white text-[20px] leading-5 h-6"
        />
        <button
          className="ml-auto bg-yellow px-9 py-1 rounded-[30px]"
          onClick={() => {
            setCurrentModal("invite-and-earn");
          }}
        >
          <span className="text-base">invite and earn</span>
        </button>
      </div>

      <div className="flex flex-col items-start justify-start">
        <button onClick={() => toggleSlide("history")}>History</button>
        <button onClick={() => toggleSlide("achievements")}>Reward</button>
        <button onClick={() => toggleSlide("vault")}>Vault</button>
        <button onClick={() => toggleSlide("alarm")}>Alarm</button>
        <button onClick={() => toggleSlide("guard-dog")}>Guard Dog</button>
        <button onClick={() => toggleSlide("thief-shop")}>Theif Shop</button>
        <button onClick={() => toggleSlide("hit-list")}>stalk List</button>
      </div>

      <Button
        onClick={() => toggleSlide("hit-list")}
        acent="yellow"
        className="shadow-custom flex flex-row justify-center items-center gap-2 mb-[14px]"
      >
        <div className="w-5 h-5 bg bg-icon-attack"></div>
        <span>Rob Now</span>
      </Button>

      <SlideUp isVisible={view ? true : false}>
        <div className=" bg-[#FFEEE4] w-full  h-full px-[5.8%] pt-[5.8vh]">
          {view == "hit-list" && <HitList onClose={() => toggleSlide(null)} />}
          {view == "history" && <History onClose={() => toggleSlide(null)} />}
          {view == "alarm" && <Alarm onClose={() => toggleSlide(null)} />}
          {view == "guard-dog" && (
            <GaurdDog onClose={() => toggleSlide(null)} />
          )}
          {view == "thief-shop" && (
            <ThiefShop onClose={() => toggleSlide(null)} />
          )}
          {view == "achievements" && (
            <Achievements onClose={() => toggleSlide(null)} />
          )}
          {view == "vault" && <Vault onClose={() => toggleSlide(null)} />}
          {view == "buy-stash-token" && (
            <BuyStashToken onClose={() => toggleSlide(null)} />
          )}
          {view == "leaderboard" && (
            <Leaderboard onClose={() => toggleSlide(null)} />
          )}
          {view == "leaderboard-pool" && (
            <LeaderboardPool onClose={() => toggleSlide(null)} />
          )}
          {view == "statistics" && (
            <Statistics onClose={() => toggleSlide(null)} />
          )}
        </div>
      </SlideUp>
    </div>
  );
};

export default Home;
