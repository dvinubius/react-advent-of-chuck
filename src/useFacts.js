import { useState, useEffect } from "react";
import axios from "axios";
import { totalNumberOfBoxes } from "./ChuckNorrisGallery.config";

const useFacts = () => {
  const [facts, setFacts] = useState([]);
  const url = () => "http://api.icndb.com/jokes/random/" + totalNumberOfBoxes;

  useEffect(() => {
    axios
      .get(url())
      .then((res) => setFacts(res.data.value.map((el) => el.joke)));
  }, []);

  return { facts };
};

export default useFacts;
