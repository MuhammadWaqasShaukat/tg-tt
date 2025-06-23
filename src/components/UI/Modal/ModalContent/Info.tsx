import { infoState } from "@/store/info";
import { useRecoilValue } from "recoil";

const Info = () => {
  const information = useRecoilValue(infoState);
  return (
    <div>
      <p className="text-light-brown text-[1em] font-josefin text-left">
        {information ??
          "Here relevant information will be presented to assisst the user."}
      </p>
    </div>
  );
};

export default Info;
