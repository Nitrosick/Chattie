import { FC } from 'react';
import { ButtonTypes } from 'src/interfaces';
import './Button.css';

interface ButtonProps {
    text: string;
    disabled: boolean;
    func?: () => void;
    type?: ButtonTypes;
}

export const Button: FC<ButtonProps> = ({ text, disabled, func, type = ButtonTypes.Button }) => {
    return (
        <div className={`button_wrapper ${disabled ? 'disabled' : ''}`}>
            <button
                type={type}
                className="button"
                onClick={func}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
}
