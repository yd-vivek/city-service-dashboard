import {
  FILTER_BY_STATUS,
  FILTER_BY_TYPE,
  GET_SERVICES_FAILURE,
  GET_SERVICES_INIT,
  GET_SERVICES_SUCCESS,
  SEARCH_SERVICES,
} from "../actions/types";

const initialState = {
  services: [],
  data: [],
  loading: false,
  error: null,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        data: action.payload,
        error: null,
        loading: false,
      };
    case GET_SERVICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_SERVICES: {
      const query = action.payload.toLowerCase().trim();
      const searchResults = state.services.filter((service) =>
        service.name.toLowerCase().includes(query)
      );
      return {
        ...state,
        data: searchResults,
      };
    }
    case FILTER_BY_TYPE: {
      const type = action.payload.toLowerCase().trim();
      const typeResults =
        type === "all"
          ? [...state.services]
          : state.services.filter(
              (service) => service.type.toLowerCase() === type
            );
      return {
        ...state,
        data: typeResults,
      };
    }
    case FILTER_BY_STATUS: {
      const status = action.payload.toLowerCase().trim();
      const statusResults =
        status === "all"
          ? [...state.services]
          : state.services.filter(
              (service) => service.status.toLowerCase() === status
            );
      return {
        ...state,
        data: statusResults,
      };
    }
    default:
      return state;
  }
};

export default serviceReducer;
