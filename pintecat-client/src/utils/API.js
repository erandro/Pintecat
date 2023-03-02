import axios from "axios";

const API = {
  getPic: function () {
    return axios.get("http://localhost:8080/thecatapi.com/api/images/get?format=xml&results_per_page=25");
  },
  getText: function () {
    return axios.get("http://localhost:8080/catfact.ninja/facts?limit=25");
  }
};

export default API;
