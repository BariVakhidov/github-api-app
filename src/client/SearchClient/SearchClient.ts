import { SearchUsersRequest, SearchUsersResponse } from './searchClient-types';
import { instance } from "client/ApiClient"

export const searchUsersClient = {

  getUsers(params: SearchUsersRequest) {
    return instance
      .get<SearchUsersResponse>("/search/users", {params})
      .then((response) => response.data);
    },
    
};