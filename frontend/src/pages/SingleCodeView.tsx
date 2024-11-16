import { useEffect, useState } from "react";
import MarkdownMessage from "../components/MarkdownMessage";
import { AxiosClient } from "../utils/Axios";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const SingleCodeView = () => {
  const [loading, setLoading] = useState(true);
  type Data = {
    input: string;
    ai_output: string;
  };
  const [data, setData] = useState<Data>({
    input: "",
    ai_output: "",
  });

  const params = useParams<{ id: string }>();

  const fetchData = async () => {
    const request = await AxiosClient.get("/code/" + params.id);
    const responseData = await request.data;
    setData(responseData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-3xl">{data.input} </h1>
        <div className="py-10">
          <MarkdownMessage ai_output={data.ai_output} />
        </div>
      </div>
    </>
  );
};

export default SingleCodeView;
