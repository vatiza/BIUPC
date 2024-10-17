import { Spinner } from "@nextui-org/react";
import GetSingleTeam from "../../utils/getSingleTeam";
import TheTeamCard from "../shared/theTeamCard/theTeamCard";

const Junior = () => {
  const [teams, loading] = GetSingleTeam();
  const teamsSlice = teams.slice(0, 3);
  return (
    <div>
      <div className="border rounded-md">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl ">
            ICPC World Finals 2024 (Junior)
          </h1>
          <p>September 16, 2024</p>
        </div>
        <div className="m-3 border rounded-md mt-3">
          <div className="text-center">
            <h1 className="text-xl lg:text-2xl ">BUBT_Alshuail</h1>
            <p>Rank: 1st</p>
          </div>
          <div className="grid grid-flow-row lg:grid-cols-3 mt-6 mx-4 lg:mx-20">
            {loading ? (
              <Spinner />
            ) : (
              teamsSlice.map((team, index) => (
                <TheTeamCard key={index} team={teamsSlice} />
              ))
            )}
          </div>
        </div>
        {/* TODO: Second Teams */}
        <div className="m-3 border rounded-md mt-3">
          <div className="text-center">
            <h1 className="text-xl lg:text-2xl ">BUBT_codingTeams</h1>
            <p>Rank: 2nd</p>
          </div>
          <div className="grid grid-flow-row lg:grid-cols-3 mt-6 mx-4 lg:mx-20">
            {loading ? (
              <Spinner />
            ) : (
              teamsSlice.map((team, index) => (
                <TheTeamCard key={index} team={teamsSlice} />
              ))
            )}
          </div>
        </div>
      </div>
      {/* TODO: 2nd Teams Information data from dynamic  */}
      <div className="border rounded-md mt-6">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl text-center mt-2">
            Summer COding - 2024 (Junior)
          </h1>
          <p>32 OCT 2024</p>
        </div>

        <div className="m-3 border rounded-md mt-3">
          <div className="text-center">
            <h1 className="text-xl lg:text-2xl ">BUBT_codingTeams</h1>
            <p>Rank: 2nd</p>
          </div>
          <div className="grid grid-flow-row lg:grid-cols-3 mt-6 mx-4 lg:mx-20">
            {loading ? (
              <Spinner />
            ) : (
              teamsSlice.map((team, index) => (
                <TheTeamCard key={index} team={teamsSlice} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Junior;
