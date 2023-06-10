import { useState, useEffect } from "react";

import Loader from "../components/loader/loader";
import Home from "../components/home/home";


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Home />
      )}
    </>
  );
};

export default HomePage;
