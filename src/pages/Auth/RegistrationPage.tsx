import * as yup from "yup";
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationThunk } from "@redux/reducers/auth/thunk";
import { StoreState } from "@redux";
import './Auth.css';

const schema = yup.object({
    login: yup.string().required().min(3).max(30),
    password: yup.string().required().min(5).max(50),
    passwordConfirm: yup.string()
        .required('you need to confirm the password')
        .oneOf([yup.ref('password')], 'passwords does not match')
}).required();

type FormData = yup.InferType<typeof schema>;

type Inputs = {
    login: string,
    password: string,
    passwordConfirm: string
};

export const RegistrationPage: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const disabled: boolean = useSelector((state: StoreState) => state.auth.isDisabled);
    const [apiError, setApiError] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // @ts-ignore
        dispatch(registrationThunk(data.login, data.password, navigate, setApiError));
    }

    return (
        <div className="auth_page">
            <div className="outlined_block_wrapper">
                <form
                    className="auth_form outlined_block"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register("login")}
                        type="text"
                        placeholder="Login"
                        className={`auth_form_input ${errors.login ? 'incorrect' : ''}`}
                        autoFocus
                    />

                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        className={`auth_form_input ${errors.password ? 'incorrect' : ''}`}
                    />

                    <input
                        {...register("passwordConfirm")}
                        type="password"
                        placeholder="Password confirm"
                        className={`auth_form_input ${errors.passwordConfirm ? 'incorrect' : ''}`}
                    />

                    {(errors.login || errors.password || errors.passwordConfirm || apiError) &&
                        <div className="auth_form_errors">
                            <div>{errors.login?.message}</div>
                            <div>{errors.password?.message}</div>
                            <div>{errors.passwordConfirm?.message}</div>
                            <div>{apiError}</div>
                        </div>
                    }

                    <button
                        type="submit"
                        className="auth_form_submit"
                        disabled={disabled}
                    >Sign Up</button>
                </form>
            </div>
        </div>
    );
}
