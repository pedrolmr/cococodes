import { useState } from "react";
import Link from "next/link";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("");

  const setDarkTheme = () => {
    console.log("TRIGGERED");
    setTheme((prev) => {
      return !prev ? "dark" : "";
    });
  };

  return (
    <div className={`${theme}`}>
      <div>
        <button onClick={setDarkTheme}>DARK</button>
      </div>

      <div class="container max-w-full border-2 border-gray-700 dark:bg-gray-800 transition ease-in dark:text-white">
        {/* <div className="flex flex-col mx-auto max-w-xl px-10 md:px-0 pt-8 min-h-screen transition ease-in dark:bg-gray-800"> */}
        <div className="flex flex-col mx-auto max-w-xl px-10 md:px-0 pt-8 min-h-screen">
          <header className="flex-none">
            <Link href="/">
              <a>
                <h1 className="font-bold text-4xl text-gray-600 dark:text-white">
                  Cococodes
                </h1>
              </a>
            </Link>
          </header>

          <div className="flex-grow my-10">{children}</div>

          <footer className="flex-none text-center">
            <p className="text-gray-600">&copy; cococodes 2021</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
