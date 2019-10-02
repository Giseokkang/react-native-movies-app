import React from "react";
import PropTypes from "prop-types";

import { Text, TouchableOpacity } from "react-native";
import Loader from "../../components/Loader";
import MovieSlider from "../../components/MovieSlider";
import styled from "styled-components";
import { BG_COLOR } from "../../constans/Color";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ isLoading, error, nowPlaying, upcoming, popular }) =>
  isLoading ? (
    <Loader />
  ) : error ? (
    <Text>{error}</Text>
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? (
        <Section title="Upcoming movies">
          {upcoming
            ? upcoming
                .filter(movie => movie.poster_path !== null)
                .map(movie => (
                  <MovieItem
                    key={movie.id}
                    id={movie.id}
                    posterPhoto={movie.poster_path}
                    title={movie.title}
                    voteAvg={movie.vote_average}
                    overview={movie.overview}
                    backgroundPhoto={movie.backdrop_path}
                  />
                ))
            : null}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular movies">
          {popular
            ? popular
                .filter(movie => movie.poster_path !== null)
                .map(movie => (
                  <MovieItem
                    key={movie.id}
                    id={movie.id}
                    posterPhoto={movie.poster_path}
                    title={movie.title}
                    voteAvg={movie.vote_average}
                    overview={movie.overview}
                    backgroundPhoto={movie.backdrop_path}
                  />
                ))
            : null}
        </Section>
      ) : null}
    </Container>
  );

MoviesPresenter.proptypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array
};

export default MoviesPresenter;
