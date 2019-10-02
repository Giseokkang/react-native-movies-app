import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constans/Color";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({ isLoading, error, topRated, popular, airingToday }) =>
  isLoading ? (
    <Loader />
  ) : error ? (
    <Text>{error}</Text>
  ) : (
    <Container>
      {console.log(topRated)}
      <Section title="Airing Today shows">
        {airingToday
          ? airingToday
              .filter(tv => tv.poster_path !== null)
              .map(tv => (
                <MovieItem
                  key={tv.id}
                  id={tv.id}
                  posterPhoto={tv.poster_path}
                  title={tv.name}
                  voteAvg={tv.vote_average}
                  isMovie={false}
                  overview={tv.overview}
                  backgroundPhoto={tv.backdrop_path}
                />
              ))
          : null}
      </Section>
      <Section title="Top rated shows">
        {topRated
          ? topRated
              .filter(tv => tv.poster_path !== null)
              .map(tv => (
                <MovieItem
                  key={tv.id}
                  id={tv.id}
                  posterPhoto={tv.poster_path}
                  title={tv.name}
                  voteAvg={tv.vote_average}
                  isMovie={false}
                  overview={tv.overview}
                  backgroundPhoto={tv.backdrop_path}
                />
              ))
          : null}
      </Section>

      <Section title="Popular shows">
        {popular
          ? popular
              .filter(tv => tv.poster_path !== null)
              .map(tv => (
                <MovieItem
                  key={tv.id}
                  id={tv.id}
                  posterPhoto={tv.poster_path}
                  title={tv.name}
                  voteAvg={tv.vote_average}
                  isMovie={false}
                  overview={tv.overview}
                  backgroundPhoto={tv.backdrop_path}
                />
              ))
          : null}
      </Section>
    </Container>
  );

TVPresenter.proptypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
