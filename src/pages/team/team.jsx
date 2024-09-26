import { Spinner } from "@nextui-org/react";
import TheTeamCard from "../../components/shared/theTeamCard/theTeamCard";
import GetSingleTeam from "../../utils/getSingleTeam";

const TeamPage = () => {
  const [teams, loading] = GetSingleTeam();
  return (
    <div className="text-center">
      <h1 className="mt-6 mb-2 font-bold text-3xl">The Team</h1>
      <p className="px-10 lg:mx-36 ">
        The people who make this system work. Everyone is a volunteer and works
        for the community just because they love it. If you want to join the
        team, contact us on our Facebook page.
      </p>
      <div className="grid grid-flow-row lg:grid-cols-3 mt-6 mx-4 lg:mx-20">
        {loading ? (
          <Spinner />
        ) : (
          teams.map((team, index) => <TheTeamCard key={index} team={team} />)
        )}
      </div>
    </div>
  );
};

export default TeamPage;
