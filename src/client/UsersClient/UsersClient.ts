import { instance } from "client/ApiClient"
import { AuthUserInfo, User } from "./usersClient-types"

export const usersClient = {

    getAuthUserInfo() {
        return instance.get<AuthUserInfo>('user').then(response => response.data)
    },

    getUser(username: string) {
        return instance.get<User>(`/users/${username}`).then(response => response.data)
    },

}