import './App.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './product';
import React from 'react';
import Flush from './Flush';
import './Media.min.css';

function App() {
    return (
        <div>
            {/* Header_Start */}
            <header className="w-100 d-flex justify-content-between fw-medium align-items-center ">
                <figure className="logo w-25 mb-0">
                    <a href="#1" className="logo_img positon-relative"><img src="images/logo.png" alt="logo" title="logo" className="mw-100" /></a>
                </figure>
                <nav className="w-50 py-2">
                    <ul className="d-flex justify-content-between align-items-center position-relative px-4 mb-0">
                        <li className="position-relative active"><a href="#1banner" className="text-capitalize position-relative">home</a></li>
                        <li className="position-relative"><a href="#product" className="text-capitalize position-relative">services</a></li>
                        <li className="position-relative"><a href="#deal" className="text-capitalize position-relative">pricing</a></li>
                        <li className="position-relative"><a href="#client" className="text-capitalize position-relative">testimonials</a></li>
                        <li className="position-relative"><a href="#blog" className="text-capitalize position-relative">news</a></li>
                    </ul>
                </nav>
                <div className="header_link w-25 text-end">
                    <a href="#1" className="purchase text-white rounded-1">purchase now</a>
                </div>
            </header>
            {/* Header_End */}

            {/* Banner_Start */}
            <section id="banner" className="pt-5">
                <div className="banner_inner text-center pt-5 m-auto">
                    <div className="container pt-5">
                        <div className="banner_img mt-5 m-auto">
                            <img src="images/banner_img.png" alt="banner_img" title="banner_img" className="mw-100" />
                        </div>
                        <h2 className="text-center text-capitalize m-auto mt-3 mb-5">create beautiful landing page in few minutes</h2>
                        <div className="landing pt-5 position-relative">
                            <img src="images/landing_page.png" alt="landing_page" title="landing_page" className="landing_page mw-100" />
                            <img src="images/waves.png" alt="waves" title="waves" className="landing_icons1" />
                            <img src="images/dot.png" alt="dot" title="dot" className="landing_icons2" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner_End */}

            {/* Product_Start */}
            <div>
                <Product />
            </div>
            {/* Product_End */}

            {/* Jackpots_Start */}
            <section className="jackpots pt-5 mb-5">
                <div className="container-fluid">
                    <div className="jackpots_inner d-grid text-center m-auto">
                        <div className="jackpots_img">
                            <figure className="jackpots_image">
                                <img src="images/jackpot.png" alt="jackpot" title="jackpot" className="mw-100 img-fluid" />
                            </figure>
                        </div>
                        <div className="jackpots_content text-start ps-2 pt-5">
                            <h5 className="text-capitalize mb-3">core features</h5>
                            <h2>Smart Jackpots that you may love this</h2>
                            <div className="smart_features pt-4 d-flex flex-rap justify-content-between">
                                <div className="smart_img">
                                    <img src="images/smart.png" alt="smart" title="smart" classNameName='mw-100' />
                                </div>
                                <div className="smart_para text-start ps-4">
                                    <h4 className="text-capitalize">smart features</h4>
                                    <p>Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.</p>
                                </div>
                            </div>
                            <div className="smart_features pt-2 d-flex flex-rap justify-content-between">
                                <div className="smart_img">
                                    <img src="images/secure.png" alt="secure" title="secure" classNameName='mw-100' />
                                </div>
                                <div className="secure_para text-start ps-4">
                                    <h4 className="text-capitalize">secure contents</h4>
                                    <p>Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Jackpots_End */}

            {/* Behind_Start */}
            <section className="behind py-5">
                <div className="container-fluid">
                    <div className="behind_inner d-grid m-auto mb-5">
                        <div className="behind_content">
                            <h5 className="mb-4">Behind the design</h5>
                            <h2 className="mb-4">Code that we used to built the website with integrating apps</h2>
                            <p className="pb-4">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                            <a href="#1" className="behind_link">Explore More</a>
                        </div>
                        <div className="behind_image">
                            <figure className="intergreating_img m-auto">
                                <img src="images/intergreating.png" alt="intergreating" title="intergreating" className="mw-100" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            {/* Behind_End */}

            {/* Features_Start */}
            <section className="features">
                <div className="container-fluid">
                    <div className="features_inner text-center pt-5 m-auto">
                        <div className="features_top pt-5 mb-5">
                            <h2 className="text-capitalize pb-2 mb-0">what the features of product</h2>
                            <p className="text-uppercase">Introducing all screen details</p>
                        </div>
                        <div className="features_bottom pt-4">
                            <div className="features_link w-75 d-flex flex-row justify-content-between m-auto">
                                <div className="features_details active position-relative d-flex justify-content-between align-items-center">
                                    <div className="budget">
                                        <a href="#1"><i className="fa-solid fa-dollar-sign fa-lg icons"></i></a>
                                    </div>
                                    <h4 className="text-capitalize ps-3"><a href="#1" className="text-decoration-none">budget overview</a></h4>
                                </div>
                                <div className="features_details d-flex  position-relative justify-content-between align-items-center">
                                    <a href="#1" className="create_adjust"><i className="fa-solid fa-gear fa-2xl"></i></a>
                                    <h4 className="text-capitalize ps-3"><a href="#1" className="text-decoration-none">create & adjust</a></h4>
                                </div>
                                <div className="features_details d-flex position-relative justify-content-between align-items-center">
                                    <a href="#1"><i className="fa-solid fa-chart-pie fa-2xl"></i></a>
                                    <h4 className="text-capitalize ps-3"><a href="#1" className="text-decoration-none">view reports</a></h4>
                                </div>
                                <div className="features_details d-flex position-relative justify-content-between align-items-center">
                                    <a href="#1"><i className="fa-solid fa-suitcase fa-2xl"></i></a>
                                    <h4 className="text-capitalize ps-3"><a href="#1" className="text-decoration-none">create & adjust</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="summary_chart position-relative m-auto">
                        <img src="images/chart.png" alt="chart" title="chart" className=" chart img-fluid mw-100" />
                        <img src="images/dot.png" alt="dot" title="dot" className="chart_bg" />
                    </div>
                </div>
            </section>
            {/* Features_End */}

            {/* Deal_Start */}
            <section id="deal">
                <div className="container-fluid pt-5 mt-5">
                    <div className="deal_inner pt-5 m-auto">
                        <div className="deal_top text-center">
                            <h2 className="pb-1">What deal suit you perfect</h2>
                            <p>Meet our pricing plan</p>
                        </div>
                        <div className="deal_bottom pt-3">
                            <div className="plans_inner text-center my-5 m-auto">
                                <a href="#1" className="active me-2">Monthly Plan</a>
                                <a href="#1">Annual Plan</a>
                            </div>
                            <div className="annual_packs d-flex flex-row-sm justify-content-between align-items-center m-auto mb-5">
                                <div className="team_pack border">
                                    <div className="pack_inner px-5">
                                        <img src="images/pack1.png" alt="pack1" title="pack1" className="mw-100" />
                                        <h4 className="pt-4 mb-4 text-capitalize">for team pack</h4>
                                        <div className="pack_content d-flex flex-row">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Ultimate access to all course, exercises and assessments</p>
                                        </div>
                                        <div className="pack_content d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Free access for all kind of exercise corrections with downloads.</p>
                                        </div>
                                        <div className="pack_content d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Total assessment corrections with free download access system</p>
                                        </div>
                                        <div className="pack_content2 d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-xmark fa-lg"></i>
                                            <p className="close ps-3 mb-0">Unlimited download of courses on the mobile app contents</p>
                                        </div>
                                        <div className="pack_content2 d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-xmark fa-lg"></i>
                                            <p className="close ps-3 mb-0">Download and print courses and exercises in PDF</p>
                                        </div>
                                    </div>
                                    <div className="pack_bottom d-flex flex-row align-items-center rounded-bottom-3 mt-5 py-4 px-5">
                                        <div className="start_link w-75 py-3">
                                            <h4 className="text-capitalize pb-2">starting from</h4>
                                            <h2><a href="#1">29.99/mo</a></h2>
                                        </div>
                                        <div className="arrow w-25 text-end">
                                            <a href="#1"><i className="fa-solid fa-arrow-right fa-xl"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team_pack border position-relative">
                                    <div className="pack_inner px-5">
                                        <img src="images/pack2.png" alt="pack2" title="pack2" className="mw-100" />
                                        <h4 className="pt-4 mb-4 text-capitalize">for organization pack</h4>
                                        <div className="pack_content d-flex flex-row">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Ultimate access to all course, exercises and assessments</p>
                                        </div>
                                        <div className="pack_content d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Free access for all kind of exercise corrections with downloads.</p>
                                        </div>
                                        <div className="pack_content d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Total assessment corrections with free download access system</p>
                                        </div>
                                        <div className="pack_content d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="close ps-3 mb-0">Unlimited download of courses on the mobile app contents</p>
                                        </div>
                                        <div className="pack_content d-flex flex-row pt-4">
                                            <i className="fa-solid fa-circle-check fa-lg"></i>
                                            <p className="ps-3 mb-0">Download and print courses and exercises in PDF</p>
                                        </div>
                                    </div>
                                    <div className="pack_bottom d-flex flex-row align-items-center rounded-bottom-3 mt-5 py-4 px-5">
                                        <div className="start_link w-75 py-3">
                                            <h4 className="text-capitalize pb-2">starting from</h4>
                                            <h2><a href="#1">49.99/mo</a></h2>
                                        </div>
                                        <div className="arrow w-25 text-end">
                                            <a href="#1"><i className="fa-solid fa-arrow-right fa-xl"></i></a>
                                        </div>
                                    </div>
                                    <h5 className="text-capitalize text-center position-absolute rounded-1">recommended</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Deal_End */}

            {/* Client_Start */}
            <section id="client" className="py-5">
                <div className="container-fluid">
                    <div className="client_inner text-center m-auto pt-4">
                        <h2 className="text-capitalize pb-2">what client say about us</h2>
                        <p className="text-uppercase">customer testimonial</p>
                    </div>
                </div>
                <div id="carouselExampleInterval" className="carousel slide pt-3 mt-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="900">
                            <div className="carousel_content d-flex flex-row justify-content-evenly align-items-center">
                                <div className="carousel_review">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/henry.jpg" alt="henry" title="henry" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jackson henry</h5>
                                                <h6>@hello.henry</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/anderson.jpg" alt="anderson" title="anderson" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">anderson peter</h5>
                                                <h6>@hi.anderson</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review third">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>Thank you for all your help. Your service was excellent and very FAST.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/butler.jpg" alt="butler" title="butler" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">john butler</h5>
                                                <h6>@myself.butler</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2">
                                        <p>For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/watson.jpg" alt="watson" title="watson" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">james watson</h5>
                                                <h6>@hey.james</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review fifth">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/mary.jpg" alt="mary" title="mary" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">tony mary</h5>
                                                <h6>@me.mary</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/conway.jpg" alt="conway" title="conway" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jimmy conway</h5>
                                                <h6>@hello.henry</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review">
                                    <div className="carousel_reviews bg-white rounded p-4 me-2 mb-4">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/james.jpg" alt="james" title="james" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">peter james</h5>
                                                <h6>@peter.james</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 me-2">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/leena.jpg" alt="leena" title="leena" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jackson leena</h5>
                                                <h6>@jack.lee</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="100">
                            <div className="carousel_content d-flex flex-row justify-content-evenly align-items-center">
                                <div className="carousel_review">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/henry.jpg" alt="henry" title="henry" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jackson henry</h5>
                                                <h6>@hello.henry</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/anderson.jpg" alt="anderson" title="anderson" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">anderson peter</h5>
                                                <h6>@hi.anderson</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review third">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>Thank you for all your help. Your service was excellent and very FAST.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/butler.jpg" alt="butler" title="butler" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">john butler</h5>
                                                <h6>@myself.butler</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2">
                                        <p>For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/watson.jpg" alt="watson" title="watson" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">james watson</h5>
                                                <h6>@hey.james</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review fifth">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/mary.jpg" alt="mary" title="mary" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">tony mary</h5>
                                                <h6>@me.mary</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/conway.jpg" alt="conway" title="conway" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jimmy conway</h5>
                                                <h6>@hello.henry</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review">
                                    <div className="carousel_reviews bg-white rounded p-4 me-2 mb-4">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/james.jpg" alt="james" title="james" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">peter james</h5>
                                                <h6>@peter.james</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 me-2">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/leena.jpg" alt="leena" title="leena" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jackson leena</h5>
                                                <h6>@jack.lee</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel_content d-flex flex-row justify-content-evenly align-items-center">
                                <div className="carousel_review">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/henry.jpg" alt="henry" title="henry" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jackson henry</h5>
                                                <h6>@hello.henry</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/anderson.jpg" alt="anderson" title="anderson" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">anderson peter</h5>
                                                <h6>@hi.anderson</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review third">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>Thank you for all your help. Your service was excellent and very FAST.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/butler.jpg" alt="butler" title="butler" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">john butler</h5>
                                                <h6>@myself.butler</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2">
                                        <p>For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/watson.jpg" alt="watson" title="watson" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">james watson</h5>
                                                <h6>@hey.james</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review fifth">
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/mary.jpg" alt="mary" title="mary" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">tony mary</h5>
                                                <h6>@me.mary</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 ms-2 mb-4">
                                        <p>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/conway.jpg" alt="conway" title="conway" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jimmy conway</h5>
                                                <h6>@hello.henry</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel_review">
                                    <div className="carousel_reviews bg-white rounded p-4 me-2 mb-4">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/james.jpg" alt="james" title="james" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">peter james</h5>
                                                <h6>@peter.james</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel_reviews bg-white rounded p-4 me-2">
                                        <p>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                                        <div className="carousel_review w-75 d-flex flex-row align-items-center">
                                            <figure className="review_img">
                                                <img src="images/leena.jpg" alt="leena" title="leena" className="mw-100" />
                                            </figure>
                                            <div className="reviewers ps-3">
                                                <h5 className="text-capitalize mb-1">jackson leena</h5>
                                                <h6>@jack.lee</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Client_End */}

            {/* Blog_Start */}
            <section id="blog">
                <div className="container-fluid">
                    <div className="blog_inner pt-5 m-auto">
                        <div className="blog_top text-center pt-4 pb-5">
                            <h2 className="pb-1">Popular blog post we updated</h2>
                            <p>Updete newsfeed blog</p>
                        </div>
                        <div className="blog_bottom">
                            <div className="blog_content d-flex flex-row flex-wrap justify-content-between align-items-center">
                                <div className="blog_para overflow-hidden p-2 mt-0 m-auto">
                                    <figure className="blog_img mb-4">
                                        <img src="images/blog1.jpg" alt="blog1" title="blog1" className="mw-100 rounded-2" />
                                    </figure>
                                    <h3 className="mb-3"><a href="#1" className="mb-4">How to work with prototype design with adobe xd featuring tools</a></h3>
                                    <p>The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design</p>
                                    <a href="#1" className="text-capitalize position-relative">learn more <i className="fa-solid fa-angle-right position-absolute" style={{ "color": "#1006bc5;" }}></i></a>
                                </div>
                                <div className="blog_para overflow-hidden p-2 m-auto">
                                    <h4 className="p-4 rounded-2 mb-4"><a href="#1">Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards</a></h4>
                                    <figure className="blog_img mb-4">
                                        <img src="images/blog2.jpg" alt="blog2" title="blog2" className="mw-100 rounded-2" />
                                    </figure>
                                    <h3><a href="#1" className="mb-4">Multiple art board prototype with Figma</a></h3>
                                    <p>Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos</p>
                                    <a href="#1" className="text-capitalize">learn more <i className="fa-solid fa-angle-right" style={{ "color": "#1006bc5;" }}></i></a>
                                </div>
                                <div className="blog_para overflow-hidden p-2 mt-0 m-auto">
                                    <figure className="blog_img position-relative mb-4 bg-dark rounded-2">
                                        <img src="images/blog4.jpg" alt="blog4" title="blog4" className="mw-100 rounded-2 opacity-50" />
                                        <h3 className="position-absolute"><a href="#1" className="text-white">Multiple task wireframing with team management perform better</a></h3>
                                    </figure>
                                    <figure className="blog_img position-relative mb-4 bg-dark rounded-2">
                                        <img src="images/blog3.jpg" alt="blog3" title="blog3" className="mw-100 rounded-2 opacity-75" />
                                        <h3 className="position-absolute"><a href="#1" className="text-white">Team presentation with latest user interface & experience reach more</a></h3>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog_End */}

            {/* Question_Start */}
            <section className="question pt-5 my-5">
                <div className="container-fluid">
                    <div className="question_inner text-center pt-5 m-auto">
                        <div className="question_top pb-4 mb-5">
                            <h2 className="text-capitalize pb-2 mb-0">frequently ask question</h2>
                            <p className="text-uppercase">ask your question and meet</p>
                        </div>
                        <div className="question_bottom d-flex flex-row flex-wrap justify-content-between">
                            <div className="question_lef m-auto mb-2 mt-0">
                                <h2 className="text-start mb-3">Do you have any quesiton? Please ask here we ready to support</h2>
                                <p className="text-start pb-2">If your question is not list here, please feel free to make a manual support.</p>
                                <div className="question_link">
                                    <a href="#1" className="text-white text-capitalize rounded text ms-0">ask your question</a>
                                </div>
                            </div>
                            <div className="question_rig m-auto">
                                <Flush />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Question_End */}

            {/* Subscribe_Start */}
            <section className="subscribe py-5">
                <div className="container-fluid">
                    <div className="subscribe_inner text-center my-5 m-auto">
                        <h2 className="text-white text-uppercase">Subscribe to get notified about event</h2>
                        <p className="pb-2">By subscribing with your mail, you will accept our privacy policy</p>
                        <form className="mt-4">
                            <input type="text" placeholder="Enter Your Mail" className="ps-5" />
                            <input type="button" value="subscribe us" className="text-uppercase ms-2"></input>
                        </form>
                    </div>
                </div>
            </section>
            {/* Subscribe_End */}

            {/* Follow_Start */}
            <section className="follow py-5">
                <div className="container-fluid">
                    <div className="follow_inner m-auto">
                        <div className="social_networks d-flex flex-row justify-content-evenly align-items-center m-auto">
                            <div className="social_links text-center">
                                <a href="https://www.facebook.com/login/"><i className="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <div className="social_links text-center">
                                <a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                            <div className="social_links text-center">
                                <a href="https://www.instagram.com/accounts/login/"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="social_links text-center">
                                <a href="https://www.linkedin.com/home"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <div className="social_links text-center">
                                <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Follow_End */}

            {/* Footer_Start */}
            <footer className="py-3">
                <div className="container-fluid text-center">
                    <h2>Copywright &copy; 2023 - All rights Reserved.</h2>
                </div>
            </footer>
            {/* Footer_End */}
        </div>
    );
}

export default App;
