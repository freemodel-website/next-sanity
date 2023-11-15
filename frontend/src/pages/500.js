import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Custom500() {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the homepage after a delay (e.g., 3 seconds)
    const redirectTimeout = setTimeout(() => {
      history.push("/");
    }, 3000);

    // Clear the timeout to avoid redirection if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [history]);

  return (
    <div>
      <h1>500 - Server-side error occurred</h1>
      <p>Redirecting to the homepage...</p>
    </div>
  );
}
