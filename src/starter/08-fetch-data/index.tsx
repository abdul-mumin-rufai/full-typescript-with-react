import { useState, useEffect } from 'react';
const url = 'https://www.course-api.com/react-tours-project';

function Component() {
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
        const rawData = response.json();
        console.log(rawData);
        
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'there was an error';
        setIsError(errorMessage);
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
    return <h2>Error...</h2>
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
    </div>
  );
}
export default Component;
