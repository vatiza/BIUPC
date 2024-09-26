import { Spinner } from "@nextui-org/react";
import GetSingleTeam from "../../utils/getSingleTeam";
import TheTeamCard from "../shared/theTeamCard/theTeamCard";

const Junior = () => {
  const [teams, loading] = GetSingleTeam();

  return (
    <div>
      <div>
        <h1 className="text-2xl lg:text-4xl text-center">
          BIUPC - 2024 (Junior)
        </h1>
      </div>
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

export default Junior;
