import * as yup from "yup";
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginThunk } from "@redux/reducers/auth/thunk";
import { StoreState } from "@redux";
import './Auth.css';

const schema = yup.object({
    login: yup.string().required().min(3).max(30),
    password: yup.string().required().min(5).max(50),
}).required();

type FormData = yup.InferType<typeof schema>;

type Inputs = {
    login: string,
    password: string,
};

export const LoginPage: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const disabled: boolean = useSelector((state: StoreState) => state.auth.isDisabled);
    const [apiError, setApiError] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // @ts-ignore
        dispatch(loginThunk(data.login, data.password, navigate, setApiError));
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

                    {(errors.login || errors.password || apiError) &&
                        <div className="auth_form_errors">
                            <div>{errors.login?.message}</div>
                            <div>{errors.password?.message}</div>
                            <div>{apiError}</div>
                        </div>
                    }

                    <button
                        type="submit"
                        className="auth_form_submit"
                        disabled={disabled}
                    >Sign in</button>
                </form>
            </div>
        </div>
    );
}
