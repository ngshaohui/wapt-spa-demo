import { Menu, MenuItem } from '@blueprintjs/core';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  function getStatistics() {
    fetch('/api/v1/statistics');
  }
  function makePost() {
    fetch('/api/v2/post');
  }
  return (
    <Menu className={styles.sidebar}>
      <MenuItem onClick={makePost} icon="new-text-box" text="New post" />
      <MenuItem onClick={getStatistics} icon="refresh" text="Get statistics" />
    </Menu>
  );
}
