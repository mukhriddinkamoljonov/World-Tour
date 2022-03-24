import "./Main.css";
import React from "react";
import Main from "./Main";

const Home = ({ query }) => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(setLoading(false), 10000);
  // }, []);

  return (
    <div>
      <Main query={query} />
    </div>
  );
};

export default Home;
