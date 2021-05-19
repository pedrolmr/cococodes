import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="border-2 color-red-400">
      <header>
        <Link href="/">
          <a>
            <h1>Cococodes</h1>
          </a>
        </Link>
      </header>

      <div>{children}</div>

      <footer>
        <p>&copy; cococodes 2021</p>
      </footer>
    </div>
  );
}
