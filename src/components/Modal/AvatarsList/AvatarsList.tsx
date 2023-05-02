import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '@redux';
import { getAvatarsListThunk } from '@redux/reducers/profile/thunk';
import { ProfileState } from '@redux/reducers/profile/types';
import { AvatarSize } from 'src/interfaces';
import { Loader } from '@components/Loader/Loader';
import { Avatar } from '@components/Avatar/Avatar';
import '../Modal.css';
import './AvatarsList.css';

interface AvatarsListProps {
    onChange: (id: number) => void;
    switchModal: (value: boolean) => void;
};

export const AvatarsList: FC<AvatarsListProps> = ({ onChange, switchModal }) => {
    const dispatch = useDispatch();
    const profileState: ProfileState = useSelector((state: StoreState) => state.profile);

    useEffect(() => {
        // @ts-ignore
        dispatch(getAvatarsListThunk());
    }, [dispatch]);

    return (
        <div
            className="modal"
            onClick={(e) => { switchModal(false) }}
        >
            <div
                className="avatars_list_wrapper outlined_block_wrapper"
                onClick={(e) => { e.stopPropagation() }}
            >
                <div className="avatars_list outlined_block">
                    {profileState.avatarsList.map(avatar => (
                        <button
                            key={avatar.id}
                            className={`avatars_list_item ${profileState.user.avatar_id === avatar.id ? 'selected' : ''}`}
                            onClick={() => { onChange(avatar.id) }}
                        >
                            <Avatar size={AvatarSize.Small} url={avatar.url} />
                        </button>
                    ))}

                    {profileState.avatarsLoading && <Loader />}
                </div>
            </div>
        </div>
    );
}
