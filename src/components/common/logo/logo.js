import React from 'react';
import './logo.css';

const logo = (
  <a className="absolute left-1/2 top-4 z-50 -translate-x-1/2 justify-center duration-200 -translate-y-full opacity-0"
    href="/">
    <svg className="logo_svg" viewBox="0 0 1439 294" fill="none">
      <path
        d="M342.725 63.9557L188.434 231.54C155.558 268.095 137.346 294.127 43.0436 294.127C-10.0881 293.969 -13.6091 267.7 31.175 231.224L232.941 64.0744C277.765 27.5983 303.432 1.25 354.633 1.25C403.451 1.25 375.562 27.4005 342.725 63.9557ZM297.902 54.5004C290.127 54.5004 286.706 58.4566 280.494 64.0348L99.3403 231.342C93.1686 237.039 93.1686 240.877 99.6172 240.877C109.813 240.877 115.064 236.428 120.11 231.382C178.425 175.599 236.726 119.804 295.014 63.9952C300.987 58.2588 302.514 54.5004 297.902 54.5004Z"
        fill="white"></path>
      <path
        d="M455.849 57.2912C455.478 57.8675 454.84 58.2159 454.155 58.2159H430.791C429.902 58.2159 429.068 58.6451 428.551 59.3683L264.43 289.074C263.396 290.52 261.728 291.379 259.95 291.379H191.828C190.122 291.374 189.229 289.198 190.324 287.889C190.324 287.889 380.669 60.8148 381.396 60.1058C381.539 59.9664 381.688 59.8089 381.837 59.6456C382.349 59.0826 381.929 58.2159 381.168 58.2159C380.77 58.2159 380.375 58.2159 380.054 58.2159H360.506C358.759 58.2159 357.84 56.1436 359.014 54.8492L405.655 5.09758C406.349 4.35743 407.318 3.9375 408.333 3.9375L486.648 3.93753C488.243 3.93387 489.209 5.69674 488.348 7.03886C477.785 23.5026 466.479 40.7598 455.849 57.2912Z"
        fill="white"></path>
      <path
        d="M589.077 6.49126C559.137 93.9255 498.345 264.061 489.633 288.425C488.98 290.249 487.291 291.357 485.353 291.357H419.689C417.547 291.357 416.306 290.212 416.992 288.732C433.94 252.157 455.053 206.938 472.073 170.363C472.432 169.574 471.855 168.678 470.988 168.678H455.066C454.304 168.678 453.607 169.108 453.266 169.789L392.814 288.834C392.034 290.381 390.449 291.357 388.717 291.357H319.278C317.699 291.353 316.739 289.616 317.574 288.277L497.324 4.90071C497.692 4.31097 498.338 3.95259 499.033 3.95259L534.217 3.9395C535.715 3.9395 536.689 5.51714 536.017 6.85639L481.663 113.86C481.225 114.713 481.847 115.727 482.806 115.727H496.223C497.007 115.727 497.719 115.272 498.05 114.561C515.675 76.5982 531.53 42.7597 549.079 5.10069C549.409 4.39304 550.118 3.93982 550.899 3.93751H587.15C588.534 3.93342 589.525 5.1818 589.077 6.49126Z"
        fill="white"></path>
      <path
        d="M646.45 238.175C647.635 238.177 648.562 239.198 648.451 240.378C646.956 256.226 645.027 273.369 643.516 289.325C643.404 290.505 642.415 291.406 641.23 291.406H509.231C507.871 291.404 506.805 289.931 507.213 288.634C536.938 194.183 568.934 99.6942 598.71 5.34531C598.974 4.50917 599.748 3.93986 600.625 3.9375L670.333 3.95792C671.523 3.95471 672.442 4.77074 672.329 5.95563C670.747 22.5146 667.273 39.5679 665.758 56.1043C665.663 57.1412 664.794 57.9349 663.753 57.9349H628.758C627.793 57.9349 626.964 58.6184 626.781 59.5649C623.323 77.3731 619.877 95.1924 616.442 113.023C616.202 114.266 617.154 115.418 618.419 115.418H647.306C648.511 115.418 649.446 116.469 649.306 117.665C647.377 134.208 645.425 150.763 643.45 167.329C643.329 168.342 642.47 169.104 641.45 169.104H607.237C606.272 169.104 605.443 169.788 605.259 170.735C601.062 192.391 596.865 214.035 592.668 235.668C592.427 236.909 593.376 238.063 594.641 238.066L646.45 238.175Z"
        fill="white"></path>
      <path
        d="M761.554 291.384C760.648 291.384 759.853 290.781 759.61 289.909C751.199 259.718 742.846 228.134 736.184 197.989C736.173 197.943 736.163 197.898 736.154 197.853C735.967 197.01 735.221 196.408 734.357 196.408H732.626C731.567 196.408 730.727 197.303 730.781 198.361C730.784 198.414 730.787 198.468 730.789 198.523L736.768 289.451C736.826 290.604 736.095 291.382 734.941 291.379H663.653C662.487 291.376 661.567 290.386 661.65 289.223C668.333 194.693 673.437 100.341 680.069 5.81059C680.143 4.75558 681.02 3.93752 682.078 3.93752L731.008 3.9375C771.758 3.9375 776.307 29.9316 786.395 74.7553L796.958 125.869C801.09 145.755 799.38 161.985 791.387 173.787C791.018 174.332 790.917 175.019 791.138 175.64C804.558 213.449 820.282 250.733 836.738 288.567C837.32 289.905 836.333 291.4 834.875 291.389L761.554 291.384ZM724.703 57.823C723.39 57.823 722.345 58.9219 722.413 60.2328C723.76 86.0815 725.767 114.712 727.089 140.544C727.151 141.765 728.159 142.723 729.381 142.723H735.185C739.48 142.723 742.856 139.057 742.494 134.777C742.305 132.539 742.066 129.728 741.769 126.225C740.266 108.66 738.776 91.1208 737.299 73.608C737.058 70.8513 736.765 67.8347 736.498 65.1839C736.074 60.9923 732.536 57.823 728.323 57.823C727.45 57.823 726.629 57.823 725.945 57.823H724.703Z"
        fill="white"></path>
      <path
        d="M863.493 97.5681C862.653 97.5681 861.901 97.0466 861.607 96.2597L848.645 61.6064C846.904 56.9776 843.581 53.8918 840.495 53.8918C837.41 53.8918 836.539 56.9776 837.924 61.6064L845.282 82.772C850.782 97.8055 850.663 100.456 885.2 122.334C928.719 149.315 949.014 167.83 962.148 194.811L980.663 232.197C1002.22 274.212 978.844 293.672 927.888 293.514C876.932 293.356 838.161 273.777 829.418 231.881C827.033 221.312 824.613 210.743 822.097 200.142C821.796 198.876 822.756 197.66 824.057 197.66H883.372C884.23 197.66 884.993 198.203 885.275 199.013C889.311 210.64 893.334 222.242 897.346 233.819C898.183 236.06 899.677 237.995 901.632 239.372C903.588 240.748 905.913 241.502 908.305 241.534C912.894 241.534 915.544 238.883 913.645 233.859L903.557 206.917C895.091 184.209 885.042 180.727 859.446 164.547C811.259 133.332 804.494 118.338 797.808 91.0405C795.751 81.9412 793.852 72.8419 791.597 63.7427C783.447 24.5368 775.541 1.25 821.42 1.25C872.347 1.25 876.734 24.339 896.95 63.6636C902.062 74.0068 907.173 84.339 912.284 94.6602C912.947 95.9989 911.973 97.5681 910.48 97.5681H863.493Z"
        fill="white"></path>
      <path
        d="M1097.64 288.286C1098.1 289 1098.04 289.833 1097.64 290.456C1097.3 291.001 1096.69 291.385 1095.95 291.385H1027.4C1026.2 291.385 1025.1 290.716 1024.54 289.651L877.937 6.8807C877.24 5.53997 878.213 3.9375 879.724 3.9375H912.868C913.961 3.9375 914.979 4.49321 915.57 5.41226C976.294 99.843 1037.15 193.67 1097.64 288.286Z"
        fill="white"></path>
      <path
        d="M1077.27 67.2092L1230.1 229.651C1265.7 266.799 1255.37 291.505 1202.6 291.387H1119.12C1117.89 291.387 1116.75 290.77 1116.07 289.745L928.83 7.39038C927.946 6.06359 928.813 3.93363 930.407 3.93363L972.433 3.93359C1022.83 3.93359 1041.5 30.0605 1077.27 67.2092ZM1013.97 57.5956H1009.36C1008.61 57.5956 1008.18 58.4416 1008.62 59.0426C1009.05 59.6199 1009.55 60.2764 1009.98 60.8256L1149.01 237.743C1149.71 238.628 1150.77 239.145 1151.9 239.145H1159.67C1166.08 239.145 1167.03 235.189 1162.25 229.492C1117.86 175.372 1073.46 121.304 1029.04 67.2883C1028.08 66.0872 1026.84 64.5768 1025.64 63.1081C1022.78 59.61 1018.49 57.5956 1013.97 57.5956Z"
        fill="white"></path>
      <path
        d="M1376.74 239.632C1378.06 239.631 1379.32 240.099 1380.32 240.95L1435.29 287.866C1436.71 289.068 1435.85 291.392 1433.99 291.387H1304.88C1303.62 291.387 1302.42 290.873 1301.55 289.964L1032.27 7.32111C1031.05 6.05379 1031.95 3.9375 1033.71 3.9375H1100.06C1101.4 3.9375 1102.69 4.42525 1103.7 5.30949L1159.18 54.1243C1160.6 55.3253 1159.75 57.6455 1157.89 57.6455H1129.89C1129.47 57.6455 1128.26 57.6455 1127.12 57.6455C1126.28 57.6455 1125.88 58.6737 1126.5 59.2394C1127.32 59.9959 1128.2 60.8011 1128.53 61.1101L1186.23 114.266C1187.25 115.202 1188.58 115.722 1189.96 115.722H1219.37C1220.69 115.722 1221.96 116.197 1222.96 117.059L1280.22 166.454C1281.62 167.662 1280.77 169.962 1278.92 169.962H1249.06C1248.22 169.962 1247.82 170.987 1248.43 171.554L1320.65 238.208C1321.67 239.147 1323 239.669 1324.39 239.668L1376.74 239.632Z"
        fill="white"></path>
    </svg>
    <span className="sr-only">Otherside</span>
  </a>
)

export default logo