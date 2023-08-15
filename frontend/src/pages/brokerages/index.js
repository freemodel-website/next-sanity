import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after a short delay
    setTimeout(() => {
      router.push("/");
    }, 100); // Delay in milliseconds (2 seconds in this example)

    // Alternatively, you can use the following for an immediate redirect:
    // router.push('/');
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
