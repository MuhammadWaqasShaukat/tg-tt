export const dismissNotification = (
  storeKey: string,
  state: boolean,
  cb?: (arg?: any) => void,
  arg?: any
) => {
  const notification = JSON.parse(localStorage.getItem(storeKey) || "{}");
  const updatedNotification = {
    ...notification,
    notified: state,
  };

  localStorage.setItem(storeKey, JSON.stringify(updatedNotification));
  if (typeof cb === "function") {
    cb(arg);
  }
};

export const notificationLocalStorageHelper = (storeKey: string) => {
  const item = localStorage.getItem(storeKey);
  return item ? JSON.parse(item) : null;
};
