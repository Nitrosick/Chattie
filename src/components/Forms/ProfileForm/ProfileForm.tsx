import * as yup from "yup";
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProfileInfoThunk } from "@redux/reducers/profile/thunk";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonTypes } from 'src/interfaces';
import { Button } from '@components/Buttons/Button';
import { ProfileField } from '@pages/Profile/ProfilePage';
import { ProfileInfoItem } from "@components/ProfileInfo/Item/ProfileInfoItem";
import { ProfileFormInput } from "./Item/ProfileFormInput";
import { ProfileFormErrors } from "./Errors/ProfileFormErrors";
import './ProfileForm.css';

const schema = yup.object({
    nickname: yup.string().required().min(3).max(30),
    birth_date: yup.string().matches(/^\d{4}[-]\d{2}[-]\d{2}$/, 'the date must be specified in the format YYYY-MM-DD'),
    city: yup.string().max(50),
    status: yup.string().max(150),
}).required();

type FormData = yup.InferType<typeof schema>;

export type ProfileInputs = {
    nickname: string,
    birth_date?: string,
    city?: string,
    status?: string,
};

interface ProfileFormProps {
    fields: ProfileField[];
    switchEditMode: (value: boolean) => void;
}

export const ProfileForm: FC<ProfileFormProps> = ({ fields, switchEditMode }) => {
    const dispatch = useDispatch();
    const [apiError, setApiError] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<ProfileInputs> = (data) => {
        switchEditMode(false);
        // @ts-ignore
        dispatch(changeProfileInfoThunk(data, setApiError));
    }

    return (
        <form
            className="profile_form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <ul className="profile_form_list">
                {fields.map(field => {
                    if (!field.editable) {
                        return (
                            <ProfileInfoItem
                                key={field.id}
                                title={field.title}
                                value={field.value}
                            />
                        )
                    }
                    return (
                        <ProfileFormInput
                            key={field.id}
                            title={field.title}
                            value={field.value}
                            register={register}
                            registerField={field.registerField}
                            type={field.type}
                            autoFocus={field.autoFocus}
                        />
                    )
                })}
            </ul>

            <ProfileFormErrors errors={errors} apiError={apiError} />

            <div className="profile_form_buttons">
                <Button
                    text="Cancel"
                    disabled={false}
                    func={() => { switchEditMode(false) }}
                />
                <Button
                    text="Save changes"
                    disabled={false}
                    type={ButtonTypes.Submit}
                />
            </div>
        </form>
    );
}
