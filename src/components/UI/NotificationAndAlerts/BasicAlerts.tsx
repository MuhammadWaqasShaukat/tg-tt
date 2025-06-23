import { BasicAlertProps } from "@/types/Alerts.t";

const BasicAlert: React.FC<
  BasicAlertProps & {
    closeToast?: boolean;
    data?: any;
    isPaused?: boolean;
    toastProps?: any;
  }
> = ({ type, description }) => {
  return (
    <div className="bg-[#FFFBF9F2] rounded-2xl flex flex-row justify-start items-start p-5 gap-3 w-[90vw] sm:max-w-[500px] mx-auto my-2">
      {type === "success" && (
        <div className="aspect-square h-12 w-12 bg-[#A4DD78] rounded-lg grid place-content-center ">
          <div className="bg bg-icon-checked-white w-[18px] h-[18px]"></div>
        </div>
      )}
      {type === "error" && (
        <div className="aspect-square h-12 w-12 bg-[#F88B7C] rounded-lg grid place-content-center ">
          <div className="bg bg-icon-cross-white w-[18px] h-[18px]"></div>
        </div>
      )}
      {type === "info" && (
        <div className="aspect-square h-12 w-12 bg-[#A4DD78] rounded-lg grid place-content-center ">
          <div className="bg bg-icon-checked-white w-[18px] h-[18px]"></div>
        </div>
      )}
      <p className=" font-josefin text-[1.375em] font-medium  text-light-brown text-wrap my-auto ">
        {description}
      </p>
    </div>
  );
};

export default BasicAlert;
