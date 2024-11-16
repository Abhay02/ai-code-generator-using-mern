import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AxiosClient } from "../utils/Axios";

const Dashboard = () => {
  type Data = {
    input: string;
    _id: string;
  };
  const [data, setData] = useState<Data[]>([]);

  const fetchData = async () => {
    const request = await AxiosClient.get("/history");
    const responseData = await request.data;
    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="prose">
        <h1>Welcome to AI Chat 👋</h1>
      </div>
      <div className="py-4">
        <div className="flex flex-col gap-y-4 py-10">
          {data &&
            data.length > 0 &&
            data.map((curr, i) => {
              return (
                <Link
                  to={`/code/${curr._id}`}
                  key={i}
                  className="px-5 py-2 border rounded-md w-full justify-between flex items-center"
                >
                  <h1 className="text-lg font-bold">{curr.input}</h1>
                  <button className="outline-none flex items-center gap-x-2 text-blue-500 text-lg">
                    Read <FaArrowRight />
                  </button>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
