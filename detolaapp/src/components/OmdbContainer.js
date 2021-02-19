import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";


class OmdbContainer extends Component {
    state = {
      result: {},
      search: ""
    };

    componentDidMount() {
        this.searchMovies("The Matrix");
      }