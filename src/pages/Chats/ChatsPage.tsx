import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDialogsOpened } from '@redux/reducers/control/actions';
import { Messages } from '@components/Messages/Messages';
import { Dialogs } from '@components/Dialogs/Dialogs';
import { SendMessageForm } from '@components/Forms/SendMessageForm/SendMessageForm';
import { ChatsHeader } from '@components/ChatsHeader/ChatsHeader';
import './ChatsPage.css';

export const ChatsPage: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<number>(0);

  useEffect(() => {dispatch(setDialogsOpened(true))}, [dispatch]);

  return (
    <div className="chats_page">
      {<ChatsHeader userId={currentUser} />}
      <Messages chatId={params.chatId} />
      <Dialogs setCurrentUser={setCurrentUser} />
      <SendMessageForm chatId={params.chatId} />
    </div>
  );
}
