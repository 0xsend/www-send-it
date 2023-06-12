function SendApp() {
  const phases = [
    // {
    //   name: "Zero X",
    //   codeName: "",
    //   details: [
    //     "Contributions from supporters who want cash app for ETH",
    //     "Ideation to Creation",
    //   ],
    // },
    // {
    //   name: "FUSE",
    //   codeName: "(fuck u send eth)",
    //   details: [
    //     "Marketing campaign to inform and educate users there is a better way to transfer value between peers",
    //     "Eth support in app (perhaps send also but not necessary)",
    //   ],
    // },
    // {
    //   name: "FFFS",
    //   codeName: "(Fuck Fiat Full Send)",
    //   details: ["App public beta - $eth, $stablecoin, $send support"],
    // },
    // {
    //   name: "FOMO",
    //   codeName: "(Freedom Open Money Organization)",
    //   details: [
    //     "Open source all code under biz license",
    //     "Fiat integration partner",
    //     "App use case expansion",
    //   ],
    // },
  ];

  return (
    <div className="w-full md:max-w-lg bg-black bg-opacity-50 justify-center px-6 md:px-0">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center font-serif mb-24">
        🪙 Send Token
      </h2>

      <h3 className="text-xl sm:text-2xl mb-6 font-semibold font-serif">
        Soon
      </h3>

      {/* {phases.map((phase, index) => (
        <div className="mb-24" key={index}>
          <h3 className="text-xl sm:text-2xl mb-6 font-semibold font-serif">
            Operation Phase: <span className="text-primary">{phase.name}</span>
            {phase.codeName && (
              <span className="text-sm font-thin">
                <br />
                codename: <span className="font-mono">{phase.codeName}</span>
              </span>
            )}
          </h3>
          <ul className="list-disc list-inside">
            {phase.details.map((detail, index) => (
              <li className="mb-4" key={index}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
}

export default SendApp;
