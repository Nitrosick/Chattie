import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '@redux';
import { Pagination, UsersState } from '@redux/reducers/users/types';
import { getUsersThunk, showMoreUsersThunk } from '@redux/reducers/users/thunk';
import { SearchUserForm } from '@components/Forms/SearchUserForm/SearchUserForm';
import { Button } from '@components/Buttons/Button';
import { User } from '@components/User/User';
import { Loader } from '@components/Loader/Loader';
import './UsersPage.css';

export const UsersPage: FC = () => {
    const dispatch = useDispatch();
    const usersState: UsersState = useSelector((state: StoreState) => state.users);
    const pagination: Pagination = useSelector((state: StoreState) => state.users.pagination);
    const userId: number | null = useSelector((state: StoreState) => state.auth.userId);
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        // @ts-ignore
        dispatch(getUsersThunk(pagination.count, ''));
    }, [dispatch, pagination.count]);

    const onShowMore = () => {
        // @ts-ignore
        dispatch(showMoreUsersThunk(
            pagination.count,
            pagination.startFrom,
            filter
        ));
    }

    const onSearchUsers = () => {
        // @ts-ignore
        dispatch(getUsersThunk(pagination.count, filter));
    }

    return (
        <div className="users_page">
            <SearchUserForm
                filterValue={filter}
                setFilter={setFilter}
                onSearchUsers={onSearchUsers}
                disabled={usersState.isLoading}
            />

            <div className="users_list_box">
                <ul className="users_list">
                    {usersState.users.map(user => {
                        if (user.id === userId) return null;

                        return (
                            <User
                                key={user.id}
                                info={user}
                            ></User>
                        )
                    })}
                </ul>
            </div>

            <div className="users_list_shadow"></div>

            <Button
                text={"Show more"}
                func={onShowMore}
                disabled={usersState.isDisabled}
            />

            {usersState.isLoading && <Loader />}
        </div>
    );
}
