const initialState = {
  myNetflixList: [],
  recommendations: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        fetching: false,
        fetched: true,
        myNetflixList: action.payload.myNetflixList,
        recommendations: action.payload.recommendations,
      };
      break;
    case "ADD":
      return { ...state,
        recommendations: [...state.recommendations.filter(item => item !== action.payload)],
        myNetflixList: [...state.myNetflixList, action.payload]
      }
      break;

    case "REMOVE":
      return  { ...state,
        myNetflixList: [...state.myNetflixList.filter(item => item !== action.payload)],
        recommendations: [...state.recommendations, action.payload]
      }
      break;
    default:
      return state;
  }
}