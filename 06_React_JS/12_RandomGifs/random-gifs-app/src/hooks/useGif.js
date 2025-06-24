import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "YcPd9qBkka2eGLGYbOD0ByZRIEgMiZQH";
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (searched) => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(true);

  const searchedUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searched}`;
  
  async function fetchData() {
    setLoader(true);
    const { data } = await axios.get(searched ? searchedUrl : randomUrl);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loader, fetchData };
};

export default useGif;
