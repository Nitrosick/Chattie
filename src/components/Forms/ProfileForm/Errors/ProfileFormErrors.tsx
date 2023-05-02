import { FC } from 'react';
import { FieldErrors } from "react-hook-form";
import { ProfileInputs } from '../ProfileForm';
import './ProfileFormErrors.css';

interface ProfileFormErrorsProps {
    errors: FieldErrors<ProfileInputs>;
    apiError: string;
}

export const ProfileFormErrors: FC<ProfileFormErrorsProps> = ({ errors, apiError }) => {
    return (
        <>
            {(errors.nickname || errors.birth_date || errors.city || errors.status || apiError) &&
                <div className="profile_form_errors">
                    <div>{errors.nickname?.message}</div>
                    <div>{errors.birth_date?.message}</div>
                    <div>{errors.city?.message}</div>
                    <div>{errors.status?.message}</div>
                    <div>{apiError}</div>
                </div>
            }
        </>
    );
}
