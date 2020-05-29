import React, { useEffect, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import './App.css';

import { fetch, addRec, remove } from "./actions/userActions"
import List from './components/List'

const App = props => {
  const {
    myNetflixList,
    recommendations,
    addRec,
    remove
  } = props;

  useEffect(() => {
      props.fetch()
  },[fetch])

  return (

    <div className="container">
      <header> 
        <img src="https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=12" width="120px" class="navbar-brand" alt="logo" />
      </header>
      <h6>My List</h6>
      <div className="item-list">
      {
        myNetflixList.length ? (
          <List data = { myNetflixList } 
              handleClick={ remove } 
              eventText = {"Remove"} />
        ) : (
          <figure>Nothing here</figure>
        )
      }
      </div>
      <h6>Recommendations</h6>
      <div className="item-list">
      {
        recommendations.length ? (
          <List data = { recommendations } 
              handleClick={ addRec } 
              eventText = {"Add"} />
        ) : (
          <figure>Nothing here</figure>
        )
      }
      </div>
      <h6>Title Lists:</h6>
      <ul className="titleOnly">
        <List data = { myNetflixList } titleOnly = { true } />
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  myNetflixList: state.data.myNetflixList,
  recommendations: state.data.recommendations
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetch,
    addRec,
    remove
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
