import styles from "./paper.search.input.module.scss";
import { useState } from "react";

export function PaperSearchInput() {
  const handleSubmit = (event: any) => event.preventDefault();
  const [searchText, setSearchText] = useState<string>(null);
  return (
    <form onSubmit={handleSubmit} className={styles.paperSearchInput}>
      <input onChange={event => setSearchText(event.target.value)} />
      {/* <SearchIcon /> */}
    </form>
  );
}
