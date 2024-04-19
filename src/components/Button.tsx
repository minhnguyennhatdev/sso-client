interface ButtonProps {
  text: number | string | JSX.Element;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-full h-10 rounded-sm bg-white flex justify-center items-center"
    >
      {text}
    </div>
  )
}