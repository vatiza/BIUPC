import { Spinner } from "@nextui-org/react";
import TheTeamCard from "../../components/shared/theTeamCard/theTeamCard";
import GetSingleTeam from "../../utils/getSingleTeam";

const Alumni = () => {
  const [teams, loading] = GetSingleTeam();
  return (
    <div>
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

export default Alumni;
