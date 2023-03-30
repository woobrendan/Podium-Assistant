import axios from "axios";
import { useEffect } from "react";

const Classification = () => {
  useEffect(() => {
    const getClasses = async () => {
      const series = await axios.get("http://localhost:2020/api/series");
    };
  }, []);

  const getSeriesClasses = (series) => {
    //get GTWCA and GTA to the top, and pgt4 and tc to the bottom
    const seriesList = series.sort((a, b) => a.name - b.name);

    //loop through each series and push all classes togeher, then filter out duplicates
    const classList = [];
    for (const series of seriesList) {
      classList.push(...series.class);
    }
    return classList.filter(
      (className, index) => classList.indexOf(className) === index,
    );
  };

  return <></>;
};

export default Classficiation;
