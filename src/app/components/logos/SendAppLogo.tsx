const SendAppLogo = ({ className }: { className?: string }) => {
  className = className || "h-48 w-48";
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="400" height="400" rx="200" fill="black" />
      <path
        d="M319.923 143.609H122.168H122.119V166.165C122.119 170.677 123.596 173.684 125.023 175.188C127.977 178.195 130.931 178.195 133.934 178.195H277.143C286.004 178.195 294.865 179.699 300.773 182.707C308.157 185.714 312.588 188.722 316.969 193.233C321.4 197.744 324.354 203.759 327.307 209.774C328.784 215.789 330.261 223.308 330.261 230.827V247.368C330.261 254.887 328.784 260.902 327.308 266.917L327.307 266.917C324.403 272.932 321.4 278.947 316.969 283.459C312.588 289.474 308.108 292.481 300.773 295.489C294.865 298.496 286.004 300 277.143 300H116.941C92.8566 300 73.3322 280.476 73.3322 256.391H266.194C275.745 256.391 283.487 248.649 283.487 239.098C283.487 229.547 275.745 221.805 266.194 221.805H120.642H114.113C89.1977 221.805 69 201.607 69 176.692V143.609H122.119H122.168V100H276.412C300.481 100 319.977 119.54 319.923 143.609Z"
        fill="url(#paint0_linear_792_4627)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_792_4627"
          x1="194.225"
          y1="81.0811"
          x2="199.631"
          y2="300.901"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BCA687" />
          <stop offset="0.066468" stop-color="#B8A284" />
          <stop offset="0.0795685" stop-color="#FFF8EE" />
          <stop offset="0.306859" stop-color="#DAC5A5" />
          <stop offset="0.524492" stop-color="#AB8F76" />
          <stop offset="0.659198" stop-color="#735B42" />
          <stop offset="0.792652" stop-color="#A68B6E" />
          <stop offset="0.918041" stop-color="#B79A7A" />
          <stop offset="1" stop-color="#8F7E61" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SendAppLogo;
