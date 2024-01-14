import type IUser from '@/interfaces/IUser';
import LocalStorageKeys from '@/constants/LocalStorageKeys';
import { useProcessLocalStorage } from './useProcessLocalStorage';

export function useUser():IUser {
  const profile: any = useState('profile', () => useProcessLocalStorage().retrieve(LocalStorageKeys.PROFILE));
  return ({
    get isExists() { return computed(() => !!profile.value); },
    get profile() { return profile; },
    setupProfile: (value: any) => {
      if (!value) { throw new Error('profile can not be setup with null'); }
      useProcessLocalStorage().store(LocalStorageKeys.PROFILE, value);
      profile.value = value;
    },
    resetProfile: () => {
      useProcessLocalStorage().store(LocalStorageKeys.PROFILE, null);
      profile.value = null;
    },
  });
}
