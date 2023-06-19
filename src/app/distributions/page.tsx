export default function Distributions() {
  return (
    <main className="dark">
      <div className="flex flex-col sm:flex-row min-h-screen items-center justify-between sm:justify-between w-full relative">
        <div className="p-6 transform translate-y-1/2 top-1/2 sm:transform-none sm:w-1/2 h-full flex-col flex items-center justify-center relative z-10">
          <div className="h-full flex flex-col gap-6 max-w-md">
            <h1 className="text-3xl font-bold">SEND Token Distribution #1</h1>

            <p>
              There will only be 100,000,000,000 SEND issued, 20 billion of
              which will be paid to Send Token holders
            </p>

            <div className="form-control">
              <label className="label sr-only">Your wallet address:</label>
              <input
                type="text"
                placeholder="Your wallet address"
                className="input input-primary input-bordered cursor-not-allowed"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="sm:absolute w-full sm:w-1/2 sm:h-full h-96 right-0 sm:bg-gradient-to-l bg-gradient-to-t from-primary opacity-75"></div>
      </div>
    </main>
  );
}
