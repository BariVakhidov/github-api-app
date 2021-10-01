import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    'Authorization': 'Bearer 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'
  }
});

