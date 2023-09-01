import axios from "axios";
import { useEffect, useState } from "react";

const GetHomes = () => {
  const [AgentsData, setAgentsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dinmaegler.onrender.com/agents")
      .then((response) => {
        if (response.status === 200) {
          console.log("Response data:", response.data);
          setAgentsData(response.data);
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error fetching agents:", error);
      });
  }, []);

  return AgentsData;
};

export default GetHomes;
