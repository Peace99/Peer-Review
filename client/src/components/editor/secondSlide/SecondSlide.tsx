import styles from "./secondSlide.module.scss";

export function SecondSlide() {
  return (
    <div className={styles.secondSlide}>
      <table>
        <tr>
          <th>S/N</th>
          <th>Manuscripts</th>
          <th>Authors</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Manuscript by Eirene</td>
          <td>Dewale the boy</td>
          <td>reviewed</td>
          <td>Suspended</td>
        </tr>
      </table>
    </div>
  );
}
