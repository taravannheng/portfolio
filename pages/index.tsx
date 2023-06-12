import { useState, useEffect } from "react";

import Loader from "../components/loader/loader";
import Home from "../components/home/home";
import { getLocalData } from '../lib/localdata'

export async function getStaticProps() {
  const localData = await getLocalData()

  return {
    props: { localData }
  }
}


const HomePage = ({ localData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    sessionStorage.clear();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Home localData={localData} />
      )}
    </>
  );
};

export default HomePage;
