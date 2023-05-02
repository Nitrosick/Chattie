import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IDialog } from 'src/interfaces';
import { StoreState } from '@redux';
import { getDialogsThunk } from '@redux/reducers/messages/thunk';
import { Loader } from '@components/Loader/Loader';
import './Dialogs.css';

export const Dialogs: FC = () => {
    const dispatch = useDispatch();
    const dialogsList: IDialog[] = useSelector((state: StoreState) => state.messages.dialogs);
    const loading: boolean = useSelector((state: StoreState) => state.messages.dialogsLoading);
    const logged: boolean = useSelector((state: StoreState) => state.auth.isLogged);

    useEffect(() => {
        if (!logged) return;
        // @ts-ignore
        dispatch(getDialogsThunk());
    }, [dispatch, logged]);

    return (
        <div className="outlined_block_wrapper">
            <div className="dialogs outlined_block">
                <h3 className="dialogs_title">Dialogs</h3>

                <div className="dialogs_list">
                    {dialogsList.map(dialog => (
                        <NavLink
                            className="menu_item"
                            key={dialog.id}
                            to={`/chats/${dialog.id}`}
                        >
                            <span>{dialog.nickname}</span>
                        </NavLink>
                    ))}
                </div>

                {loading && <Loader />}
            </div>
        </div>
    );
}
