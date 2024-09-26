import { useEffect, useState } from "react";

const GetSingleTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [team, loading];
};

export default GetSingleTeam;
