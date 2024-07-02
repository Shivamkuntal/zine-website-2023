import React,{ useState } from "react";
import Image from "next/image";
import image1 from "../../../images/blog/ic-mcu/more/image1.gif";
import image2 from "../../../images/blog/ic-mcu/more/image2.gif";
import image3 from "../../../images/blog/ic-mcu/more/image3.png";
import image4 from "../../../images/blog/ic-mcu/more/image4.png";
import image5 from "../../../images/blog/ic-mcu/more/image5.png";
import image6 from "../../../images/blog/ic-mcu/more/image6.png";
import image7 from "../../../images/blog/ic-mcu/more/image7.png";
import image8 from "../../../images/blog/ic-mcu/more/image8.png";
import image9 from "../../../images/blog/ic-mcu/more/image9.jpg";
import image10 from "../../../images/blog/ic-mcu/more/image10.jpg";
import image11 from "../../../images/blog/ic-mcu/more/image11.png";
import image12 from "../../../images/blog/ic-mcu/more/image12.png";
import image13 from "../../../images/blog/ic-mcu/more/image13.jpg";
import image14 from "../../../images/blog/ic-mcu/more/image14.jpg";
import image15 from "../../../images/blog/ic-mcu/more/image15.png";
import image16 from "../../../images/blog/ic-mcu/more/image16.png";
import image17 from "../../../images/blog/ic-mcu/more/image17.png";
import image18 from "../../../images/blog/ic-mcu/more/image18.jpg";
import image19 from "../../../images/blog/ic-mcu/more/image19.gif";
import image20 from "../../../images/blog/ic-mcu/more/image20.gif";
import image21 from "../../../images/blog/ic-mcu/more/image21.jpg";
import image22 from "../../../images/blog/ic-mcu/more/image22.png";
import image23 from "../../../images/blog/ic-mcu/more/image23.png";
import image24 from "../../../images/blog/ic-mcu/more/image24.png";
import image25 from "../../../images/blog/ic-mcu/more/image25.png";
import image26 from "../../../images/blog/ic-mcu/more/image26.png";
import image27 from "../../../images/blog/ic-mcu/more/image27.jpg";
import image28 from "../../../images/blog/ic-mcu/more/image28.png";
import image29 from "../../../images/blog/ic-mcu/more/image29.png";
import image30 from "../../../images/blog/ic-mcu/more/image30.png";
import image31 from "../../../images/blog/ic-mcu/more/image31.png";
import image32 from "../../../images/blog/ic-mcu/more/image32.png";
import image33 from "../../../images/blog/ic-mcu/more/image33.png";
import image34 from "../../../images/blog/ic-mcu/more/image34.png";
import image35 from "../../../images/blog/ic-mcu/more/image35.png";
import image36 from "../../../images/blog/ic-mcu/more/image36.png";
import image37 from "../../../images/blog/ic-mcu/more/image37.png";
import image38 from "../../../images/blog/ic-mcu/more/image38.gif";
import image39 from "../../../images/blog/ic-mcu/more/image39.png";
import image40 from "../../../images/blog/ic-mcu/more/image40.jpg";
import image41 from "../../../images/blog/ic-mcu/more/image41.jpg";
import image42 from "../../../images/blog/ic-mcu/more/image42.jpg";
import image43 from "../../../images/blog/ic-mcu/more/image43.jpg";
import image44 from "../../../images/blog/ic-mcu/more/image44.gif";
import image45 from "../../../images/blog/ic-mcu/more/image45.gif";
import image46 from "../../../images/blog/ic-mcu/more/image46.png";
import image47 from "../../../images/blog/ic-mcu/more/image47.png";
import image270 from "../../../images/blog/ic-mcu/more/image270.png";

const More = () => {
  const quizData = [
  {
    question: "What does IC stand for?",
    options: ["Integrated Circuit", "Interconnected Circuit", "Integrated Chip"],
    correctAnswer: "Integrated Circuit"
  },
  {
    question: "Which microcontroller is used in Arduino Uno?",
    options: ["ATmega328P", "ESP32", "PIC16F877A"],
    correctAnswer: "ATmega328P"
  },
  {
    question: "What is the main feature of ESP32?",
    options: ["Bluetooth and Wi-Fi connectivity", "Analog to Digital Conversion", "PWM Output"],
    correctAnswer: "Bluetooth and Wi-Fi connectivity"
  },
  {
    question: "What is a commonly used programming language for Arduino?",
    options: ["Python", "C++", "JavaScript"],
    correctAnswer: "C++"
  },
  {
    question: "What does PWM stand for in microcontrollers?",
    options: ["Pulse Width Modulation", "Programmed Wave Management", "Powerful Wave Modulation"],
    correctAnswer: "Pulse Width Modulation"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAnswerButtonClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleLikeButtonClick = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">
            More about ICs (Integrated Circuits)
          </h1>
        </div>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <div className="my-8 text-center">
          <Image src={image1} />
        </div>
        <p>
          When you work with ICs, you need to know the difference between
          various ICs to ensure that you choose the correct IC you need for your
          work. When you take a look at these tiny black chips, you might find
          it back-breaking to differentiate them from the ICs lying around, or
          you might even wonder about what would happen if you put them in any
          orientation. What is the possible worst outcome that can happen?
        </p>

        <p>
          Well, as difficult as it might sound, you have to know the basic
          knowledge of ICs because placing ICs in their incorrect configuration
          can wreck your hardware!
        </p>
        <div className="my-8 text-center">
          <Image src={image2} />
        </div>

        <p className="mt-8">
          Before proceeding further, we suggest you take a brief look at this
          <a
            className="text-blue-600 underline"
            href="https://components101.com/sites/default/files/component_datasheet/L293D%20Datasheet.pdf"
          >
            page
          </a>
        </p>
        <p>
          This is called a datasheet, and this is a datasheet of L293D Motor
          Driver IC (yep, ICs are generally named like that, but once you start
          using them, they are as easy to remember as your friend’s name!)
        </p>
        <div className="my-8 text-center">
          <Image src={image3} />
        </div>
        <p>
          This diagram is called a pinout diagram and is arguably the most
          important diagram while using ICs. How this IC works is not something
          of our concern at the moment since you will be learning about it
          later, but our goal is to make you understand the significance of a
          datasheet. Take a datasheet as a reference tool for your IC. A
          datasheet contains all the schematics, the safe voltage ranges, where
          the internal components are kept, etc.
        </p>
        <p>
          And how do we read a datasheet? Refer to
          <a
            className="text-blue-600 underline"
            href="https://www.sparkfun.com/tutorials/223"
          >
            this
          </a>
          tutorial.
        </p>
        <p>
          Coming back to our topic of concern, let’s understand a bit more about
          ICs. Amongst many ICs lying around, how would you know which IC are
          you holding? The IC number is stamped on the IC itself. Check the
          naming and numbering below.
        </p>

        <div className="my-8 text-center">
          <Image src={image4} />
        </div>
        <div className="my-8 text-center">
          <Image src={image5} />
        </div>
        <p>
          You’ve got your components and your datasheet, and you’re ready to
          start hacking.
        </p>
        <div className="my-8 text-center">
          <Image src={image6} />
        </div>
        <p>
          But which way does the chip go? Where is Pin 23? If you’re lucky, the
          orientation is already marked, or perhaps diagrammed in the datasheet.
          But if it isn’t, or if you’re just new at this, it’s helpful to know
          what to look for. Notice the U shape notch at the top? Yes, with the
          help of this notch we can identify the correct position.
        </p>
        <p>
          The first pin is to the left of the notch, and the remaining PINs
          increase sequentially as you move counterclockwise around the chip.
        </p>
        <p>
          Now we know how to use IC’s in correct configuration in our circuits.
        </p>
        <p>
          Before we move to the next section, have a look here. You all must
          have seen these processors in your laptops and computers or heard of
          them.
        </p>
        <div className="my-8 text-center">
          <Image src={image7} />
        </div>
        <p>Have you ever wondered how many transistors is it made up of?</p>
        <p>
          Can you count them? Well this question is as ridiculous as it sounds!
        </p>
        <p>
          These small compact chips control your whole system. No wonder they
          are made up of billions of transistors.
        </p>
        <p>
          And this number doesn't stop here. As the technology keeps developing,
          this number keeps increasing dramatically. That’s the glory of
          technology, every few years these ICs become more and more compact
          while the number of transistors keeps increasing. This brings us to
          the classification of these ICs based on the number of transistors.
        </p>

        <h3>Classification based on level of Integration</h3>
        <div className="my-8 text-center">
          <Image src={image8} />
        </div>
        <div className="my-8 text-center">
          <Image src={image9} />
        </div>
        <div className="my-8 text-center">
          <Image src={image10} />
        </div>
        <p>
          # The development of VLSI chips paved the way to the manufacturing of
          the first microprocessor, by the fabrication of a CPU on a single
          microchip.
        </p>
        <p>
          What do you think will be the number of transistors in your intel
          processor after 10 years? Can you guess? Well a very calculated guess
          was made to answer this question which we know as Moore’s law.
        </p>
        <h3>Moore’s Law:</h3>
        <p>
          “As the technology keeps developing, this number keeps increasing
          dramatically.”, quoting lines given above in classification, did any
          of your inquisitive minds think of what rate these transistors
          increase? Well, there is an empirical relationship regarding this
          fact, called Moore's law(which is more like an observation), put forth
          by the scientist Gordon Moore, stating that the number of components
          in a circuit roughly doubles every two years.
        </p>

      <div className="my-8 text-center">
        <Image src={image11} />
      </div>
      <p>
        So, what should be the effect of moore’s law on the price of the
        semiconductor chip we use today? How much smaller can the chips go? And
        how long is Moore's law gonna be valid?
      </p>
      <p>
        Check out this
        <a
          className="text-blue-600 underline"
          href="https://www.youtube.com/watch?v=xnGWRRexRlk"
        >
          debate
        </a>
        .
      </p>
      <h3>Let’s see classification of ICs on the basis of manufacturing:</h3>
      <p>
        For manufacturing ICs, all the components, like transistors and wiring,
        are all built into a semiconductor wafer. How these ICs are formed
        determines the type.
      </p>
      <div>
        <ol>
          <li>
            Monolithic ICs: A monolithic circuit is built into a single stone or
            single-crystal, i.e. in monolithic ICs, all circuit components are
            integrated on a single layer.
          </li>
          <li>
            Hybrid or multichip ICs: As the name implies, the circuit is
            fabricated by interconnecting several individual chips. Hybrid ICs
            are widely used for high-power audio-amplifier applications from 5W
            to more than 50W.
            <div className="my-8 text-center">
              <Image src={image12} />
            </div>
            <h3>
              But this in not the only basis for classification of ICs, for
              reference ICs can also be classified based the arrangement of pins
              :
            </h3>
          </li>
        </ol>
      </div>

      <div>
        <ol>
          <li>
            <h3>Single-in-line package:</h3> A single row of pins protruding
            from the bottom of the body of the IC, numbering is done by holding
            the IC upwards and reading from left to right.
            <div className="my-8 text-center">
              <Image src={image13} />
            </div>
          </li>
          <li>
            <h3>Dual-in-line package:</h3> Two rows of pins protruding from the
            bottom of the IC’s body. Their numbering is done just like we saw
            earlier, it starts anticlockwise from notch. There is an exclusive
            space in the breadboard for DIL Packaging:
            <div className="my-8 text-center">
              <Image src={image14} />
            </div>
            <div className="my-8 text-center">
              <Image src={image15} />
            </div>
          </li>

          <li>
            <h3>Quad-flat package</h3> (mounted on the surface): The pins splay
            on from all four directions. QFP ICs might have anywhere from eight
            pins per side (32 total) to upwards of seventy (300+ total). How is
            their naming done? They do have a notch too, and thus, we pick the
            first pin and move anticlockwise.
            <div className="my-8 text-center">
              <Image src={image16} />
            </div>
            <div className="my-8 text-center">
              <Image src={image17} />
            </div>
          </li>

          <li>
            <h3>Ball Grid-array package:</h3> (e.g microprocessors)
            <div className="my-8 text-center">
              <Image src={image18} />
            </div>
            <div className="my-8 text-center">
              <Image src={image19} />
            </div>
          </li>
        </ol>
        <p>
          So how do we use these ICs? We mount them to our circuit boards. Do
          you know how these are mounted? IC’s are mounted mainly using two
          techniques:
        </p>
        <ol>
          <li>
            <h3>Through Hole Mounting:</h3> There are holes in the boards, and
            in these holes, the pins of ICs are stuck in, and then soldered on
            the other side. Through hole mounting is more robust and is used in
            military equipment.
            <div className="my-8 text-center">
              <Image src={image18} />
            </div>
          </li>
          <li>
            <h3>Surface Mounting:</h3> They are a bit difficult to mount, as
            they have to be soldered “on” the surface, and thus require some
            equipment.
            <div className="my-8 text-center">
              <Image src={image21} />
            </div>
            <p>
              Above IC’s are permanently mounted, they can’t be replaced easily.
              What if we need different ICs
            </p>
            <p>
              These ICs can either be permanently mounted, or can be mounted on
              a stand, and can be easily replaced.
            </p>
          </li>
        </ol>
        <p>Based on whether they are programmable or non-programmable:</p>
        <ol>
          <li>
            <h3>A programmable logic device (PLD)</h3> is an electronic
            component used to build
            <a
              className="text-blue-600 underline"
              href="https://en.wikipedia.org/wiki/Digital_electronics"
            >
              reconfigurable digital circuits
            </a>
            . These PLDs have undefined functions at the time of manufacture.
            Before the PLD can be used in a circuit, it must be programmed
            (reconfigured) by using a specialized program.
          </li>
          <li>
            <h3>Non-Programmable Logic Devices:</h3> The operation of these ICs
            cannot be configured by a program. The internal circuit design or
            “wiring” consists of logic gates and has a fixed function.
          </li>
        </ol>
        <h2>Naming and numbering of an IC:</h2>
        <p>
          Before jumping further, you should know a bit of
          <b>IC Logic Families</b>. A logic family refers to digital integrated
          circuit devices which are constructed with a combination of
          <b>electronic gates</b>. A family has its own power supply voltage and
          distinct logic levels.
        </p>
        <p>
          All IC chips have a two-part serial number. The first part of the
          serial number delineates the information of the manufacturer. The
          second part of the serial number indicates the technical
          specifications.
        </p>
        <p>
          Many IC manufacturers produce identical chips with the same technical
          specifications. In the case of the serial number “MC74HC00", the “MC”
          field indicates the manufacturer Motorola and the “74HC00” field
          indicates that the chip is a Quad 2-input NAND gate IC.
        </p>
        <p>Another naming convention for the 7400 Series ICs:</p>
        <div className="my-8 text-center">
          <Image src={image22} />
        </div>
        <p>SN - Manufacturer (Texas Electronics)</p>
        <p>
          74 Series - Shows the series the corresponding temperature range
          belongs to.
        </p>
        <p>HCT - The sub-family</p>
        <p>04 - Shows the device type. </p>
        <p>
          But it should be noted that there is no global naming standard for
          naming ICs. The part or manufacturer details are provided so that they
          can be used for reference purposes. Not to mention, you can always
          google a series number to find its datasheet.
        </p>
        <div className="my-8 text-center">
          <Image src={image23} />
        </div>
        <h1> Common ICs used in Robotics</h1>
        <p>
          Now that we know how fabulous ICs are, let’s dive into their usage in
          robotics.
        </p>
        <h3>Motor Driver ICs</h3>
        <p>
          The microcontroller used in our robots can't control the motors
          directly because most of the microcontrollers operate on low voltages
          and require small amounts of current to operate while the motors
          require relatively higher voltages and current. Thus, the current
          cannot be supplied to the motors from the microcontroller. This is the
          primary need for motor driver IC. Motor drivers act as an interface
          between the motors and the Microcontroller.
        </p>
        <div className="my-8 text-center">
          <Image src={image24} />
        </div>
        <p>There are different types of motor driver modules used:</p>
        <h3>L293D Motor Driver:</h3>
        <p>
          L293D is a typical Motor driver or Motor Driver IC which allows DC
          motors to drive in either direction. L293D is a 16-pin IC that can
          control a set of two DC motors simultaneously. The direction can be
          controlled too. It means that you can control two DC motors with a
          single L293D IC!
        </p>
        <div className="my-8 text-center">
          <Image src={image25} />
        </div>
        <h3>L293D IC Pinout Diagram</h3>
        <b>Power Supply: </b>
        <p>
          The L293D motor driver IC actually has two power input pins ‘ Vcc1’
          and ‘Vcc2’.
        </p>
        <p>
          Vcc1 is used for driving the internal logic circuitry of the motor
          driver IC, which should be 5V.
        </p>
        <p>( It must not be greater than 5 V )</p>
        <p>
          From Vcc2 pin the
          <a
            className="text-blue-600 underline"
            href="https://docs.google.com/document/d/1FyjcdYW5DlmcEISCKZWfAWpvkZJ-cb3binXzHPCwiU4/edit"
          >
            H-Bridge
          </a>
          gets its power for driving the motors which can be 4.5V to 36V (for
          L293D IC). And they both sink to a common ground named GND.
        </p>
        <div className="my-8 text-center">
          <Image src={image26} />
        </div>
        <h3>Output Terminals:</h3>
        <p>
          The L293D motor driver’s output channels for the motor A and B are
          brought out to pins OUTPUT1, OUTPUT2 and OUTPUT3, OUTPUT4
          respectively.
        </p>
        <p>
          You can connect two DC motors having voltages between 4.5 to 36V to
          these terminals. It can supply a maximum current of 1.2A.
        </p>
        <h3>Direction Control Pins:</h3>
        <p>
          Using the direction control pins, we can control whether the motor
          spins forward or backward. These pins actually control the switches of
          the H-Bridge circuit inside L293D IC. It contains two H-bridge
          circuits controlling direction of one motor each.
        </p>
        <p>
          How does the H-bridge control the direction of the motor? Try to
          recall. You already know this answer from the concepts shared in
          previous blogs
        </p>
        <p>
          If you can recall, Kudos! If not, refer to
          <a
            className="text-blue-600 underline"
            href="https://docs.google.com/document/d/1FyjcdYW5DlmcEISCKZWfAWpvkZJ-cb3binXzHPCwiU4/edit"
          >
            this
          </a>
          link.
        </p>
        <p>
          The spinning direction of a motor can be controlled by applying either
          a logic HIGH(5 Volts relative to ground) or logic LOW(Ground) to input
          pins.
        </p>
        <p>
          The IC has two direction control pins for each channel. The INPUT1,
          INPUT2 pins control the spinning direction of the motor A while
          INPUT3, INPUT4 control motor B.
        </p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Input 1</th>
                <th>Input 2</th>
                <th>Output 1</th>
                <th>Output 2</th>
                <th>Spinning Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LOW</td>
                <td>LOW</td>
                <td>LOW</td>
                <td>LOW</td>
                <td>Motor OFF</td>
              </tr>
              <tr>
                <td>HIGH</td>
                <td>LOW</td>
                <td>HIGH</td>
                <td>LOW</td>
                <td>Clockwise (Forward)</td>
              </tr>
              <tr>
                <td>LOW</td>
                <td>HIGH</td>
                <td>LOW</td>
                <td>HIGH</td>
                <td>Anticlockwise (Backward)</td>
              </tr>
              <tr>
                <td>HIGH</td>
                <td>HIGH</td>
                <td>LOW</td>
                <td>LOW</td>
                <td>Motor OFF</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Speed Control Pins:</h3>
        <p>
          ENABLE 1, 2 and ENABLE 3, 4 are used to turn ON, OFF and control speed
          of motor A and motor B respectively.
        </p>
        <p>
          The ENABLE 1, 2 pin controls the H-bridge of left side (one with
          INPUT1 and INPUT2 pins). When ENABLE 1,2 pin is high i.e it has 5V
          supply then Ieft side input and output pins are enabled and H-bridge
          is turned ON. When ENABLE 1,2 is low then H-bridge is turned off,
          making motors stop in all conditions. However, when PWM power supply
          is provided to these pins we can actually control the speed of motors.
          We can also control speed by giving pwm power supply to INPUT pins. We
          will study about PWM (Pulse Width Modulation) in detail in further
          blogs.
        </p>
        <h3>L298N Motor driver module</h3>
        <p>
          L298N Motor Driver Module contains a 78M05 5V Regulator along with the
          L298 IC. It works the same as L293D but is more powerful. It can take
          power supply upto 46 volts. It can supply a maximum current of 2A.
        </p>
        <div className="my-8 text-center">
          <Image src={image270} />
        </div>
        <h2>Op-amp:</h2>
        <p>
          An Op-Amp, short for an Operational Amplifier, is the workhorse for
          all analog electronics. It’s a type of an amplifier, and an amplifier
          is defined as a circuit that produces output signal greater than its
          input signal. Generally, the ratio of value of output signal and input
          signal is called <b>gain</b>. More precisely it is the ratio of the
          output signal amplitude to the input signal amplitude, and is given
          the symbol <b>"A"</b>.
        </p>
        <div className="my-8 text-center">
          <Image src={image27} />
        </div>
        <p>
          Internally, it has a complex circuit (a bunch of resistors, some
          capacitors, etc), but for now, let’s just concentrate on its
          properties.
        </p>
        <p>
          Like other amplifiers, it also has some “gain”. That means if we put
          an X signal here, then I will get a signal AX, where, A is the gain
          factor.
        </p>
        <p className="my-8 text-center">
          
          (input) x --&gt; [A] --&gt; Ax (output)
        </p>
        <p>The gain A is generally high, i.e, in the range of 105to 106. </p>
        <p>The op-amp is represented by the symbol shown here. </p>
        <div className="my-8 text-center">
          <Image src={image28} />
        </div>
        <p>
          The two input pins, V+ and V-, are called non-inverting and inverting
          pins respectively. And Vs+ and Vs- are supply pins.
        </p>
        <p>
          Now the output voltage, Vout is proportional to the voltage between
          the two input pins, i.e,
        </p>
        <p className="my-8 text-center">V0 = A * ( V+ - V-- )</p>
        <p>Vout or V0 can go both positive or negative w.r.t. the ground.</p>
        <p>
          So this output is proportional to the difference of input voltages.
          The results are plotted on the graph given left. Notice the graph
          after Vsat? This Vsat ,the saturation voltage, is less than the
          highest possible gain voltage of an op-amp and is the maximum possible
          voltage, reason being, the gain voltage is very high and it is
          impractical for op-amp to produce such voltage. Thus the limit is
          capped to the supply voltage and Vout = Vsat.
        </p>
        <div className="my-8 text-center">
          <Image src={image29} />
        </div>
        <p>The slope in this graph is the gain A.</p>
        <p>
          Coming back to the question of the meaning of inverting and
          non-inverting voltages, let’s take a look at the equations given above
          the diagram.
        </p>
        <p>
          As the Vin varies, let’s say V+ increases, the difference Vin also
          increases, thus increasing the gain.
        </p>
        <p className="my-8 text-center">↑ Vin =↑ V+ - V-</p>
        <p>
          As the V- increases, the difference Vin decreases, thereby decreasing
          the overall gain.
        </p>
        <p> ↓ Vin = V+ - V- ↑</p>
        <p>
          Thus, V- is inversely proportional to the overall gain. Therefore it
          is called an inverting voltage. On the other hand, on increasing the
          V+, the gain also increases. Hence, it is called the non-inverting
          voltage. If this explanation is bit clumsy for you, look it another
          way,
        </p>
        <p>
          Let’s set the V- voltage to ground (zero) and then calculate the Vout
          using the same equation,
        </p>
        <p>
          Vout = A*(V1) . Here the voltage Vout is directly proportional to the
          Voltage V1. Hence the voltage V1 is called the non-inverting voltage.
        </p>
        <p>For the V- , the equation for Vout would be:</p>
        <p>Vout = A*(0-V2)</p>
        <p>Vout = -A*(V2)</p>
        <div className="my-8 text-center">
          <Image src={image30} />
        </div>
        <div className="my-8 text-center">
          <Image src={image31} />
        </div>
        <p>
          The Vin and V- are in opposite phase, i.e, if V- increases, the Vout
          decreases. Hence it is called the inverting phase.
        </p>
        <p>
          Now beware, when schematics of the op-amp are drawn on paper, the plus
          and minus could be reversed, and accordingly, you have to make sure
          you are proceeding with the correct signs!
        </p>
        <h2>Op-amp as a comparator:</h2>
        <p>
          So what do you understand by comparator? A tool to compare things,
          right? Here we compare two voltages. The next question that will
          pop-up in your mind is HOW? Well, when you have learned how an op-amp
          works as an amplifier then the answer to this question is not so
          difficult.
        </p>
        <p>
          Let’s assume we have two voltages V1 and V2 to compare. Let’s give V1
          as input to V+ and V2 as input to V--. There are two types of
          comparators, depending on the reference point we choose to compare
          i.e. whether we take V1 as a reference and compare V2 with respect to
          it or vice-versa.
        </p>
        <div>
          <ul>
            <li>
              <p>
                Inverting Comparator: If the input voltage is applied to the
                inverting terminal and the reference voltage to the
                non-inverting terminal.
              </p>
              <div className="my-8 text-center">
                <Image src={image32} />
              </div>
              <p> [Here V+= Vref and V-- = Vi and Vp equal supply voltage] </p>
              <p>
                The operation of inverting comparators is quite simple. The
                output which is equal to (A* ( Vin - Vref )) equals to either
                +Vsat or -Vsat depending on the values of input voltage Vi and
                reference voltage Vref.
              </p>
              <p>Vin &gt; Vref : Vout = A(Vref - Vin) = -Vsat</p>
              <p>Vin &lt; Vref : Vout = A(Vref - Vin) = +Vsat</p>
              <p>
                Why Vout = +Vsat when input voltage is greater than reference
                voltage. Answer to this question lies above in the explanation
                of the graph of op-amp.
              </p>
              <p>
                The amplifying factor is so large( 105 to 106) that even if
                there is very little difference between input and reference
                voltages the output voltage equals saturation voltage. For
                output voltage to be 10V difference of voltages should be
                maximum 0.0001V.
              </p>
            </li>
            <li>
              <h3>Non-Inverting Comparator:</h3>
              <p>
                If the reference voltage is applied to the inverting terminal
                and the input voltage to the non-inverting terminal. Rest is
                very much similar to an inverting comparator, try to figure it
                out with the help of the given diagram.
              </p>
              <div className="my-8 text-center">
                <Image src={image33} />
              </div>
              <p>
                You all must have observed that analog signals are converted
                into digital form when we learnt comparators. Acting as analog
                to digital signal converter is another important application of
                op-amp.
              </p>
              <p>
                Still wondering what you can do with a comparator? See
                <a
                  className="text-blue-600 underline"
                  href="https://www.electronicshub.org/burglar-alarm-system/"
                >
                  this
                </a>
                cool project! A LM358 Op-Amp IC is used as a comparator for
                making this project.
              </p>
            </li>
          </ul>
        </div>
        <p>
          To understand better have a look
          <a
            className="text-blue-600 underline"
            href="https://www.youtube.com/watch?v=k9zQjEaKtfk"
          >
            here
          </a>
          .
        </p>
        <div className="my-8 text-center">
          <Image src={image34} />
        </div>
        <div className="my-8 text-center">
          <Image src={image35} />
        </div>
        <h2>555 Timer IC</h2>
        <p>
          It is used in a variety of one-shot or delay timers, pulse generation,
          LED and lamp flashers, alarms and tone generation, logic clocks,
          frequency division, power supplies, and converters, etc, in fact, any
          circuit that requires some form of time control as the list is
          endless. The internal block diagram and working of 555 Timer IC are
          given below.
        </p>
        <div className="my-8 text-center">
          <Image src={image36} />
        </div>
        <div className="my-8 text-center">
          <Image src={image37} />
        </div>
        <p>
          As you might have learned through your secondary school, these three
          resistors are used to create reference voltages, creating 1/3 Vcc and
          2/3 Vcc of supply voltage Vcc.
        </p>
        <p>
          Next-up is a comparator, it is used to “compare voltage”, for example,
          for its two input terminals, inverting and non-inverting, if the input
          voltage is higher for the positive terminal, the comparator will
          output 1, otherwise, it will output 0. The first comparator negative
          input terminal is connected to the 2/3 reference voltage at the
          voltage divider and the external “control” pin, while the positive
          input terminal to the external “Threshold” pin.
        </p>
        <p>
          On the other hand, the second comparator negative input terminal is
          connected to the “Trigger” pin, while the positive input terminal to
          the 1/3 reference voltage at the voltage divider.
        </p>
        <p>
          So using the three pins, Trigger, Threshold, and Control, we can
          control the output of the two comparators which are then fed to the R
          and S inputs of the flip-flop. The flip flop can also be reset anytime
          using the reset pin, additionally resetting the whole 555 Timer IC.
        </p>
        <p>
          The Q-bar output of the flip-flip goes to the output stage or the
          output drivers which can either source or sink a current of 200mA to
          the load. The output of the flip-flip is also connected to a
          transistor that connects the “Discharge” pin to the ground.
        </p>
        <p>
          There are primarily three modes of operations named Astable,
          Monostable, and Bistable. Each mode represents a different type of
          circuit that has a particular output. Learn more about it
          <a
            className="text-blue-600 underline"
            href="https://youtu.be/i0SNb__dkYI"
          >
            here
          </a>
          .
        </p>
        <h1>Voltage Regulator </h1>
        <p>
          For a start, different electronics require different voltages. A
          microcontroller may require 5V, your motors perhaps 12V.
        </p>
        <p>
          Consider the case of Li-Po Batteries, the nominal rated voltage is
          3.7V/cell, but they are never at a constant voltage. The image shows
          how a typical battery voltage changes over time.
        </p>
        <div className="my-8 text-center">
          <Image src={image38} />
        </div>
        <p>
          See the drained battery zone, what if the sensor you are using is
          sensitive to 5V and then the battery drops!! Thus we need a Voltage
          Regulator to rectify this issue.
        </p>
        <p>
          While using some electronic components, we might need to increase or
          decrease the voltage to fulfil our purpose. As the name suggests, the
          Voltage Regulator also adjusts the incoming voltage to the desired and
          acceptable limits.
        </p>
        <p>There are two types of VRs: linear and switching.</p>
        <h2>Linear Regulators :</h2>
        <p>
          It works by automatically adjusting the resistance via a feedback
          loop(“Feedback” is the process by which a fraction of the output
          signal, either a voltage or a current, is used as an input, in this
          circuit,
          <a
            className="text-blue-600 underline"
            href="https://www.allaboutcircuits.com/technical-articles/negative-feedback-part-1-general-structure-and-essential-concepts/"
          >
            negative feedback
          </a>
          is used) , accounting for changes in both output current and input,
          all while keeping the output voltage constant.
        </p>
        <p>
          The 78xx series voltage regulators are the most popular linear voltage
          regulators which produce positive fixed DC voltages. For negative
          voltages we have 79xx series. “xx” corresponds to a two-digit number
          and represents the amount (magnitude) of voltage that voltage
          regulator IC produces.
        </p>
        <p>Eg: LM7805 produces +5V and LM7812 produces +12V.</p>
        <div className="my-8 text-center">
          <Image src={image39} />
        </div>
        <a
          className="text-blue-600 underline"
          href=" https://drive.google.com/drive/u/1/my-drive"
        >
          https://drive.google.com/drive/u/1/my-drive
        </a>
        <div>
          <ol>
            <li>Input voltage : (5V-18V)</li>
            <li>Ground : (0V) </li>
            <li>Regulated output : 5V (4.8V-5.2V) </li>
          </ol>
        </div>
        <p>All other IC’s of this series have similar structure.</p>
        <div className="my-8 text-center">
          <Image src={image40} />
        </div>
        <p>
          Four 7800 series linear voltage regulators, each with a different
          voltage output: 5V, 9V, 12V, 15V
        </p>
        <p>
          78xx series ICs have built-in protection against a circuit drawing too
          much power. They have protection against overheating and
          short-circuits, making them quite robust in most applications.
        </p>
        <h2>Switching Regulators:</h2>
        <p>
          These regulators such as buck (step-down), Boost (step-up), and
          buck-boost (step-up/step-down), require a few more components as well
          as increased complexity of how various components will affect the
          output. Switching regulators are far more efficient in terms of power
          conversion where efficiency plays a big role, but linear regulators
          work very well as voltage regulators in low-voltage applications.
        </p>
        <div>
          <ol>
            <li>
              Buck(step-down): A Buck Regulator is used to step down the voltage
              at the output, we can even use the voltage divider circuit to
              reduce the output voltage but the efficiency of the voltage
              divider circuit is low because resistors dissipate energy as heat.
              <div className="my-8 text-center">
                <Image src={image41} />
              </div>
            </li>
            <li>
              Boost (step-up): Increases the voltage, while decreasing the
              current.
              <div className="my-8 text-center">
                <Image src={image42} />
              </div>
            </li>
            <li>
              Buck-Boost (step-up/down): Lowers or boosts the input voltage
              according to the requirement.
              <div className="my-8 text-center">
                <Image src={image43} />
              </div>
            </li>
          </ol>
        </div>
        <h1>Microprocessor and MCU</h1>
        <p>
          We’ve been this far but we still don’t know how a robot makes
          decisions and processes data? Logic Gate ICs? But didn’t they make an
          ambiguous, huge, and complex circuit even just to do simple operations
          like additions? There are devices available that process data. Take
          your phone, for example, it can do a lot of operations rather than
          simple addition in such a small size. What gave this device such
          powerful abilities. They are *drumroll*
        </p>
        <div className="my-8 text-center">
          <Image src={image44} />
        </div>
        <div className="my-8 text-center">
          <Image src={image45} />
        </div>
        <p>Microprocessors and Microcontrollers</p>
        <p>
          Microprocessors and microcontrollers process information according to
          the instructions given with the input and generate an output.
        </p>
        <p>This is how a microprocessor and a microcontroller look like:</p>
        <div className="my-8 text-center">
          <Image src={image46} />
        </div>
        <div className="my-8 text-center">
          <Image src={image47} />
        </div>
      </div>
      </div>
    </div>
  <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score} out of {quizData.length}</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <textarea value={newComment} onChange={handleCommentChange} placeholder="Add your comment" />
            <button type="submit">Submit Comment</button>
          </form>
          <div>
            <button onClick={handleLikeButtonClick}>Like</button>
            <span>{likes} Likes</span>
          </div>
        </div>
      ) : (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

export default More;
