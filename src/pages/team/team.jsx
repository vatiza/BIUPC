import { Card, CardBody, Spinner } from "@nextui-org/react";
import IcpcCard from "../../components/shared/icpc_card/icpc_card";
import GetIcpcTeams from "../../utils/getIcpcTeam";

const TeamPage = () => {
  const [icpcTeams, loading] = GetIcpcTeams();
  return (
    <div className="text-center">
      <h1 className="mt-6 mb-2 font-bold text-3xl">The Team</h1>
      <p className="px-10 lg:mx-36 ">
        The people who make this system work. Everyone is a volunteer and works
        for the community just because they love it. If you want to join the
        team, contact us on our Facebook page.
      </p>
      {/* <div className="grid grid-flow-row lg:grid-cols-3 mt-6 mx-4 lg:mx-20">
        {loading ? (
          <Spinner />
        ) : (
          teams.map((team, index) => <TheTeamCard key={index} team={team} />)
        )}
      </div> */}
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

export default TeamPage;
