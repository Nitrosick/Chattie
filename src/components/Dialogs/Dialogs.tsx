import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IDialog } from 'src/interfaces';
import { StoreState } from '@redux';
import { getDialogsThunk } from '@redux/reducers/messages/thunk';
import { Loader } from '@components/Loader/Loader';
import { setDialogsOpened } from '@redux/reducers/control/actions';
import './Dialogs.css';

interface DialodProps {
    setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
};

export const Dialogs: FC<DialodProps> = ({ setCurrentUser }) => {
    const dispatch = useDispatch();
    const dialogsList: IDialog[] = useSelector((state: StoreState) => state.messages.dialogs);
    const loading: boolean = useSelector((state: StoreState) => state.messages.dialogsLoading);
    const logged: boolean = useSelector((state: StoreState) => state.auth.isLogged);
    const opened: boolean = useSelector((state: StoreState) => state.control.dialogsOpened);

    useEffect(() => {
        if (!logged) return;
        // @ts-ignore
        dispatch(getDialogsThunk());
    }, [dispatch, logged]);

    return (
        <div className={`dialogs_wrapper outlined_block_wrapper ${opened ? '' : 'closed'}`}>
            <div className="dialogs outlined_block">
                <h3 className="dialogs_title">Dialogs</h3>

                <div className="dialogs_list">
                    {dialogsList.map(dialog => (
                        <NavLink
                            className="menu_item"
                            key={dialog.id}
                            to={`/chats/${dialog.id}`}
                            onClick={() => {
                                dispatch(setDialogsOpened(false));
                                setCurrentUser(dialog.user_id);
                            }}
                        >
                            <span>{dialog.nickname}</span>
                        </NavLink>
                    ))}
                </div>

                <button
                    className="dialogs_close"
                    onClick={() => {dispatch(setDialogsOpened(false))}}
                >X</button>

                {loading && <Loader />}
            </div>
        </div>
    );
}
