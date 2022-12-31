import React from 'react'
import '../css/Temp.css'
import '../css/AllOn6.css'
import { TiTick } from 'react-icons/ti'
import drPrem from '../Assests/drPrem.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import allinfourone from '../Assests/allinfourone.png'
import arrow from '../Assests/arrow.gif'
import Phases_involved from '../Assests/Tourism/Phases_involved.jpg'

// ------tourisum imgaes------------
// ----------Food---------
import food1 from '../Assests/Tourism/Food/food1.jpg'
import food2 from '../Assests/Tourism/Food/food2.jpg'
import food3 from '../Assests/Tourism/Food/food3.png'
import food4 from '../Assests/Tourism/Food/food4.jpg'
import food5 from '../Assests/Tourism/Food/food5.jpg'
import food6 from '../Assests/Tourism/Food/food6.jpg'
//---------historical--------------
import his1 from '../Assests/Tourism/Historical Buidings/his1.jpg'
import his2 from '../Assests/Tourism/Historical Buidings/his2.jpg'
import his3 from '../Assests/Tourism/Historical Buidings/his3.jpg'

import his5 from '../Assests/Tourism/Historical Buidings/his5.jpg'
//---------- religion------------
import rel1 from '../Assests/Tourism/Religious Places/rel1.png'
import rel2 from '../Assests/Tourism/Religious Places/rel2.jpg'
import rel3 from '../Assests/Tourism/Religious Places/rel3.jpg'
import rel4 from '../Assests/Tourism/Religious Places/rel4.jpg'
//----------shop------------
import shop1 from '../Assests/Tourism/Shopping/shop1.jpg'
import shop2 from '../Assests/Tourism/Shopping/shop2.jpg'
import shop3 from '../Assests/Tourism/Shopping/shop3.jpg'
import shop4 from '../Assests/Tourism/Shopping/shop4.jpg'
import shop5 from '../Assests/Tourism/Shopping/shop5.jpg'
//----------things to do-------------
import things1 from '../Assests/Tourism/Things to do/things1.jpg'
import things2 from '../Assests/Tourism/Things to do/things2.jpg'
import things3 from '../Assests/Tourism/Things to do/things3.jpg'
import things4 from '../Assests/Tourism/Things to do/things4.jpg'
import things5 from '../Assests/Tourism/Things to do/things5.jpg'




//------ECR----------------------
import ST from '../Assests/Tourism/ECR/ST.jpg'
import M1 from '../Assests/Tourism/ECR/M1.jpg'
import SS1 from '../Assests/Tourism/ECR/SS1.jpg'
import CB1 from '..//Assests/Tourism/ECR/CB1.jpg'
import D2 from '../Assests/Tourism/ECR/D2.jpg'

function Temp() {
    return (
        <div>
            {/* doctor image */}
            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>Choose Premium Dental Implant Treatments by One of India's Best Implantologists, Dr. Prem Alex Lawrence.</h1>
                <p></p>
            </div>

            <div className='docto_img_main_cont'>
                <div className='docto_img_cont'>

                    <div>
                        <img src={drPrem} data-aos="fade-up" />
                    </div>
                    <div data-aos="fade-up">
                        <p data-aos="fade-up" >With more than 15 years of experience in performing dental miracles Dr Prem is a luminiarry, a certified Diplomate and a Fellow of the International Congress of Oral Implantologistst. He has performed more than 6000+ successful dental implants. His unrivaled clinical expertise offers a tailored and laser-focused approach to treatment.</p>
                        <p data-aos="fade-up" >The International Congress of Oral Implantologists has recognised him as a Diplomat and Fellow. Additionally, he is also a licensed laser specialist. He was nominated for  “Outstanding Dentist of the Year in India- under 45 Years" in 2015 and as "Implantologist in India" by Famdent. Dr Prem is a celebrated member of Indian Dental Association, International Congress of Oral Implants and Indian Society of Periodontology.</p>
                        <p data-aos="fade-up" ></p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="all_on_6_des_title doctor_name_title doctor_name_title11 major_reasons_cont major_reasons_cont1" data-aos="fade-up">
                <h2>6 Major Reasons to Choose Specialized Implant Treatments at our Clinics</h2>
                <p></p>
            </div>

            <div className='why_video_cont'>
                <div>
                    <video data-aos="fade-up" src='https://firebasestorage.googleapis.com/v0/b/apollo-dental.appspot.com/o/Why%20choose%20us%20with%20subs.mp4?alt=media&token=1a33f8ae-a3f7-4d11-8643-f89815e355e7' style={{ width: "100%", height: "100%" }} autoPlay loop controls ></video>
                </div>
            </div>

            {/* know more about cont*/}
            <div className='know_more'>
                <div>
                    <div className='knowmore_cont'>
                        <p data-aos="fade-up" >Implant<br></br>Treatments </p>
                        <a data-aos="fade-up" href='https://www.doctorprem.com/implants/guided-surgeries' target='_blank'>Know more<img data-aos="fade-up" src={arrow} /></a>

                    </div>
                    {/* <div className='knowmore_cont'>
                        <p  data-aos="fade-up" >All-On-4<br></br>Implants</p>
                        <a  data-aos="fade-up" href='https://www.doctorprem.com/AllOn4'>Know more<img  data-aos="fade-up" src={arrow}/></a>
                      
                    </div>
                    <div className='knowmore_cont'>
                        <p  data-aos="fade-up" >All-On-6<br></br> Implants</p>
                        <a  data-aos="fade-up" href='https://www.doctorprem.com/AllOn6'>Know more<img  data-aos="fade-up" src={arrow}/></a>
                        
                    </div> */}

                </div>
            </div>

            <div className='on6_div22_cont on4_2_on6_div22_cont '>
                <div className='on6_div2_cont'>

                    <div className="all_on_6_des_title on4_2_title_all_on_6_des_title " data-aos="fade-up">
                        <h2>About All-On-4</h2>
                        <p></p>
                    </div>

                    <div className='on6_div2_main_cont'>

                        <div className='on6_div2_main_cont_2 on4_on6_div2_main_cont_2' data-aos="fade-up">
                            <p>It is estimated that one in five persons worldwide are missing one or more teeth. The significance of a tooth only becomes apparent when it is missing </p>
                            <p>In an All-On-4 Implant treatment that essentially involves replacement of all missing teeth in one jaw by using only 4 Titanium implants and fixed artificial teeth. It involves a minor surgery after which the implant is placed and a crown is installed. This procedure gives patients a very natural appearing functional replacement tooth. </p>
                            <p>Not every tooth must be lost for this kind of dental implant to be used. Instead, you only need four well corrective implants. For a fully restored smile, they are placed on the top and bottom of your mouth.</p>
                            <p>The All-On-4 implants are positioned at an angle to allow us to avoid the jawbone's unhealthy areas. This is done so that bone grafting is not necessary. We also expect this to stably support a prosthesis placed just a few days after the operation.</p>
                        </div>
                        <div className='on6_div2_main_cont_1'>
                            <img data-aos="fade-up" src={allinfourone} />
                        </div>
                    </div>

                </div>
            </div>




            <div className='on6_div33_cont on4_3_on6_div33_cont'>
                <div className='on6_div3_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h2>Advantages for All-On-4</h2>
                        <p></p>
                    </div>

                    <div className='on6_div3_main_cont'>
                        <div className='on6_div3_main_cont_2 on4_on6_div3_main_cont_2 on4_on6_div3_main_cont_2 on4_on6_div3_main_cont_2'>
                            <ul>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        <h2>Rewards you with new teeth in just 1 to 2 days</h2>
                                        <p>Within one to two days of your procedure, you will receive your full upper or lower set of teeth. All-On-4 dental implants give restoration that is almost immediate. </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        <h2>Fixtures that are permanent </h2>
                                        <p>The dental sets can be fixedly fastened to your mouth thanks to the four titanium anchors. This implies that, unlike conventional dentures, they won't become loose or move. </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        <h2>Fewer implants means faster recovery time  </h2>
                                        <p>There is less recovery time and pain connected with the treatment because there are only 4 anchor points rather than individual anchors placed throughout the mouth. </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        <h2>More budget friendly </h2>
                                        <p>Most of the time, All-On-4 dental implants are less expensive than having to replace each tooth separately.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        <h2>Excellent across all ages. </h2>
                                        <p>All-On-4 dental implants are an excellent solution for people of all ages who wear dentures or have decayed teeth.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            <div className='on6_div33_cont'>
                <div className='on6_div3_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h2>Who needs an All-On-6 implant?</h2>
                        <p></p>
                    </div>

                    <div className='on6_div3_main_cont'>
                        <div className='on6_div3_main_cont_2'>
                            <ul>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        If you are young, lose all your teeth and have adequate bone, with All-On-6 you can have your entire set of teeth again.
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        We prescribe All-On-6 implants for patients who have an entire arch of missing teeth or who have partial tooth loss. All patients will receive a complete arch dental implant to replace their missing teeth. The All-On-6 approach is recommended as a reliable, long-term replacement for conventional dentures.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            <div className='on6_div33_cont on6_footer'>
                <div className='on6_div3_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h2>How does the procedure work?</h2>
                        <p></p>
                    </div>

                    <div className='on6_div3_main_cont'>

                        <div className='on6_div3_main_cont_2'>
                            <ul>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        The surgery is completed in a single day and takes between 2-4 hours and will also depend on the patient's age, overall health and other faculties. We hope to restore your gorgeous smile completely and let you go back to work the following day thanks to our same-day surgery!
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>





            {/* vlog   */}
            <div className="all_on_6_des_title doctor_name_title doctor_name_title11 learn_more_cont" data-aos="fade-up">
                <h2>Learn More</h2>
                <p></p>
            </div>
            <div className='vlogn_cont'>
                <div>
                    <iframe data-aos="fade-up" width="100%" height="100%" src="https://www.youtube.com/embed/rpNCtuSEYlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            {/*FAQ*/}



            <div className="all_on_6_des_title" data-aos="fade-up">
                <h2>International Patient Process: A Walk Through</h2>

            </div>

            <div className='walk_through_cont'>
                <p>We understand that coming to a foreign land and getting life saving care can be intimidating. We offer you premium dental treatments at moderate costs. To help our international patients have a streamlined and easy experience we have put together an easy patient process that will make their treatment and stay safe and pleasant. We provide end-to-end care from the time you contact us.</p>
                <p>Our dentists will call you and assess your teeth and gums using Zoom, Skype, and email. After that, we can develop a preliminary treatment plan, and you can arrange to come see us. When necessary, our staff will collect you up from the airport, shuttle you to your hotel, and then drop you at our dental clinic. After your arrival, we discuss your travel alternatives based on the treatment plan for you and your family members or guests that accompany you.</p>
            </div>



            {/* Discover Chennai */}
            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h2>Phases involved</h2>
                <p></p>
            </div>

            <div className='phase_involved_cont'>
                <img src={Phases_involved} />
            </div>

            {/* video consultation*/}
            <div className='video_consult_cont'>

            </div>






        </div>
    )
}

export default Temp