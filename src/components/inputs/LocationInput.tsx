const LocationInput = ({
  location,
  locations,
  setLocation,
}: {
  location: string;
  locations: string[];
  setLocation: (value: string) => void;
}) => {
  return (
    <div>
      <label
        htmlFor="division-select"
        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Select a Location:
      </label>

      <div className="relative">
        <select
          id="division-select"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full px-4 py-2 pr-8 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none"
        >
          <option value="">Select...</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>

      <div className="mb-2 mt-3">
        <label
          htmlFor="custom-location"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Or Enter a Location:
        </label>

        <input
          id="custom-location"
          type="text"
          value={location}
          placeholder="Type a location"
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default LocationInput;
