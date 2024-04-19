import { HTMLInputTypeAttribute } from "react";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, value, onChange }: InputProps) => {
    return <input type={type} className="w-full p-4 h-10 rounded-sm" value={value} onChange={onChange} />
}
