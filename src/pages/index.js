import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/cars");

    const data = await response.json();
    setState(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {state.map((user) => {
        return (
          <div className="">
            <div className="flex ml-20 gap-8">
              <div>{user.id}</div>
              <div>{user.Car}</div>
              <div>{user.ModelYear}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
