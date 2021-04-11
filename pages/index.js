import styles from "../styles/Home.module.css";
import Todo from "../components/Todo";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Title</h2>
        <button>Delete</button>
        <Todo />
      </div>
    </div>
  );
}

