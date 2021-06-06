import { HiMoon, HiSun } from "react-icons/hi";

const Switch = ({ DarkSwitch, theme }) => {
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <HiSun
          onClick={DarkSwitch}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={DarkSwitch}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};
export default Switch;
