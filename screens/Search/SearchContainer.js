import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieReults, setMovieResult] = useState(null);
  const [TVResults, setTVResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchUpdate = text => setSearchTerm(text);

  const handleSubmit = async () => {
    if (searchTerm !== "") {
      setIsLoading(true);
      try {
        const {
          data: { results: movieResults }
        } = await movieApi.search(searchTerm);
        const {
          data: { results: TVResults }
        } = await tvApi.search(searchTerm);
        setMovieResult(movieResults);
        setTVResults(TVResults);
      } catch {
        setError("Something wrong");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SearchPresenter
      isLoading={isLoading}
      searchTerm={searchTerm}
      movieReults={movieReults}
      TVResults={TVResults}
      error={error}
      handleSearchUpdate={handleSearchUpdate}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
