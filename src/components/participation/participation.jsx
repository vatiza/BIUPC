import PartiTable from "../shared/table/table";

const Participation = () => {
  return (
    <div>
      <div className="text-center">
        {" "}
        <h1 className="text-2xl lg:text-3xl">Participation</h1>
        <p className="px-32">
          A total of 124 users have participated in the ICPC World Finals <br />{" "}
          One user can participate at most twice (except for the year 2020 which
          was excluded from this restriction because of the pandemic)
        </p>
      </div>
      <PartiTable />
    </div>
  );
};

export default Participation;
