import { useState, useEffect } from 'react';
import Hero from './index/Hero';
import Latest from './index/Latest';

export default function IndexPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/properties?populate=*')
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setProperties(data.data);
        }
      })
      .catch((err) => console.error('Error fetching properties:', err));
  }, []);

  return (
    <div>
      <Hero />
      <Latest properties={properties} />
    </div>
  );
}