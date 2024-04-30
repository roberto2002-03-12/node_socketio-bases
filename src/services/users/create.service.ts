import payload from 'payload'
import { IUser } from '../../models'
import bcrypt from 'bcrypt'

export const createUser = async (data: IUser) => {
  try {
    const password = await bcrypt.hash(data.password, 10);
    const newUser: IUser = {
      ...data,
      password
    }
  
    const user = await payload.create({
      collection: 'users',
      data: newUser
    });
  
    return { message: 'User created' };
  } catch (error) {
    throw error;
  }
}