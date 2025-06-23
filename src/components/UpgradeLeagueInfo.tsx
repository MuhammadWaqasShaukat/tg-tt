import { leagueState } from '@/store/userLeagues';
import { LeagueNames } from '@/types/User.t';
import { formatCompactNumber } from '@/utils/formatNumber'
import React from 'react';
import { useRecoilValue } from 'recoil';

const UpgradeLeagueInfo:React.FC<{league: string, index:number }> = ({league, index}) => {
  const userLeagues = useRecoilValue(leagueState);


  return (
    <div className="flex flex-col items-start justify-start w-full gap-4 ">
              <div className="flex flex-row items-center justify-between w-full ">
                <p className="text-[1em] text-light-brown text-left">Vault max</p>
    
                <div className="px-2 ml-auto bg-white rounded-xl ">
                  <span className="text-[1em] text-light-brown ">
                    {userLeagues &&
                      formatCompactNumber(
                        userLeagues[league as LeagueNames][
                          index as number
                        ].vaultMaxCapacity
                      )}
                  </span>
                </div>
              </div>
    
              <div className="flex flex-row items-center justify-between w-full ">
                <p className="text-[1em] text-light-brown text-left">Rob max</p>
                <div className="px-2 ml-auto bg-white rounded-xl ">
                  <span className="text-[1em] text-light-brown ">
                    {userLeagues &&
                      formatCompactNumber(
                        userLeagues[league as LeagueNames][
                          index as number
                        ].robberExtractionRate
                      )}
                  </span>
                </div>
              </div>
    
              <div className="flex flex-row items-center justify-between w-full ">
                <p className="text-[1em] text-light-brown text-left">Pocket max</p>
                <div className="px-2 ml-auto bg-white rounded-xl ">
                  <span className="text-[1em] text-light-brown ">
                    {userLeagues &&
                      formatCompactNumber(
                        userLeagues[league as LeagueNames][
                          index as number
                        ].maxRobberPocketCapacity
                      )}
                  </span>
                </div>
              </div>
            </div>
  )
}

export default UpgradeLeagueInfo