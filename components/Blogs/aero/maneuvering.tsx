import React, { useState } from "react";
import Image from "next/image";
import CenterOfGravity1 from "../../../images/blog/aero/maneuvering/image1.png";
import CenterOfGravity2 from "../../../images/blog/aero/maneuvering/image2.png";
import MajorAxes from "../../../images/blog/aero/maneuvering/image3.png";
import BodyParts from "../../../images/blog/aero/maneuvering/image4.png";
import Ailerons from "../../../images/blog/aero/maneuvering/image5.gif";
import Rudder from "../../../images/blog/aero/maneuvering/image6.gif";
import ElevatorPart from "../../../images/blog/aero/maneuvering/image7.png";
import AileronPart from "../../../images/blog/aero/maneuvering/image8.png";
import RudderPart from "../../../images/blog/aero/maneuvering/image9.png";
import GeneralOverview from "../../../images/blog/aero/maneuvering/image10.jpg";

const Maneuvering = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText("");
        }
    };

    const handleQuizChange = (e) => {
        const { name, value } = e.target;
        setQuizAnswers({
            ...quizAnswers,
            [name]: value,
        });
    };

    const handleQuizSubmit = () => {
        setQuizSubmitted(true);
    };

    const quizQuestions = [
        {
            question: "What is the main purpose of the ailerons?",
            options: ["Control pitch", "Control roll", "Control yaw"],
            correctAnswer: "Control roll",
        },
        {
            question: "Where is the rudder located?",
            options: ["On the wings", "On the tail", "On the fuselage"],
            correctAnswer: "On the tail",
        },
        {
            question: "What is the function of the elevators?",
            options: ["Control yaw", "Control roll", "Control pitch"],
            correctAnswer: "Control pitch",
        },
    ];
 
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Maneuvering</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
            <h1 className="text-3xl my-8">Center of gravity And Concept of stability:</h1>
            <p>Ever wondered what would happen when you throw your first built paper plane, which is not controlled by you, there is no one sitting on it, and you just throw it?</p>
            <p>Well, after you let go of that plane, it completely depends on the build of your plane how it goes, it will have to face various <b>disturbances</b>, and <b>how your plane reacts</b> to it depends on its <b>design</b>, and that reaction determines its <b>stability</b>.</p>
          
            <p className="my-8">There are two types of stability we will discuss, one is <b>static stability</b>, which is the initial tendency of aircraft to return to its position, completely dependent on its design. While <b>Dynamic stability</b> is the stability over the course of time. So, not just intention, not just tendency, but coming back so the outcome of disturbing an aircraft depends on its dynamic stability. There are also other types of stability, <b>roll stability</b>, in <b>yaw</b>, in <b>pitch</b>, of course, we want to cover this type of stability too, but it will start to get boring and a little off-topic. 
            We’ll not go into depth as of now, though you are encouraged to learn further about it <a className="text-blue-600 underline" href="https://drive.google.com/file/d/1Jk2GVwEXlz2zK-hDHXUlYVaDtTNeP4tT/view">here</a>.</p>

            <p>Intuitively, you might want to balance to maintain stability, so how should we balance? Like Thanos?</p>
            <p>But we don’t want to go intuitively, so we define three major points,i.e, CG, CP, Neutral Point. Let’s start with the <b>centre of gravity</b>. We won’t discuss the other two points here. </p>
            <p>The center of gravity is the <b>average location of the weight</b> of the aircraft. The weight is distributed throughout the airplane, and for some problems, it is important to know the distribution. But for total aircraft maneuvering, we need to be concerned with only the total weight and the location of the center of gravity. </p> 
            <div className="my-8 text-center">
                  <Image src={CenterOfGravity1}/>
                  <Image src={CenterOfGravity2}/>
            </div>
            <p>Incidentally, do you know that <b>fuel is also stored in the wings</b> of aircraft? Any reason for that? Find out, it's your assignment.</p>
            <div className="my-8 text-center">
                  <Image src={MajorAxes}/>
            </div>

            <p>We have a three-dimensional world, and thus, we have <b>three major axes,i.e, lateral, longitudinal, and vertical</b>, along which motion of an aircraft is controlled (see the section on controlling below). The point of intersection of these three axes gives us the Center of Gravity. The centre of gravity is the point along which the aircraft <b>rotates</b>.</p>
            <p className="mt-8">Now let’s discuss the body parts of the plane as shown in the above image.</p>

            <h1 className="text-3xl my-8">Body Parts</h1>
            <div className="my-8 text-center">
                  <Image src={BodyParts}/>
            </div>
            <p><b>1. Fuselage: </b></p>
            <p>The fuselage is an aircraft's main body section.</p>
            <p className="mt-8"><b>2. Elevators: </b></p>
            <p>Contains rudder and elevators(both vertical and horizontal). </p>
            <p>Vertical elevators are also called fins. The vertical stabilizer keeps the nose of the plane from swinging from side to side, which is called yaw.</p>
            <p className="mt-8"><b>3. Wings: </b></p>
            <p>Wings are responsible for providing lift to the aircraft.</p>
            <p className="mt-8"><b>4. Ailerons: </b></p>
            <p>Ailerons control the roll of the airplane about its longitudinal axis (imagine a straight line running from nose to tail).</p>
            <p>Ailerons come in pairs and are found on the trailing (rear) edge of the wing, and they work opposite to each other i.e. when one aileron moves up, the other one moves down and vice versa.</p>
            <div className="my-8 text-center">
                  <Image src={Ailerons}/>
            </div>
            <p className="mt-8"><b>5. Horizontal stabilizer:</b></p>
            <p>Horizontal stabilizers provide stability to the aircraft, avoiding the up-and-downs of aircraft nose and helps aircraft  to fly straight. It is fixed unlike elevators, which are included in stabilizers, which are movable. The horizontal stabilizer prevents an up-and-down motion of the nose, which is called pitch. But how does horizontal stabilizers provide stability? Think!</p>
            <p className="mt-8"><b>6. Vertical Stabilizer:</b></p>
            <p>A vertical stabilizer provides directional (see yaw below) stability and usually comprises a fixed fin and movable control rudder hinged to its rear edge. Sometimes, there is no hinge and the whole fin surface is pivoted for both stability and control.</p>
            <p className="mt-8"><b>7. Rudder: </b></p>
            <p>The rudder is the hinged section of the fin, or vertical stabilizer, at the rear of the airplane.</p>
            <p>It's used for directional control by changing the yaw of the airplane and works in a positive manner i.e. moving the rudder to the left causes the airplane to turn left and vice versa. Learn more about it in the section below.</p>
            <div className="my-8 text-center">
                  <Image src={Rudder}/>
            </div>

            <h1 className="text-3xl my-8">Controlling the motion of the flight in aircraft </h1>
            <p>The directional control of a fixed-wing aircraft takes place around the lateral, longitudinal, and vertical axes employing flight control surfaces designed to create a movement about these axes. These control surfaces are generally movable and hinged objects.</p>
            <p>There are three axes along which we need to control our aircraft, let’s jump in and understand how manoeuvring is done. Take axes as imaginary lines along which the body can rotate.</p>

            <p className="mt-8"><b>Elevation of an aircraft</b>, also known as Pitch, is controlled by <b>elevators</b>. As the name implies, the elevator helps “elevate” the aircraft. It is usually located on the tail of the aircraft and serves two purposes. The first is to provide stability by producing a downward force on the tail. Aeroplanes are traditionally nose-heavy (to improve stability from turbulence) and this downward force is required to compensate for that. The second is to direct the nose of the aircraft either upwards or downwards, known as pitch, to make the aeroplane climb and descend.    </p>
            <div className="my-8 text-center">
                  <Image src={ElevatorPart}/>
            </div>
            <p>Next is <b>rolling</b>, done by <b>Ailerons</b>, The ailerons are located at the rear of the wing, one or more on each side. They work opposite to each other, so when one is raised, the other is lowered. Their job is to increase the lift on one wing while reducing the lift on the other. By doing this, they roll the aircraft sideways, which allows the aircraft to turn. This is the primary method of steering a fixed-wing aircraft. Modern Large Aircraft has 2 ailerons, one Inboard (near fuselage) and other Outboard (at the end of the wings). Why are the two ailerons provided? Think!</p>
            <div className="my-8 text-center">
                  <Image src={AileronPart}/>
            </div>
            <p>Next, <b>yawing</b>, done by <b>rudders</b>, The rudder is located on the tail of the aircraft. It works identically to a rudder on a boat, steering the nose of the aircraft left and right. Unlike the boat, however, it is not the primary method of steering. Its main purpose is to counteract the drag caused by the lowered aileron during a turn. This adverse yaw, as it is known, causes the nose of the aeroplane to point away, or outwards, from the direction of the turn. The rudder helps to correct this by pushing the nose in the correct direction, maintaining what is known as coordinated flight.</p>
            <div className="my-8 text-center">
                  <Image src={RudderPart}/>
            </div>
            <div className="my-8 text-center">
                  <Image src={GeneralOverview}/>
                  <p className="text-gray-600">(General overview of what we discussed)</p>
            </div>
            <p>Watch <a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XDIg7yVO6zw">this</a> video for demonstration.</p>
          </div>
        </div>
{/* Like button and count */}
                <div className="flex items-center justify-center mt-8">
                    <button onClick={handleLike} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Like {likes}
                    </button>
                </div>

                {/* Comments section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index} className="mb-2">{comment}</li>
                        ))}
                    </ul>
                    <form onSubmit={handleCommentSubmit}>
                        <input
                            type="text"
                            value={commentText}
                            onChange={handleCommentChange}
                            placeholder="Add a comment..."
                            className="border border-gray-400 rounded-md p-2 w-full"
                        />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                            Post Comment
                        </button>
                    </form>
                </div>

                {/* Quiz section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Quiz</h2>
                    {!quizSubmitted ? (
                        <div>
                            {quizQuestions.map((quiz, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-lg font-bold">{quiz.question}</h3>
                                    {quiz.options.map((option, i) => (
                                        <label key={i} className="block">
                                            <input
                                                type="radio"
                                                name={`question${index}`}
                                                value={option}
                                                onChange={handleQuizChange}
                                                disabled={quizSubmitted}
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            ))}
                            <button
                                className="bg-purple-500 text-white px-4 py-2 rounded"
                                onClick={handleQuizSubmit}
                                disabled={quizSubmitted}
                            >
                                Submit Quiz
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-lg font-bold">Quiz Results</h3>
                            {quizQuestions.map((quiz, index) => (
                                <p key={index} className="my-2">
                                    {quiz.question} -{" "}
                                    {quizAnswers[`question${index}`] === quiz.correctAnswer ? (
                                        <span className="text-green-500">Correct</span>
                                    ) : (
                                        <span className="text-red-500">
                                            Incorrect (Correct answer: {quiz.correctAnswer})
                                        </span>
                                    )}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Maneuvering;
