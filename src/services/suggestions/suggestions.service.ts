import { SUGGESTIONS_URL } from "@/constants/URLS";
import axios from "axios";

interface ISuggestion {
  value: string;
}

interface ISuggestionsResponse {
  suggestions: ISuggestion[];
}

class SuggestionsService {
  async getSuggestions(query: string) {
    try {
      const response = await axios.post<ISuggestionsResponse>(SUGGESTIONS_URL, {
        query: query,
      });
      return response.data.suggestions;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const suggestionsService = new SuggestionsService();
export default suggestionsService;
