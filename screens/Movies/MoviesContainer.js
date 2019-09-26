import React, { useState, useEffect } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

export default ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular }
      } = await movieApi.popular();
      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      setNowPlaying(nowPlaying);
      setPopular(popular);
      setUpcoming(upcoming);
    } catch (e) {
      console.log(e);
      setError("Couldn't find anything ");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MoviesPresenter
      isLoading={isLoading}
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
    ></MoviesPresenter>
  );
};
