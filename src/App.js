import React from 'react';
import { connect } from "react-redux";

import { getQuote } from './actions/index';

import Loader from 'react-loader-spinner';
import './App.css';

function App(props) {
  console.log('Props on App: ', props)
  return (
    <div className="App">
      <h1>Kanyes Kuotes</h1>
      <p>You're daily dose of Kanye inspiration</p>
      <button onClick={props.getQuote}>Klick for Kuotes</button>
      {!props.quote && !props.isFetching && (<p>Kanye Goes Here</p>)}
      {props.isFetching && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          />
      )}
      {props.quote && (<p>"{props.quote}" -Kanye West</p>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getQuote })(App);
