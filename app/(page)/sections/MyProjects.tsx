const MyProjects = () => {
  return (
    <div className="w-full h-screen text-white flex flex-col items-center justify-start">
      <span className="font-bold text-4xl">My Projects</span>
      <div className="flex items-center justify-center flex-col w-full mt-8 px-48">
        <div className="flex w-full min-h-64 p-12 rounded-lg bg-primary-light/60">
          <div
            className="bg-cover h-44 rounded-md w-2/5 bg-center"
            style={{ backgroundImage: "url('./images/prestika.png')" }}
          ></div>
          <div className="w-2/3 pl-12">
            <div>
              <span className="font-medium text-[32px]">Test</span>
              <p className="text text-2xl font-normal">
                A custom made website for my neighbour’s business connected to
                Sanity.io CMS for easy content managment.
              </p>
            </div>
            <div className="flex items-center justify-start w-full py-6">
              <div className="p-2 px-4 text-bagde-text bg-badge-bg/10 rounded-full">
                React
              </div>
              <div className="p-2 px-4 text-bagde-text bg-badge-bg/10 rounded-full">
                Sanity.io
              </div>
              <div className="p-2 px-4 text-bagde-text bg-badge-bg/10 rounded-full">
                Tailwindcss
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
