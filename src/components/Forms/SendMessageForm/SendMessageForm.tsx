import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessageThunk } from '@redux/reducers/messages/thunk';
import '../Forms.css';
import './SendMessageForm.css';

interface SendMessageFormProps {
    chatId: string | undefined;
}

export const SendMessageForm: FC<SendMessageFormProps> = ({ chatId }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');

    const sendMessage = (
        e: React.FormEvent<HTMLFormElement>,
        text: string
    ) => {
        e.preventDefault();
        if (text) {
            // @ts-ignore
            dispatch(sendMessageThunk(text, chatId));
            setInputValue('');
        }
    };

    return (
        <div className="form_wrapper">
            <form
                action="#"
                className="form send_message"
                onSubmit={(e) => { sendMessage(e, inputValue) }}
            >
                <input
                    className="form_input"
                    type="text"
                    placeholder="Write a message..."
                    autoFocus
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                    disabled={!chatId ? true : false}
                />
                <button
                    className="form_submit send_message_submit"
                    type="submit"
                    disabled={!chatId ? true : false}
                >
                    Send
                </button>
            </form>
        </div>
    );
}
