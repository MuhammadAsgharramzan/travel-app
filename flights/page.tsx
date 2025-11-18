import SkyscannerWidget from "@/app/components/SkyscannerWidget";

export default function FlightsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Find Flights ✈️</h1>
      <p className="text-lg mb-6 text-gray-700">
        Use the Skyscanner flight search widget below to find the best prices.
      </p>

      <div className="bg-white shadow rounded p-6">
        <SkyscannerWidget />
      </div>
    </div>
  );
}
