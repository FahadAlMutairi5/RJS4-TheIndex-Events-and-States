import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
    state = {
        currentAuthor: null,
        filter: null,
    };
    filterAuthors = query => { 
      let filterL = [];
      authors.filter(author => {
        if(author.first_name.includes(query)){
          filterL.push(author);
        }
        return true;
      })
      this.setState({filter:filterL})
    };

    selectAuthor = author => {
      this.setState({ currentAuthor: author , filter:null})
    };

    render() {
        return (
            <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar golist={this.selectAuthor}/>
          </div>
          <div className="content col-10">
            {
              this.state.filter ? <AuthorsList authors={this.state.filter} selectAuthor={this.selectAuthor} filterAuthors={this.filterAuthors}/> : 
              this.state.currentAuthor  ? <AuthorDetail detailAuthor={this.state.currentAuthor}/> : <AuthorsList authors={authors} selectAuthor={this.selectAuthor} filterAuthors={this.filterAuthors}/>
            }
            
          </div>
        </div>
      </div>
        );
    }
}

export default App;