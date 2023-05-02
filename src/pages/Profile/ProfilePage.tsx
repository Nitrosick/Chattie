import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '@redux';
import { changeAvatarThunk, getProfileThunk } from '@redux/reducers/profile/thunk';
import { IUser } from 'src/interfaces';
import { Loader } from '@components/Loader/Loader';
import { ProfileHeader } from '@components/ProfileHeader/ProfileHeader';
import { ProfileInfo } from '@components/ProfileInfo/ProfileInfo';
import { AvatarsList } from '@components/Modal/AvatarsList/AvatarsList';
import { ProfileForm } from '@components/Forms/ProfileForm/ProfileForm';
import './ProfilePage.css';

export interface ProfileField {
  id: number;
  editable: boolean;
  registerField: string;
  title: string;
  value: string | undefined;
  type: string;
  autoFocus: boolean;
}

export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const authUserId: number | null = useSelector((state: StoreState) => state.auth.userId);
  const info: IUser = useSelector((state: StoreState) => state.profile.user);
  const loading: boolean = useSelector((state: StoreState) => state.profile.profileLoading);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const onChangeAvatar = (id: number) => {
    if (id === info.avatar_id) return;
    switchModal(false);
    // @ts-ignore
    dispatch(changeAvatarThunk(id));
  };

  const checkAuth = (): boolean => {
    return params.userId === authUserId?.toString();
  };

  const switchEditMode = (value: boolean) => {
    if (checkAuth()) setEditMode(value);
  };

  const switchModal = (value: boolean) => {
    if (checkAuth()) setModalOpened(value);
  };

  const formFields: ProfileField[] = [
    { id: 1, editable: true, registerField: 'nickname', title: 'Nickname', value: info.nickname, type: 'text', autoFocus: true },
    { id: 2, editable: false, registerField: 'last_visit', title: 'Last visit', value: info.last_visit ? moment(info.last_visit).format('yyyy-MM-DD | HH:mm') : '', type: 'date', autoFocus: false },
    { id: 3, editable: true, registerField: 'birth_date', title: 'Birth date', value: info.birth_date ? moment(info.birth_date).format('yyyy-MM-DD') : '', type: 'date', autoFocus: false },
    { id: 4, editable: true, registerField: 'city', title: 'Hometown', value: info.city, type: 'text', autoFocus: false },
    { id: 5, editable: true, registerField: 'status', title: 'Status', value: info.status, type: 'text', autoFocus: false },
  ];

  useEffect(() => {
    // @ts-ignore
    dispatch(getProfileThunk(params.userId as number));
  }, [dispatch, params.userId]);

  return (
    <div className="profile_page">
      <ProfileHeader
        avatarUrl={info.avatar_url}
        nickname={info.nickname}
        systemName={info.system_name}
        switchModal={switchModal}
      />

      {!editMode &&
        <ProfileInfo
          fields={formFields}
          switchEditMode={switchEditMode}
        />
      }

      {editMode && checkAuth() &&
        <ProfileForm
          fields={formFields}
          switchEditMode={switchEditMode}
        />
      }

      {!editMode && checkAuth() &&
        <span className="profile_page_edit_tip">Double click on any field for edit</span>
      }

      {modalOpened && checkAuth() &&
        <AvatarsList onChange={onChangeAvatar} switchModal={switchModal} />
      }

      {loading && <Loader />}
    </div>
  );
}
