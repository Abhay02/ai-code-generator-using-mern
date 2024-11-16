import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
import MarkdownMessage from "../components/MarkdownMessage";
import { AxiosClient } from "../utils/Axios";

const CodePage = () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState({
    ai_input: "",
    ai_output: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const req = await AxiosClient.post("/generate", { input: prompt });
      const responseData = await req.data;
      console.log("Form Submit", { prompt });
      setPrompt("");
      setData({
        ai_input: responseData.ai_input,
        ai_output: responseData.ai_output,
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
    setLoading(false);
  };
  return (
    <>
      <form className="mb-4 relative" onSubmit={onSubmitHandler}>
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          name=""
          id=""
          className="w-full py-4 px-4 bg-transparent border outline-none rounded-md"
          rows={5}
          placeholder="Write prompt...."
        ></textarea>
        <button
          disabled={loading}
          className="absolute bottom-8 right-4 p-3 bg-black rounded-full text-white shadow-lg disabled:bg-gray-700"
        >
          {loading ? (
            <IoPauseSharp className="text-3xl" />
          ) : (
            <FaTelegramPlane className="text-3xl" />
          )}
        </button>
      </form>
      <MarkdownMessage {...data} isLoading={loading} />
    </>
  );
};

export default CodePage;
