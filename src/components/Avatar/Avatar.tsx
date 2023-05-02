import { FC } from 'react';
import { AvatarSize } from 'src/interfaces';
import './Avatar.css';

interface AvatarProps {
    size: AvatarSize;
    url: string;
}

export const Avatar: FC<AvatarProps> = ({ size, url }) => {
    return (
        <div className={`avatar_container ${size}`}>
            <img
                src={url}
                alt="User avatar"
                className="avatar"
            />
        </div>
    );
}
