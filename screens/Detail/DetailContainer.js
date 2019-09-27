import React, { useState } from "react";
import { Text } from "react-native";
import Loader from "../../components/Loader";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { id, title, isMovie, posterPhoto, voteAvg, backgroundPhoto }
        }
      }
    } = props;
    this.state = {
      id,
      title,
      isMovie,
      posterPhoto,
      voteAvg,
      backgroundPhoto
    };
  }

  render() {
    const {
      id,
      title,
      isMovie,
      posterPhoto,
      voteAvg,
      backgroundPhoto
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        title={title}
        isMovie={isMovie}
        posterPhoto={posterPhoto}
        voteAvg={voteAvg}
        backgroundPhoto={backgroundPhoto}
      ></DetailPresenter>
    );
  }
}
