import { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '@redux';
import { getMessagesThunk, getNewMessagesThunk } from '@redux/reducers/messages/thunk';
import { IMessage, MessageSide } from 'src/interfaces';
import { MessageItem } from './MessageItem';
import { config } from 'src/config';
import './Messages.css';

interface MessagesProps {
  chatId: string | undefined;
}

export const Messages: FC<MessagesProps> = ({ chatId }) => {
  const dispatch = useDispatch();
  const scrollBox = useRef<HTMLDivElement>(null);
  const userId: number | null = useSelector((state: StoreState) => state.auth.userId);
  const messagesList: IMessage[] = useSelector((state: StoreState) => state.messages.messages);
  const lastId: number = useSelector((state: StoreState) => state.messages.lastMessageId);

  useEffect(() => {
    if (!chatId || isNaN(+chatId)) return;
    // @ts-ignore
    dispatch(getMessagesThunk(chatId as number));
  }, [dispatch, chatId]);

  useEffect(() => {
    if (!chatId || isNaN(+chatId)) return;

    const interval = setInterval(() => {
      // @ts-ignore
      dispatch(getNewMessagesThunk(chatId as number, lastId));
    }, config.defaults.requestsFrequency);

    return () => clearInterval(interval);
  }, [dispatch, chatId, lastId]);

  useEffect(() => {
    // @ts-ignore
    scrollBox.current.scrollTop = scrollBox.current.scrollHeight;
  }, [messagesList]);

  return (
    <>
      <div
        className="messages_box"
        ref={scrollBox}
      >
        <div className="messages">
          {chatId && messagesList.map(msg => {
            const side = msg.sender_id === userId
              ? MessageSide.Left
              : MessageSide.Right;

            return (
              <MessageItem
                key={msg.id}
                side={side}
                text={msg.message}
                time={msg.created_at}
              />
            )
          })}
        </div>
      </div>

      <div className="messages_shadow"></div>
    </>
  );
}
