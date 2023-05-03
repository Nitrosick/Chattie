import moment from 'moment';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AvatarSize, IUser } from 'src/interfaces';
import { useSelector } from 'react-redux';
import { StoreState } from '@redux/index';
import { getProfileThunk } from '@redux/reducers/profile/thunk';
import { Avatar } from '@components/Avatar/Avatar';
import placeholder from '@assets/images/placeholder.png';
import './ChatsHeader.css';

interface ChatsHeaderProps {
    userId: number;
};

export const ChatsHeader: FC<ChatsHeaderProps> = ({ userId }) => {
    const dispatch = useDispatch();
    const info: IUser = useSelector((state: StoreState) => state.profile.user);

    useEffect(() => {
        // @ts-ignore
        dispatch(getProfileThunk(userId));
    }, [dispatch, userId]);

    if (!userId) return <div></div>;

    return (
        <div className="chats_header_wraper">
            <div className="chats_header">
                <Avatar size={AvatarSize.Small} url={info.avatar_url ? info.avatar_url : placeholder} />
                <span className="chats_header_name">{info.nickname}</span>
                <span className="chats_header_last_visit">
                    was online on:
                    <br />
                    {moment(info.last_visit).format('DD.MM.yyyy HH:mm')}
                </span>
            </div>
        </div>
    );
}
