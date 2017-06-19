/** Save To Samsung Pay JavaScript SDK **/
(function (window) {
    'use strict';

    function define_SP() {
        var SP = {};

        SP.css = ".s2p-add-btn{font-family:Arial;color:#fff;font-size:16px;background:transparent;text-decoration:none;border-width:0;padding: 0;cursor: pointer;}.s2p-add-btn:hover{background:transparent;text-decoration:none}.s2p-btn-trans{opacity: 0 !important;}.s2p-add-btn svg {width: 208px;height: 51px;}.s2p-add-btn svg:hover #s2p_add_btn {fill: rgba(0,0,0,.3);}.s2p-warn-frame{width:95%;height:520px;}@media screen and (orientation:landscape) {.s2p-warn-frame{height:320px;}}";

        SP.SVG = '<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" version=\"1.0\" width=\"1040px\" height=\"256px\" viewBox=\"0 0 10400 2560\" preserveAspectRatio=\"xMidYMid meet\">\r\n<g id=\"s2p_add_btn\" fill=\"#fafafa\" stroke=\"none\">\r\n <path d=\"M7110 1370 l0 -370 60 0 c58 0 60 1 60 26 l0 26 30 -26 c52 -44 160 -47 239 -7 20 11 55 39 78 63 174 190 5 509 -243 458 -29 -6 -64 -20 -77 -31 -14 -10 -28 -19 -31 -19 -3 0 -6 56 -6 125 l0 125 -55 0 -55 0 0 -370z m336 54 c21 -10 45 -34 60 -61 23 -38 26 -53 22 -108 -8 -130 -113 -198 -222 -146 -108 53 -119 240 -17 308 41 28 107 30 157 7z\"\/>\r\n <path d=\"M8470 1736 c0 -2 21 -53 47 -113 25 -59 46 -112 46 -118 0 -5 -48 -116 -107 -245 -60 -129 -110 -241 -113 -248 -4 -10 9 -12 57 -10 l62 3 78 180 c42 99 81 180 85 180 4 0 40 -82 79 -182 l71 -183 62 0 62 0 -43 103 c-24 56 -94 222 -156 370 l-113 267 -59 0 c-32 0 -58 -2 -58 -4z\"\/>\r\n <path d=\"M3815 1541 c-70 -17 -105 -58 -105 -126 l0 -35 60 0 60 0 0 35 c0 25 6 37 21 46 33 17 69 -3 69 -39 0 -33 -14 -47 -91 -90 -104 -59 -134 -111 -109 -187 20 -62 101 -95 197 -80 64 9 103 49 103 105 l0 41 -52 -3 c-50 -3 -53 -5 -58 -33 -5 -27 -9 -30 -40 -30 -33 0 -35 2 -35 35 0 32 5 37 65 71 36 20 80 50 98 66 29 28 32 35 32 91 0 79 -28 116 -101 131 -55 12 -70 12 -114 2z\"\/>\r\n <path d=\"M7935 1541 c-130 -33 -209 -138 -209 -276 0 -79 23 -135 78 -193 80 -86 221 -107 310 -47 l36 24 0 -24 c0 -24 3 -25 55 -25 l55 0 0 270 0 270 -55 0 c-52 0 -55 -1 -55 -25 l0 -24 -47 24 c-54 27 -123 38 -168 26z m161 -132 c40 -38 56 -77 56 -140 0 -80 -25 -127 -83 -157 -118 -62 -241 35 -227 179 6 56 28 92 79 127 47 32 136 28 175 -9z\"\/>\r\n <path d=\"M5253 1524 c-36 -18 -63 -67 -63 -113 l0 -31 60 0 60 0 0 35 c0 28 5 38 23 44 35 13 62 -2 65 -38 3 -29 -2 -34 -59 -69 -133 -80 -169 -135 -136 -214 20 -49 64 -70 142 -71 104 -1 155 36 155 113 0 30 0 30 -55 30 -51 0 -55 -2 -55 -24 0 -30 -22 -49 -52 -44 -19 2 -23 9 -23 37 0 32 5 37 75 78 98 57 120 84 120 146 0 62 -23 105 -65 123 -46 19 -152 18 -192 -2z\"\/>\r\n <path d=\"M5683 1523 c-56 -28 -63 -59 -63 -262 l0 -181 55 0 55 0 0 171 c0 98 4 178 10 190 7 12 21 19 41 19 43 0 49 -26 49 -216 l0 -164 55 0 55 0 0 178 c0 202 -9 234 -70 264 -44 23 -143 23 -187 1z\"\/>\r\n <path d=\"M6669 1531 c-89 -29 -99 -52 -99 -231 0 -159 9 -188 63 -216 44 -23 154 -23 194 1 37 22 51 44 59 95 l7 40 -55 0 c-53 0 -56 -1 -61 -29 -7 -34 -34 -52 -65 -44 -30 7 -33 27 -30 173 l3 125 27 9 c41 14 68 -14 68 -71 0 -39 -2 -43 -25 -43 -21 0 -25 -5 -25 -30 l0 -30 80 0 80 0 0 75 c0 92 -17 138 -60 160 -38 19 -124 28 -161 16z\"\/>\r\n <path d=\"M4114 1513 c2 -10 21 -111 42 -225 l38 -208 101 0 101 0 38 208 c21 114 40 215 43 225 4 15 -3 17 -56 17 -60 0 -60 0 -66 -32 -3 -18 -17 -109 -31 -203 -22 -147 -34 -207 -34 -166 0 15 -49 348 -55 379 -5 20 -11 22 -66 22 -53 0 -60 -2 -55 -17z\"\/>\r\n <path d=\"M4573 1448 c4 -46 7 -147 7 -225 l0 -143 94 0 93 0 23 148 c33 213 34 213 54 87 9 -61 22 -138 28 -172 l10 -63 94 0 94 0 0 194 c0 106 3 208 6 225 l7 31 -62 0 -61 0 -2 -202 -3 -203 -33 185 c-19 102 -36 193 -38 203 -4 13 -16 17 -59 17 -33 0 -55 -5 -58 -12 -2 -7 -20 -96 -38 -198 l-34 -185 -9 198 -9 197 -55 0 -55 0 6 -82z\"\/>\r\n <path d=\"M1750 1507 c-33 -15 -30 -53 3 -42 12 4 44 10 70 12 55 6 87 -14 87 -53 0 -32 -20 -49 -82 -69 -75 -24 -98 -48 -98 -103 0 -35 6 -49 29 -73 25 -24 38 -29 79 -29 71 0 111 16 105 41 -4 13 -11 18 -21 14 -35 -13 -100 -17 -120 -6 -49 26 -30 93 30 106 79 17 128 61 128 115 0 33 -23 71 -51 86 -33 17 -124 17 -159 1z\"\/>\r\n <path d=\"M2036 1504 c-23 -23 -30 -61 -16 -93 13 -33 70 -61 121 -61 26 0 30 -3 27 -22 -4 -32 -46 -50 -87 -38 -25 7 -33 6 -38 -6 -10 -26 15 -39 72 -39 43 0 59 5 77 23 21 20 23 34 26 137 4 111 3 115 -17 115 -12 0 -21 -6 -21 -15 0 -8 -4 -15 -9 -15 -5 0 -14 7 -21 15 -17 20 -94 20 -114 -1z m115 -34 c14 -8 19 -21 19 -50 0 -39 0 -39 -32 -34 -56 10 -78 25 -78 54 0 15 3 30 7 33 10 11 62 8 84 -3z\"\/>\r\n <path d=\"M2349 1493 c-25 -67 -79 -226 -79 -234 0 -5 10 -9 23 -9 20 0 26 11 51 98 32 105 41 124 49 96 54 -186 58 -194 82 -194 l24 0 -46 135 c-41 124 -47 135 -69 135 -18 0 -27 -8 -35 -27z\"\/>\r\n <path d=\"M2574 1486 c-32 -32 -34 -38 -34 -99 0 -77 27 -126 78 -141 72 -20 130 25 139 108 l6 46 -91 0 -91 0 11 30 c14 41 41 54 98 46 37 -5 49 -3 53 9 9 21 -23 35 -83 35 -46 0 -56 -4 -86 -34z m136 -142 c0 -27 -19 -52 -45 -58 -34 -9 -61 7 -73 44 l-11 30 65 0 c51 0 64 -3 64 -16z\"\/>\r\n <path d=\"M2970 1500 c-17 -17 -20 -33 -20 -115 0 -95 0 -95 -25 -95 -33 0 -35 -37 -2 -42 18 -2 23 -10 25 -40 3 -30 7 -38 23 -38 16 0 19 7 19 40 l0 40 40 0 c33 0 40 3 40 20 0 17 -7 20 -40 20 l-40 0 0 76 c0 91 10 114 50 114 23 0 30 4 30 20 0 17 -7 20 -40 20 -27 0 -47 -7 -60 -20z\"\/>\r\n <path d=\"M3164 1505 c-33 -23 -47 -68 -42 -140 4 -73 29 -109 79 -120 95 -21 160 58 143 173 -10 68 -47 102 -111 102 -27 0 -58 -7 -69 -15z m110 -44 c40 -44 27 -154 -21 -172 -28 -10 -57 1 -73 31 -15 29 -12 113 6 138 19 27 64 29 88 3z\"\/>\r\n <path d=\"M6070 1300 l0 -220 83 0 83 0 50 172 49 172 3 -172 2 -172 55 0 55 0 0 220 0 220 -83 0 -82 0 -20 -67 c-10 -38 -36 -120 -57 -183 l-38 -115 4 183 3 182 -53 0 -54 0 0 -220z\"\/>\r\n <\/g>\r\n<g id=\"layer2\" fill=\"#000000\" stroke=\"none\">\r\n <path d=\"M1135 2529 c-543 -57 -1005 -491 -1100 -1033 -19 -114 -19 -328 0 -442 78 -446 408 -828 841 -973 196 -66 -144 -61 4324 -61 4468 0 4128 -5 4324 61 433 145 763 527 841 973 19 114 19 328 0 442 -84 477 -453 877 -921 999 -51 13 -139 29 -195 35 -124 12 -7992 12 -8114 -1z m6085 -914 c0 -69 3 -125 6 -125 3 0 17 9 31 19 56 45 185 47 253 4 113 -71 166 -211 125 -333 -20 -61 -81 -132 -136 -161 -79 -40 -187 -37 -239 7 l-30 26 0 -26 c0 -25 -2 -26 -60 -26 l-60 0 0 370 0 370 55 0 55 0 0 -125z m1480 -142 c62 -148 132 -314 156 -370 l43 -103 -62 0 -62 0 -71 183 c-39 100 -75 182 -79 182 -4 0 -43 -81 -85 -180 l-78 -180 -62 -3 c-48 -2 -61 0 -57 10 3 7 53 119 113 248 59 129 107 240 107 245 0 6 -21 59 -46 118 -26 60 -47 111 -47 113 0 2 26 4 58 4 l59 0 113 -267z m-4771 66 c73 -15 101 -52 101 -131 0 -56 -3 -63 -32 -91 -18 -16 -62 -46 -98 -66 -60 -34 -65 -39 -65 -71 0 -33 2 -35 35 -35 31 0 35 3 40 30 5 28 8 30 58 33 l52 3 0 -41 c0 -56 -39 -96 -103 -105 -96 -15 -177 18 -197 80 -25 76 5 128 109 187 77 43 91 57 91 90 0 36 -36 56 -69 39 -15 -9 -21 -21 -21 -46 l0 -35 -60 0 -60 0 0 35 c0 102 89 152 219 124z m4174 -24 l47 -24 0 24 c0 24 3 25 55 25 l55 0 0 -270 0 -270 -55 0 c-52 0 -55 1 -55 25 l0 24 -36 -24 c-89 -60 -230 -39 -310 47 -55 58 -78 114 -78 193 0 212 195 342 377 250z m-2658 11 c42 -18 65 -61 65 -123 0 -62 -22 -89 -120 -146 -70 -41 -75 -46 -75 -78 0 -28 4 -35 23 -37 30 -5 52 14 52 44 0 22 4 24 55 24 55 0 55 0 55 -30 0 -77 -51 -114 -155 -113 -78 1 -122 22 -142 71 -33 79 3 134 136 214 57 35 62 40 59 69 -3 36 -30 51 -65 38 -18 -6 -23 -16 -23 -44 l0 -35 -60 0 -60 0 0 31 c0 46 27 95 63 113 40 20 146 21 192 2z m425 -4 c61 -30 70 -62 70 -264 l0 -178 -55 0 -55 0 0 164 c0 190 -6 216 -49 216 -20 0 -34 -7 -41 -19 -6 -12 -10 -92 -10 -190 l0 -171 -55 0 -55 0 0 181 c0 203 7 234 63 262 44 22 143 22 187 -1z m960 -7 c43 -22 60 -68 60 -160 l0 -75 -80 0 -80 0 0 30 c0 25 4 30 25 30 23 0 25 4 25 43 0 57 -27 85 -68 71 l-27 -9 -3 -125 c-3 -146 0 -166 30 -173 31 -8 58 10 65 44 5 28 8 29 61 29 l55 0 -7 -40 c-13 -82 -55 -113 -155 -113 -78 0 -124 20 -146 63 -21 41 -21 298 0 340 34 66 160 89 245 45z m-2595 -7 c6 -31 55 -364 55 -379 0 -41 12 19 34 166 14 94 28 185 31 203 6 32 6 32 66 32 53 0 60 -2 56 -17 -3 -10 -22 -111 -43 -225 l-38 -208 -101 0 -101 0 -38 208 c-21 114 -40 215 -42 225 -5 15 2 17 55 17 55 0 61 -2 66 -22z m451 -175 l9 -198 34 185 c18 102 36 191 38 198 3 7 25 12 58 12 43 0 55 -4 59 -17 2 -10 19 -101 38 -203 l33 -185 3 203 2 202 61 0 62 0 -7 -31 c-3 -17 -6 -119 -6 -225 l0 -194 -94 0 -94 0 -10 63 c-6 34 -19 111 -28 172 -20 126 -21 126 -54 -87 l-23 -148 -93 0 -94 0 0 143 c0 78 -3 179 -7 225 l-6 82 55 0 55 0 9 -197z m-2777 173 c28 -15 51 -53 51 -86 0 -54 -49 -98 -128 -115 -60 -13 -79 -80 -30 -106 20 -11 85 -7 120 6 10 4 17 -1 21 -14 6 -25 -34 -41 -105 -41 -41 0 -54 5 -79 29 -23 24 -29 38 -29 73 0 55 23 79 98 103 62 20 82 37 82 69 0 39 -32 59 -87 53 -26 -2 -58 -8 -70 -12 -33 -11 -36 27 -3 42 35 16 126 16 159 -1z m241 -1 c7 -8 16 -15 21 -15 5 0 9 7 9 15 0 9 9 15 21 15 20 0 21 -4 17 -115 -3 -103 -5 -117 -26 -137 -18 -18 -34 -23 -77 -23 -57 0 -82 13 -72 39 5 12 13 13 38 6 41 -12 83 6 87 38 3 19 -1 22 -27 22 -51 0 -108 28 -121 61 -14 32 -7 70 16 93 20 21 97 21 114 1z m303 -120 l46 -135 -24 0 c-24 0 -28 8 -82 194 -8 28 -17 9 -49 -96 -25 -87 -31 -98 -51 -98 -13 0 -23 4 -23 9 0 8 54 167 79 234 8 19 17 27 35 27 22 0 28 -11 69 -135z m277 125 c11 -6 17 -16 13 -25 -4 -12 -16 -14 -53 -9 -57 8 -84 -5 -98 -46 l-11 -30 91 0 91 0 -6 -46 c-9 -83 -67 -128 -139 -108 -51 15 -78 64 -78 141 0 61 2 67 34 99 30 30 40 34 86 34 28 0 60 -5 70 -10z m340 -10 c0 -16 -7 -20 -30 -20 -40 0 -50 -23 -50 -114 l0 -76 40 0 c33 0 40 -3 40 -20 0 -17 -7 -20 -40 -20 l-40 0 0 -40 c0 -33 -3 -40 -19 -40 -16 0 -20 8 -23 38 -2 30 -7 38 -25 40 -33 5 -31 42 2 42 25 0 25 0 25 95 0 113 13 135 80 135 33 0 40 -3 40 -20z m239 -8 c50 -50 50 -174 -1 -221 -43 -41 -118 -38 -159 5 -18 19 -24 39 -27 89 -7 110 25 155 111 155 40 0 54 -5 76 -28z m2865 -154 l-4 -183 38 115 c21 63 47 145 57 183 l20 67 82 0 83 0 0 -220 0 -220 -55 0 -55 0 -2 172 -3 172 -49 -172 -50 -172 -83 0 -83 0 0 220 0 220 54 0 53 0 -3 -182z\"\/>\r\n <path d=\"M7289 1417 c-69 -46 -91 -156 -48 -243 38 -79 149 -108 218 -57 48 37 65 70 69 138 4 55 1 70 -22 108 -44 76 -146 102 -217 54z\"\/>\r\n <path d=\"M7921 1418 c-51 -35 -73 -71 -79 -127 -14 -144 109 -241 227 -179 58 30 83 77 83 157 0 104 -48 162 -140 169 -47 3 -63 0 -91 -20z\"\/>\r\n <path d=\"M2067 1473 c-4 -3 -7 -18 -7 -33 0 -29 22 -44 78 -54 32 -5 32 -5 32 34 0 29 -5 42 -19 50 -22 11 -74 14 -84 3z\"\/>\r\n <path d=\"M2592 1330 c12 -37 39 -53 73 -44 26 6 45 31 45 58 0 13 -13 16 -64 16 l-65 0 11 -30z\"\/>\r\n <path d=\"M3186 1458 c-18 -25 -21 -109 -6 -138 16 -30 45 -41 73 -31 48 18 61 128 21 172 -24 26 -69 24 -88 -3z\"\/>\r\n <\/g>\r\n<\/svg>\r\n';

        SP.conf = {
            int: 3000,
            btnTxt: 'Save to SamsungPay',
            btnProcessTxt: 'Processing',
            baseUrl: 'https://api.samsungpaydev.us'
        };

        // Refactor to be configurable
        SP.openAPI = {
            postCard: '/sapi/loyalty/v1/registrations'
        };

        SP.client = {
            jwt: '',
            rbody: '',
            msg: {
                info: {
                    scan2Save: 'Scan the QR Code to save the card to SamsungPay!'
                },
                warn: {
                    enablePopup: 'Please enable window popup on this website!'
                },
                err: {
                    conflictNaming: 'Naming conflict error: S2P is already defined!',
                    missingRequired: 'Missing required fields, S2P initialization aborted!',
                    failedPOST: 'POST request failed: ',
                    failedParseResp: 'S2P service currently is not available'
                }
            },
            elements: {
                root: {},
                qr: {},
                btn: {},
                ctn: {}
            }
        };

        SP.initialize = function (rootDivId) {
            // Locate the root div element
            if (!rootDivId) rootDivId = 'S2P-root';
            var rootEle = document.getElementById(rootDivId);
            if (!rootEle) {
                console.error(SP.client.msg.err.missingRequired);
                return false;
            }

            var devBaseUrl = rootEle.getAttribute('dev-base-url');
            if (devBaseUrl) {
                if (devBaseUrl.substring(devBaseUrl.length-1) === "/")
                    devBaseUrl = devBaseUrl.substring(0, devBaseUrl.length-1);
                SP.conf.baseUrl = devBaseUrl;
            }

            // Retrieve attributes from the root element
            var s2pReq = rootEle.getAttribute('s2p-req');
            if (!s2pReq) {
                console.error(SP.client.msg.err.missingRequired);
                return false;
            }

            var decodedRequest = window.atob(s2pReq);
            var s2pObj = JSON.parse(decodedRequest);
            var jwt = s2pObj['jwt'];
            var reg = s2pObj['reg'];

            if (!jwt || !reg) {
                console.error(SP.client.msg.err.missingRequired);
                return false;
            }

            SP.client.elements.root = rootEle;
            SP.client.jwt = jwt;
            SP.client.reg = reg;

            // Create btn element and append to root element
            SP.client.elements.btn = document.createElement('button');
            SP.client.elements.btn.className = 's2p-add-btn'; // .s2p-add-btn
            SP.client.elements.btn.setAttribute('role', "button" );
            SP.client.elements.btn.innerHTML += SP.SVG;
            // SP.client.elements.btn.appendChild(document.createTextNode(SP.conf.btnTxt));
            SP.client.elements.root.appendChild(SP.client.elements.btn);

            // Create css class for Sweet Alert
            SP.client.elements.customSweetAlertCss = document.createElement('style');
            SP.client.elements.customSweetAlertCss.type = 'text/css';
            SP.client.elements.customSweetAlertCss.innerHTML = SP.css;
            SP.client.elements.root.appendChild(SP.client.elements.customSweetAlertCss);

            SP.client.elements.btn.addEventListener('click', function () {
                SP.client.elements.btn.disabled = true;
                SP.util.switchBtnTxt(SP.client.elements.btn, SP.conf.btnProcessTxt);

                SP.util.post({
                    url: encodeURI(SP.conf.baseUrl + SP.openAPI.postCard),
                    header: {
                        jwt: SP.client.jwt
                    },
                    data:  SP.client.reg,
                    onSuccess: function (response) {
                        // Not received url from S2P server, error handling needed
                        if (!response || !response.welcomeUrl)
                            SP.util.showErrorModal('Service Unavailable', 'Save to SamsungPay service is currently unavailable!');

                        var deviceOS = SP.util.detectDeviceOS();
                        if (deviceOS === 'AndroidOS') {
                            window.location.href = response.welcomeUrl;
                        } else if (deviceOS === 'iOS') {
                            SP.util.showWarnModal(response.welcomeUrl);
                        } else {
                            SP.util.showQRModal(response.welcomeUrl);
                        }

                        SP.util.switchBtnTxt(SP.client.elements.btn, SP.conf.btnTxt);
                        SP.client.elements.btn.disabled = false;
                    },
                    onError: function () {
                        console.error(SP.client.msg.err.failedPOST + 'add2SamsungPay()');
                        SP.util.showErrorModal('Connection Issue', 'Failed to connect to Save to SamsungPay Services, please check your internet connections.');
                        SP.util.switchBtnTxt(SP.client.elements.btn, SP.conf.btnTxt);
                        SP.client.elements.btn.disabled = false;
                    }
                });
            });
        };

        SP.util = {};

        SP.util.showErrorModal = function (title, msg) {
            swal({
                title: title,
                text: msg,
                type: 'error',
                showCancelButton: false,
                showConfirmButton: false,
                showCloseButton: true,
                onOpen: function (modal) {
                    SP.util.blurFocusOfCloseBtn(modal)
                }
            }).catch(swal.noop);
        };

        SP.util.showWarnModal = function (url) {
            swal({
                title: '',
                html:'<iframe class="s2p-warn-frame" src="' + url + '"></iframe>',
                width: '100%',
                showCancelButton: false,
                showConfirmButton: false,
                showCloseButton: true,
                onOpen: function (modal) {
                    SP.util.blurFocusOfCloseBtn(modal)
                }
            }).catch(swal.noop);
        };

        SP.util.showQRModal = function (url) {
            swal({
                title: '',
                html:'<iframe src="' + url + '" style="width: 960px; height: 900px;"></iframe>',
                width: 960,
                showCancelButton: false,
                showConfirmButton: false,
                showCloseButton: true,
                onOpen: function (modal) {
                    SP.util.blurFocusOfCloseBtn(modal)
                }
            }).catch(swal.noop);
        };

        SP.util.blurFocusOfCloseBtn = function(modal) {
            for (var i = 0; i < modal.childNodes.length; i++) {
                if (modal.childNodes[i].className === 'swal2-close') {
                    modal.childNodes[i].blur();
                    break;
                }
            }
        };

        SP.util.post = function (opt) {
            var request = new XMLHttpRequest();

            if (!request || request.readyState !== 0) {
                console.error('Error in creating an XMLHTTPRequest instance!');
                return false;
            }

            request.open('POST', opt.url, true);
            if (request.readyState !== 1) {
                console.error('Error in opening an XMLHTTPRequest!');
                return false;
            }
            request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

            if (opt.header && opt.header.jwt)
                request.setRequestHeader('Authorization', 'JWT ' + opt.header.jwt);

            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        opt.onSuccess(JSON.parse(request.responseText));
                    } else {
                        opt.onError();
                    }
                }
            };

            request.onerror = function() {
                opt.onError();
            };

            if (opt.data)
                request.send(opt.data);
            else
                request.send();
        };

        SP.util.urlencodeData = function toQueryString(obj) {
            var parts = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i))
                    parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
            return parts.join("&");
        };

        SP.util.getParameterByName = function (name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };

        SP.util.encodeQueryData = function (data) {
            var ret = [];
            for (var d in data)
                ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return ret.join('&');
        };

        SP.util.redirectInNewWindow = function (url) {
          if (url) {
              var win = window.open(url, '_blank');
              if (win) {
                  win.focus();
              } else {
                  console.error(SP.client.msg.warn.enablePopup);
              }
          }
        };

        SP.util.switchBtnTxt = function (ele, txt) {
            ele.firstChild.data = txt;
        };

        SP.util.detectDeviceOS = function () {
            var md = new MobileDetect(window.navigator.userAgent);
            return md.os()
        };

        return SP;
    }

    // check if any SP exists globally
    if(typeof(SP) === 'undefined'){
        window.SP = define_SP();
    }
    else{
        console.error(SP.client.msg.err.conflictNaming);
    }

    // Trigger the initialization
    SP.initialize();
})(window);
