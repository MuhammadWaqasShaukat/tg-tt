import ImageBox from "../../ImageBox";
import { LeagueAssests } from "@/constants/leagues";
import { LeagueNames, UserRow } from "@/types/User.t";
import RatingsInline from "../../Ratings/RatingsInline";
import { useRecoilValue } from "recoil";
import { getLeagueLevel } from "@/utils/getLeagueLevel";
import { LeagueLevelType } from "@/types/LeagueLevel";
import { leagueState } from "@/store/userLeagues";

const AllThievesPlayer: React.FC<{
  user: UserRow;
  className?: string;
}> = ({ user, className }) => {
  const userLeagues = useRecoilValue(leagueState);
  const _userLeague = getLeagueLevel(
    userLeagues as LeagueLevelType,
    user.leagueId as number
  );
  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center justify-start flex-1">
        <ImageBox
          className=" max-w-[42px] max-h-[42px] min-w-[42px] min-h-[42px]"
          imageURL={
            LeagueAssests[_userLeague?.league as LeagueNames].face ??
            LeagueAssests["pickpocket"].face
          }
        />

        <div className="pt-1 ml-4 space-y-1 max-w-[45vw]">
          <h2 className="text-[1.25em] font-bold leading-6 tracking-tight  font-josefin  truncate text-ellipsis">
            {user.username}
          </h2>
          <RatingsInline className="mt-0 bg-white" leagueId={user.leagueId} />
        </div>
      </div>
    </div>
  );
};

export default AllThievesPlayer;
