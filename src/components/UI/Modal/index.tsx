import { useRecoilState } from "recoil";
import IconButton from "../Buttons/IconButton";
import { CurrentModalState } from "../../../store/currentModal";

import { modals } from "./ModalContent";
const Modal = () => {
  const [currentModal, setCurrentModal] = useRecoilState(CurrentModalState);
  return (
    <>
      {currentModal && (
        <div
          id="modalOverlay"
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-30 z-30"
          // onClick={() => setCurrentModal(null)}
        >
          <div className="p-6 rounded-lg shadow-lg text-center bg-[#FFEEE4] w-[88.40vw]  max-h-max flex-col flex justify-start items-start gap-6">
            <div className="flex flex-row items-start justify-between w-full">
              <h1 className=" text-[2.2em] capitalize">
                {modals[currentModal].title}
              </h1>
              <IconButton
                acent="brown"
                className="!rounded-xl aspect-square  ml-auto"
                onClick={() => setCurrentModal(null)}
              >
                <div className="w-4 h-4 bg bg-icon-cross"></div>
              </IconButton>
            </div>
            {modals[currentModal].elem}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
