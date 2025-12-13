import { useEffect } from "react";

const JivoChat = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector('script[src*="jivosite.com"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/JNHIXsYsZL";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount if needed
      const existingScript = document.querySelector('script[src*="jivosite.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default JivoChat;
