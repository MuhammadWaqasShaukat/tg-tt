// telegram.d.ts or any .d.ts file in your project
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: any;
        ready: () => void;
        expand: () => void;
        close: () => void;
        sendData: (data: string) => void;
        openTelegramLink: (url: string) => void;
        version: string;
        platform: string;
        colorScheme: "light" | "dark";
        themeParams: Record<string, any>;
        isExpanded: boolean;
        isClosingConfirmationEnabled: boolean;
        enableClosingConfirmation: () => void;
        disableClosingConfirmation: () => void;
        MainButton: {
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          text: string;
          setText: (text: string) => void;
          isVisible: boolean;
        };
      };
    };
  }
}
