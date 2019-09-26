import React, { useState, useEffect } from "react";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

export default ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();

      setTopRated(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
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
    <TVPresenter
      isLoading={isLoading}
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      error={error}
    />
  );
};
