interface MasterUser {
  _id: string;
  _rev: string;
  firstname: string;
  lastname: string;
  username: string;
  gender: string;
  password: string;
  profession: string;
  searchIndex: string;
  createdAt: number;
  createdBy: string;
  upatedAt: number;
  updatedBy: string;
}

type IMasterUser = Readonly<MasterUser>;

export type { IMasterUser as default };
