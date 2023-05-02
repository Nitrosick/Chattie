import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StoreState } from '@redux';
import { WelcomePage } from '@pages/Welcome/WelcomePage';
import { ChatsPage } from '@pages/Chats/ChatsPage';
import { ProfilePage } from '@pages/Profile/ProfilePage';
import { UsersPage } from '@pages/Users/UsersPage';
import { LoginPage } from '@pages/Auth/LoginPage';
import { RegistrationPage } from '@pages/Auth/RegistrationPage';
import { Page404 } from '@pages/Errors/Page404';
import { Loader } from '@components/Loader/Loader';

export const AppRoutes: FC = () => {
    const initialized: boolean = useSelector((state: StoreState) => state.auth.isAppInitialized);
    const logged: boolean = useSelector((state: StoreState) => state.auth.isLogged);

    if (!initialized) return <Loader />;

    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />

            <Route path="/users" element={<UsersPage />} />

            <Route path="/profile/:userId" element={<ProfilePage />} />

            <Route path="/chats/:chatId?" element={logged ? <ChatsPage /> : <Navigate to="/login" />} />

            <Route path="/login" element={!logged ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="/registration" element={!logged ? <RegistrationPage /> : <Navigate to="/" />} />

            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
