import { useEffect, useState } from 'react';

export default function useGetData (get, props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [props]);

  const getData = async () => {
    setIsLoading(true);
    const result = await get;
    setData(result);
    setIsLoading(false);
  };
  return [data, isLoading];
}
