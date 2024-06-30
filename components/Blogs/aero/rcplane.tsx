import React, { useState } from "react";
import Image from "next/image";
import Frame from "../../../images/blog/aero/rcplane/image1.png";
import ESC from "../../../images/blog/aero/rcplane/image2.png";
import Servo from "../../../images/blog/aero/rcplane/image3.png";
import Transmitter from "../../../images/blog/aero/rcplane/image4.jpg";
import Receiver from "../../../images/blog/aero/rcplane/image5.jpg";
import Tractor from "../../../images/blog/aero/rcplane/image6.png";
import Pusher from "../../../images/blog/aero/rcplane/image7.png";

const RCPlane = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [quizAnswers, setQuizAnswers] = useState({
        question1: "",
        question2: ""
    });

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() !== "") {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    const handleQuizChange = (e) => {
        const { name, value } = e.target;
        setQuizAnswers({ ...quizAnswers, [name]: value });
    };

    const handleQuizSubmit = () => {
        // Add logic to handle quiz submission and evaluation
        alert(`Quiz Submitted!\nQuestion 1: ${quizAnswers.question1}\nQuestion 2: ${quizAnswers.question2}`);
    };

    return (
        <div className="text-black bg-white w-screen">
            <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
                <div className="pl-32 backdrop-blur-xl">
                    <h1 className="text-white text-4xl font-bold">RC Plane DIY</h1>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                <p>We have studied the physics and those lengthy theories, we have seen how the plane is controlled, but how about actually building one of those?</p>
                <p>In this section we will build a Radio Controlled plane.</p>

                <h1 className="text-3xl my-8">Components Required</h1>
                <b>Frame</b>
                <p>Arguably the most important part of the entire RC plane has to be the frame. When it comes to making an RC aircraft, choosing the right frame is the first hurdle you need to cross. Our plane will encounter many stresses during its flight, also flying an RC plane takes some time getting used to, so we need to choose the best material for the flight. What are the qualities we can look for? Light-weight, not too pricey, should have good strength. You can use carbon fibre, it is really lightweight and five times stronger than steel! The drawback? It's pricey. So sometimes the fuselage/ only wings are made of carbon fibre.</p>
                <p className="mt-8">Another material which is more popular, is polystyrene foam, comes under the name of depron, has good rigidity and flexibility. And it is affordable too! </p>
                <p>Balsa Wood is also used, it is relatively inexpensive, easy to carve.</p>
                <div className="my-8 text-center">
                    <Image src={Frame} />
                </div>

                <p className="mt-8"><b>Tail</b></p>
                <p>Tail is an important part of a RC plane, reason being, they are a crucial factor for stability and maneuverability. It consists of stabilizers, rudder and elevators.</p>

                <p className="mt-8"><b>Motor</b></p>
                <p>There are two types of motors: Brushed and brushless motors. [Refer to BME]. We generally use brushless motors DC motors(BLDC). A DC motor converts the electric current into Torque and the voltage into rotations per minute(RPM). This motor is used to generate thrust for the aircraft. Learn more <a className="text-blue-600 underline" href="https://rcplanes.online/guide5.htm#:~:text=There%20are%20two%20main%20different,The%20brushed%20and%20the%20brushless.">here</a>. </p>

                <p className="mt-8"><b>ESC</b></p>
                <p>ESCs or electronic speed controllers, control the power going through motors, convert DC to AC current for brushless motors. Also, Receivers require 5V, so ESCs convert voltage provided by batteries. While choosing an ESC, we should consider its amperage rating, preferably more than that required by motors. Also remember that ESC can get very warm, so it is always advisable to use an ESC with a rating more than that required by the motors.</p>
                <div className="my-8 text-center">
                    <Image src={ESC} />
                </div>

                <p className="mt-8"><b>Assignment</b></p>
                <p>Tell us the connection of each wire of esc shown in the diagram with other electronic components of the RC plane.</p>

                <p className="mt-8"><b>Servo</b></p>
                <p>Servo motors are used for adjusting control surfaces while in motion for maneuvering. They are used because of their ability to stop precisely and hold the position. More about servos in the BME BLOG</p>
                <div className="my-8 text-center">
                    <Image src={Servo} />
                </div>

                <p className="mt-8"><b>Assignment</b></p>
                <p>Find out how servo motors mechanically control the control surfaces(rudder, elevator, ailerons).</p>
                <p>Also tell what is the weight of a normal servo motor?</p>

                <p className="mt-8"><b>Battery</b></p>
                <p>Generally LiPo batteries are used for RC systems. Each cell of LiPo battery has a nominal voltage of 3.7V and maximum voltage of 4.2V.</p>

                <p className="mt-8"><b>Transmitter-Receiver</b></p>
                <p>Radio Transmitter is an electronic device that uses radio signals to transmit commands wirelessly via a set radio frequency over to the Radio Receiver, which is connected to our aircraft. In other words, it’s the device that translates pilot’s commands to be received by the receiver. </p>
                <p>Transmitter (with the pilot) and the Receiver (on the airborne vehicle) work on Electromagnetic signals.  A typical RC Transmitter has about 4 to 6 channels with some being proportional, (i.e. controlled surfaces move proportion the movements of the control sticks).</p>
                <p>So what does a channel mean? Radio Transmitter transmits commands via channels. Each channel is an individual action being sent to the aircraft.</p>

                <p>Throttle, Yaw, Pitch and Roll are the four main inputs required to control the plane. Each of them uses one channel, so there is a minimum of four channels required. Every switch, slider or knob on the transmitter uses one channel to send the information through to the receiver.</p>
                <p>Additional channels may function in an "on-off" manner for some additional components.</p>
                <div className="my-8 text-center">
                    <Image src={Transmitter} />
                </div>

                <p>A receiver on the other hand facilitates and communicates the transmitter instructions of the pilot </p>
                <p>Receiver passes on the signal to the flight controller to be further processed.</p>
                <p>A Receiver must be compatible with the Radio Transmitter which in most cases means that the same brand of Rx and Tx need to be purchased in order to establish a communication. There are however radio receivers that may work with the same protocol but are not from the same brand.</p>
                <p>Frequencies (oscillation rate at which these radios work) must also be the same on both Rx and Tx. For instance; a 2.4GHz Transmitter can only work with a 2.4GHz Radio Receiver.</p>
                <div className="my-8 text-center">
                    <Image src={Receiver} />
                </div>

                <p className="mt-8"><b>How do these components fit together?</b></p>
                <p><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=KJWg5HJBGGc">Here</a> is an excellent tutorial.</p>

                <h1 className="text-3xl mt-8">Propulsion System</h1>
                <p>A propulsion system is a machine that produces thrust to push an object forward.</p>
                <p className="mt-8"><b>Types of propulsion systems: </b></p>
                <p><b>1. Tractor</b> : Such propulsion systems have propellers in front</p>
                <div className="my-8 text-center">
                    <Image src={Tractor} />
                    <p>It has propeller at front</p>
                </div>
                <p><b>2. Pusher</b> : Such propulsion systems have propellers at their back.</p>
                <div className="my-8 text-center">
                    <Image src={Pusher} />
                    <p>Propeller fans are at back of plane</p>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                <h2 className="text-2xl font-bold">Quiz</h2>
                <form onSubmit={handleQuizSubmit}>
                    <div className="mt-4">
                        <label className="block text-lg">
                            1. What type of motor is commonly used in RC planes?
                        </label>
                        <input
                            type="text"
                            name="question1"
                            value={quizAnswers.question1}
                            onChange={handleQuizChange}
                            className="mt-2 p-2 border rounded w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-lg">
                            2. What is the primary function of an ESC in an RC plane?
                        </label>
                        <input
                            type="text"
                            name="question2"
                            value={quizAnswers.question2}
                            onChange={handleQuizChange}
                            className="mt-2 p-2 border rounded w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                    >
                        Submit Quiz
                    </button>
                </form>

                <h2 className="text-2xl font-bold mt-8">Like and Comment</h2>
                <div className="flex items-center mt-4">
                    <button
                        onClick={handleLike}
                        className="p-2 bg-green-500 text-white rounded mr-4"
                    >
                        Like
                    </button>
                    <span>{likeCount} Likes</span>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-bold">Comments</h3>
                    <div className="mt-4">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Write your comment..."
                        ></textarea>
                        <button
                            onClick={handleCommentSubmit}
                            className="mt-2 p-2 bg-blue-500 text-white rounded"
                        >
                            Submit Comment
                        </button>
                    </div>
                    <div className="mt-4">
                        {comments.map((cmt, index) => (
                            <div key={index} className="border-b p-2">
                                {cmt}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RCPlane;
