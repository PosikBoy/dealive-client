import axios from "axios";

import { SUGGESTIONS_URL } from "@/constants/URLS";

interface ISuggestion {
  value: string;
}

class SuggestionsService {
  async getSuggestions(query: string) {
    try {
      const response = await axios.post<ISuggestion[]>(SUGGESTIONS_URL, {
        query: query,
      });
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const suggestionsService = new SuggestionsService();
export default suggestionsService;
