import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { withNavigation } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native";

const Container = styled.View`
  margin-right: 10px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 12px;
  margin-vertical: 5px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  navigation,
  isMovie = true,
  overview
}) => {
  return posterPhoto ? (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate({
          routeName: "Detail",
          params: {
            isMovie,
            id,
            title,
            posterPhoto,
            voteAvg,
            backgroundPhoto,
            overview
          }
        })
      }
    >
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 13 ? `${title.substring(0, 10)}...` : title}
        </Title>
        <MovieRating vote={voteAvg} />
      </Container>
    </TouchableWithoutFeedback>
  ) : null;
};

MovieItem.propTypes = {
  id: PropTypes.number,
  posterPhoto: PropTypes.string,
  backgroundPhoto: PropTypes.string,
  title: PropTypes.string,
  voteAvg: PropTypes.number,
  overview: PropTypes.string
};

export default withNavigation(MovieItem);
