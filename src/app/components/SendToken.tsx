import type { SendTokenAmounts } from "@/lib/getTokenAmounts";

function getMonthName(month: number) {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    default:
      return "Dec";
  }
}

function getDistributionSchedule(start: Date, totalDistributions: number) {
  const schedule = [];

  for (let i = 0; i < totalDistributions; i++) {
    const open = new Date(start.getTime());
    open.setMonth(start.getMonth() + i * 2);

    const close = new Date(open.getTime());
    close.setMonth(open.getMonth() + 1);
    close.setDate(0); // last day of the month

    const distribution = new Date(open.getTime());
    distribution.setMonth(open.getMonth() + 1);
    distribution.setDate(1); // first week of the next month

    schedule.push({
      number: `#${i + 1}`,
      open: getMonthName(open.getMonth()) + " " + open.getDate(),
      close: getMonthName(close.getMonth()) + " " + close.getDate(),
      distribution: "First week of " + getMonthName(distribution.getMonth()),
    });
  }

  return schedule;
}

function SendToken({ total, circulating }: SendTokenAmounts) {
  const allotment = [
    { category: "Team", percentage: "10%", amount: "10b" },
    { category: "Contributors", percentage: "10%", amount: "10b" },
    { category: "Distributions", percentage: "20%", amount: "20b" },
    { category: "Multisig Signers", percentage: ".14%", amount: "140m" },
    { category: "Treasury", percentage: "19.86%", amount: "19.86b" },
    { category: "Dex n Cex Listings", percentage: "30%", amount: "30b" },
    {
      category: "Community Contributor Incentives",
      percentage: "10%",
      amount: "10b",
    },
  ];

  const distributionSchedule = getDistributionSchedule(
    new Date(2023, 6, 1),
    10
  ); // starting from July 1, 2023

  if (!total) {
    total = 100e9;
  }

  return (
    <div className="w-full md:max-w-2xl bg-black bg-opacity-50 justify-center px-6 md:px-0">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center font-serif mb-24">
        🪙 Send Token
      </h2>
      <h3 className="text-xl sm:text-2xl mb-6 font-semibold">Details</h3>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Contract Address:</strong>{" "}
          <a
            href="https://go.send.it/etherscan"
            title="Send Token Etherscan"
            className="relative group"
          >
            <span className="font-mono inline-block align-bottom max-w-xs sm:max-w-none text-ellipsis overflow-hidden relative">
              0x3f14920c99BEB920Afa163031c4e47a3e03B3e4A
            </span>
            <div className="absolute -top-4 -right-4 bg-black opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <strong>Total:</strong> {total.toLocaleString()}
        </li>
        {circulating && (
          <li>
            <strong>Circulating:</strong> {circulating.toLocaleString()}
          </li>
        )}
        <li>
          <strong>Decimals:</strong> 0
        </li>
        <li>
          <strong>Ticker:</strong> $send
        </li>
      </ul>
      <div className="mb-8" />
      <h3 className="text-xl sm:text-2xl mb-6 font-semibold">Allotment</h3>
      <ul className="list-disc list-inside mb-6">
        {allotment.map((item, index) => (
          <li key={index}>
            {item.category}: {item.percentage} - {item.amount}
          </li>
        ))}
      </ul>
      <div className="mb-8" />
      <h3 className="text-xl sm:text-2xl mb-6 font-semibold">Distributions</h3>
      <p>
        10 distributions of 2b $send every 2 months, beginning the first week of
        August.
      </p>
      <p>&nbsp;</p>
      <p>
        Send Distribution #1 will open up the first week of July and close on
        the last day of the month. Participants will need to use their public
        address to apply. Moving tokens before the snapshot is taken will remove
        the address from eligibility.
      </p>
      <div className="mb-8" />
      <h4 className="text-lg sm:text-xl mb-6 font-semibold">Schedule:</h4>
      <table className="w-full text-left table-auto mb-6 border-none">
        <thead>
          <tr>
            <th className="px-4 py-2 w-12 ">
              <strong>#</strong>
            </th>
            <th className="px-4 py-2">Open</th>
            <th className="px-4 py-2">Close</th>
            <th className="px-4 py-2">Distribution</th>
          </tr>
        </thead>
        <tbody>
          {distributionSchedule.map((item, index) => (
            <tr key={index}>
              <td className="w-12 px-4 py-2">{item.number}</td>
              <td className="px-4 py-2">{item.open}</td>
              <td className="px-4 py-2">{item.close}</td>
              <td className="px-4 py-2">{item.distribution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SendToken;
