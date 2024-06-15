import {
  FILTER_BY_STATUS,
  FILTER_BY_TYPE,
  SEARCH_SERVICES,
  GET_SERVICES_INIT,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE,
} from "./types";
import mockData from "../../assets/data/data.json"; // Assuming you import your mock data

export const getServicesInit = () => ({
  type: GET_SERVICES_INIT,
});

export const getServicesSuccess = (services) => ({
  type: GET_SERVICES_SUCCESS,
  payload: services,
});

export const getServicesError = (error) => ({
  type: GET_SERVICES_FAILURE,
  payload: error,
});

export const searchServices = (query) => ({
  type: SEARCH_SERVICES,
  payload: query,
});

export const filterByType = (type) => ({
  type: FILTER_BY_TYPE,
  payload: type,
});

export const filterByStatus = (status) => ({
  type: FILTER_BY_STATUS,
  payload: status,
});

export const getServices = () => (dispatch) => {
  dispatch(getServicesInit());

  // Adding timeout to show loader to mimic data loading
  setTimeout(() => {
    dispatch(getServicesSuccess(mockData));
  }, 2000);
};
