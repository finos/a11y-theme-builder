import React from 'react'
import css from './PreviewDetails.module.css';

export const PreviewDetails: React.FC = () => {

return (
    <div className={css.css}>
    <nav className={css.navbarPrimary}>
        <div className={css.brand}>Brand</div>
        <div className={css.tabWrapper}>
            <button className={`${css.tab} ${css.inherit} ${css.white} ${css.active}`}>Tab 1</button>
            <button className={`${css.tab} ${css.inherit} ${css.white}`}>Tab 2</button>
            <button className={`${css.tab} ${css.inherit} ${css.white}`}>Tab 3</button>
            <button className={`${css.tab} ${css.inherit} ${css.white}`}>Tab 4</button>
        </div>
        <div className={css.actions}>
            <button className={`${css.previewButton} ${css.icon} ${css.inherit} ${css.text}`}>
                <svg className={css.inlineIcon} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
                </svg>
            </button>
            <button className={`${css.previewButton} ${css.icon} ${css.inherit} ${css.text}`}>
                <svg className={css.inlineIcon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5691_24410)">
                        <path
                            d="M22 19.6973H2V17.7276H3V10.8641C3 5.95154 7.03 1.96973 12 1.96973C16.97 1.96973 21 5.95154 21 10.8641V17.7276H22V19.6973ZM5 17.7276H19V10.8641C19 7.03982 15.866 3.93946 12 3.93946C8.134 3.93946 5 7.03982 5 10.8641V17.7276ZM9.5 20.6822H14.5C14.5 21.3352 14.2366 21.9615 13.7678 22.4232C13.2989 22.885 12.663 23.1444 12 23.1444C11.337 23.1444 10.7011 22.885 10.2322 22.4232C9.76339 21.9615 9.5 21.3352 9.5 20.6822V20.6822Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_5691_24410">
                            <rect width="24" height="23.6368" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className={`${css.avatar} ${css.sm} ${css.inherit} ${css.white}`}></div>
        </div>
    </nav>
    <div className={`${css.heroHolder} ${css.containerFluid}`}>
        <div className={css.backgroundImage}></div>
        <div className={css.backgroundOverlay}></div>
        <div className={`${css.backgroundMesh} ${css.inherit}`}></div>
        <div className={css.heroContainerFluid}>
            <div className={css.row}>
                <div className={css.col12}>
                    <div className={`${css.breadcrumbs} ${css.inherit} ${css.small}`}>
                        <a className={css.breadcrumb}>Home</a>
                        <div className={css.spacer}>/</div>
                        <a className={css.breadcrumb}>Page</a>
                        <div className={css.spacer}>/</div>
                        <div className={`${css.breadcrumb} ${css.current}`}>Page</div>
                    </div>
                </div>
            </div>
            <div className={css.row}>
                <div className={css.col6}>
                    <div className={css.heroContent}>
                        <div className={css.heroEvent}>
                            <div className={`${css.eventBox} ${css.inherit}`}>
                                <h1 className={css.day}>12</h1>
                                <div className={`${css.month} ${css.CTA}`}>March</div>
                            </div>
                            <button className={css.inherit}>RSVP</button>
                        </div>
                        <div className={css.heroBody}>
                            <div className={css.heroTitle}>
                                <div className={`${css.heroIcon} ${css.inherit}`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_775_36288)">
                                            <path
                                                d="M3.16104 4.46904C4.32111 3.30877 5.87704 2.63013 7.51664 2.56929C9.15624 2.50846 10.7582 3.06993 12.001 4.14104C13.2428 3.07171 14.8426 2.51087 16.4803 2.5708C18.1179 2.63074 19.6724 3.30701 20.8327 4.46425C21.993 5.62148 22.6733 7.17427 22.7375 8.81173C22.8018 10.4492 22.2451 12.0505 21.179 13.295L13.414 21.085C13.0573 21.4419 12.5788 21.6507 12.0746 21.6697C11.5703 21.6886 11.0775 21.5162 10.695 21.187L10.585 21.086L2.82104 13.295C1.75553 12.0516 1.19862 10.4517 1.26166 8.81542C1.32469 7.1791 2.00303 5.62686 3.16104 4.46904ZM4.57504 5.88304C3.75728 6.70103 3.2859 7.80249 3.25871 8.95881C3.23152 10.1151 3.65063 11.2375 4.42904 12.093L4.57504 12.247L12 19.672L17.303 14.368L13.768 10.833L12.708 11.893C12.4295 12.1717 12.0988 12.3928 11.7348 12.5436C11.3709 12.6945 10.9807 12.7722 10.5868 12.7723C9.79103 12.7725 9.02783 12.4566 8.46504 11.894C7.90225 11.3315 7.58598 10.5685 7.58579 9.77275C7.5856 8.97703 7.90152 8.21383 8.46404 7.65104L10.566 5.54804C9.72951 4.88042 8.68245 4.53273 7.61273 4.56737C6.543 4.60201 5.52063 5.0167 4.72904 5.73704L4.57504 5.88304ZM13.061 8.71104C13.2486 8.52357 13.5029 8.41826 13.768 8.41826C14.0332 8.41826 14.2875 8.52357 14.475 8.71104L18.717 12.953L19.425 12.247C20.2565 11.4162 20.7299 10.293 20.7439 9.1176C20.7579 7.94225 20.3115 6.80806 19.5001 5.9576C18.6887 5.10713 17.5767 4.60791 16.402 4.5667C15.2273 4.52548 14.0831 4.94554 13.214 5.73704L13.061 5.88304L9.87904 9.06504C9.70571 9.23826 9.60202 9.46908 9.58764 9.71371C9.57326 9.95833 9.6492 10.1997 9.80104 10.392L9.87904 10.479C10.0523 10.6524 10.2831 10.7561 10.5277 10.7704C10.7723 10.7848 11.0137 10.7089 11.206 10.557L11.293 10.479L13.061 8.71104Z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_775_36288">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h1>Page Title</h1>
                            </div>
                            <div className={css.heroLine}></div>
                            <div className={css.heroText}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip.
                                </p>
                                <div className={css.buttonArea}>
                                    <button className={`${css.heroButton} ${css.inherit}`}>Button</button>
                                    <button className={`${css.heroButtonSecondary} ${css.inherit} ${css.outline}`}>Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${css.col6} ${css.heroVideo}`}>
                    <img src="img/video.png" style={{margin: "auto"}} />
                </div>
                <div className={`${css.col6} ${css.heroImage} ${css.textCenter}`}>
                    <img src="img/hero-image.png" style={{margin: "auto"}} />
                </div>
            </div>
        </div>
    </div>
    <nav className={`${css.navbarSecondary} ${css.primary}`}>
        <div className={css.tabWrapper}>
            <button className={`${css.tab} ${css.active}`} name="tab-1">Tab 1</button>
            <button className={css.tab} name="tab-2">Tab 2</button>
            <button className={css.tab} name="tab-3">Tab 3</button>
            <button className={css.tab} name="tab-4">Tab 4</button>
        </div>
    </nav>
    <div className={`${css.subPage} ${css.active}`} id="tab-1">
        <section className={css.background}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col6}>
                        <h2>Sample</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className={`${css.previewButton} ${css.CTA}`}>Click here</button>
                    </div>
                </div>
            </div>
        </section>

        <section className={css.background}>
            <div className={css.container}>
                <div className={`${css.row} ${css.justifyContentCenter}`}>
                    <div className={`${css.colLg12} ${css.textCenter}`}>
                        <div className={`${css.gradient1} ${css.backCard}`}>
                            <h2>Benefits of Working With the Innovation Team</h2>
                            <p className={css.body2}>
                                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
                                document or visual presentation.
                            </p>
                            <button className={`${css.CTA} ${css.inherit}`}>Chat With an Expert</button>
                        </div>
                        <div className={`${css.frontCard} ${css.surface} ${css.elevation4}`}>
                            <div className={`${css.list} ${css.iconed} ${css.lgIcon}`}>
                                <div className={css.iconBody}>
                                    <svg className={css.inlineIcon} viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_775_36288)">
                                            <path
                                                d="M3.16104 4.46904C4.32111 3.30877 5.87704 2.63013 7.51664 2.56929C9.15624 2.50846 10.7582 3.06993 12.001 4.14104C13.2428 3.07171 14.8426 2.51087 16.4803 2.5708C18.1179 2.63074 19.6724 3.30701 20.8327 4.46425C21.993 5.62148 22.6733 7.17427 22.7375 8.81173C22.8018 10.4492 22.2451 12.0505 21.179 13.295L13.414 21.085C13.0573 21.4419 12.5788 21.6507 12.0746 21.6697C11.5703 21.6886 11.0775 21.5162 10.695 21.187L10.585 21.086L2.82104 13.295C1.75553 12.0516 1.19862 10.4517 1.26166 8.81542C1.32469 7.1791 2.00303 5.62686 3.16104 4.46904ZM4.57504 5.88304C3.75728 6.70103 3.2859 7.80249 3.25871 8.95881C3.23152 10.1151 3.65063 11.2375 4.42904 12.093L4.57504 12.247L12 19.672L17.303 14.368L13.768 10.833L12.708 11.893C12.4295 12.1717 12.0988 12.3928 11.7348 12.5436C11.3709 12.6945 10.9807 12.7722 10.5868 12.7723C9.79103 12.7725 9.02783 12.4566 8.46504 11.894C7.90225 11.3315 7.58598 10.5685 7.58579 9.77275C7.5856 8.97703 7.90152 8.21383 8.46404 7.65104L10.566 5.54804C9.72951 4.88042 8.68245 4.53273 7.61273 4.56737C6.543 4.60201 5.52063 5.0167 4.72904 5.73704L4.57504 5.88304ZM13.061 8.71104C13.2486 8.52357 13.5029 8.41826 13.768 8.41826C14.0332 8.41826 14.2875 8.52357 14.475 8.71104L18.717 12.953L19.425 12.247C20.2565 11.4162 20.7299 10.293 20.7439 9.1176C20.7579 7.94225 20.3115 6.80806 19.5001 5.9576C18.6887 5.10713 17.5767 4.60791 16.402 4.5667C15.2273 4.52548 14.0831 4.94554 13.214 5.73704L13.061 5.88304L9.87904 9.06504C9.70571 9.23826 9.60202 9.46908 9.58764 9.71371C9.57326 9.95833 9.6492 10.1997 9.80104 10.392L9.87904 10.479C10.0523 10.6524 10.2831 10.7561 10.5277 10.7704C10.7723 10.7848 11.0137 10.7089 11.206 10.557L11.293 10.479L13.061 8.71104Z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_775_36288">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={css.listBody}>
                                    <div className={css.topLevel}>
                                        <div className={css.subtitle1}>Subtitle</div>
                                    </div>
                                    <div className={css.body2}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        amet.</div>
                                </div>
                            </div>
                            <div className={`${css.list} ${css.iconed} ${css.lgIcon}`}>
                                <div className={css.iconBody}>
                                    <svg className={css.inlineIcon} viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_775_36208)">
                                            <path
                                                d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 11H4V19H20V11ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM6 13H8V15H6V13ZM11 13H13V15H11V13ZM16 13H18V15H16V13Z"
                                                fill="black" fill-opacity="0.78" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_775_36208">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className={css.listBody}>
                                    <div className={css.topLevel}>
                                        <div className={css.subtitle1}>Saves time and fast-tracks your solution</div>
                                    </div>
                                    <div className={css.body2}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        amet.</div>
                                </div>
                            </div>
                            <div className={`${css.list} ${css.iconed} ${css.lgIcon}`}>
                                <div className={css.iconBody}>
                                    <svg className={css.inlineIcon} viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_775_40902)">
                                            <path
                                                d="M6.235 6.51623C4.96004 7.81949 4.1795 9.51529 4.02457 11.3186C3.86964 13.1219 4.34977 14.9228 5.38426 16.4185C6.41874 17.9142 7.94451 19.0136 9.70511 19.5318C11.4657 20.0501 13.3538 19.9556 15.052 19.2643C15.167 18.5257 14.915 17.8166 14.812 17.5684C14.582 17.0169 13.824 16.0744 12.559 14.7674C12.221 14.4178 12.243 14.1489 12.364 13.3522L12.377 13.2626C12.459 12.7169 12.597 12.3939 14.462 12.1024C15.41 11.9547 15.659 12.3269 16.004 12.844L16.12 13.0134C16.448 13.4861 16.691 13.5945 17.058 13.7579C17.223 13.8318 17.428 13.9254 17.703 14.078C18.355 14.4454 18.355 14.86 18.355 15.7681V15.8715C18.355 16.2566 18.317 16.5953 18.257 16.8898C19.0244 15.9413 19.5591 14.8312 19.8196 13.6459C20.0801 12.4605 20.0593 11.232 19.7588 10.0559C19.4584 8.87975 18.8863 7.78779 18.0873 6.86501C17.2883 5.94222 16.2838 5.2135 15.152 4.73559C14.599 5.10294 13.84 5.62394 13.575 5.98144C13.44 6.16364 13.248 7.09631 12.625 7.17313C12.463 7.19283 12.244 7.17904 12.012 7.16427C11.39 7.12487 10.54 7.07071 10.268 7.79852C10.095 8.25944 10.065 9.51219 10.624 10.1622C10.714 10.2656 10.731 10.4577 10.67 10.6733C10.59 10.956 10.429 11.1284 10.378 11.1638C10.282 11.1087 10.09 10.889 9.959 10.7403C9.646 10.3808 9.254 9.93273 8.748 9.79485C8.564 9.74462 8.362 9.70325 8.165 9.66189C7.616 9.54863 6.995 9.41961 6.85 9.11627C6.744 8.89369 6.745 8.5874 6.745 8.26436C6.745 7.85367 6.745 7.3898 6.541 6.93972C6.47008 6.77909 6.36585 6.63485 6.235 6.51623ZM12 21.8279C6.477 21.8279 2 17.4187 2 11.9793C2 6.53986 6.477 2.13062 12 2.13062C17.523 2.13062 22 6.53986 22 11.9793C22 17.4187 17.523 21.8279 12 21.8279Z"
                                                fill="black" fill-opacity="0.78" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_775_40902">
                                                <rect width="24" height="23.6368" fill="white"
                                                    transform="translate(0 0.160889)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={css.listBody}>
                                    <div className={css.topLevel}>
                                        <div className={css.subtitle1}>Continuous Innovation</div>
                                    </div>
                                    <div className={css.body2}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        amet.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${css.extraPadding} ${css.background}`}>
            <div className={css.container}>
                <div className={`${css.row} ${css.justifyContentCenter}`}>
                    <div className={`${css.colLg6} ${css.colMd8} ${css.colSm8} ${css.col10} ${css.textCenter}`}>
                        <div className={css.overlineLg}>Who we are</div>
                        <h2>Meet the Innovaiton Team</h2>
                        <p className={css.body2}>
                            Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
                            document or visual presentation.
                        </p>
                    </div>
                </div>
                <div className={`${css.row} ${css.justifyContentCenter}`}>
                    <div className={`${css.colLg2} ${css.colMd2} ${css.col4} ${css.textCenter}`}>
                        <div className={`${css.avatar} ${css.lg} ${css.centered}`}></div>
                        <div className={css.subtitle1}>Dan</div>
                        <p className={css.body2}>
                            Lorem ipsum is common placeholder
                        </p>
                    </div>
                    <div className={`${css.colLg2} ${css.colMd2} ${css.col4} ${css.textCenter}`}>
                        <div className={`${css.avatar} ${css.lg} ${css.centered}`}></div>
                        <div className={css.subtitle1}>Dan</div>
                        <p className={css.body2}>
                            Lorem ipsum is common placeholder
                        </p>
                    </div>
                    <div className={`${css.colLg2} ${css.colMd2} ${css.col4} ${css.textCenter}`}>
                        <div className={`${css.avatar} ${css.lg} ${css.centered}`}></div>
                        <div className={css.subtitle1}>Yessel</div>
                        <p className={css.body2}>
                            Lorem ipsum is common placeholder
                        </p>
                    </div>
                    <div className={`${css.colLg2} ${css.colMd2} ${css.col4} ${css.textCenter}`}>
                        <div className={`${css.avatar} ${css.lg} ${css.centered}`}></div>
                        <div className={css.subtitle1}>Maja</div>
                        <p className={css.body2}>
                            Lorem ipsum is common placeholder
                        </p>
                    </div>
                    <div className={`${css.colLg2} ${css.colMd2} ${css.col4} ${css.textCenter}`}>
                        <div className={`${css.avatar} ${css.lg} ${css.centered}`}></div>
                        <div className={css.subtitle1}>Johnathan</div>
                        <p className={css.body2}>
                            Lorem ipsum is common placeholder
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${css.extraPadding} ${css.background}`}>
            <div className={css.container}>
                <div className={`${css.row} ${css.justifyContentCenter}`}>
                    <div className={`${css.colLg10} ${css.textCenter}`}>
                        <h2>Frequently Asked Quesitons</h2>
                        <div className={css.accordian}>
                            <div className={css.accordianTitle}>
                                <div className={css.subtitle1}>This is my question</div>
                                <div className={`${css.toggleArrow} ${css.icon} ${css.inherit} ${css.elevation0}`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.85 12.6992L10.65 22.8993C10.45 23.0993 10.15 23.0993 9.94999 22.8993L7.15 20.0992C6.95 19.8992 6.95 19.5993 7.15 19.3993L14.55 11.9992L7.15 4.59922C6.95 4.39922 6.95 4.09927 7.15 3.89927L9.94999 1.09922C10.15 0.899219 10.45 0.899219 10.65 1.09922L20.85 11.2993C21.25 11.6993 21.25 12.2992 20.85 12.6992Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={css.accordianContent}>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <div className={css.accordian}>
                            <div className={css.accordianTitle}>
                                <div className={css.subtitle1}>This is my question</div>
                                <div className={`${css.toggleArrow} ${css.icon} ${css.inherit} ${css.elevation0}`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.85 12.6992L10.65 22.8993C10.45 23.0993 10.15 23.0993 9.94999 22.8993L7.15 20.0992C6.95 19.8992 6.95 19.5993 7.15 19.3993L14.55 11.9992L7.15 4.59922C6.95 4.39922 6.95 4.09927 7.15 3.89927L9.94999 1.09922C10.15 0.899219 10.45 0.899219 10.65 1.09922L20.85 11.2993C21.25 11.6993 21.25 12.2992 20.85 12.6992Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={css.accordianContent}>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <div className={css.accordian}>
                            <div className={css.accordianTitle}>
                                <div className={css.subtitle1}>This is my question</div>
                                <div className={`${css.toggleArrow} ${css.icon} ${css.inherit} ${css.elevation0}`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.85 12.6992L10.65 22.8993C10.45 23.0993 10.15 23.0993 9.94999 22.8993L7.15 20.0992C6.95 19.8992 6.95 19.5993 7.15 19.3993L14.55 11.9992L7.15 4.59922C6.95 4.39922 6.95 4.09927 7.15 3.89927L9.94999 1.09922C10.15 0.899219 10.45 0.899219 10.65 1.09922L20.85 11.2993C21.25 11.6993 21.25 12.2992 20.85 12.6992Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={css.accordianContent}>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <div className={css.accordian}>
                            <div className={css.accordianTitle}>
                                <div className={css.subtitle1}>This is my question</div>
                                <div className={`${css.toggleArrow} ${css.icon} ${css.inherit} ${css.elevation0}`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.85 12.6992L10.65 22.8993C10.45 23.0993 10.15 23.0993 9.94999 22.8993L7.15 20.0992C6.95 19.8992 6.95 19.5993 7.15 19.3993L14.55 11.9992L7.15 4.59922C6.95 4.39922 6.95 4.09927 7.15 3.89927L9.94999 1.09922C10.15 0.899219 10.45 0.899219 10.65 1.09922L20.85 11.2993C21.25 11.6993 21.25 12.2992 20.85 12.6992Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={css.accordianContent}>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <div className={css.accordian}>
                            <div className={css.accordianTitle}>
                                <div className={css.subtitle1}>This is my question</div>
                                <div className={`${css.toggleArrow} ${css.icon} ${css.inherit} ${css.elevation0}`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.85 12.6992L10.65 22.8993C10.45 23.0993 10.15 23.0993 9.94999 22.8993L7.15 20.0992C6.95 19.8992 6.95 19.5993 7.15 19.3993L14.55 11.9992L7.15 4.59922C6.95 4.39922 6.95 4.09927 7.15 3.89927L9.94999 1.09922C10.15 0.899219 10.45 0.899219 10.65 1.09922L20.85 11.2993C21.25 11.6993 21.25 12.2992 20.85 12.6992Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={css.accordianContent}>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                                <p className={css.body2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.gradient1}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={`${css.colLg6} ${css.colMd6} ${css.col12}`}>
                        <h2>Shape the furture of our platform and provide feedback.</h2>
                        <p className={css.body1}>
                            Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
                            document or visual presentation.
                        </p>
                        <button className={`${css.CTA} ${css.inherit}`}>Provide feedback</button>
                    </div>
                    <div className={`${css.colLg6} ${css.colMd6} ${css.col12}`}>
                        <div className={`${css.rightCurve} ${css.surface}`}>
                            <img src="img/userTest-2.jpeg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <footer className={`${css.footer} ${css.body2}`}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className={css.copyright}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col12}>
                        Copyright 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={css.subPage} id="tab-2">
        <section className={css.background}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col6}>
                        <h2 className={css.gradientTitle}>Sample gradient sub-title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className={`${css.previewButton} ${css.CTA}`}>Click here</button>
                    </div>
                    <div className={css.col6}>
                        <img src="img/hero-image.png" style={{width: "100%"}} />
                    </div>
                </div>
            </div>
        </section>
        <section className={css.background}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col12}>
                        <h2>Data table</h2>
                        <div className={css.tableTop}>
                            <input type="text" className={css.search} />
                            <div className={css.sort}>
                                <label>Sort By</label>
                                <div className={css.dropdown}>
                                    <button className={`${css.btn} ${css.btnSecondary} ${css.dropdownToggle}`} type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className={css.dropdownMenu}>
                                        <li><a className={css.dropdownItem} href="#">Action</a></li>
                                        <li><a className={css.dropdownItem} href="#">Another action</a></li>
                                        <li><a className={css.dropdownItem} href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <table className={`${css.table} ${css.surface}`}>
                            <thead className={css.primary}>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <footer className={`${css.footer} ${css.body2}`}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className={css.copyright}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col12}>
                        Copyright 2023
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className={css.subPage} id="tab-3">
        <section className={css.background}>
            <div className={css.container}>
                <div className={`${css.row} ${css.justifyContentLeft}`}>
                    <div className={css.col9}>
                        <h2>Sample Forms</h2>

                        <div className={css.mb3}>
                            <label htmlFor="exampleInputEmail1" className={css.formLabel}>First Name</label>
                            <input type="text" className={`${css.formControl} ${css.elevation1}`} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                        <div className={css.mb3}>
                            <label htmlFor="exampleInputEmail1" className={css.formLabel}>last Name</label>
                            <input type="text" className={`${css.formControl} ${css.elevation1}`} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                        <div className={css.mb3}>
                            <label htmlFor="exampleInputEmail1" className={css.formLabel}>Email</label>
                            <input type="email" className={`${css.formControl} ${css.elevation1}`} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                            <div id="emailHelp" className={css.formText}>We'll never share your email with anyone else.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className={`${css.footer} ${css.body2}`}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className={css.copyright}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col12}>
                        Copyright 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={css.subPage} id="tab-4">
        <section className={css.background}>
            <div className={css.container}>
                <div className={`${css.row} ${css.justifyContentCenter}`}>
                    <div className={`${css.col6} ${css.textCenter}`}>
                        <h2 className={css.dropColor}>Sample drop color subtitle</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className={`${css.previewButton} ${css.CTA} ${css.centered}`}>Click here</button>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.background}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={`${css.col12} ${css.textCenter}`}>
                        <h2>Sample Cards</h2>
                    </div>
                </div>
                <div className={css.row}>
                    <div className={`${css.col12} ${css.cardHolder}`}>
                        <div className={`${css.card} ${css.leftAligned} ${css.elevation1}`}>
                            <div className={css.cardTitleArea}>
                                <div className={`${css.iconBody} ${css.primary}`}>
                                    <svg className={css.inlineIcon} width="24" height="24" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
                                    </svg>
                                </div>
                                <div className={css.cardTitle}>
                                    <h5>Lorem ipsum dolor</h5>
                                </div>
                            </div>
                            <div className={css.body2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>

                        <div className={`${css.card} ${css.leftAligned} ${css.elevation1}`}>
                            <div className={css.cardTitleArea}>
                                <div className={`${css.iconBody} ${css.primary}`}>
                                    <svg className={css.inlineIcon} width="24" height="24" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
                                    </svg>
                                </div>
                                <div className={css.cardTitle}>
                                    <h5>Lorem ipsum dolor</h5>
                                </div>
                            </div>
                            <div className={css.body2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className={`${css.card} ${css.leftAligned} ${css.elevation1}`}>
                            <div className={css.cardTitleArea}>
                                <div className={`${css.iconBody} ${css.primary}`}>
                                    <svg className={css.inlineIcon} width="24" height="24" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
                                    </svg>
                                </div>
                                <div className={css.cardTitle}>
                                    <h5>Lorem ipsum dolor</h5>
                                </div>
                            </div>
                            <div className={css.body2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.background}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={`${css.col12} ${css.textCenter}`}>
                        <h2>Sample List</h2>
                    </div>
                </div>
                <div className={`${css.row} ${css.justifyContentCenter}`}>
                    <div className={`${css.col6} ${css.listHolder}`}>
                        <div className={css.list}>
                            <div className={css.imageLg}><img src="img/image-1.jpeg" className={css.wide} /></div>
                            <div className={css.listBody}>
                                <div className={css.overline}>Overline</div>
                                <div className={css.body2}>List Title</div>
                            </div>
                        </div>
                        <div className={css.divider}></div>
                        <div className={css.list}>
                            <div className={css.imageLg}><img src="img/image-2.jpeg" className={css.wide} /></div>
                            <div className={css.listBody}>
                                <div className={css.overline}>Overline</div>
                                <div className={css.body2}>List Title</div>
                            </div>
                        </div>
                        <div className={css.divider}></div>
                        <div className={css.list}>
                            <div className={css.imageLg}><img src="img/image-3.jpeg" className={css.wide} /></div>
                            <div className={css.listBody}>
                                <div className={css.overline}>Overline</div>
                                <div className={css.body2}>List Title</div>
                            </div>
                        </div>
                        <div className={css.divider}></div>
                        <div className={css.list}>
                            <div className={css.imageLg}><img src="img/image-4.jpeg" className={css.wide} /></div>
                            <div className={css.listBody}>
                                <div className={css.overline}>Overline</div>
                                <div className={css.body2}>List Title</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.gradient2}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={`${css.colLg6} ${css.colMd6} ${css.col12}`}>
                        <div className={`${css.leftCurve} ${css.surface}`}>
                            <img src="img/userTest-2.jpeg" />
                        </div>
                    </div>
                    <div className={`${css.colLg6} ${css.colMd6} ${css.col12}`}>
                        <h1>Have questions? Ask the experts!</h1>
                        <p className={css.body1}>
                            Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
                            document or visual presentation.
                        </p>
                        <button className={`${css.CTA} ${css.inherit}`}>Ask the experts</button>
                    </div>


                </div>
            </div>
        </section>
        <footer className={`${css.footer} ${css.body2}`}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className={css.col4}>
                        <h6>Sections</h6>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className={css.copyright}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.col12}>
                        Copyright 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}