import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BG_COLOR, TINT_COLOR, GREY_COLOR } from "../../constans/Color";
import Layout from "../../constans/Layout";
import makePhotoUrl from "../../utils/makePhotoUrl";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Header = styled.View`
  position: relative;
  width: ${Layout.width};

  height: ${Layout.height / 1.5};
`;

const BgImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
  top: 0;
`;

const PosterContiner = styled.View`
  width: ${Layout.width};
  height: ${Layout.height / 1.5};
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const Poster = styled(Image)`
  width: 70%;
  height: 80%;
`;

const ContentContainer = styled.View`
  flex-direction: column;
  align-items: center;
  padding-horizontal: 30;
`;

const Rating = styled.Text`
  color: ${TINT_COLOR};
  font-size: 17px;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 14px;
  padding-vertical: 30;
`;

const DetailPresenter = ({
  id,
  title,
  isMovie,
  posterPhoto,
  voteAvg,
  backgroundPhoto,
  overview
}) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
      <LinearGradient
        colors={["transparent", "black"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Layout.height / 1.5
        }}
      ></LinearGradient>
      <PosterContiner>
        <Poster source={{ uri: makePhotoUrl(posterPhoto) }}></Poster>
      </PosterContiner>
    </Header>
    <ContentContainer>
      <Rating>⭐️ {voteAvg} / 10</Rating>
      <Overview> {overview}</Overview>
    </ContentContainer>
  </Container>
);

DetailPresenter.proptypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.number,
  isMovie: PropTypes.bool.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  backgroundPhoto: PropTypes.string,
  overview: PropTypes.string
};

export default DetailPresenter;
