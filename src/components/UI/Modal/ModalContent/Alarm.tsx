import AlarmChipLarge from '../../Chips/ChipAlarmLarge'
import { Button } from '../../Buttons'
import { CurrentModalState } from '../../../../store/currentModal';
import { useRecoilState } from 'recoil';

const Alarm = () => {
    const [, setCurrentModal] = useRecoilState(CurrentModalState);

    return (
        <>
            <div className="flex flex-col items-start justify-start gap-4 ">
                <AlarmChipLarge
                    count="20/20"
                    iconSize=" w-[21.25vw] h-[9vh]"
                    className="!bg-[#F88B7C] text-white  w-max h-[5.35vh]"
                />
                <ul className="px-4 text-left list-disc">
                    <li>
                        <span className="text-[1.6em] font-josefin  font-medium tracking-tighter text-light-brown">
                            Each time you're caught during a robbery, you get +1 Suspicion point.
                        </span>
                    </li>
                    <li>
                        <span className="text-[1.6em] font-josefin font-medium tracking-tighter text-light-brown">
                            Accumulating these increases your risk of jail time.
                        </span>
                    </li>
                    <li>
                        <span className="text-[1.6em] font-josefin font-medium tracking-tighter text-light-brown">
                            Each point increases the chance of being thrown in jail with +20% when caught again.
                        </span>
                    </li>
                    <li>
                        <span className="text-[1.6em] font-josefin font-medium tracking-tighter text-light-brown">
                            Points decrease naturally by -1 every hour.
                        </span>
                    </li>
                </ul>

                <div className="h-[1px] bg-[#CEACA7] w-full"></div>

                <p className='text-[1.6em] font-josefin  font-medium tracking-tighter text-light-brown'>Need to reduce suspicion?</p>
            </div>

            <Button acent="yellow" className="flex flex-row items-center justify-center gap-2 py-2 " onClick={() => {
                setCurrentModal("fake-id");
            }}>
                <span className="text-[.75em] capitalize">Buy Fake ID</span>
            </Button>
        </>
    )
}

export default Alarm