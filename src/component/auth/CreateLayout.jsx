import React from 'react';
import './style.scss'

const CreateLayout = () => {
    return(
        <div className='landing'>
            <div className='landing-mark'>
                <div className='landing-img'></div>
            </div>   
            <div className='landing-main'>
                <div className='landing-header'>
                    <button className='landing-header-login'>Log In</button>
                    <button className='landing-header-signup'>Sign Up</button>
                </div>
                <div className='landing-body'>
                    <h2 className='landing-body-title'> Create Account</h2>
                    <p className='landing-body-pargraph'>Provide necessary information to proceed with registration or sign up with social media</p>
                    <form className='landing-body-user' method='post' action='#'>
                        <div className='input'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0018 15C8.83173 15 6.0126 16.5306 4.2178 18.906C3.83151 19.4172 3.63836 19.6728 3.64468 20.0183C3.64956 20.2852 3.81716 20.6219 4.02717 20.7867C4.29899 21 4.67567 21 5.42904 21H18.5746C19.3279 21 19.7046 21 19.9764 20.7867C20.1864 20.6219 20.354 20.2852 20.3589 20.0183C20.3652 19.6728 20.1721 19.4172 19.7858 18.906C17.991 16.5306 15.1719 15 12.0018 15Z" stroke="#24262D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.0018 12C14.4871 12 16.5018 9.98528 16.5018 7.5C16.5018 5.01472 14.4871 3 12.0018 3C9.51652 3 7.5018 5.01472 7.5018 7.5C7.5018 9.98528 9.51652 12 12.0018 12Z" stroke="#24262D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1" height="20" fill="#F8E6D9"/>
                            </svg>

                            <input type='text' className='input-info' name='username' placeholder='Username'></input>
                        </div> 
                        <div className='input'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="#24262D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1" height="20" fill="#F8E6D9"/>
                            </svg>
                            <input type='password' className='input-info' name='password' placeholder='Password'></input>
                        </div>
                        <div className='input'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1" height="20" fill="#F8E6D9"/>
                            </svg>
                            <input type='number' className='input-info' placeholder='Phone Number (Optional)' name='phonenumber'></input>
                        </div>
                        <input className='input submit_btn' type='submit' name='proceed' value='Proceed'>
                        </input>
                        <input className='input already-btn' type='text' name='have_account' placeholder='I already have account'>
                        </input>
                    
                        <div className='contact'>
                            <a href="#">
                                <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_4973_19271)">
                                    <rect x="4" y="2" width="66" height="67" rx="33" fill="url(#paint0_linear_4973_19271)" fill-opacity="0.78" shape-rendering="crispEdges"/>
                                    <rect x="4.5" y="2.5" width="65" height="66" rx="32.5" stroke="url(#paint1_linear_4973_19271)" shape-rendering="crispEdges"/>
                                    <path d="M54 35.9093C54 45.8942 47.2488 53 37.2787 53C27.7197 53 20 45.1815 20 35.5C20 25.8185 27.7197 18 37.2787 18C41.9328 18 45.8484 19.7288 48.8652 22.5796L44.1623 27.1593C38.0102 21.1472 26.5701 25.6633 26.5701 35.5C26.5701 41.6038 31.3844 46.5504 37.2787 46.5504C44.1205 46.5504 46.6844 41.5827 47.0885 39.0071H37.2787V32.9879H53.7283C53.8885 33.8841 54 34.745 54 35.9093Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_4973_19271" x="0" y="0" width="74" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.209677 0 0 0 0 0.169313 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4973_19271"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4973_19271" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_4973_19271" x1="10.0762" y1="2.00002" x2="67.8953" y2="2.63062" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EF3C89"/>
                                    <stop offset="0.935417" stop-color="#F9B93F"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_4973_19271" x1="37" y1="2" x2="37" y2="69" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F26A96"/>
                                    <stop offset="1" stop-color="#C4268E" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                            <a href='#'>
                                <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_4973_19273)">
                                    <rect x="4" y="2" width="68" height="67" rx="33.5" fill="url(#paint0_linear_4973_19273)" fill-opacity="0.78" shape-rendering="crispEdges"/>
                                    <rect x="4.5" y="2.5" width="67" height="66" rx="33" stroke="url(#paint1_linear_4973_19273)" shape-rendering="crispEdges"/>
                                    <g clip-path="url(#clip0_4973_19273)">
                                    <path d="M55.1661 18L39.7188 29.5146L42.5913 22.7287L55.1661 18Z" fill="#E17726"/>
                                    <path d="M20.8711 18.0137L33.4122 22.7296L36.1398 29.6045L20.8711 18.0137Z" fill="#E27625"/>
                                    <path d="M48.9482 42.4883L55.7757 42.6192L53.3896 50.7852L45.0586 48.4744L48.9482 42.4883Z" fill="#E27625"/>
                                    <path d="M27.0517 42.4883L30.9269 48.4744L22.6099 50.7853L20.2383 42.6192L27.0517 42.4883Z" fill="#E27625"/>
                                    <path d="M35.7692 27.8535L36.0483 36.932L27.6992 36.5493L30.074 32.94L30.1041 32.9052L35.7692 27.8535Z" fill="#E27625"/>
                                    <path d="M40.1441 27.752L45.8956 32.9053L45.9254 32.9398L48.3002 36.5491L39.9531 36.9317L40.1441 27.752Z" fill="#E27625"/>
                                    <path d="M31.1704 42.5146L35.7293 46.093L30.4336 48.6687L31.1704 42.5146Z" fill="#E27625"/>
                                    <path d="M44.8288 42.5137L45.5503 48.6683L40.2695 46.0923L44.8288 42.5137Z" fill="#E27625"/>
                                    <path d="M40.3867 45.7559L45.7455 48.3699L40.7608 50.7565L40.8125 49.1791L40.3867 45.7559Z" fill="#D5BFB2"/>
                                    <path d="M35.6103 45.7568L35.2012 49.1531L35.2347 50.7544L30.2383 48.3697L35.6103 45.7568Z" fill="#D5BFB2"/>
                                    <path d="M34.0627 38.1162L35.463 41.081L30.6953 39.674L34.0627 38.1162Z" fill="#233447"/>
                                    <path d="M41.9351 38.1172L45.3183 39.6746L40.5352 41.0812L41.9351 38.1172Z" fill="#233447"/>
                                    <path d="M31.5341 42.4844L30.7634 48.865L26.6328 42.6239L31.5341 42.4844Z" fill="#CC6228"/>
                                    <path d="M44.4648 42.4844L49.3662 42.6239L45.2201 48.8652L44.4648 42.4844Z" fill="#CC6228"/>
                                    <path d="M48.4229 36.1885L44.8558 39.8507L42.1057 38.5846L40.789 41.3732L39.9258 36.5779L48.4229 36.1885Z" fill="#CC6228"/>
                                    <path d="M27.5781 36.1885L36.0767 36.578L35.2135 41.3732L33.8965 38.585L31.1608 39.8508L27.5781 36.1885Z" fill="#CC6228"/>
                                    <path d="M27.3359 35.4365L31.3716 39.562L31.5115 43.6347L27.3359 35.4365Z" fill="#E27525"/>
                                    <path d="M48.6674 35.4297L44.4844 43.6426L44.6419 39.5625L48.6674 35.4297Z" fill="#E27525"/>
                                    <path d="M35.8794 35.6875L36.0418 36.7174L36.4432 39.2831L36.1852 47.1634L34.9652 40.8331L34.9648 40.7676L35.8794 35.6875Z" fill="#E27525"/>
                                    <path d="M40.1198 35.6738L41.0368 40.7682L41.0364 40.8336L39.8134 47.1798L39.765 45.5924L39.5742 39.237L40.1198 35.6738Z" fill="#E27525"/>
                                    <path d="M45.0006 39.3984L44.864 42.937L40.6067 46.2785L39.7461 45.6659L40.7108 40.6601L45.0006 39.3984Z" fill="#F5841F"/>
                                    <path d="M31.0117 39.3984L35.2867 40.6601L36.2514 45.6659L35.3907 46.2784L31.1332 42.9366L31.0117 39.3984Z" fill="#F5841F"/>
                                    <path d="M29.4258 47.5879L34.8725 50.1877L34.8494 49.0776L35.3051 48.6746H40.6958L41.1681 49.0762L41.1333 50.1856L46.5454 47.5945L43.9119 49.7868L40.7273 51.9903H35.2615L32.079 49.7778L29.4258 47.5879Z" fill="#C0AC9D"/>
                                    <path d="M39.9986 45.4092L40.7687 45.9572L41.22 49.5845L40.5669 49.029H35.4375L34.7969 49.5957L35.2333 45.9575L36.0037 45.4092H39.9986Z" fill="#161616"/>
                                    <path d="M54.1473 18.3184L56.0015 23.9223L54.8435 29.5885L55.6681 30.2294L54.5523 31.087L55.3909 31.7394L54.2805 32.7582L54.9622 33.2556L53.153 35.3842L45.7322 33.2076L45.6679 33.1729L40.3203 28.6284L54.1473 18.3184Z" fill="#763E1A"/>
                                    <path d="M21.8543 18.3184L35.6813 28.6284L30.3338 33.1729L30.2694 33.2076L22.8486 35.3842L21.0394 33.2556L21.7206 32.7586L20.6107 31.7394L21.4477 31.0877L20.3152 30.2276L21.1709 29.5864L20 23.9225L21.8543 18.3184Z" fill="#763E1A"/>
                                    <path d="M45.3679 32.7324L53.2307 35.0386L55.7852 42.9699L49.0459 42.9699L44.4023 43.0289L47.7793 36.3978L45.3679 32.7324Z" fill="#F5841F"/>
                                    <path d="M30.6336 32.7324L28.2217 36.3978L31.5991 43.0289L26.9578 42.9699H20.2305L22.7706 35.0386L30.6336 32.7324Z" fill="#F5841F"/>
                                    <path d="M42.9753 22.6904L40.776 28.6743L40.3093 36.7579L40.1307 39.2915L40.1166 45.7639H35.8822L35.8684 39.3037L35.6893 36.7556L35.2223 28.6743L33.0234 22.6904H42.9753Z" fill="#F5841F"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_4973_19273" x="0" y="0" width="76" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.209677 0 0 0 0 0.169313 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4973_19273"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4973_19273" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_4973_19273" x1="10.2603" y1="2.00002" x2="69.8311" y2="2.66941" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EF3C89"/>
                                    <stop offset="0.935417" stop-color="#F9B93F"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_4973_19273" x1="38" y1="2" x2="38" y2="69" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F26A96"/>
                                    <stop offset="1" stop-color="#C4268E" stop-opacity="0"/>
                                    </linearGradient>
                                    <clipPath id="clip0_4973_19273">
                                    <rect width="36" height="34" fill="white" transform="translate(20 18)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href='#'>
                                <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_4973_19305)">
                                    <rect x="4" y="2" width="68" height="67" rx="33.5" fill="url(#paint0_linear_4973_19305)" fill-opacity="0.78" shape-rendering="crispEdges"/>
                                    <rect x="4.5" y="2.5" width="67" height="66" rx="33" stroke="url(#paint1_linear_4973_19305)" shape-rendering="crispEdges"/>
                                    <g clip-path="url(#clip0_4973_19305)">
                                    <path d="M55.2696 24.7617C53.9956 25.3287 52.6236 25.7067 51.1886 25.8817C52.6586 24.9997 53.7786 23.6067 54.3106 21.9547C52.9386 22.7597 51.4196 23.3547 49.8026 23.6697C48.5076 22.2907 46.6596 21.4297 44.6156 21.4297C40.6886 21.4297 37.5106 24.6077 37.5106 28.5347C37.5106 29.0947 37.5736 29.6337 37.6926 30.1517C31.7916 29.8577 26.5556 27.0297 23.0486 22.7317C22.4396 23.7817 22.0896 24.9997 22.0896 26.3017C22.0896 28.7657 23.3426 30.9427 25.2466 32.2167C24.0846 32.1817 22.9856 31.8597 22.0266 31.3277C22.0266 31.3557 22.0266 31.3837 22.0266 31.4187C22.0266 34.8627 24.4766 37.7327 27.7246 38.3837C27.1296 38.5447 26.4996 38.6357 25.8556 38.6357C25.4006 38.6357 24.9526 38.5937 24.5186 38.5097C25.4216 41.3307 28.0466 43.3887 31.1546 43.4447C28.7256 45.3487 25.6596 46.4827 22.3346 46.4827C21.7606 46.4827 21.1936 46.4477 20.6406 46.3847C23.7836 48.4007 27.5216 49.5767 31.5326 49.5767C44.6016 49.5767 51.7486 38.7547 51.7486 29.3607C51.7486 29.0527 51.7416 28.7447 51.7276 28.4437C53.1136 27.4357 54.3176 26.1827 55.2696 24.7617Z" fill="white"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_4973_19305" x="0" y="0" width="76" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.209677 0 0 0 0 0.169313 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4973_19305"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4973_19305" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_4973_19305" x1="10.2603" y1="2.00002" x2="69.8311" y2="2.66941" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EF3C89"/>
                                    <stop offset="0.935417" stop-color="#F9B93F"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_4973_19305" x1="38" y1="2" x2="38" y2="69" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F26A96"/>
                                    <stop offset="1" stop-color="#C4268E" stop-opacity="0"/>
                                    </linearGradient>
                                    <clipPath id="clip0_4973_19305">
                                    <rect width="35" height="31.5" fill="white" transform="translate(20.5 19.75)"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateLayout;