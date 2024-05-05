import { SUGGESTIONS_URL } from "@/constants/URLS";
import axios from "axios";

interface ISuggestionsResponse {
  suggestions: {
    value: string;
  }[];
}

class SuggestionsService {
  async getSuggestions(query: string) {
    try {
      const response = await axios.post<ISuggestionsResponse>(SUGGESTIONS_URL, {
        query: query,
      });
      console.log(response.data.suggestions);
      return response.data.suggestions;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const suggestionsService = new SuggestionsService();
export default suggestionsService;
