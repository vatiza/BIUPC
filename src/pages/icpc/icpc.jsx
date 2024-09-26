import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import IcPcHistory from "../../components/icpc_tabs/icpc_history";

const IcPcPage = () => {
  return (
    <div>
      <div className="text-center">
        {" "}
        <h1 className="text-2xl font-kanit lg:text-4xl">
          Bangladesh in ICPC World Finals
        </h1>
        <p>
          The history of Bangladesh in the International Collegiate Programming
          Contest (since 1998)
        </p>
      </div>
      <div className="flex w-full  flex-col  items-center mt-5">
        <Tabs aria-label="Options">
          <Tab key="icpcHistory" title="ICPC History">
            <IcPcHistory />
          </Tab>
          <Tab key="universityparticipation" title="University Participation">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="userparticipation" title="User Participation">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="TeamsbyRanks" title=" Teams by Ranks">
            <Card>
              <CardBody>
                <h1>The page is Loading....</h1>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default IcPcPage;
