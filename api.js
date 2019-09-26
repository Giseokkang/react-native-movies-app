import axios from "axios";

const apiKeyAndLanguage = {
  params: {
    api_key: "b2e0ccc5b21b3b53128350309f57d23e",
    language: "ko-KR"
  }
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: apiKeyAndLanguage.params
});

export const movieApi = {
  nowPlaying: () =>
    api.get("movie/now_playing", {
      params: apiKeyAndLanguage.params
    }),
  upcoming: () =>
    api.get("movie/upcoming", {
      params: apiKeyAndLanguage.params
    }),
  popular: () =>
    api.get("movie/popular", {
      params: apiKeyAndLanguage.params
    }),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        api_key: "b2e0ccc5b21b3b53128350309f57d23e",
        language: "ko-KR",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        api_key: "b2e0ccc5b21b3b53128350309f57d23e",
        language: "ko-KR",
        query: encodeURIComponent(term)
      }
    }),
  movieCollection: id =>
    api.get(`collection/${id}`, {
      params: apiKeyAndLanguage.params
    })
};

export const tvApi = {
  topRated: () =>
    api.get("tv/top_rated", {
      params: apiKeyAndLanguage.params
    }),
  popular: () =>
    api.get("tv/popular", {
      params: apiKeyAndLanguage.params
    }),
  airingToday: () =>
    api.get("tv/airing_today", { params: apiKeyAndLanguage.params }),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        api_key: "b2e0ccc5b21b3b53128350309f57d23e",
        language: "ko-KR",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: "b2e0ccc5b21b3b53128350309f57d23e",
        language: "ko-KR",
        query: encodeURIComponent(term)
      }
    }),
  showSeasons: id =>
    api.get(`tv/${id}/season/{season_number}`, {
      params: apiKeyAndLanguage.params
    })
};
