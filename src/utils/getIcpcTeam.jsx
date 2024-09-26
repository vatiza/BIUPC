import { useEffect, useState } from "react";

const GetIcpcTeams = () => {
  const [icpcTeams, setIcpcTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mocki.io/v1/9ec40f4f-a4c9-4694-a82d-a4900cfb2f3f"
      );
      const data = await response.json();
      setIcpcTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [icpcTeams, loading];
};

export default GetIcpcTeams;
