import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Flush.css';

const Flush = () =>{
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="item">
                <Accordion.Header><h4 className="p-3 mb-0 fs-4">How much does it cost to be a credit card merchant?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="p-3 text-start">For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="item my-3">
                <Accordion.Header><h4 className="p-3 mb-0">How can I open a merchant account?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="p-3 text-start">For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="item my-3">
                <Accordion.Header><h4 className="p-3 mb-0">How long does the application take?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="p-3 text-start">For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="item my-3">
                <Accordion.Header><h4 className="p-3 mb-0">Can I make payment outside of Hong Kong?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="p-3 text-start">For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="item my-3">
                <Accordion.Header><h4 className="p-3 mb-0">How do I get the payment complete?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="p-3 text-start">For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        // <div>
        //     <div className="question_rig m-auto">
        //                         <div className="frequently_inner text-start border rounded p-4 mb-3">
        //                             <div className="question_content d-flex flex-row justify-content-between align-Items-center mb-4">
        //                                 <h4 className="mb-0">How much does it cost to be a credit card merchant?</h4>
        //                                 <a href="#1"><i className="fa-solid fa-chevron-down" style={{ "color": "#10c1422;" }}></i></a>
        //                             </div>
        //                             <p>For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>
        //                         </div>
        //                         <div className="frequently_inner text-start border rounded p-3 mb-3">
        //                             <div className="question_content d-flex flex-row justify-content-between align-Items-center">
        //                                 <h4 className="mb-0">How can I open a merchant account?</h4>
        //                                 <a href="#1"><i className="fa-solid fa-chevron-right" style={{ "color": "#10c1422;" }}></i></a>
        //                             </div>
        //                         </div>
        //                         <div className="frequently_inner text-start border rounded p-3 mb-3">
        //                             <div className="question_content d-flex flex-row justify-content-between align-Items-center">
        //                                 <h4 className="mb-0">How long does the application take?</h4>
        //                                 <a href="#1"><i className="fa-solid fa-chevron-right" style={{ "color": "#10c1422;" }}></i></a>
        //                             </div>
        //                         </div>
        //                         <div className="frequently_inner text-start border rounded p-3 mb-3">
        //                             <div className="question_content d-flex flex-row justify-content-between align-Items-center">
        //                                 <h4 className="mb-0">Can I make payment outside of Hong Kong?</h4>
        //                                 <a href="#1"><i className="fa-solid fa-chevron-right" style={{ "color": "#10c1422;" }}></i></a>
        //                             </div>
        //                         </div>
        //                         <div className="frequently_inner text-start border rounded p-3 mb-3">
        //                             <div className="question_content d-flex flex-row justify-content-between align-Items-center">
        //                                 <h4 className="mb-0">How do I get the payment complete?</h4>
        //                                 <a href="#1"><i className="fa-solid fa-chevron-right" style={{ "color": "#10c1422;" }}></i></a>
        //                             </div>
        //                         </div>
        //                     </div>
        // </div>
    )
};

export default Flush