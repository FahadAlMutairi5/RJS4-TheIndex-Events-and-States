import React, { Component } from "react";
import ListBooksAut from "./ListBooksAut";

class AuthorDetail extends Component {

    render() {
        let currentAuthor = this.props.detailAuthor;
        let Name = `${currentAuthor.first_name} ${currentAuthor.last_name}`;
        return (
            <div className="author col-xs-10">
              <div>
                  <h3>{Name}</h3>
                  <img src={currentAuthor.imageUrl} className="img-thumbnail" alt={Name}/>
              </div>
              <table className='mt-3 table'>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Authors</th>
                          <th>Color</th>
                      </tr>
                  </thead>
                        <ListBooksAut Books={currentAuthor.books} NameAu={Name}/>
              </table>
            </div>
        );
    }
}

export default AuthorDetail;