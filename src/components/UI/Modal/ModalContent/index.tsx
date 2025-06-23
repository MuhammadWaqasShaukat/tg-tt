import Alarm from "./Alarm";
import Crowbar from "./Crowbar";
import Decoy from "./Decoy";
import FakeID from "./FakeID";
import GaurdDog from "./GaurdDog";
import HugeBag from "./HugeBag";
import ImprovedAlarm from "./ImprovedAlarm";
import InviteAndEarn from "./InviteAndEarn";
import LootInPocketsModal from "./LootInPockets";
import LootInVaultModal from "./LootInVault";
import ProfileInfo from "./ProfileInfo";
import ReinforcementVault from "./ReinforcementVault";
import Snack from "./Snack";
import StaminaModal from "./Stamina";
import Stash from "./Stash";
import TopUpStash from "./TopUpStash";
import FullPockets from "./FullPockets";
import StashDetail from "../DetailModal/StashDetail";
import LootInPocketsDetail from "../DetailModal/LootInPocketsDetail";
import Achievement from "./Achievement";
import Info from "./Info";
import InviteAndEarnDetail from "../DetailModal/InviteAndEarnDetail";

const InfoTitle = () => {
  return <div className="size-8 bg bg-icon-info mt-1"></div>;
};

const simpleModals = {
  "loot-in-pockets": {
    title: "$Loot in Pockets",
    elem: <LootInPocketsModal />,
  },
  "loot-in-vault": { title: "$Loot in vault", elem: <LootInVaultModal /> },
  stamina: { title: "Stamina Points", elem: <StaminaModal /> },
  alarm: { title: "Suspicion Points ", elem: <Alarm /> },
  stash: { title: "$STASH Tokens", elem: <Stash /> },
  "invite-and-earn": { title: "Invite and Earn", elem: <InviteAndEarn /> },
  "fake-id": { title: "Fake ID", elem: <FakeID /> },
  "improved-alarm": { title: "Improved Alarm", elem: <ImprovedAlarm /> },
  decoy: { title: "Decoy", elem: <Decoy /> },
  "reinforcement-vault": {
    title: "Reinforcement Vault",
    elem: <ReinforcementVault />,
  },
  snack: { title: "Snack", elem: <Snack /> },
  crowbar: { title: "Crowbar", elem: <Crowbar /> },
  "guard-dog": { title: "Guard Dog", elem: <GaurdDog /> },
  "huge-bag": { title: "Huge Bag", elem: <HugeBag /> },
  "top-up-stash": { title: "Top Up Your Stash", elem: <TopUpStash /> },
  "profile-info": { title: "Profile Info", elem: <ProfileInfo /> },
  "pockets-full": { title: "Your Pockets are full", elem: <FullPockets /> },
  sneaky: { title: "Sneaky", elem: <Achievement /> },
  sleepy: { title: "Sleepy", elem: <Achievement /> },
  crafty: { title: "Crafty", elem: <Achievement /> },
  cautious: { title: "Cautious", elem: <Achievement /> },
  wanted: { title: "Wanted", elem: <Achievement /> },
  rich: { title: "Rich", elem: <Achievement /> },
  vigilant: { title: "Vigilant", elem: <Achievement /> },
  sloppy: { title: "Sloppy", elem: <Achievement /> },
  info: { title: <InfoTitle />, elem: <Info /> },
};

const detailModal = {
  // details modal
  "loot-in-pockets-detail": {
    title: "$Loot in Pockets",
    elem: <LootInPocketsDetail />,
  },
  "stash-detail": {
    title: "$Loot in Pockets",
    elem: <StashDetail />,
  },

  "invite-and-earn-detail": {
    title: "Invite and Earn",
    elem: <InviteAndEarnDetail />,
  },
};

export const modals = {
  simpleModals,
  detailModal,
};
