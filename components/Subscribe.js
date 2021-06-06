import React, { useRef, useState } from "react";

const Subscribe = () => {
  const email = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }
    email.current.value = "";
    setMessage(
      "Thank you for subscribing! You will need to check your inbox and confirm your subscription."
    );
  };

  return (
    <div>
      {message ? (
        <div className="text-sm font-bold border-2 border-green-200 rounded my-2 bg-green-300 text-white p-2">
          {message}
        </div>
      ) : (
        ""
      )}

      <div className="border-2 border-gray-100 rounded p-3 dark:border-gray-700">
        <span className="font-bold text-lg">Subscribe to the Newsletter</span>
        <p className="my-2">
          Get emails about web development and early access to new articles.
        </p>
        <form onSubmit={subscribe}>
          <div className="flex border-2 border-gray-100 justify-between rounded dark:bg-white">
            <input
              className="focus:outline-none w-full pl-2"
              id="email-input"
              name="email"
              placeholder="email@mail.com"
              ref={email}
              required
              type="email"
            />
            <button
              className="border-1 p-1 rounded bg-gray-200 rounded p-1 px-3 focus:outline-none hover:bg-gray-300 transition delay-100 ease-in dark:bg-gray-600"
              type="submit"
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            I won't send you spam. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
