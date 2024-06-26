import { ChangeEvent } from "react";

interface InputProps {
  name?: string;
  word?: string;
  onChange: (value: string) => void;
}

const InputTextArea: React.FC<InputProps> = ({ name, word, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="relative h-10 w-full min-w-[200px] max-w-[400px] mt-2 mb-2">
      <input
        className="peer h-full w-full rounded-[7px] border border-[rgb(148_163_184)] border-t-transparent
        bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0
        transition-all placeholder-shown:border placeholder-shown:border-[rgb(148_163_184)]
        placeholder-shown:border-t-[rgb(148_163_184)] focus:border-2 focus:border-[rgb(148_163_184)]
        focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        onChange={handleChange}
        value={word}
        type="text"
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute
        left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px]
        font-normal leading-tight text-[rgb(148_163_184)] transition-all before:pointer-events-none
        before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5
        before:rounded-tl-md before:border-t before:border-l before:border-[rgb(148_163_184)]
        before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
        after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t
        after:border-r after:border-[rgb(148_163_184)] after:transition-all peer-placeholder-shown:text-sm
        peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[rgb(148_163_184)]
        peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
        peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[rgb(148_163_184)] peer-focus:before:border-t-2
        peer-focus:before:border-l-2 peer-focus:before:border-[rgb(148_163_184)] peer-focus:after:border-t-2
        peer-focus:after:border-r-2 peer-focus:after:border-[rgb(148_163_184)] peer-disabled:text-transparent
        peer-disabled:before:border-transparent peer-disabled:after:border-transparent
        peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        {name}
      </label>
    </div>
  );
};

export default InputTextArea;
