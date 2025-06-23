import { Button } from "@/components/UI/Buttons";
import ImageBox from "@/components/UI/ImageBox";
import { Page } from "@/components/UI/Page";
import { useRecoilState } from "recoil";
import { authMethodState } from "@/store/authMethod";
import { useAuthQuery } from "@/hooks/useAuth";
import { FormEvent, useEffect, useState } from "react";

const SelectionSheet = () => {
  const [, setAuthMethod] = useRecoilState(authMethodState);

  return (
    <>
      <Button
        onClick={() => setAuthMethod("nickname")}
        acent="white"
        className=" flex flex-row justify-center rounded-2xl items-center gap-2 text-[1.25em] border-2 w-full border-[#CEACA7]"
      >
        <span className="">Set your Thief Nickname</span>
      </Button>
      <Button
        onClick={() => setAuthMethod("telegram")}
        acent="yellow"
        className=" flex flex-row justify-center rounded-2xl items-center gap-2 text-[1.25em] border-2 border-[#CEACA7]"
      >
        <div className="size-8 bg bg-icon-tg rounded-full"></div>
        <span className="">Use your Telegram ID</span>
      </Button>
    </>
  );
};

const GuestSheet = ({
  nickname,
  setNickname,
  login,
}: {
  nickname: string;
  setNickname: (args: string) => void;
  login: ({ username }: { username: string }) => void;
}) => {
  return (
    <form
      className="space-y-4 "
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        login({ username: nickname });
      }}
    >
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        name="nickname"
        autoComplete="off"
        className="outline w-full focus:outline-yellow focus:bg-[#FFFBF9] outline-brown rounded-2xl text-[1.125em] py-5 text-center "
        placeholder="nickname"
      />
      <Button
        type="submit"
        acent="yellow"
        className=" rounded-2xl text-[1.25em]"
      >
        <span>Start</span>
      </Button>
    </form>
  );
};

const SocialSheet = ({
  nickname,
  setNickname,
  login,
}: {
  nickname: string;
  setNickname: (args: string) => void;
  login: ({ username }: { username: string }) => void;
}) => {
  return (
    <form
      className="space-y-4 "
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        login({ username: nickname });
      }}
    >
      <input
        type="text"
        disabled
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        name="nickname"
        autoComplete="off"
        className="outline w-full focus:outline-yellow focus:bg-[#FFFBF9] outline-brown rounded-2xl text-[1.125em] py-5 text-center "
        placeholder="nickname"
      />
      <Button
        type="submit"
        acent="yellow"
        className=" rounded-2xl text-[1.25em]"
      >
        <span>Start</span>
      </Button>
    </form>
  );
};

const Auth = () => {
  const [authMethod, setAuthMethod] = useRecoilState(authMethodState);
  const [nickname, setNickname] = useState("");
  const { mutate: login } = useAuthQuery();
  const getSheet = () => {
    if (authMethod === "nickname")
      return (
        <GuestSheet
          nickname={nickname}
          setNickname={setNickname}
          login={login}
        />
      );
    if (authMethod === "telegram")
      return (
        <SocialSheet
          nickname={nickname}
          setNickname={setNickname}
          login={login}
        />
      );
    return <SelectionSheet />;
  };

  useEffect(() => {
    if (authMethod === "telegram") {
      setNickname("Your_TG_ID");
    } else {
      setNickname("");
    }
  }, [authMethod]);

  useEffect(() => {
    return () => setAuthMethod(null);
  }, []);

  return (
    <Page
      id="auth-view"
      allowNavigatingBack={authMethod ? true : false}
      allowSearch={false}
      Sheet={{ StaticSheet: getSheet() }}
      className="!gap-0"
      scrollable
      viewTitle={authMethod === "nickname" ? "Nickname" : ""}
      backBtnClkHandler={() => setAuthMethod(null)}
    >
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex flex-col items-center justify-center flex-1 w-full gap-8 mt-10">
          <ImageBox
            className="w-[58vw] max-w-60 max-h-60 !rounded-[33px] overflow-hidden "
            imageURL="./images/onboarding.png"
            imageSize="w-[58vw] max-w-60 max-h-60 !rounded-[33px] overflow-hidden object-cover  object-top"
          />

          {authMethod &&
            (authMethod === "nickname" ? (
              <h1 className="text-[2.5em] text-outline tracking-tighter text-center">
                Token <br />
                Thieves
              </h1>
            ) : (
              <h1 className="text-[2.5em] text-outline tracking-tighter text-center">
                hi {nickname}
              </h1>
            ))}
        </div>
      </div>
    </Page>
  );
};

export default Auth;
