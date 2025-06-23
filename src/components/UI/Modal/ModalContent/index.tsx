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
import ReinforcementVault from "./ReinforcementVault";
import Snack from "./Snack";
import StaminaModal from "./Stamina";
import Stash from "./Stash";
import TopUpStash from "./TopUpStash";

export const modals = {
  "loot-in-pockets": {
    title: "$Loot in Pockets",
    elem: <LootInPocketsModal />,
  },
  "loot-in-valut": { title: "$Loot in valut", elem: <LootInVaultModal /> },
  stamina: { title: "Stamina", elem: <StaminaModal /> },
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
};
