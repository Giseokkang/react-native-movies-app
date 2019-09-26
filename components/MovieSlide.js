import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constans/Layout";
import MoviePoster from "../components/MoviePoster";
import { TINT_COLOR } from "../constans/Color";
import MovieRating from "./MovieRating";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled(Image)`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  position: absolute;
  opacity: 0.3;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 30px;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

const VoteContainer = styled.View`
  margin: 10px 0px;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 8px;
  border-radius: 5px;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }}></BgImage>
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        <VoteContainer>
          <MovieRating vote={voteAvg} inSlide={true} />
        </VoteContainer>
        {overview ? (
          <Overview>
            {overview.length > 120
              ? `${overview.substring(0, 117)}...`
              : overview}
          </Overview>
        ) : null}
        <BtnContainer>
          <BtnText>View detail</BtnText>
        </BtnContainer>
      </Column>
    </Content>
  </Container>
);

MovieSlide.proptypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};

export default MovieSlide;
