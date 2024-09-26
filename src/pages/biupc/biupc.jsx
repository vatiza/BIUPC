import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Junior from "../../components/division/junior";
import Senior from "../../components/division/senior";
import Participation from "../../components/participation/participation";
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

      <div className="flex w-full  flex-col  items-center mt-5">
        <Tabs aria-label="Options">
          <Tab key="history" title="History">
            <Card>
              <div className="flex w-full  flex-col  items-center mt-5">
                <Tabs aria-label="Options">
                  <Tab key="junior" title="Junior">
                    <Junior />
                  </Tab>
                  <Tab key="senior" title="Senior">
                    <Senior />
                  </Tab>
                </Tabs>
              </div>
            </Card>
          </Tab>
          <Tab key="participation" title="Participation">
            <Participation />
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
