import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    text: string;
    url: string;
}

export const LinkButton: FC<ButtonProps> = ({ text, url }) => {
    return (
        <div className="button_wrapper">
            <NavLink
                to={url}
                className="button"
            >
                {text}
            </NavLink>
        </div>

    );
}
