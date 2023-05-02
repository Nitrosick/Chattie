import { FC } from 'react';
import { ProfileInfoItem } from './Item/ProfileInfoItem';
import { ProfileField } from '@pages/Profile/ProfilePage';
import './ProfileInfo.css';

interface ProfileInfoProps {
    fields: ProfileField[];
    switchEditMode: (value: boolean) => void;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ fields, switchEditMode }) => {
    return (
        <div className="profile_info">
            <ul className="profile_info_list">
                {fields.map(field => (
                    <ProfileInfoItem
                        key={field.id}
                        title={field.title}
                        value={field.value}
                        switchEditMode={switchEditMode}
                    />
                ))}
            </ul>
        </div>
    );
}
