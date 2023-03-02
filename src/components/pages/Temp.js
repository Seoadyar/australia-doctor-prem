import React from 'react'
import '../css/Temp.css'
import '../css/AllOn6.css'
import '../css/Home.css'
import { TiTick } from 'react-icons/ti'
import drPrem from '../Assests/drPrem.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import allinfourone from '../Assests/allinfourone.png'
import arrow from '../Assests/arrow.gif'
import "swiper/css";
import "swiper/css/pagination";
//------infography------
import phase1 from '../Assests/infograhy/phase1.jpg'
import phase2 from '../Assests/infograhy/phase2.jpg'
import phase3 from '../Assests/infograhy/phase3.jpg'
import phase4 from '../Assests/infograhy/phase4.jpg'
import phase5 from '../Assests/infograhy/phase5.jpg'
//------home banner------
import banner1 from '../Assests/home-banner/banner1.jpg'
import banner2 from '../Assests/home-banner/banner2.jpg'
//-----bottom banner------
import bottomBanner1 from '../Assests/home-banner/bottomBanner.jpg'
import bottomBanner2 from '../Assests/home-banner/bottomBanner.png'
//------all-on4-treat-banners--------
import treat1 from '../Assests/all-on4-treatment-banners/treat1.jpg'
import treat2 from '../Assests/all-on4-treatment-banners/treat2.jpg'
import treat3 from '../Assests/all-on4-treatment-banners/treat3.jpg'
import treat4 from '../Assests/all-on4-treatment-banners/treat4.jpg'
import treat5 from '../Assests/all-on4-treatment-banners/treat5.jpg'
import Mtreat1 from '../Assests/all-on4-treatment-banners/Mtreat1.jpg'
import Mtreat2 from '../Assests/all-on4-treatment-banners/Mtreat2.jpg'
import Mtreat3 from '../Assests/all-on4-treatment-banners/Mtreat3.jpg'
import Mtreat4 from '../Assests/all-on4-treatment-banners/Mtreat4.jpg'
import Mtreat5 from '../Assests/all-on4-treatment-banners/Mtreat5.jpg'
//-----react-counter---------
import CountUp from "react-countup";
//------meet-out-expert-----
import meetOurExpert from '../Assests/meetOurExpert.jpg'
import MmeetOurExpert from '../Assests/MmeetOurExpert.jpg'

function Temp() {
    return (
        <div>
            {/* slider */}
            <div class="banner_slider">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    // modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='homeBannerImgTxtContainer'>
                        <img src={banner2} className="why_choose_img home_banner_img" />
                        <div className='homeBannerImgTxtContainerBox'>
                            <p>choose premium personalized</p>
                            <p> Dental implant treatment</p>
                            <p>in<br></br> Chennai and Hyderabad</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        {" "}
                        <img src={banner1} className="why_choose_img home_banner_img " />
                    </SwiperSlide>
                </Swiper>
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

            {/* doctor image */}

            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>     <h2>Meet Our Expert</h2></h1>
                <p></p>
            </div>

            <div className='docto_img_main_cont'>
                <div className='docto_img_cont'>

                    <div>
                        <img src={meetOurExpert} data-aos="fade-up" />
                        <img src={MmeetOurExpert} data-aos="fade-up" />
                    </div>
                    {/* <div data-aos="fade-up" className='docto_img_contTextContainer' >
                        <p data-aos="fade-up" >Senior Implantologist with more than 6000 successful dental implantsDiplomat and fellow of the International Congress of Oral ImplantologistsNominated for “Outstanding Dentist of the Year in India- under 45 Years" in 2015 and "Implantologist in India" by Famdent</p>
                        <p><a className="DoctorReadmore" href='https://www.doctorprem.com/advantage/meet-drprem'>Read More</a></p>
                    </div> */}
                </div>
            </div>


            <div className='on6_div22_cont on4_2_on6_div22_cont '>
                <div className='on6_div2_cont'>

                    <div className="all_on_6_des_title on4_2_title_all_on_6_des_title aboveBannerText" data-aos="fade-up">
                        <h2>What you should know before opting for All-On-4 Treatment</h2>
                        <p></p>
                    </div>

                    <div className='on6_div2_main_cont'>

                        <div className='on6_div2_main_cont_2 on4_on6_div2_main_cont_2' data-aos="fade-up">

                        </div>
                        {/* <div className='on6_div2_main_cont_1'>
                            <img data-aos="fade-up" src={allinfourone} />
                        </div> */}
                    </div>

                </div>
            </div>




            <div className='on6_div33_cont on4_3_on6_div33_cont'>
                <div className='on6_div3_cont on6_div3_contTreatSlider'>


                    <div className='advantContainer'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className='advantContainerBox'

                        >
                            <SwiperSlide className='advantContainerBoxItem'>
                                <img src={treat1} />
                                <img src={Mtreat1} />
                            </SwiperSlide>
                            <SwiperSlide className='advantContainerBoxItem'>
                                <img src={treat2} />
                                <img src={Mtreat2} />
                            </SwiperSlide>
                            <SwiperSlide className='advantContainerBoxItem'>
                                <img src={treat3} />
                                <img src={Mtreat3} />
                            </SwiperSlide>
                            <SwiperSlide className='advantContainerBoxItem'>
                                <img src={treat4} />
                                <img src={Mtreat4} />
                            </SwiperSlide>
                            <SwiperSlide className='advantContainerBoxItem'>
                                <img src={treat5} />
                                <img src={Mtreat5} />
                            </SwiperSlide>
                        </Swiper>
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
                                        If you are young, lost all your teeth and have adequate bone, with All-On-6 you can have your entire set of teeth again.
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
                <h2> Subscribe for the latest update</h2>
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
                <p>Apart from the obvious cost savings, our patrons are treated with end-to-end service
                    from the time you get in touch with us. Our dentists will get on the phone with you
                    and evaluate your dental condition over a phone / internet call. Following this, we can
                    make a tentative treatment plan and you can book tickets to visit us.</p>
                <p>Our hospitality
                    staff will pick you up from the airport and drop you off at your hotel before shuttling
                    you to our clinic and back when necessary. Based on the treatment plan, options for
                    tourism can be worked out as well after you and your accompanying guests arrive
                    here. Additionally, we have tie-ups with great local hotels and travel companies that
                    will make your stay luxurious, enjoyable and inexpensive!</p>
            </div>



            {/* Discover Chennai */}
            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h2>Phases involved</h2>
                <p></p>
            </div>
            <div className='inforgrapyContainer'>
                <div className='inforgrapyContainerBox'>
                    <div className='inforgrapyContainerBoxItem'>
                        <img src={phase1} />
                        <ol>
                            <li>
                                Online chat
                            </li>
                            <li>Email: prem.vale@premolar.org</li>
                            <li>Whatsapp call or text at: <a href='tel:8939111172'>+91-8939111172</a></li>
                            <li>Upon contact, our doctors will review your requirements and reach out to you
                                in order to ensure they have a clear understanding of your case. A telephone
                                or video call may be arranged at a time of convenience to ensure complete
                                clarity. This will also allow us to give you an accurate estimate of treatment
                                costs and fees.</li>
                            <li>Upon agreement of the treatment procedure along with discussion of the costs
                                and fees, we will proceed to the next step.</li>
                        </ol>
                    </div>
                    <div className='inforgrapyContainerBoxItem'>
                        <img src={phase2} />
                        <ol>
                            <li>Here we can identify convenient dates for your treatment, following which you
                                will need to obtain an Indian medical visa as well as book flights to the
                                Chennai International Airport (Airport Code: MAA). Comprehensive and
                                detailed information regarding the Indian Medical Visa as well as guidelines

                                on obtaining one can be found
                                at <a href='https://indianvisaonline.gov.in/visa/index.html' >https://indianvisaonline.gov.in/visa/index.html</a>
                            </li>
                            <li>
                                We can also assist you with booking accommodation with some of our hotel
                                partners at lower pre-negotiated rates.
                            </li>
                        </ol>
                    </div>
                    <div className='inforgrapyContainerBoxItem'>
                        <img src={phase3} />
                        <ol>
                            <li>
                                Upon your arrival in Chennai, our hospitality manager will meet you and any
                                accompanying friends/family at the airport and transfer you to your
                                accommodation. Any requirements you may have or any information you
                                might require will be addressed by our hospitality manager.
                            </li>
                            <li>
                                We will also provide you with several other services while you are here
                                including:
                            </li>
                            <li>
                                Complimentary transfers between the airport and your accommodation (both
                                ways).
                            </li>
                            <li>
                                A local mobile phone number so you can contact local establishments easily
                                with internet access while you are on the move.
                            </li>
                        </ol>
                    </div>
                    <div className='inforgrapyContainerBoxItem'>
                        <img src={phase4} />
                        <ol>
                            <li>
                                Once you arrive at our clinic, we will perform a comprehensive clinical
                                evaluation and finalize your treatment plan. Our doctors are very experienced
                                and will explain the options available very systematically. Our staff will ensure
                                you receive the utmost comfort and care during your treatment stages.
                            </li>
                            <li>
                                The duration of the treatment will vary on a case to case basis. In your time
                                outside of treatment, we invite you to explore and experience all that the city
                                has to offer (while following your doctor’s guidelines of course!)
                            </li>
                        </ol>
                    </div>
                    <div className='inforgrapyContainerBoxItem'>
                        <img src={phase5} />
                        <ol>
                            <li>
                                After completing your treatment, our manager will guide you to the airport on
                                your date of departure so you may safely travel home with your new set of
                                pristine teeth!
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* bottom banner*/}
            <div className='bottomBannerContainer'>
                <div className='bottomBannerContainerBox'>
                    <div className='bottomBannerContainerBoxItem'>
                        <div className='bottomBannerContainerBoxItemPiece'>
                            <p><CountUp duration={7} className="counter" end="24" /></p>
                            <p>Number of Dental Specialists</p>
                        </div>
                        <div className='bottomBannerContainerBoxItemPiece'>
                            <p><CountUp duration={7} className="counter" end="9136" /></p>
                            <p>Happy Smiles Generated</p>
                        </div>
                        <div className='bottomBannerContainerBoxItemPiece'>
                            <p><CountUp duration={7} className="counter" end="17" /> Years</p>
                            <p>Years in service</p>
                        </div>


                    </div>
                    <img src={bottomBanner1} />
                    <img src={bottomBanner2} />
                </div>
            </div>






        </div>
    )
}

export default Temp