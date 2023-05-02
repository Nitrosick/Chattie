import { FC } from 'react';
import './Logo.css';

export const Logo: FC = () => {
  return (
    <div className="main_logo">
        <span className="main_logo_part_1">chatt</span>
        <div className="main_logo_splitter"></div>
        <span className="main_logo_part_2">e</span>
    </div>
  );
}
