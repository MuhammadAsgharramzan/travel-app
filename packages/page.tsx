interface TravelPackage {
  name: string;
  price: string;
}

export default function Packages() {
  const packages: TravelPackage[] = [
    { name: "Dubai Luxury Trip", price: "$850" },
    { name: "Turkey Tour", price: "$650" },
    { name: "Bali Honeymoon", price: "$1200" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Travel Packages</h1>

      <div className="space-y-4">
        {packages.map((pkg, i) => (
          <div key={i} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{pkg.name}</h2>
            <p className="text-green-600 font-bold">{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
