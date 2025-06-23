import { useRecoilState } from 'recoil';
import { Button } from '../../Buttons'
import StaminaChipLarge from '../../Chips/ChipStaminaLarge'
import { CurrentModalState } from '../../../../store/currentModal';

const StaminaModal = () => {

    const [, setCurrentModal] = useRecoilState(CurrentModalState);

    return (
        <>
            <div className="flex flex-col items-start justify-start gap-4 ">
                <StaminaChipLarge
                    count="20/20"
                    iconSize=" w-[21.25vw] h-[9vh]"
                    className="!bg-[#F88B7C] text-white  w-max h-[5.35vh]"
                />
                <ul className="px-4 text-left list-disc">
                    <li>
                        <span className="text-[1.6em] font-josefin  font-medium tracking-tighter text-light-brown">
                            Each time you start a robbery -1 stamina is reduced from your balance.
                        </span>
                    </li>
                    <li>
                        <span className="text-[1.6em] font-josefin font-medium tracking-tighter text-light-brown">
                            Your stamina regenerates with +1 every 2h.
                        </span>
                    </li>
                </ul>

                <div className="h-[1px] bg-[#CEACA7] w-full"></div>

                <p className='text-[1.6em] font-josefin  font-medium tracking-tighter text-light-brown'>Need more Stamina now?</p>
            </div>

            <Button acent="yellow" className="flex flex-row items-center justify-center gap-2 py-2 " onClick={() => {
                setCurrentModal("snack");
            }}>
                <span className="text-[.75em] capitalize">get a snack</span>
            </Button>
        </>
    )
}

export default StaminaModal