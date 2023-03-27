import EntryTable from "./EntryTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEntry } from "../../store/entryActions";

//take in entries from state, run a filter to change return of entries and pass down to table
const EntryManager = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entriesArray);

  const sortEntries = (entries) => {
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
  };

  return (
    <>
      <EntryTable entries={sortEntries(entries)} />
    </>
  );
};

export default EntryManager;
