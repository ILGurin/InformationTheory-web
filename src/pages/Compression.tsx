import { useState } from "react";
import CompressionService from "../services/CompressionService";
import InputTextArea from "../components/InputTextArea";
import Button from "../components/Button";

const Compression: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [result, setResult] = useState<string>("");
  // const [isShannon, setIsShannon] = useState<boolean>(false);

  // const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsShannon(e.target.value === "true");
  // };
  const handleInputWordChange = (value: string) => {
    setWord(value.toUpperCase());
  };

  return (
    <div className="flex items-center flex-col m-3 w-3/4">
      <h2 className="text-3xl font-bold m-5 text-center">Сжатие</h2>
      <InputTextArea
        name="Слово для сжатия"
        word={word}
        onChange={handleInputWordChange}
      />
      <Button
        text="Сжать"
        onClick={(e) => {
          console.log("Hello", e);
        }}
      />
      <h1>{result}</h1>
    </div>
  );
};

export default Compression;
