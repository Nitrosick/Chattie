import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreState } from '@redux';
import { AuthState } from '@redux/reducers/auth/types';
import { logoutThunk } from '@redux/reducers/auth/thunk';
import { Logo } from '@components/Logo/Logo';
import './Navbar.css';

export const Navbar: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState: AuthState = useSelector((state: StoreState) => state.auth);

    const onLogout = (userId: number | null) => {
        if (!userId) return;
        // @ts-ignore
        dispatch(logoutThunk(navigate));
    }

    return (
        <div className="outlined_block_wrapper">
            <nav className="navbar outlined_block">
                <Logo />

                {authState.isAppInitialized &&
                    <>
                        <div className="navbar_links">
                            <NavLink className="menu_item" to="/">Welcome</NavLink>
                            {authState.isLogged && <NavLink className="menu_item" to="/chats">Chats</NavLink>}
                            <NavLink className="menu_item" to="/users">Users</NavLink>
                            {authState.isLogged && <NavLink className="menu_item" to={`/profile/${authState.userId}`}>Profile</NavLink>}
                        </div>

                        {authState.isLogged
                            ? <button
                                className="menu_item"
                                onClick={() => { onLogout(authState.userId) }}
                            >Logout</button>

                            : <>
                                <NavLink
                                    className="menu_item"
                                    to="/login"
                                >Sign In</NavLink>
                                <NavLink
                                    className="menu_item"
                                    to="/registration"
                                >Sign Up</NavLink>
                            </>
                        }
                    </>
                }
            </nav>
        </div>
    );
}
