import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import makePhotoUrl from "../utils/makePhotoUrl";

const Container = styled.View`
  margin-right: 10px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 12px;
  margin-vertical: 5px;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) =>
  posterPhoto ? (
    <Container>
      <MoviePoster path={posterPhoto} />
      <Title>
        {title.length > 13 ? `${title.substring(0, 10)}...` : title}
      </Title>
      <MovieRating vote={voteAvg} />
    </Container>
  ) : null;

MovieItem.propTypes = {
  id: PropTypes.number,
  posterPhoto: PropTypes.string,
  title: PropTypes.string,
  voteAvg: PropTypes.number
};

export default MovieItem;
