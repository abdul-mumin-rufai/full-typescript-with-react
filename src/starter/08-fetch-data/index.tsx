/* import { useState, useEffect } from 'react';
import { apiDataSchema, type ApiData } from './types';


function Component() {
  const [apiData, setApiData] = useState<ApiData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`failed to fetach data...`);
        }
        const rawData:ApiData[] = await response.json();
        const results = apiDataSchema.array().safeParse(rawData);
        if (!results.success) {

          console.log(results.error.message);
          throw new Error('Failed to parse api data');
        };
        setApiData(results.data); // passing the data to the setApaData variable in the useState
        
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'there was an error';
        setIsError(errorMessage); // setting the error value to the setIsError variable in the useState
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (
    isLoading) {
    return <h2>Loading...</h2>
  };
  if (isError) {
    return <h2>Error: {isError}</h2>
  }
  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <h2 className='mb-1'>Fetch Data</h2>
      {apiData.map((data) => {
        return (
          <p key={data.id} className='mb-2'>{data.name }</p>
        )
      })}
    </div>
  );
}
export default Component;
 */


import { fetchData } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() { 
  const { isPending, isError, error, data: Tours } = useQuery({ queryKey: ['tour'], queryFn: fetchData })
  if (isPending) return <h4>Loading...</h4>
  if (isError) return <h3>Error: {error.message}</h3>
  
  return (
    <div>
      <h1 className="text-center">Tours List</h1>
      {Tours.map((tour) => {
        return (
          <h2 className="mb-1" key={tour.id}>{tour.name} </h2>
        )
      })}
    </div>
  );
};

export default Component;