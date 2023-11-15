import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom500 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after a delay (e.g., 3 seconds)
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 1000);

    // Clear the timeout to avoid redirection if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div>
      <div class="grid h-screen px-4 bg-white place-content-center">
        <div class="text-center">
          <h1 class="font-black text-gray-200 text-9xl">500</h1>

          <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p class="mt-4 text-gray-500">We can't find that page.</p>
          <p class=" text-gray-500">Heading back home...</p>
        </div>
      </div>
    </div>
  );
};

export default Custom500;
