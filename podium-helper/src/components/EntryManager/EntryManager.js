import EntryTable from "./EntryTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchEntry } from "../../store/entryActions";
import Series from "../Podium_Results/Series";
import "../../Styling/entryManager.scss";

//take in entries from state, run a filter to change return of entries and pass down to table
const EntryManager = () => {
  const data = useSelector((state) => state.entry.entriesArray);
  const [entries, setEntries] = useState(data);
  const [series, setSeries] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setEntries(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const sortEntries = (entries) => {
    if (!series) {
      const entryObj = {};
      const entryArr = [];
      entries.forEach((entry) => {
        const series = entry.series;
        entryObj[series]
          ? entryObj[series].push(entry)
          : (entryObj[series] = [entry]);
      });

      for (const series in entryObj) {
        const sorted = entryObj[series].sort((a, b) => a.number - b.number);
        if (series !== "GT World Challenge America") entryArr.push(...sorted);
      }
      return entryObj["GT World Challenge America"]
        ? [...entryObj["GT World Challenge America"], ...entryArr]
        : entryArr;
    } else {
      const filtered = entries.filter((entry) => entry.series === series);
      return filtered.sort((a, b) => a.number - b.number);
    }
  };

  return (
    <section id="entry_manager">
      <div className="entryManager_filter_container">
        <Series getValue={(name, val) => setSeries(val.name)} />
      </div>
      <EntryTable entries={sortEntries(entries)} />
    </section>
  );
};

export default EntryManager;