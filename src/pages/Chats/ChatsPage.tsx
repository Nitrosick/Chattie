import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Messages } from '@components/Messages/Messages';
import { Dialogs } from '@components/Dialogs/Dialogs';
import { SendMessageForm } from '@components/Forms/SendMessageForm/SendMessageForm';
import './ChatsPage.css';

export const ChatsPage: FC = () => {
  const params = useParams();

  return (
    <div className="chats_page">
      <Messages chatId={params.chatId} />
      <Dialogs />
      <SendMessageForm chatId={params.chatId} />
    </div>
  );
}
