import React, { Component } from "react";


class AuthorBookDetail extends Component {
    render() {
    	const Book = this.props.Book;
    	const NameAu = this.props.NameAu;
        return (
            <tr>
              <td>{Book.title}</td>
              	<td>{NameAu}</td>
              <td>
                <button className="btn" style={{backgroundColor: Book.color }}/>
              </td>
            </tr>
        );
    }
}

export default AuthorBookDetail;