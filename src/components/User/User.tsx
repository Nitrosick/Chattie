import { FC } from 'react';
import { AvatarSize, IUser } from 'src/interfaces';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '@redux';
import { addChatThunk } from '@redux/reducers/messages/thunk';
import { Avatar } from '@components/Avatar/Avatar';
import placeholder from '@assets/images/placeholder.png';
import './User.css';

interface UserProps {
    info: IUser;
};

export const User: FC<UserProps> = ({ info }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logged: boolean = useSelector((state: StoreState) => state.auth.isLogged);
    const disabled: boolean = useSelector((state: StoreState) => state.messages.isDisabled);

    const onStartChat = (targetId: number) => {
        // @ts-ignore
        dispatch(addChatThunk(targetId, navigate));
    }

    return (
        <li className="user">
            <NavLink to={`/profile/${info.id}`} className="user_link">
                <Avatar size={AvatarSize.Small} url={info.avatar_url ? info.avatar_url : placeholder} />

                <div className="user_info">
                    <span className="user_name">
                        {info.nickname.length < 15 ? info.nickname : info.nickname.substring(0, 15) + '...'}
                    </span>
                    {info.city &&
                        <>
                            <span className="user_splitter">|</span>
                            <span className="user_city">{info.city}</span>
                        </>
                    }
                    <span className="user_status">{info.status ? info.status : '...'}</span>
                </div>
            </NavLink>

            {logged &&
                <button
                    className="user_add"
                    onClick={() => { onStartChat(info.id) }}
                    disabled={disabled}
                ></button>
            }
        </li>
    );
}
