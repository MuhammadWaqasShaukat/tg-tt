import { useInfoModal } from "@/hooks/useInfoModal";
import { robVictimState } from "@/store/choseVictim";
import { userState } from "@/store/User";
import { leagueState } from "@/store/userLeagues";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { UserRow } from "@/types/User.t";
import { formatCompactNumber } from "@/utils/formatNumber";
import { getLeagueGroup } from "@/utils/getLeague";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { useRecoilValue } from "recoil";

const MAX_PLANITY_PERCENTAGE = 80;

const RobberyInfo = () => {
  const robVictim = useRecoilValue(robVictimState) as UserRow;

  const { openInfoModal } = useInfoModal();

  const calculatePenality = () => {
    let penalty = 0;
    if (robVictim.leagueId < user!.leagueId) {
      const victimGroup = getLeagueGroup(robVictim.leagueId);
      const userGroup = getLeagueGroup(user!.leagueId);
      if (victimGroup !== null && userGroup !== null) {
        const groupDifference = userGroup - victimGroup;
        if (groupDifference > 0) {
          penalty =
            groupDifference <= 4
              ? groupDifference * 20
              : MAX_PLANITY_PERCENTAGE;
        }
      }
    }
    return penalty;
  };

  const user = useRecoilValue(userState);
  const userLeagues = useRecoilValue(leagueState);
  const robberLeague = getLeagueLevel(
    userLeagues as LeagueLevelType,
    user?.leagueId ?? 1
  );

  return (
    <div className="flex flex-col items-start justify-start w-full gap-6 ">
      {/* Max Extraction */}
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row items-center justify-start gap-2 ">
          <div
            className="size-5 bg bg-icon-info"
            onClick={() =>
              openInfoModal("robbery_screen.info_tip_extraction_max")
            }
          ></div>
          <p className="text-[1em] text-light-brown">Extraction Max</p>
        </div>
        <div className="px-2 ml-auto bg-white rounded-xl">
          <span className="text-[1em] text-light-brown">
            {userLeagues &&
              robberLeague &&
              formatCompactNumber(
                userLeagues[robberLeague?.league][robberLeague?.index]
                  .robberExtractionRate
              )}
          </span>
        </div>
      </div>

      {/* Lower League Penality*/}
      {calculatePenality() !== 0 && (
        <div className="flex flex-row items-center justify-between w-full ">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <div
              className="size-5 bg bg-icon-info"
              onClick={() =>
                openInfoModal("robbery_screen.info_tip_league_penalty")
              }
            ></div>
            <p className="text-[1em] text-light-brown">Lower League Penalty</p>
          </div>
          <div className="px-2 ml-auto bg-white rounded-xl">
            <span className="text-[1em] text-light-brown">
              -{calculatePenality()}%
            </span>
          </div>
        </div>
      )}

      {/* Huge Bag Boost */}
      {user?.hugeBagIsActive && (
        <div className="flex flex-row items-center justify-between w-full ">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <div
              className="size-5 bg bg-icon-info"
              onClick={() => {
                openInfoModal("robbery_screen.info_tip_huge_bag_boost");
              }}
            ></div>
            <p className="text-[1em] text-light-brown">Huge Bag Boost</p>
          </div>
          <div className="px-2 ml-auto bg-white rounded-xl">
            <span className="text-[1em] text-light-brown">+50%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RobberyInfo;
