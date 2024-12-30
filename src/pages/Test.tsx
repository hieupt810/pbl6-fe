export default function Test() {
  return (
    <main>
      <div>
        <label htmlFor="url" className="block text-sm/6 font-medium">
          Image URL
        </label>

        <div className="mt-2 rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            type="text"
            id="url"
            name="url"
            placeholder="http://example.com"
            className="block px-3 py-1.5 text-base placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
          />
        </div>
      </div>
    </main>
  );
}
