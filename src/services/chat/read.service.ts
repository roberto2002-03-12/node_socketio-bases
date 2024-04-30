import payload from 'payload'

export const listMessages = async () => {
  const result = await payload.find({
    collection: 'chat',
    sort: '-createdAt',
    pagination: false
  })

  return result
}