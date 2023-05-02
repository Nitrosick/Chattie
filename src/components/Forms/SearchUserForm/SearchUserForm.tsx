import { FC } from 'react';
import '../Forms.css';
import './SearchUserForm.css';

interface SearchUserFormProps {
    filterValue: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    onSearchUsers: () => void;
    disabled: boolean;
}

export const SearchUserForm: FC<SearchUserFormProps> = ({
    filterValue,
    setFilter,
    onSearchUsers,
    disabled
}) => {
    return (
        <div className="form_wrapper">
            <form
                action="#"
                className="form search_user"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearchUsers();
                }}
            >
                <input
                    className="form_input"
                    type="text"
                    placeholder="Input user name..."
                    autoFocus
                    value={filterValue}
                    onChange={(e) => { setFilter(e.target.value) }}
                    disabled={disabled}
                />
                <button
                    className="form_submit search_user_submit"
                    type="submit"
                    disabled={disabled}
                >
                    Search
                </button>
            </form>
        </div>
    );
}
