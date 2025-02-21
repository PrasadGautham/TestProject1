import axios from "axios";
import { useEffect, useState } from "react";

const API = () => {
  // throw new Error(`Induced error`)
  //normal API function
  const [users, setUsers] = useState([]);
  const [usersAx, setUsersAx] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  //   fetch using axios
  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsersAx(res.data);
      } catch (error) {
        throw new Error(`Induced error ${error}`);
      }
    };
    axiosData();
  }, []);
  return (
    <>
      <div>
        API Fetch
        <ul>
          {users.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
        <div>
          API Axios
          <ul>
            {usersAx.map((data) => (
              <li key={data.id}>{data.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default API;
