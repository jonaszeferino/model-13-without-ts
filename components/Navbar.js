import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>| Home</a>
        </Link>
      </li>
    </ul>
  );
}
