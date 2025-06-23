import { List } from "@/components/UI";
import { GettingRobbedAlerts } from "@/components/UI/NotificationAndAlerts";

import { Page } from "@/components/UI/Page";
import { useRobbingMeQuery } from "@/hooks/useRobbingMe";
import { PageProps } from "@/types/Page.t";
import { RobbingMeDetails } from "@/types/User.t";
import React from "react";

const Alerts: React.FC<PageProps> = ({ onClose }) => {
  const { data } = useRobbingMeQuery();

  return (
    <Page
      id="alerts-view"
      allowNavigatingBack={true}
      allowSearch={false}
      backBtnClkHandler={onClose}
      viewTitle="Alert!"
      Sheet={null}
    >
      <List className="space-y-3">
        {data &&
          data.map((attacker: RobbingMeDetails) => (
            <GettingRobbedAlerts {...attacker} key={attacker.userRowId} />
          ))}
      </List>
    </Page>
  );
};

export default Alerts;
