import { CollectionConfig } from 'payload/types'

const Chat: CollectionConfig = {
  slug: 'chat',
  fields: [
    {
      name: 'message',
      type: 'text',
      required: true
    },
    {
      name: 'users',
      type: 'relationship',
      relationTo: [
        'users'
      ],
      required: false
    }
  ],
  timestamps: true,
  dbName: 'chat'
}

export default Chat;