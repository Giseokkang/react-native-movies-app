import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BG_COLOR } from "../../constans/Color";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const Text = styled.Text``;

const DetailPresenter = ({
  id,
  title,
  isMovie,
  posterPhoto,
  voteAvg,
  backgroundPhoto
}) => (
  <Container>
    <Text>asdf</Text>
  </Container>
);

DetailPresenter.proptypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.number,
  isMovie: PropTypes.bool.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  backgroundPhoto: PropTypes.string
};

export default DetailPresenter;
