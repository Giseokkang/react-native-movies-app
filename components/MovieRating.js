import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GREY_COLOR, TINT_COLOR } from "../constans/Color";

const Vote = styled.Text`
  color: ${props => (props.inSlide ? `${TINT_COLOR}` : `${GREY_COLOR}`)};
  font-size: ${props => (props.inSlide ? "10px" : "9px")};
  font-weight: 600;
`;

const MovieRating = ({ vote, inSlide = false }) => (
  <Vote inSlide={inSlide}>{`⭐️ ${vote} / 10`}</Vote>
);

MovieRating.propTypes = {
  vote: PropTypes.number.isRequired,
  inSlide: PropTypes.bool
};

export default MovieRating;
