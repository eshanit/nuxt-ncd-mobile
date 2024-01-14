import type ICreateUser from "./ICreateUser";

interface IUpdateUser extends ICreateUser {
  readonly _rev: string;
  readonly updatedAt: number;
  readonly updatedBy: string;
  readonly facility: string;
}

export type { IUpdateUser as default };
