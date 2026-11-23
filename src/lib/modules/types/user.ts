interface IUser {
  id: string,
  information: {
    username: string,
    name: string,
    birthdate: number,
    userStatus: [string, string], // Emoji + Status
    profilePicUrl: string,
    description: string,
    createdAt: number,
    lastUpdatedAt: number,
  },
  isCreator?: boolean
}

interface ICreator {
  id: string,
  information: {
    name: string
  }
}