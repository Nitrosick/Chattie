import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setDialogsOpened, setMenuOpened } from '@redux/reducers/control/actions';
import { Logo } from '@components/Logo/Logo';
import { useLocation } from 'react-router-dom';
import './Header.css';

export const Header: FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <div className="header_wrapper outlined_block_wrapper">
            <header className="header outlined_block">
                <button
                    className="header_button"
                    onClick={() => { dispatch(setMenuOpened(true)) }}
                >
                    Menu
                </button>

                <Logo />

                {location.pathname.includes('/chats') &&
                    <button
                        className="header_button"
                        onClick={() => { dispatch(setDialogsOpened(true)) }}
                    >
                        Dialogs
                    </button>
                }
            </header>
        </div>
    );
}
