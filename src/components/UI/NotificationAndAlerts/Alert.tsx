type AlertProps = {
  icon?: JSX.Element;
  alertTitle?: string;
  alertTitleStyles?: string;
  alertSubtitle?: string;
  alertSubtitleStyles?: string;
};

const Alert: React.FC<AlertProps> = ({
  icon,
  alertTitle,
  alertTitleStyles,
  alertSubtitle,
  alertSubtitleStyles,
}) => {
  return (
    <div className="bg-[#FFFBF9F2] rounded-2xl flex flex-row justify-start items-start p-5 gap-3 w-[90vw] sm:max-w-[500px]">
      <div>{icon}</div>
      <div className=" flex flex-col justify-start items-start">
        <h2
          className={` text-[1.5em] font-josefin font-bold ${alertTitleStyles}`}
        >
          {alertTitle}
        </h2>
        <p
          className={`font-josefin text-[1.275em] leading-7 text-light-brown text-wrap ${alertSubtitleStyles}`}
        >
          {alertSubtitle}
        </p>
      </div>
    </div>
  );
};

export default Alert;
