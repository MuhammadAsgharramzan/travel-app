interface Destination {
  name: string;
  country: string;
}

export default async function Destinations() {
  const res = await fetch("http://localhost:3000/api/destinations", {
    cache: "no-store",
  });

  const data: Destination[] = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Popular Destinations</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-xl">{item.name}</h2>
            <p>{item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
