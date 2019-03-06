import React, { Component } from "react";
import AuthorBookDetail from "./AuthorBookDetail";

class ListBooksAut extends Component {
    render() {
    	const Books = this.props.Books.map(Book => (
        <AuthorBookDetail key={Book.title} Book={Book} NameAu={this.props.NameAu}/>
    ));
        return (
        	<tbody>
        	{Books}
        	</tbody>
        );
    }



}

export default ListBooksAut;