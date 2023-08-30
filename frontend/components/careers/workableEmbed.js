// components/WorkableEmbed.js
import React, { useEffect } from "react";

const WorkableEmbed = () => {
  useEffect(() => {
    // Define the callback function for when the Workable script is loaded
    window.whr_loaded = function () {
      whr(document).ready(function () {
        // Get the height of the embedded content
        const contentHeight = document.getElementById("whr_embed");

        // Send the content height to the parent window
        window.parent.postMessage({ contentHeight }, "*");

        whr_embed(535717, {
          detail: "titles",
          base: "jobs",
          zoom: "city",
          grouping: "departments",
        });
      });
    };

    // Load the Workable script
    const script = document.createElement("script");
    script.src = "https://www.workable.com/assets/embed.js";
    script.type = "text/javascript";
    script.onload = window.whr_loaded; // Call the callback when the script is loaded
    document.getElementById("whr_embed_hook").appendChild(script);
  }, []);

  return (
    <div id="whr_embed_hook" className="text-lg leading-relaxed m-10">
      <style jsx global>{`
        .whr-group {
          font-size: 2.5rem;
        }

        .whr-title:hover {
          color: #ea4325;
          text-decoration: underline;
        }

        .whr-item {
          margin-bottom: 30px;
        }

        .whr-date {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default WorkableEmbed;
