import { instance } from "client/ApiClient"
import { User } from "./usersClient-types"

export const usersClient = {

    getUser(username: string) {
        return instance.get<User>(`/users/${username}`).then(response => response.data)
    },

}