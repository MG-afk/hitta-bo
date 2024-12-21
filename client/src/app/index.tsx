import { useEffect, useState } from 'react';

interface GreetingResponse {
  message: string;
}

export default function Home() {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/greeting');
        const data: GreetingResponse = await response.json();
        setGreeting(data.message);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

     fetchGreeting();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}
