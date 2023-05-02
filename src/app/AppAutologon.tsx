import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autologonThunk } from '@redux/reducers/auth/thunk';

export const AppAutologon: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(autologonThunk());
    }, [dispatch]);

    return null;
}
