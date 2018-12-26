import axios from "axios";

export default {
  getPic: function () {
    return axios.get("http://thecatapi.com/api/images/get?format=xml&results_per_page=25");
  },
  getText: function () {
    return axios.get("https://catfact.ninja/facts?limit=25");
  }
};
