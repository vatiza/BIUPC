import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
const BiupcPage = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl lg:text-5xl font-kanit">
          BUBT Intra University Competetive Programming Contest
        </h1>
        <p className="my-2">
          The History of BUBT Intra University Programming Contest (since 2010)
        </p>
      </div>

      <div className="flex w-full h-screen flex-col  items-center mt-5">
        <Tabs aria-label="Options">
          <Tab key="history" title="History">
            <Card>
              <CardBody>
                <h1>History is coming..</h1>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="participation" title="Participation">
            <Card>
              <CardBody>
                <h1>participation user coming</h1>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="leaderboard" title="Leaderboard">
            <Card>
              <CardBody>leaderborad is comming</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default BiupcPage;
