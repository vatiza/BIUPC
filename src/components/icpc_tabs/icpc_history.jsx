import {
  Card,
  CardBody,
  Divider,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import GetIcpcTeams from "../../utils/getIcpcTeam";
import IcpcCard from "../shared/icpc_card/icpc_card";

const IcPcHistory = () => {
  const [icpcTeams, loading] = GetIcpcTeams();

  const years = [
    { key: "All Years", label: "All Years" },
    { key: "2024", label: "2024" },
    { key: "2023", label: "2023" },
    { key: "2022", label: "2022" },
    { key: "2021", label: "2021" },
    { key: "2020", label: "2020" },
    { key: "2019", label: "2019" },
    { key: "2018", label: "2018" },
    { key: "2017", label: "2017" },
    { key: "2016", label: "2016" },
    { key: "2015", label: "2015" },
  ];
  return (
    <div>
      <p className="text-center">
        Fun Fact: 58 out of 124 (46.77%) participants worked at FAANG/big tech
        companies at some point.
      </p>

      <div className="absolute left-5">
        <Select
          size="sm"
          label="Select Year"
          placeholder="All Years"
          defaultSelectedKeys={["All Years"]}
          className="w-52"
          scrollShadowProps={{
            isEnabled: false,
          }}
        >
          {years.map((year) => (
            <SelectItem key={year.key}>{year.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Divider className="mt-16" />
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-kanit">
          ICPC World Finals 2024
        </h1>
        <p className="text-tiny">
          September 16, 2024 <br /> Astana, Kazakhstan <br /> Teams Qualified
          from BGD: 3
        </p>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-1">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          icpcTeams.map((team, index) => (
            <Card className="mt-5" key={index}>
              <CardBody>
                <div className="text-center">
                  {" "}
                  <h1 className="text-2xl font-kanit">{team.group_name}</h1>
                  <p>{team.university_name}</p>
                  <p>Rank:{team.rank}</p>
                </div>
                <IcpcCard groupPerson={team} />
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default IcPcHistory;
