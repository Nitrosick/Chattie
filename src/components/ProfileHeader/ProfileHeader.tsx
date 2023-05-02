import { FC } from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { AvatarSize } from 'src/interfaces';
import placeholder from '@assets/images/placeholder.png';
import './ProfileHeader.css';

interface ProfileHeaderProps {
    avatarUrl: string | undefined;
    nickname: string;
    systemName: string;
    switchModal: (value: boolean) => void;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
    avatarUrl,
    nickname,
    systemName,
    switchModal
}) => {
    return (
        <div className="outlined_block_wrapper">
            <div className="profile_header outlined_block">
                <button onDoubleClick={() => { switchModal(true) }}>
                    <Avatar
                        size={AvatarSize.Big}
                        url={avatarUrl ? avatarUrl : placeholder}
                    />
                </button>

                <div>
                    <span className="user_name">{nickname}</span>
                    <br />
                    <span className="user_system_name">{systemName}</span>
                </div>
            </div>
        </div>
    );
}
