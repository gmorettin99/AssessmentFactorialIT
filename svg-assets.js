/**
 * FACTORIAL IT: STRATEGIC ASSETS LIBRARY
 * VERSION: High-Fidelity (Original Visuals)
 * FIX: Explicit width/height added to <svg> tag to fix "White Render" bug in PDF.
 */

window.STRATEGIC_GRAPHS = {
    // We strictly define width="1873" and height="735" here so the filters have a coordinate system
    pillars: `
    <svg width="1873" height="735" viewBox="0 0 1873 735" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
        <defs>
            <filter id="filter0_ddd_0_1" x="1218" y="2" width="655" height="673.085" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="18"/>
                <feGaussianBlur stdDeviation="28"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.096 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="10"/>
                <feGaussianBlur stdDeviation="9"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.048 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0384 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_0_1" result="shape"/>
            </filter>
            <filter id="filter1_ddd_0_1" x="609" y="2" width="655" height="672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="18"/>
                <feGaussianBlur stdDeviation="28"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.096 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="10"/>
                <feGaussianBlur stdDeviation="9"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.048 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0384 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_0_1" result="shape"/>
            </filter>
            <filter id="filter2_ddd_0_1" x="0" y="0" width="655" height="675" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="18"/>
                <feGaussianBlur stdDeviation="28"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.096 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="10"/>
                <feGaussianBlur stdDeviation="9"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.048 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0384 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_0_1" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_0_1" x1="1545.5" y1="40" x2="1545.5" y2="601.085" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F9F9F9"/>
                <stop offset="1" stop-color="#A5FDE0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="936.5" y1="40" x2="936.5" y2="600" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F9F9F9"/>
                <stop offset="1" stop-color="#A5FDE0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="327.5" y1="38" x2="327.5" y2="601" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F9F9F9"/>
                <stop offset="1" stop-color="#A5FDE0"/>
            </linearGradient>
        </defs>
        <g filter="url(#filter0_ddd_0_1)">
            <rect x="1274" y="40" width="543" height="561.085" rx="24.6557" fill="url(#paint0_linear_0_1)"/>
            <path d="M1419.44 103.208C1417.8 103.208 1416.35 102.917 1415.07 102.334C1413.8 101.752 1412.81 100.921 1412.1 99.8424C1411.38 98.7637 1411.02 97.4801 1411 95.9915H1415.1C1415.1 96.7466 1415.28 97.4262 1415.62 98.0302C1415.99 98.6127 1416.49 99.0765 1417.11 99.4217C1417.76 99.7669 1418.54 99.9395 1419.44 99.9395C1420.22 99.9395 1420.89 99.8208 1421.45 99.5835C1422.03 99.3246 1422.47 98.9687 1422.77 98.5156C1423.1 98.041 1423.26 97.4909 1423.26 96.8652C1423.26 96.1533 1423.09 95.5708 1422.74 95.1178C1422.42 94.6431 1421.97 94.244 1421.38 93.9204C1420.8 93.5968 1420.13 93.3164 1419.38 93.0791C1418.62 92.8202 1417.82 92.5505 1416.98 92.27C1415.19 91.666 1413.84 90.9001 1412.94 89.9724C1412.03 89.0232 1411.58 87.7611 1411.58 86.1863C1411.58 84.8703 1411.89 83.7376 1412.52 82.7884C1413.14 81.8392 1414.02 81.1057 1415.14 80.5879C1416.28 80.0485 1417.6 79.7789 1419.09 79.7789C1420.6 79.7789 1421.91 80.0485 1423.03 80.5879C1424.18 81.1272 1425.07 81.8823 1425.72 82.8531C1426.39 83.8024 1426.73 84.9458 1426.75 86.2833H1422.61C1422.59 85.7224 1422.44 85.2047 1422.16 84.73C1421.88 84.2338 1421.47 83.8347 1420.93 83.5327C1420.41 83.2091 1419.78 83.0473 1419.02 83.0473C1418.37 83.0257 1417.79 83.1336 1417.27 83.3709C1416.78 83.5866 1416.38 83.9102 1416.08 84.3417C1415.8 84.7516 1415.66 85.2694 1415.66 85.895C1415.66 86.4991 1415.78 87.0061 1416.04 87.416C1416.32 87.8043 1416.72 88.1387 1417.24 88.4191C1417.76 88.678 1418.36 88.9261 1419.05 89.1634C1419.74 89.4007 1420.5 89.6596 1421.32 89.9401C1422.44 90.3068 1423.45 90.7599 1424.36 91.2992C1425.29 91.817 1426.02 92.4966 1426.56 93.3379C1427.1 94.1793 1427.37 95.2688 1427.37 96.6064C1427.37 97.7713 1427.07 98.8608 1426.46 99.8748C1425.86 100.867 1424.97 101.676 1423.81 102.302C1422.64 102.906 1421.19 103.208 1419.44 103.208ZM1435.16 103.208C1433.82 103.208 1432.71 102.981 1431.83 102.528C1430.94 102.075 1430.28 101.471 1429.85 100.716C1429.42 99.9611 1429.2 99.1413 1429.2 98.2567C1429.2 97.2212 1429.46 96.3259 1429.98 95.5708C1430.52 94.8157 1431.31 94.2332 1432.34 93.8233C1433.38 93.3919 1434.65 93.1761 1436.16 93.1761H1440.27C1440.27 92.3132 1440.15 91.6013 1439.92 91.0403C1439.68 90.4579 1439.31 90.0264 1438.81 89.7459C1438.32 89.4655 1437.68 89.3252 1436.91 89.3252C1436.02 89.3252 1435.27 89.5302 1434.64 89.9401C1434.01 90.3284 1433.63 90.9325 1433.48 91.7523H1429.66C1429.79 90.5873 1430.17 89.5949 1430.82 88.7751C1431.47 87.9337 1432.32 87.2865 1433.38 86.8335C1434.46 86.3589 1435.63 86.1215 1436.91 86.1215C1438.44 86.1215 1439.74 86.3912 1440.82 86.9306C1441.9 87.4483 1442.72 88.2034 1443.28 89.1958C1443.86 90.1666 1444.15 91.3424 1444.15 92.7231V102.82H1440.85L1440.47 100.198C1440.25 100.63 1439.97 101.029 1439.62 101.396C1439.3 101.762 1438.92 102.086 1438.49 102.367C1438.06 102.625 1437.56 102.83
