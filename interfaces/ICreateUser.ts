interface CreateUser{
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  gender: string;
  profession: string;
  terms: boolean;
  createdAt: number;
  createdBy: string;
}

type ICreateUser = Readonly<CreateUser>

export type { ICreateUser as default}