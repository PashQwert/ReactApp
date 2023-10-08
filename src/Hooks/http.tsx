import { useState, useEffect } from 'react';

export const useHttp = (url:URL, dependencies:React.DependencyList | undefined, signal:AbortSignal) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log('Sending Http request to URL: ' + url);

    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      
      setIsLoading(false);
      setFetchedData(json);
    }

    fetchData()
      .catch(err => {
        console.log(err);
        setIsLoading(false);
    });

    /*
    fetch(url, {signal})
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
    */
  }, dependencies);

  return [isLoading, fetchedData];
};