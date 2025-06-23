import { SlideUp } from "@/components/UI/SlideUp";
import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentViewState } from "@/store/currentView";
import { View } from "@/types/View.t";
import { userState } from "@/store/User";
import { infoViewState } from "@/store/InfoView";
import { lazy, useEffect, Suspense, useCallback } from "react";
import { loadingScreenState } from "@/store/loadingScreen";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { useUserQuery } from "@/hooks/useUser";
import { useShopQuery } from "@/hooks/useShop";
import useVaultInfo from "@/hooks/useGetVaultCap";
import { robbedHistoryViewState } from "@/store/robbedHistoryView";
import Room from "./__components/Room";
import LeagueUpgraded from "../LeagueUpgraded";
import {
  LEAST_LEAGUE_ID_FOR_VAULT_STATUS,
  ROB_NOTIFICATION,
  VAULT_DOWNGRADED_THRESHOLD,
  VAULT_LOW_THRESHOLD,
  VAULT_NOTIFICATION,
} from "@/constants/vars";
import { RobNotifiedType, VaultNotification } from "@/types/App.t";
import { notificationLocalStorageHelper } from "@/utils/dissMissRobNotification";
import { attentionViewState } from "@/store/attentionView";

import { attentionQueueState } from "@/store/attentionQueue";
import ChunkLoadErrorBoundary from "@/components/ErrorBoundary";
import InfoView from "@/components/UI/InfoView/InfoView";

// ====================================================================
// --- Lazy Imports with Retry ---
// ====================================================================

const Withdraw = lazy(() => import("../Withdraw"));
const HitList = lazy(() => import("../HitList"));
const History = lazy(() => import("../History"));
const ThiefShop = lazy(() => import("../ThiefShop"));
const Achievements = lazy(() => import("../Achievements"));
const Alarm = lazy(() => import("../Alarm"));
const GuardDog = lazy(() => import("../GuardDog"));
const Vault = lazy(() => import("../Vault"));
const BuyStashToken = lazy(() => import("../BuyStashToken"));
const Leaderboard = lazy(() => import("../Leaderboard"));
const LeaderboardPool = lazy(() => import("../LeaderboardPool"));
const Statistics = lazy(() => import("../Statistics"));
const Profile = lazy(() => import("../Profile"));
const JoinedFriends = lazy(() => import("../JoinedFriends"));
const UpgradeLeagueFaster = lazy(() => import("../UpgradeLeagueFaster"));
const UpgradeLeagueFasterSelection = lazy(
  () => import("../UpgradeLeagueFasterSelection")
);
const LeagueInfo = lazy(() => import("../LeagueInfo"));
const UpgradeLeagueLevel = lazy(() => import("../UpgradeLeagueLevel"));
const CatchThief = lazy(() => import("../CatchThief"));
const SuccessScreen = lazy(
  () => import("../BuyStashToken/__components/SuccessScreen")
);
const GotRobbed = lazy(() => import("../GotRobbed"));
const FriendJoined = lazy(() => import("../FriendJoined"));
const Alerts = lazy(() => import("../Alerts"));
const Attention = lazy(() => import("../Attention"));
const Transactions = lazy(()=> import ("../Transactions"));

const Home = () => {
  const [view, setView] = useRecoilState(CurrentViewState);
  const infoView = useRecoilValue(infoViewState);
  const [attentionView, setAttentionView] = useRecoilState(attentionViewState);
  const [user] = useRecoilState(userState);
  const loadingScreen = useRecoilValue(loadingScreenState);
  const { getVaultStatus } = useVaultInfo();
  const [gotRobbedHistoryView, setRobbedHistoryView] = useRecoilState(
    robbedHistoryViewState
  );

  const [attentionQueue, setAttentionQueue] =
    useRecoilState(attentionQueueState);

  const navigate = useNavigate();

  const toggleSlide = (currentView: View | null) => {
    setView(currentView);
  };

  useUserQuery();
  useShopQuery();

  const checkLoggedInStatus = useCallback(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "null");
    const token = loggedIn?.accessToken ?? null;

    if (!token) {
      navigate("/auth");
    }
  }, []);

  useEffect(() => {
    checkLoggedInStatus();
    //temp joinded friend window
    const random = Math.floor(Math.random() * 10) + 1;
    if (random === 6) {
      setAttentionView("friend-joined");
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    let robNotification: RobNotifiedType | null =
      notificationLocalStorageHelper(ROB_NOTIFICATION);

    let vaultNotification: VaultNotification | null =
      notificationLocalStorageHelper(VAULT_NOTIFICATION);

    const newCount = user?.notSeenRobberiesCount;

    if (!robNotification) {
      const notification: RobNotifiedType = {
        count: newCount,
        notified: false,
      };
      localStorage.setItem(ROB_NOTIFICATION, JSON.stringify(notification));
      robNotification = notificationLocalStorageHelper(ROB_NOTIFICATION);
    } else if (robNotification.count !== undefined && newCount !== undefined) {
      if (newCount > robNotification.count) {
        const notification: RobNotifiedType = {
          count: newCount,
          notified: false,
        };
        localStorage.setItem(ROB_NOTIFICATION, JSON.stringify(notification));
        robNotification = notificationLocalStorageHelper(ROB_NOTIFICATION);
      }
    }

    const vaultStatus = getVaultStatus();

    if (user.leagueId > LEAST_LEAGUE_ID_FOR_VAULT_STATUS) {
      if (!vaultNotification) {
        // No previous notification, check status
        if (vaultStatus <= VAULT_DOWNGRADED_THRESHOLD) {
          const notification: VaultNotification = {
            notifType: "downgraded",
            notified: false,
          };
          localStorage.setItem(
            VAULT_NOTIFICATION,
            JSON.stringify(notification)
          );
        } else if (vaultStatus <= VAULT_LOW_THRESHOLD) {
          const notification: VaultNotification = {
            notifType: "low-vault",
            notified: false,
          };
          localStorage.setItem(
            VAULT_NOTIFICATION,
            JSON.stringify(notification)
          );
        }
      } else {
        if (vaultStatus > VAULT_LOW_THRESHOLD) {
          // Vault recovered, clear only if previously low or downgraded
          if (
            vaultNotification.notifType === "low-vault" ||
            vaultNotification.notifType === "downgraded"
          ) {
            const updated: VaultNotification = {
              notifType: null,
              notified: false,
            };
            localStorage.setItem(VAULT_NOTIFICATION, JSON.stringify(updated));
          }
        } else if (vaultStatus <= VAULT_DOWNGRADED_THRESHOLD) {
          if (vaultNotification.notifType !== "downgraded") {
            // Upgrade from low-vault to downgraded
            const notification: VaultNotification = {
              notifType: "downgraded",
              notified: false,
            };
            localStorage.setItem(
              VAULT_NOTIFICATION,
              JSON.stringify(notification)
            );
            vaultNotification =
              notificationLocalStorageHelper(VAULT_NOTIFICATION);
          }
        } else if (vaultStatus <= VAULT_LOW_THRESHOLD) {
          if (vaultNotification.notifType !== "low-vault") {
            const notification: VaultNotification = {
              notifType: "low-vault",
              notified: false,
            };
            localStorage.setItem(
              VAULT_NOTIFICATION,
              JSON.stringify(notification)
            );
            vaultNotification =
              notificationLocalStorageHelper(VAULT_NOTIFICATION);
          }
        }
      }
    }

    if (user.notSeenRobberiesCount > 0 && robNotification?.notified == false) {
      setAttentionView("got-robbed");
      setAttentionQueue((prev: string[]) =>
        prev.includes("got-robbed") ? prev : [...prev, "got-robbed"]
      );
    }
  }, [user]);

  useEffect(() => {
    let vaultNotification: VaultNotification | null =
      notificationLocalStorageHelper(VAULT_NOTIFICATION);

    if (
      vaultNotification &&
      !vaultNotification.notified &&
      vaultNotification.notifType
    ) {
      setAttentionView("downgraded");
      setAttentionQueue((prev: string[]) =>
        prev.includes("downgraded") ? prev : [...prev, "downgraded"]
      );
    }
  }, [attentionView, attentionQueue, user]);

  return loadingScreen ? (
    <Loading />
  ) : (
    <div className={`w-full h-full`}>
      {!view && <Room />}

      {view && !infoView && (
        <ChunkLoadErrorBoundary>
          <Suspense fallback={<Room />}>
            <SlideUp isVisible={view ? true : false} direction="up">
              {view == "hit-list" && (
                <HitList onClose={() => toggleSlide(null)} />
              )}
              {view == "history" && (
                <History
                  onClose={() => toggleSlide(null)}
                  tabsActiveIndex={0}
                />
              )}
              {view == "alarm" && <Alarm onClose={() => toggleSlide(null)} />}
              {view == "guard-dog" && (
                <GuardDog onClose={() => toggleSlide(null)} />
              )}
              {view == "thief-shop" && (
                <ThiefShop onClose={() => toggleSlide(null)} />
              )}
              {view == "achievements" && (
                <Achievements onClose={() => toggleSlide(null)} />
              )}
              {view == "alerts" && <Alerts onClose={() => toggleSlide(null)} />}
              {view == "vault" && <Vault onClose={() => toggleSlide(null)} />}
              {view == "buy-stash-token" && (
                <BuyStashToken onClose={() => toggleSlide(null)} />
              )}
              {view == "leaderboard" && (
                <Leaderboard onClose={() => toggleSlide(null)} />
              )}
              {view == "leaderboard-pool" && (
                <LeaderboardPool onClose={() => toggleSlide("leaderboard")} />
              )}
              {view == "statistics" && (
                <Statistics onClose={() => toggleSlide(null)} />
              )}
              {view == "profile" && (
                <Profile onClose={() => toggleSlide(null)} />
              )}
              {view == "friends-list" && (
                <JoinedFriends onClose={() => toggleSlide(null)} />
              )}
              {view == "upgrade-league-level" && (
                <UpgradeLeagueLevel onClose={() => toggleSlide(null)} />
              )}

              {view == "league-upgraded" && <LeagueUpgraded />}

              {view == "upgrade-league-faster" && (
                <UpgradeLeagueFaster onClose={() => toggleSlide(null)} />
              )}
              {view == "upgrade-league-faster-selection" && (
                <UpgradeLeagueFasterSelection
                  onClose={() => toggleSlide(null)}
                />
              )}
              {view == "league-info" && (
                <LeagueInfo onClose={() => toggleSlide(null)} />
              )}
              {view == "catch-thief" && (
                <CatchThief onClose={() => toggleSlide(null)} />
              )}
              {view === "transactions" && (
                <Transactions onClose={() => toggleSlide(null)} />
              )}
              {view == "withdraw" && (
                <Withdraw onClose={() => toggleSlide(null)} />
              )}
            </SlideUp>
          </Suspense>
        </ChunkLoadErrorBoundary>
      )}

      {gotRobbedHistoryView && (
        <ChunkLoadErrorBoundary>
          <Suspense fallback={<Room />}>
            <SlideUp isVisible={gotRobbedHistoryView} direction="down">
              <History
                onClose={() => setRobbedHistoryView(false)}
                tabsActiveIndex={1}
              />
            </SlideUp>
          </Suspense>
        </ChunkLoadErrorBoundary>
      )}

      {infoView && (
        <ChunkLoadErrorBoundary>
          <Suspense fallback={<Room />}>
            <InfoView
              id="info-view"
              className="absolute bottom-0 z-20 flex items-center justify-center w-full h-full transform -translate-x-1/2 left-1/2"
            >
              {view == "stash-purchased-successfull" && (
                <SuccessScreen onClose={() => toggleSlide(null)} />
              )}
            </InfoView>
          </Suspense>
        </ChunkLoadErrorBoundary>
      )}

      {attentionView && attentionQueue.length > 0 && (
        <ChunkLoadErrorBoundary>
          <Suspense fallback={<Room />}>
            <InfoView
              id="info-view"
              className="absolute bottom-0 z-20 flex items-center justify-center w-full h-full transform -translate-x-1/2 left-1/2 empty:hidden"
            >
              {attentionQueue.includes("got-robbed") && <GotRobbed />}
            </InfoView>
            <InfoView
              id="info-view"
              className="absolute bottom-0 z-20 flex items-center justify-center w-full h-full transform -translate-x-1/2 left-1/2 empty:hidden"
            >
              {attentionQueue.includes("friend-joined") && (
                <FriendJoined onClose={() => toggleSlide(null)} />
              )}
            </InfoView>

            <InfoView
              id="info-view"
              className="absolute bottom-0 z-20 flex items-center justify-center w-full h-full transform -translate-x-1/2 left-1/2 empty:hidden"
            >
              {attentionQueue.includes("downgraded") && (
                <Attention onClose={() => toggleSlide(null)} />
              )}
            </InfoView>
          </Suspense>
        </ChunkLoadErrorBoundary>
      )}
    </div>
  );
};

export default Home;
