import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constans/Layout";
import MovieSlide from "./MovieSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const MovieSlider = ({ movies }) =>
  movies ? (
    <Swiper
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoplayTimeout={3}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              id={movie.id}
              posterPhoto={movie.poster_path}
              backgroundPhoto={movie.backdrop_path}
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
            ></MovieSlide>
          </View>
        ))}
    </Swiper>
  ) : null;

MovieSlider.proptypes = {
  movies: PropTypes.array
};

export default MovieSlider;
