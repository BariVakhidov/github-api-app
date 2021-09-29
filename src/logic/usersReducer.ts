import { SearchUserInfo, SearchUsersRequest } from "client/SearchClient/searchClient-types"
import { Nullable } from "types"

export enum UsersActions {
    SET_FETCHING = 'SET_FETCHING',
    SET_FILTER = 'SET_FILTER',
    RESET_FILTER = 'RESET_FILTER',
    SET_SELECTED_USER = 'SET_SELECTED_USER',
}

export interface UsersState {
    isFetching: boolean;
    filter: SearchUsersRequest;
    selectedUser: Nullable<SearchUserInfo>;
}


export const initialUsersState: Readonly<UsersState> = {
    isFetching: false,
    filter: {
        q: "BariV",
        page: 1,
        per_page: 30,
    },
    selectedUser: null,
}

export type Reducer<State, UsersActionsType> = (state: State, action: UsersActionsType) => State

export const usersReducer: Reducer<UsersState, UsersActionsType> = (state, action) => {
    switch (action.type) {
        case UsersActions.SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case UsersActions.SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case UsersActions.RESET_FILTER:
            return {
                ...state,
                filter: initialUsersState.filter,
            }
        case UsersActions.SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload,
            }
        default:
            return state
    }

}

export type UsersActionsType =
    | { type: UsersActions.SET_FETCHING, payload: boolean }
    | { type: UsersActions.SET_FILTER, payload: SearchUsersRequest }
    | { type: UsersActions.SET_SELECTED_USER, payload: Nullable<SearchUserInfo> }
    | { type: UsersActions.RESET_FILTER }