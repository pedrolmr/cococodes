import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col container mx-auto max-w-xl px-10 md:px-0 pt-8 min-h-screen">
      <header className="flex-none">
        <Link href="/">
          <a>
            <h1 className="font-bold text-4xl text-gray-600">Cococodes</h1>
          </a>
        </Link>
      </header>

      <div className="flex-grow my-10 h-16">{children}</div>

      <footer className="flex-none text-center">
        <p className="text-gray-600">&copy; cococodes 2021</p>
      </footer>
    </div>
  );
}
