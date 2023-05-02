import { FC } from 'react';
import './ProfileFormInput.css';

interface ProfileFormInputProps {
    title: string;
    value: string | undefined;
    register: any;
    registerField: string;
    type?: string;
    autoFocus?: boolean;
}

export const ProfileFormInput: FC<ProfileFormInputProps> = ({
    title,
    value,
    register,
    registerField,
    type = 'text',
    autoFocus = false
}) => {
    return (
        <li className="profile_form_input">
            <label
                className="profile_form_input_label"
                htmlFor={registerField}
            >
                {title}
            </label>

            <input
                {...register(registerField)}
                type={type}
                id={registerField}
                className="profile_form_input_input"
                defaultValue={value}
                autoFocus={autoFocus}
            />
        </li>
    );
}
