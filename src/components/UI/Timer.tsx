import { QueryClient } from "@tanstack/react-query";
import { useTimer } from "react-timer-hook";

const Timer = ({
  expiryTimestamp,
  short = false,
}: {
  expiryTimestamp: Date;
  short?: boolean;
}) => {
  const queryClient = new QueryClient();

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn("onExpire called");
      queryClient.invalidateQueries(["users"] as any);
    },
    interval: 20,
  });

  return (
    <>
      {short ? (
        <>
          {minutes}m:{seconds}s
        </>
      ) : (
        <>
          {hours}h:{minutes}m:{seconds}s{" "}
        </>
      )}
    </>
  );
};

export default Timer;
