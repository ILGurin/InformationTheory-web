import { useState } from "react";
import EncryptionService from "../services/EncryptionService";
import InputTextArea from "../components/InputTextArea";

const Encryption: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isOffsetMethod, setIsOffsetMethod] = useState<boolean>(true);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOffsetMethod(e.target.value === "true");
  };
  const handleInputWordChange = (value: string) => {
    setWord(value.toUpperCase());
  };
  const handleInputKeyChange = (value: string) => {
    setKey(value.toUpperCase());
  };

  return (
    <div className="flex items-center flex-col m-3 w-3/4">
      <h2 className="text-3xl font-bold m-5 text-center">Шифрование</h2>
      <InputTextArea
        name="Шифруемое слово"
        word={word}
        onChange={handleInputWordChange}
      />
      <InputTextArea name="Ключ" word={key} onChange={handleInputKeyChange} />

      <div className="relative flex flex-col text-gray-700 bg-[rgb(30_41_59)] shadow-md rounded-xl bg-clip-border">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg
              outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900
              focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50
              active:bg-opacity-80 active:text-blue-gray-900"
          >
            <label
              htmlFor="vertical-list-react"
              className="flex items-center w-full px-3 py-2 cursor-pointer"
            >
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                    htmlFor="vertical-list-react"
                  >
                    <input
                      onChange={handleOptionChange}
                      checked={isOffsetMethod}
                      name="option"
                      value="true"
                      required
                      type="radio"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none
                        rounded-full border border-blue-gray-200 text-white transition-all before:absolute
                        before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4
                        before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0
                        before:transition-opacity checked:border-white checked:before:bg-white
                        hover:before:opacity-0"
                    />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none
                        top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-white">
                Метод смещения
              </p>
            </label>
          </div>
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none
              text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50
              focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80
              active:text-blue-gray-900"
          >
            <label
              htmlFor="vertical-list-vue"
              className="flex items-center w-full px-3 py-2 cursor-pointer"
            >
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                    htmlFor="vertical-list-vue"
                  >
                    <input
                      id="vertical-list-vue"
                      onChange={handleOptionChange}
                      checked={!isOffsetMethod}
                      type="radio"
                      name="option"
                      value="false"
                      required
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:before:bg-white hover:before:opacity-0"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-white">
                Метод перестановок
              </p>
            </label>
          </div>
        </nav>
      </div>

      <div className="flex flex-row mt-2">
        <button
          className="uppercase bg-slate-900  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400
          focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex
          items-center justify-center sm:w-auto dark:bg-gray-900 dark:highlight-white/20 dark:hover:bg-gray-950 ml-1
          min-w-[150px]"
          type="button"
          onClick={() => {
            console.log(word, key);
            console.log(isOffsetMethod);
            if (isOffsetMethod) {
              setResult(EncryptionService.offsetMethodEncrypt(word, key));
            } else {
              setResult(EncryptionService.permutationMethodEncrypt(word, key));
            }
          }}
        >
          Зашифровать
        </button>
        <button
          className="uppercase bg-slate-900  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400
          focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex
          items-center justify-center sm:w-auto dark:bg-gray-900 dark:highlight-white/20 dark:hover:bg-gray-950 ml-1
          min-w-[150px]"
          type="button"
          onClick={() => {
            console.log(word, key);
            console.log(isOffsetMethod);
            if (isOffsetMethod) {
              setResult(EncryptionService.offsetMethodDecrypt(word, key));
            } else {
              setResult(EncryptionService.permutationMethodDecrypt(word, key));
            }
          }}
        >
          Расшифровать
        </button>
      </div>
      <h1 className="text-3xl font-bold underline m-5 text-center">{result}</h1>
    </div>
  );
};

export default Encryption;
