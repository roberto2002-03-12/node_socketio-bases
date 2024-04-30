/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "chat".
 */
import { IUser } from './'

export interface IChat {
  id: string;
  message: string;
  users?: {
    relationTo: 'users';
    value: string | IUser;
  } | null;
  updatedAt: string;
  createdAt: string;
}