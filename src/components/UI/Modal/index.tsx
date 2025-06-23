import { useRecoilState } from "recoil";
import IconButton from "../Buttons/IconButton";
import { CurrentModalState } from "../../../store/currentModal";

import { modals } from "./ModalContent";
import { ModalProps } from "@/types/Modal.t";
import { CurrentDetailModalState } from "@/store/currentDetailModal";

const Modal: React.FC<ModalProps> = ({ closeHandler }) => {
  const [currentModal, setCurrentModal] = useRecoilState(CurrentModalState);
  const [currentDetailModal, setCurrentDetailModal] = useRecoilState(
    CurrentDetailModalState
  );

  return (
    <>
      {currentModal && (
        <div
          id="modalOverlay"
          className="absolute inset-0 z-40 flex items-start justify-center transition-opacity duration-300 bg-black bg-opacity-30 py-8 scroll-container scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto"
          // onClick={() => setCurrentModal(null)}
        >
          <div className="p-6 rounded-3xl shadow-lg text-center bg-[#FFEEE4] w-[88%]  max-h-max flex-col flex justify-start items-start gap-6 my-auto">
            <div className="flex flex-row items-start justify-between w-full text-left">
              <div className=" flex flex-row justify-start items-start gap-3">
                {currentDetailModal && (
                  <IconButton
                    data-navigation="true"
                    acent="brown"
                    className="!rounded-lg aspect-square  ml-auto w-[18.35vw]  max-w-[42px]"
                    onClick={() => {
                      setCurrentDetailModal(null);
                    }}
                  >
                    <div className="w-4 h-4 bg bg-icon-arrow"></div>
                  </IconButton>
                )}
                <h1 className=" text-[1.625em] capitalize">
                  {modals.detailModal[`${currentDetailModal!}-detail`]?.title ??
                    modals.simpleModals[currentModal].title}
                  {/* {modalTitle ?? modals.simpleModals[currentModal].title} */}
                </h1>
              </div>
              {!currentDetailModal && (
                <IconButton
                  data-navigation="true"
                  acent="brown"
                  className="!rounded-lg aspect-square  ml-auto w-[18.35vw]  max-w-[42px]"
                  onClick={() => {
                    if (closeHandler) {
                      closeHandler();
                    } else {
                      setCurrentModal(null);
                    }
                  }}
                >
                  <div className="w-4 h-4 bg bg-icon-cross"></div>
                </IconButton>
              )}
            </div>
            {currentDetailModal
              ? modals.detailModal[`${currentDetailModal}-detail`].elem
              : modals.simpleModals[currentModal].elem}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
