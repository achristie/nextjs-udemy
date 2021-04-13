import styles from "../styles/Home.module.css";
import Todo from "../components/Todo";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Title</h2>
        <button>Delete</button>
        <Todo />

        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

