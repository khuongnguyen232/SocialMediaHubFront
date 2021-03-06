import React from 'react';
import {connect} from 'react-redux';
import {getSearchTerm} from '../../actions';

class SearchBar extends React.Component {
  state = {searchKey:null};

  //getSearchTerm will change the state for Redux state searchKey
  onSubmitChange = (event) => {
    event.preventDefault();
    this.props.getSearchTerm(this.state.searchKey);
    this.props.onTermSubmit(this.state.searchKey);
  };

  onInputChange = (event) => {
      this.setState({searchKey:event.target.value})
  };

  //a search bar that allow user to enter their input
  render() {
    return(
      <div className = "ui segment">
        <form className = "fluid ui icon input" onSubmit ={this.onSubmitChange}>
          <div className="ui label">
            <i className="fab fa-youtube fa-2x">Youtube</i>
          </div>
            <input type = "text" onChange = {this.onInputChange} placeholder="Enter a keyword to search for a video"/>
            <i className="search icon"></i>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {searchTerm:state.searchTerm}
}

export default connect(mapStateToProps,{getSearchTerm})(SearchBar);
