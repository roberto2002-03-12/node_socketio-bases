import payload from 'payload'
// import { CollectionAfterChangeHook } from 'payload/types'
import { IChat } from '../../models'

export const createMessage = async (data: IChat) => {
  try {
    const create = await payload.create({
      collection: 'chat',
      data: data
    })
  
    return create
  } catch (error) {
    throw error;
  }

};

