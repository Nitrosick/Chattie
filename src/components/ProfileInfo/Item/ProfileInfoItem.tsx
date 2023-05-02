import { FC } from 'react';
import './ProfileInfoItem.css';

interface ProfileInfoItemProps {
    title: string;
    value: string | undefined;
    switchEditMode?: (value: boolean) => void;
}

export const ProfileInfoItem: FC<ProfileInfoItemProps> = ({
    title,
    value,
    switchEditMode = () => {}
}) => {
    return (
        <li className="profile_info_item">
            <span
                onDoubleClick={() => {switchEditMode(true)}}
                className="profile_info_item_title">{title}
            </span>

            <span
                onDoubleClick={() => {switchEditMode(true)}}
                className="profile_info_item_value">{value}
            </span>
        </li>
    );
}
