import React, { useState } from "react";
import Image from "next/image";
import Aircraft1 from "../../../images/blog/aero/multirotor-aircrafts/image1.png";
import Aircraft2 from "../../../images/blog/aero/multirotor-aircrafts/image2.png";
import Aircraft3 from "../../../images/blog/aero/multirotor-aircrafts/image3.gif";
import Rotor1 from "../../../images/blog/aero/multirotor-aircrafts/image4.png";
import Rotor2 from "../../../images/blog/aero/multirotor-aircrafts/image5.png";
import Rotor3 from "../../../images/blog/aero/multirotor-aircrafts/image6.png";
import Aircraft4 from "../../../images/blog/aero/multirotor-aircrafts/image7.png";
import Aircraft5 from "../../../images/blog/aero/multirotor-aircrafts/image8.gif";
import QuadcopterComponents from "../../../images/blog/aero/multirotor-aircrafts/image9.jpg";
import Frame from "../../../images/blog/aero/multirotor-aircrafts/image10.jpg";
import Motor from "../../../images/blog/aero/multirotor-aircrafts/image11.png";
import Propeller from "../../../images/blog/aero/multirotor-aircrafts/image12.png";
import Multirotor from "../../../images/blog/aero/multirotor-aircrafts/image13.png";
import ESC from "../../../images/blog/aero/multirotor-aircrafts/image14.png";
import Battery from "../../../images/blog/aero/multirotor-aircrafts/image15.png";
import FlightController from "../../../images/blog/aero/multirotor-aircrafts/image16.png";
import TransmitterReceiver from "../../../images/blog/aero/multirotor-aircrafts/image17.png";
import LineOfSight from "../../../images/blog/aero/multirotor-aircrafts/image18.gif";
import FirstPersonView from "../../../images/blog/aero/multirotor-aircrafts/image19.gif";
import FPVCamera from "../../../images/blog/aero/multirotor-aircrafts/image20.png";
import AnalogFeed from "../../../images/blog/aero/multirotor-aircrafts/image21.png";
import CameraView from "../../../images/blog/aero/multirotor-aircrafts/image22.jpg";
import FPVDrone from "../../../images/blog/aero/multirotor-aircrafts/image23.jpg";
import Infographic from "../../../images/blog/aero/multirotor-aircrafts/image24.png";

const MultirotorAircrafts = () => {
    const [counter, setCounter] = useState(0);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [quizAnswer, setQuizAnswer] = useState(null);
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    const handleQuizSubmit = (answer) => {
        setQuizAnswer(answer);
        setQuizSubmitted(true);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, comment]);
        setComment("");
    };

    return (
        <div className="text-black bg-white w-screen">
            <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
                <div className="pl-32 backdrop-blur-xl">
                    <h1 className="text-white text-4xl font-bold">Multirotor Aircrafts</h1>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                <p>A multirotor is a rotor based aircraft with 2 or more lift generating rotors...</p>
                <div className="my-8 text-center">
                    <Image src={Aircraft1} />
                    <Image src={Aircraft2} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Aircraft3} />
                    <p>This is a multicopter system designed for agricultural use.</p>
                </div>
                <p>The construction and control is easy for multirotors...</p>
                <div className="my-8 text-center">
                    <Image src={Rotor1} />
                    <Image src={Rotor2} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Rotor3} />
                </div>
                <div className="my-8 text-center">
                    <Image src={QuadcopterComponents} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Frame} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Motor} />
                    <Image src={Propeller} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Multirotor} />
                </div>
                <div className="my-8 text-center">
                    <Image src={ESC} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Battery} />
                </div>
                <div className="my-8 text-center">
                    <Image src={FlightController} />
                </div>
                <div className="my-8 text-center">
                    <Image src={TransmitterReceiver} />
                </div>
                <div className="my-8 text-center">
                    <Image src={LineOfSight} />
                </div>
                <div className="my-8 text-center">
                    <Image src={FirstPersonView} />
                </div>
                <div className="my-8 text-center">
                    <Image src={FPVCamera} />
                    <p>FPV Cam</p>
                    <Image src={AnalogFeed} />
                    <p>Analog feed of the camera</p>
                </div>
                <div className="my-8 text-center">
                    <Image src={CameraView} />
                </div>
                <div className="my-8 text-center">
                    <Image src={FPVDrone} />
                    <p>A freestyle drone has 2 camera mounts. Notice both of them are inclined.</p>
                </div>
                <div className="my-8 text-center">
                    <Image src={Infographic} />
                </div>

                {/* Counter Button */}
                <div className="my-8 text-center">
                    <button onClick={() => setCounter(counter + 1)} className="px-4 py-2 bg-blue-600 text-white rounded">Increment Counter</button>
                    <p>Counter: {counter}</p>
                </div>

                {/* Quiz Section */}
                <div className="my-8">
                    <h2 className="text-2xl font-bold">Quiz</h2>
                    <p>What is the main advantage of using a multirotor aircraft?</p>
                    {!quizSubmitted ? (
                        <div>
                            <button onClick={() => handleQuizSubmit('Simple rotor mechanics')} className="px-4 py-2 bg-blue-600 text-white rounded m-2">Simple rotor mechanics</button>
                            <button onClick={() => handleQuizSubmit('Longer flight time')} className="px-4 py-2 bg-blue-600 text-white rounded m-2">Longer flight time</button>
                            <button onClick={() => handleQuizSubmit('Higher payload capacity')} className="px-4 py-2 bg-blue-600 text-white rounded m-2">Higher payload capacity</button>
                        </div>
                    ) : (
                        <p>Your answer: {quizAnswer} {quizAnswer === 'Simple rotor mechanics' ? "(Correct)" : "(Incorrect)"}</p>
                    )}
                </div>

                {/* Comment Section */}
                <div className="my-8">
                    <h2 className="text-2xl font-bold">Comments</h2>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full p-2 border rounded mb-4" placeholder="Add your comment here" required></textarea>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit Comment</button>
                    </form>
                    <div className="mt-4">
                        {comments.length > 0 ? comments.map((comment, index) => (
                            <div key={index} className="border-b py-2">
                                {comment}
                            </div>
                        )) : <p>No comments yet.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultirotorAircrafts;
