import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EntropyMetrics } from "../services/EntropyMetrics";
import EntropyService from "../services/EntropyService";
import InputTextArea from "../components/InputTextArea";

const MainPage: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [entropyMetrics, setEntropyMetrics] = useState<EntropyMetrics>();
  const navigate = useNavigate();
  const handleInputChange = (value: string) => {
    setWord(value.toUpperCase());
  };

  return (
    <div className="flex items-center flex-col m-3 w-3/4">
      <h2 className="text-3xl font-bold m-5 text-center">Энтропия</h2>
      <InputTextArea
        word={word}
        onChange={handleInputChange}
        name="Слово для энтропии"
      />
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all 
            disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg 
            bg-gray-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-500/20 
            focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full min-w-[200px] max-w-[400px]"
        type="button"
        onClick={() => {
          setEntropyMetrics(EntropyService.calculateEntropyMetrics(word));
        }}
      >
        Рассчитать
      </button>

      <h1 className="text-3xl font-bold m-5 text-center">
        E = {entropyMetrics?.entropy.toFixed(5)}, H0 ={" "}
        {entropyMetrics?.capacity.toFixed(5)}, R0 ={" "}
        {entropyMetrics?.redundancy.toFixed(5)}, r0 ={" "}
        {entropyMetrics?.relativeRedundancy.toFixed(5)}
      </h1>
      <div className="flex flex-row mt-2">
        <button
          className="bg-slate-900  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400
          focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex
          items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 mr-1
          min-w-[150px]"
          type="button"
          onClick={() => {
            navigate("/compression");
          }}
        >
          Сжатие
        </button>
        <button
          className="bg-slate-900  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400
          focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex
          items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ml-1
          min-w-[150px]"
          type="button"
          onClick={() => {
            navigate("/encryption");
          }}
        >
          Шифрование
        </button>
      </div>
    </div>
  );
};

export default MainPage;
