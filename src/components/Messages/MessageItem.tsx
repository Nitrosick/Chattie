import moment from 'moment';
import { FC } from 'react';
import { MessageSide } from 'src/interfaces';
import './MessageItem.css';

interface MessageItemProps {
  side: MessageSide;
  text: string;
  time: string;
}

export const MessageItem: FC<MessageItemProps> = ({ side, text, time }) => {
  return (
    <div className={`message_container ${side}`}>
      <span className="message_time">{moment(time).format('DD.MM.yyyy | HH:mm')}</span>

      <div className="message_wrapper">
        <div className={`message_item ${side}`}>{text}</div>
      </div>
    </div>
  );
}
