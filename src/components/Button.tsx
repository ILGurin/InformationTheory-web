import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className = '' }) => {
  return (
    <button
      className={`uppercase bg-slate-900  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400
        focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex
        items-center justify-center sm:w-auto dark:bg-gray-900 dark:highlight-white/20 dark:hover:bg-gray-950 ml-1
        min-w-[150px] ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
