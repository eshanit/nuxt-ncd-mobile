import type { Ref, ComputedRef } from 'vue';
import type IMasterUser from './IMasterUser';

interface ISetupProfileFunction {
  (value: any | null): void;
}

interface IUser {
  readonly isExists: ComputedRef<boolean>;
  profile: Ref<Omit<IMasterUser, "createdAt"|"createdBy"|"updatedAt"|"updatedBy" >>
  readonly setupProfile: ISetupProfileFunction
  readonly resetProfile: () => void
}

export type { IUser as default };
