import axios from "axios"
import data from '../data'

export const fetch = () =>
  dispatch => {
    dispatch({
      type: "FETCH",
      payload: data
    })
  }

export const addRec = item => {
  return {
    type: 'ADD',
    payload: item,
  }
}

export const remove = item => {
  return {
    type: 'REMOVE',
    payload: item
  }
}