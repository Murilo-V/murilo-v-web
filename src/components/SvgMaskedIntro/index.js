import React from 'react';

const SvgMaskedIntro = () => {
  return (
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="maskedWave">
        <path id="maskedWavePath"
            d='M69 42.5C27.5 20.5 -29.3386 -32.9226 -68 -22L-78 1091.63L1919.73 1140C1914.4 1135.32 1973.6 1110.74 1964 1102C1952 1091.08 1862.95 1056.69 1848 1051C1837.5 1047 1800.29 1030.05 1774.75 1021.41C1744.75 1011.27 1711.76 1005.81 1700.76 999.566C1655.02 973.608 1705.76 980.842 1620.77 945.734C1607.73 940.349 1593.94 917.777 1571.28 914.136C1547.28 910.281 1487.99 898.376 1476.79 894.632C1462.79 889.95 1409.8 863.814 1397.8 856.012C1385.8 848.211 1357.81 832.607 1335.81 831.046C1313.81 829.486 1281.82 826.365 1259.82 821.684C1237.82 817.003 1210 783.362 1192 774C1174 764.638 1125.99 732.043 1082 718C1038.01 703.957 1022 685.604 988 670C954.005 654.396 861.5 544.5 827.5 528C789.807 509.708 685.235 437.661 667.5 426C631 402 596 401 582 392C545.912 368.801 488.223 350.021 449 314C424.5 291.5 384.582 286.5 324.5 250.5C290.625 230.202 292.123 212.82 262 164C218.5 93.5 160.205 90.8495 69 42.5Z'
            fill="#3F8D1A"  />
        </clipPath>   

        <g clipPath="url(#maskedWave)">
          <text className="title" textAnchor="middle" x="50vw" y="60vh" fontSize="120" fill="#232323">
            murilo v.
          </text>
        </g>
    </svg>
  );
}

export default SvgMaskedIntro;
