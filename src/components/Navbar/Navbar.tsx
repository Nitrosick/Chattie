import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreState } from '@redux';
import { AuthState } from '@redux/reducers/auth/types';
import { logoutThunk } from '@redux/reducers/auth/thunk';
import { Logo } from '@components/Logo/Logo';
import { setMenuOpened } from '@redux/reducers/control/actions';
import './Navbar.css';

export const Navbar: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState: AuthState = useSelector((state: StoreState) => state.auth);
    const opened: boolean = useSelector((state: StoreState) => state.control.menuOpened);

    const onLogout = (userId: number | null) => {
        if (!userId) return;
        // @ts-ignore
        dispatch(logoutThunk(navigate));
    }

    const links = [
        { id: 1, path: '/', name: 'Welcome', needLogged: false },
        { id: 2, path: '/chats', name: 'Chats', needLogged: true },
        { id: 3, path: '/users', name: 'Users', needLogged: false },
        { id: 4, path: `/profile/${authState.userId}`, name: 'Profile', needLogged: true },
    ];

    return (
        <div className={`navbar_wrapper outlined_block_wrapper ${opened ? '' : 'closed'}`}>
            <nav className="navbar outlined_block">
                <Logo />
                <div className="navbar_title">Menu</div>

                {authState.isAppInitialized &&
                    <>
                        <div className="navbar_links">
                            {links.map(link => {
                                if (link.needLogged && !authState.isLogged) return null;
                                return (
                                    <NavLink
                                        key={link.id}
                                        className="menu_item"
                                        to={link.path}
                                        onClick={() => {dispatch(setMenuOpened(false))}}
                                    >
                                        {link.name}
                                    </NavLink>
                                );
                            })}
                        </div>

                        {authState.isLogged
                            ? <button
                                className="menu_item"
                                onClick={() => {
                                    dispatch(setMenuOpened(false))
                                    onLogout(authState.userId);
                                }}
                            >Logout</button>

                            : <>
                                <NavLink
                                    className="menu_item"
                                    to="/login"
                                    onClick={() => {dispatch(setMenuOpened(false))}}
                                >
                                    Sign In
                                </NavLink>
                                <NavLink
                                    className="menu_item"
                                    to="/registration"
                                    onClick={() => {dispatch(setMenuOpened(false))}}
                                >
                                    Sign Up
                                </NavLink>
                            </>
                        }
                    </>
                }

                <button
                    className="navbar_close"
                    onClick={() => { dispatch(setMenuOpened(false)) }}
                >X</button>
            </nav>
        </div>
    );
}
