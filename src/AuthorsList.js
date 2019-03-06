import React, { Component } from "react";

// Components SearchBar
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {

  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} selectAuthor={this.props.selectAuthor}/>
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar filterAuthors={this.props.filterAuthors}/>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
