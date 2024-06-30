import React, { useState } from "react";
import Image from "next/image";
import Doraemon from "../../../images/blog/aero/intro/image1.jpg";
import Aeroplane from "../../../images/blog/aero/intro/image2.jpg";
import Doraemon from "../../../images/blog/aero/intro/image1.jpg";
import Aeroplane from "../../../images/blog/aero/intro/image2.jpg";
import BernoullisLaw from "../../../images/blog/aero/intro/image3.png";
import NewtonsLaw from "../../../images/blog/aero/intro/image4.png";
import AngleOfAttack from "../../../images/blog/aero/intro/image5.jpg";
import Aerofoils from "../../../images/blog/aero/intro/image6.png";
import SymmetricAerofoil from "../../../images/blog/aero/intro/image7.png";
import SemiSymmetricalAerofoil from "../../../images/blog/aero/intro/image8.png";
import FlatBottomedAerofoil from "../../../images/blog/aero/intro/image9.png";
import UnderCamberedAerofoil from "../../../images/blog/aero/intro/image10.png";
import RectangularWings from "../../../images/blog/aero/intro/image11.png";
import EllipticalWings from "../../../images/blog/aero/intro/image12.png";
import TaperedWings from "../../../images/blog/aero/intro/image13.png";
import SubsonicAircraft from "../../../images/blog/aero/intro/image14.png";
import TranssonicAircraft from "../../../images/blog/aero/intro/image15.jpg";
import SupersonicAircraft from "../../../images/blog/aero/intro/image16.png";
import HypersonicAircraft from "../../../images/blog/aero/intro/image17.png";

const Intro = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleComment = (comment) => {
        setComments([...comments, comment]);
    };
    const handleQuizAnswer = (question, answer) => {
        setQuizAnswers({ ...quizAnswers, [question]: answer });
    };

    const handleQuizSubmit = () => {
        // Calculate quiz score or display correct answers
        setShowQuizResults(true);
    };

    const resetQuiz = () => {
        setQuizAnswers({});
        setShowQuizResults(false);
    };

    const quizQuestions = [
        {
            question: "According to Newton's first law of motion, an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This is also known as:",
            options: ["Law of Inertia", "Law of Gravity", "Law of Action and Reaction", "Law of Acceleration"],
            correctAnswer: "Law of Inertia",
        },
        {
            question: "Newton's second law of motion states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its:",
            options: ["Velocity", "Mass", "Density", "Volume"],
            correctAnswer: "Mass",
        },
        {
            question: "Newton's third law of motion states that for every action, there is an equal and opposite reaction. This law is crucial in understanding:",
            options: ["Lift generation in wings", "Pressure distribution in fluids", "Drag forces on an aircraft", "Thrust produced by engines"],
            correctAnswer: "Thrust produced by engines",
        },
    ];

    return (
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Introduction</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
           <p>If you have ever wondered how someone could fly, what would you think of? Wings? Propellers? [Because that’s how the Wright brothers did it, duh]. But how does it work? We are here to answer that question for you. That’s what we do in aeromodelling, we design, construct and fly our airplanes. </p>
              <p>So it can be described as the art of designing, building and flying miniaturized aircrafts (Be it powered or unpowered). So, kudos to you, you have been an aeromodeller since your childhood.</p>
              
              <p className="mt-8">But the real question is why do we need to study this field, don’t we already have the best of aircrafts?</p>
              <p>Aero-modelling has an increasing area of scope for the last decades. Aero-modeling may be utilized in many ways. Aero-modeling is a hobby as well as a profession.</p>
              
              <p className="mt-8">Some applications and future opportunities of Aero-modeling are: </p>
              <ul className="mb-8 list-disc list-inside">
                <li>For hobby. Have large demand in various hobby shops, children toys etc.</li>
                <li>For surveillance, various aero-models have been fabricated and improvements are going on in this field.</li>
                <li>Subject of research, design and development.</li>
              </ul>      

              <p>So, without any further ado,</p>
              <p>Let's start with Newton's Laws of Motion, “An object shall stay at rest unless acted upon by an external force”. We are all familiar with this law. </p>
              <p>So, that means we need an upward force to lift an object, Right? </p>
              <p>Let's just use a crane and lift the said person then. </p>

              <p className="my-8">But that’s not flying… </p>

              <p>So, we want the person to have a local force generation, which he can control to decide how he moves. Let’s call this required force <b>Lift</b>. </p>
              <p>So, how would you propose to lift yourself up</p>
              <p><b>Looks at Doraemon with intent</b>, Bamboo-copter? </p>

              <div className="my-8 text-center">
                <Image src={Doraemon}/>
              </div>
                                                                  
              <p>You are close, but not exactly the right equipment for the job. So how about a Plane? Exactly! We will talk about this in detail later. </p>
              <p>Even birds produce lift using wings. (Birds are the reason APJ Abdul Kalam chose to be an aeronautical engineer!) Let’s dive in and find out how.</p>

              <p className="my-8"><b>Revisiting Newton’s Laws of Motion</b></p>
              <p className="mb-8">Jumping to basic physics, Newton’s third law of motion suggests, for every force exerted on an object as an action, there is a force experienced called as a reaction. So for generating lift, the air is to be pushed down by wings(action), so that an equal upward force is generated(reaction).</p>
              <p className="mb-8">Now, we need a medium to work in, yes the air around us. Objectively, a fluid is any substance that flows, and thus air is also a fluid, and thus also follows fluid principles. The air behaves like a fluid with its own set of properties which we can harness to complete our goal of flight. It is because of this fluid we can travel across distances which were unimaginable before.</p>
              <p className="mb-8">One of the properties of the fluid is the resistance to motion offered by the fluid when a solid body moves through it. This <b>resistive force</b> is called <b>Drag</b> force.</p>
              <p className="mb-8">Drag is generated by the difference in velocity between the solid object and the fluid. If there is no motion, there is no drag. It makes no difference whether the object moves through a static fluid or whether the fluid moves past a static solid object. </p>
              <p>So for our person to fly we need to counter 2 forces, Weight and Drag. Weight is countered using the Lift force generated by the person’s flying equipment. The Drag force is countering the thrust which moves the aircraft forward. These 4 four forces are the main aerodynamic forces acting on the craft. In the state of <b>equilibrium flight, the thrust force equals the drag force, and the lift is equal to the weight.</b></p>
              
              <div className="my-8 text-center">
                <Image src={Aeroplane}/>
              </div>

              <p>Lift and drag are aerodynamic forces that depend on the shape and size of the aircraft, air conditions, and the flight velocity. Lift is directed perpendicular to the flight path and drag is directed along the flight path.</p>
              <p className="mt-8">As lift and drag, both are aerodynamic forces, their ratio is important to the aerodynamic efficiency. Their ratio is called the <b>L/D ratio</b>. An aeroplane has a high L/D ratio if lift generation is high compared to the drag. Now, for cruise conditions, which is the most efficient phase of an aeroplane, the lift should be equal to the weight and thrust equal to drag. An aircraft with a high L/D ratio can carry a large payload, for a long time, over a long distance. Similarly, <b>thrust to weight ratio</b> is important to aircraft propulsion [propulsion means to push forward], (F/W) ratio is directly proportional to the acceleration of the aircraft.</p>

              <h1 className="text-3xl my-8">Aerofoil and Bernoulli’s Equation</h1>

              <p>You might have already learnt about Bernoulli's equation in secondary school, and no, the only usage is not in solving complex equations of a competitive exam, like IIT-JEE (nostalgia weared-off yet?) but it has some practical applications as well.</p>

              <p>The curvature of aerofoils [An aerofoil is the cross-sectional shape of a wing, blade, or sail. An airfoil-shaped body moving through a fluid produces an aerodynamic force.] when moving through the air, ensures that there are two streamlines, one above the surface, and one below it.</p>
              <p className="mt-8">The <b>path length of both streamlines are different</b>, the ambient wind coming in has to travel different distances. Now there are two concepts which you must be learning right from your school.</p>
              <ol className="list-decimal list-inside">
                <li><b>Mass Conservation</b>, (yup, the very basic law, stating the mass always remains conserved, be it in chemistry or physics)</li>
                <li><b>Bernoulli’s Equation</b> (assuming incompressible flows right now)</li>
              </ol>
              <div className="my-8 text-center">
                <Image src={BernoullisLaw}/>
              </div>
              <div className="my-8 text-center">
                <Image src={NewtonsLaw}/>
              </div>

              <p>Now because the mass should be conserved, the number of air particles passing through the surface of the wing from the starting of streamlines should be equal to air particles leaving, and because both path distances are different, the <b>air particles above the wings travel with more velocity than below the wings</b> (higher velocity accommodates less pressure, from Bernoulli’s principle), the pressure above the wings should be less and higher below the wings.</p>
              <p className="mt-8">Thereby generating the lift.</p>

              <h1 className="text-3xl my-8">Angle Of Attack</h1>
              <p>The angle of attack is the angle between the aerofoil’s chord (taken as reference line) and the airspeed vector. When an aeroplane takes off, the pilot applies throttle to make the aeroplane taxi along the runway. But just before lifting off, the pilot pulls the aircraft up. The nose of the aircraft rises, increasing the angle of attack and producing the <b>lift</b> needed for takeoff. For thin airfoils, the lift is directly proportional to the angle of attack for small angles.  What would happen if the angle of attack is more than this range? The air particles kind of “stick” to the surface, creating a layer near the surface, thereby changing the shape. When this layer separates, the effective shape is much different than the physical shape, the wing is disturbed, and this condition is called <b>stalling</b>.</p>
              <div className="my-8 text-center">
                <Image src={AngleOfAttack}/>
              </div>
  
              <p>Follow <a className="text-blue-600 underline" href="https://youtu.be/ZuGPcvC4vbw">this</a> video for an illustration of stalling.</p>
              <p>Here is a question for you, for a particular airfoil, how is angle of attack related to lift and drag forces?</p>

              <p className="mt-8"><b>Assignment:</b> You might have seen people doing stunts with planes, making them fly inverted. How does this happen? Explain the physics behind it.</p>

              <h1 className="text-3xl my-8">Types of Aerofoils</h1>
              <div className="my-8 text-center">
                <Image src={Aerofoils}/>
              </div>

              <h2 className="text-2xl mt-8">1. Symmetrical</h2>
              <ul className="list-disc list-inside">
                <li>Such aircraft ensures low drag.</li>
                <li>It is good for precision aerobatics.</li>
                <li>Good for high speed.</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={SymmetricAerofoil}/>
              </div>

              <h2 className="text-2xl mt-8">2. Semi Symmetrical</h2>
              <ul className="list-disc list-inside">
                <li>Good for aerobatics.</li>
                <li>Good for gliding.</li>
                <li>Wider speed ranges.</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={SemiSymmetricalAerofoil}/>
              </div>

              <h2 className="text-2xl mt-8">3. Flat Bottomed</h2>
              <ul className="list-disc list-inside">
                <li>True flat-bottom airfoils are a poor choice for any design.  </li>
                <li>They are extremely speed-sensitive. (Therefore, nearly impossible to trim.)</li>
                <li>Used for powered aircraft (Compromise aerodynamic shape for speed)</li>
                <li>They do not penetrate the air well but can stay aloft at very low speeds.</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={FlatBottomedAerofoil}/>
              </div>

              <h2 className="text-2xl mt-8">4. Under Cambered</h2>
              <ul className="list-disc list-inside">
                <li>Maximum lift.</li>
                <li>Low stall speed.</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={UnderCamberedAerofoil}/>
              </div>

              <h1 className="text-3xl my-8">Types Of Wings</h1>
              <p>How are these helpful, you ask? Well, different planes have different wings for different purposes. Some planes have wings to carry heavy planes over long distances. Some are designed to fly at very fast speeds, or at very high altitudes. Some are designed to have high maneuverability. Also remember that the lift to drag ratio that we talked about earlier? Well, it turns out that the wing parameters are really important for the L/D Ratio and aerodynamic efficiency.</p>
              <p className="mt-8">Let’s take a look at some wing types.</p>
              
              <h2 className="text-2xl mt-8">1. Rectangular Wings</h2>
              <ul className="list-disc list-inside">
                <li>Rectangular planform. </li>
                <li>This design is easy to manufacture, but has low aerodynamic efficiency.</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={RectangularWings}/>
              </div>

              <h2 className="text-2xl mt-8">2. Elliptical Wings</h2>
              <ul className="list-disc list-inside">
                <li>Elliptical planform, its leading and trailing edge approximates two segments of ellipse.</li>
                <li>Difficult to manufacture.</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={EllipticalWings}/>
              </div>

              <h2 className="text-2xl mt-8">3. Tapered Wings</h2>
              <ul className="list-disc list-inside">
                <li>Along the span, the length of chord varies, giving an approximate elliptical planform.</li>
                <li>Isn’t as efficient as Elliptical, but it is bit easy to manufacture compared to Elliptical wings</li>
              </ul>
              <div className="my-8 text-center">
                <Image src={TaperedWings}/>
              </div>

              <h1 className="text-3xl my-8">Aircraft can also be classified by their speed:</h1>
              <p>To classify them. we must first understand some basic terminology.</p>
              <p className="italic text-center text-xl my-8">Mach number = Speed of Aircraft / Speed of Sound</p>

              <h2 className="text-2xl mt-8">Subsonic</h2>
              <p>Mach number &lt; 1</p>
              <div className="my-8 text-center">
                <Image src={SubsonicAircraft}/>
              </div>
              
              <h2 className="text-2xl mt-8">Trans-sonic</h2>
              <p>0.8 &gt; Mach number &lt; 1.2</p>
              <div className="my-8 text-center">
                <Image src={TranssonicAircraft}/>
              </div>

              <h2 className="text-2xl mt-8">Supersonic</h2>
              <p>1.2 &gt; Mach number &lt; 5</p>
              <div className="my-8 text-center">
                <Image src={SupersonicAircraft}/>
              </div>

              <h2 className="text-2xl mt-8">Hypersonic</h2>
              <p>Mach number &gt; 5</p>
              <p>(Disclaimer: Just a concept, not yet made)</p>
              <div className="my-8 text-center">
                <Image src={HypersonicAircraft}/>
              </div>
          </div>
        </div>
     {/* Like button and count */}
              <div className="flex items-center justify-center mt-8">
                <button onClick={handleLike} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Like {likeCount}
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
                {/* Add comment form */}
                <form onSubmit={(e) => { e.preventDefault(); handleComment(e.target.comment.value); }}>
                  <input type="text" name="comment" placeholder="Add a comment..." className="border border-gray-400 rounded-md p-2 w-full" />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Post Comment</button>
                </form>
              </div>
          </div>
        </div>
      {/* Quiz section */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Quiz</h2>
                {!showQuizResults ? (
                    <div>
                      {quizQuestions.map((question, index) => (
                        <div key={index} className="mb-4">
                          <h3 className="text-lg font-bold">{question.question}</h3>
                          <ul className="ml-4 mt-2">
                            {question.options.map((option, idx) => (
                              <li key={idx} className="cursor-pointer" onClick={() => handleQuizAnswer(question.question, option)}>
                                <span className="mr-2">{option}</span>
                                {quizAnswers[question.question] === option && <span>✔️</span>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="flex justify-center mt-4">
                        <button onClick={handleQuizSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit Quiz
                        </button>
                      </div>
                    </div>
                ) : (
                    <div>
                      <h3 className="text-lg font-bold">Quiz Results</h3>
                      <ul className="ml-4 mt-2">
                        {quizQuestions.map((question, index) => (
                          <li key={index} className="mb-2">
                            <strong>{question.question}</strong>
                            <br />
                            <span>Your Answer: {quizAnswers[question.question]}</span>
                            <br />
                            <span>Correct Answer: {question.correctAnswer}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-center mt-4">
                        <button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                )}
              </div>
          </div>
        </div>
    );
}
export default Intro;
