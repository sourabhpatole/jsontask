import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddUser from "./AddUser";
const User = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setApiData(res.data));
    fetchOne();
  }, []);
  const fetchOne = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((data) => setApiData(data))
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(apiData);

  const editDelete = (id, isDelete) => {
    if (isDelete) {
      setApiData(apiData.filter((e) => e.id !== id));
      console.log(id);
    } else {
      console.log(id);
    }
  };

  return (
    <div className="user-container">
      <div className="main-containe">
        <div className="heading">
          <h1 style={{ color: "grey" }}>JSON PlaceHolder CRUD</h1>
        </div>
        <br />
        <AddUser />
        <div className="container">
          {apiData.map((data) => (
            <div className="containerOne" key={data.id}>
              <div className="card" key={data.userId}>
                <div className="title">
                  <h2>{data.title}</h2>
                  <h3>{data.body.slice(0, 30)}</h3>
                </div>
              </div>
              <div className="hello">
                <button onClick={() => editDelete(data.id, false)}>
                  <EditIcon />
                </button>
                <button onClick={() => editDelete(data.id, true)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="down-btn">
        <button>Go To Top</button>
      </div>
    </div>
  );
};

export default User;
