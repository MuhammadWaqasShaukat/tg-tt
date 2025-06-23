import { Button } from '../../Buttons'
import VaultChipLarge from '../../Chips/ChipVaultLarge'
import RatingsInline from '../../Ratings/RatingsInline'

const LootInVaultModal = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-start gap-4 ">
                <VaultChipLarge
                    count="58,499,999"
                    iconSize=" w-[21.25vw] h-[9vh]"
                    className="!bg-[#F88B7C] text-white  w-max h-[5.35vh]"
                />

                <div className=" flex flex-col w-[76vw] p-4 aspect-square relative items-center bg-white rounded-3xl modal-radial-gradient ">
                    <RatingsInline className="bg-green" />
                    <div className="w-[45vw] blur-3xl aspect-square bg-green/55 absolute top-[50%] -translate-y-[50%] rounded-full"></div>
                    <img src="./images/burgler.png" alt="" className="z-10 my-auto" />
                </div>

                <p className=" text-light-brown text-left font-josefin text-[1.5em]">
                    Your Vault is holding all  <span className="font-bold ">$LOOT</span> rewards and what you manage to rob from others.
                </p>

                <p className=" text-light-brown text-left  font-josefin text-[1.5em]">
                    Once you deposit <span className="font-bold ">$LOOT</span> in your Vault - you start getting <span className="font-bold ">$STASH</span> rewards.
                </p>
            </div>

            <Button acent="ghost" className=" border border-[#CEACA7] py-2 flex flex-row justify-center items-center gap-2">
                <span className="text-[.75em] ">Withdraw</span>
                <div className="w-4 h-4 bg bg-icon-arrow-right"></div>
            </Button>
        </>
    )
}

export default LootInVaultModal