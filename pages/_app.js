import React from "react";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
