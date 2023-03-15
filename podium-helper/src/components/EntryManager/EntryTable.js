import { useEffect } from "react";
import { fetchEntry } from "../../store/entryActions";

const EntryTable = () => {
  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entriesArray);
  return;
};

export default EntryTable;
