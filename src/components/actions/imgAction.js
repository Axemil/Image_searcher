import { API_KEY, URL_ROOT, GET_IMAGES } from "../actions/types";
import axios from "axios";

export const getImage = searching => dispatch => {
  axios
    .get(`${URL_ROOT}key=${API_KEY}&q=${searching}&image_type=photo`)
    .then(res => res.data)
    .then(images =>
      dispatch({
        type: GET_IMAGES,
        payload: images
      })
    );
};
