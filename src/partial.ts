interface User {
    id: number
    name: string
    email: string
}

const newUser: User = {
    id: 1,
    name: "Willian",
    email: "programadorcego@gmail.com",
}

const updatedUser: Partial<User> = {
    email: "contato@email.com"
}