import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BG_COLOR, TINT_COLOR, GREY_COLOR } from "../../constans/Color";
import Layout from "../../constans/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  color: black;
  width: ${Layout.width / 1.5};
  background-color: ${TINT_COLOR};
  border-radius: 15px;
  padding: 5px 10px;
  text-align: center;
`;

const ScrollView = styled.ScrollView``;

const Text = styled.Text`
  color: red;
  font-size: 15px;
  margin-top: 20;
  margin-left: 20;
`;

const SearchPresenter = ({
  isLoading,
  searchTerm,
  movieReults,
  TVResults,
  handleSearchUpdate,
  handleSubmit
}) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={text => handleSearchUpdate(text)}
        autoFocus
        value={searchTerm}
        returnKeyType={"go"}
        onSubmitEditing={handleSubmit}
        placeholder="Search movies and tv"
        placeholderTextColor={GREY_COLOR}
      ></Input>
    </InputContainer>
    <ScrollView>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {movieReults ? (
            <Section title="Movie Results">
              {movieReults && movieReults.length > 0 ? (
                movieReults
                  .filter(movie => movie.poster_path !== null)
                  .map(movie => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      posterPhoto={movie.poster_path}
                      title={movie.title}
                      voteAvg={movie.vote_average}
                    />
                  ))
              ) : (
                <Text>Couldn't find anything</Text>
              )}
            </Section>
          ) : null}
          {TVResults ? (
            <Section title="TV show Results">
              {TVResults && TVResults.length > 0 ? (
                TVResults.filter(tv => tv.poster_path !== null).map(tv => (
                  <MovieItem
                    key={tv.id}
                    id={tv.id}
                    posterPhoto={tv.poster_path}
                    title={tv.name}
                    voteAvg={tv.vote_average}
                    isMovie={false}
                  />
                ))
              ) : (
                <Text>Couldn't find anything</Text>
              )}
            </Section>
          ) : null}
        </>
      )}
    </ScrollView>
  </Container>
);

SearchPresenter.proptypes = {
  isLoading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  movieReults: PropTypes.array,
  TVResults: PropTypes.array,
  handleSearchUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
