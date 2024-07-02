import React,{ useState } from "react";
import Image from "next/image";
import image1 from "../../../images/blog/ic-mcu/microcontroller/image1.png";
import image2 from "../../../images/blog/ic-mcu/microcontroller/image2.gif";
import image3 from "../../../images/blog/ic-mcu/microcontroller/image3.gif";
import image4 from "../../../images/blog/ic-mcu/microcontroller/image4.gif";
import image5 from "../../../images/blog/ic-mcu/microcontroller/image5.png";
import image6 from "../../../images/blog/ic-mcu/microcontroller/image6.png";
import image7 from "../../../images/blog/ic-mcu/microcontroller/image7.png";
import image8 from "../../../images/blog/ic-mcu/microcontroller/image8.png";
import image9 from "../../../images/blog/ic-mcu/microcontroller/image9.gif";
import image10 from "../../../images/blog/ic-mcu/microcontroller/image10.png";
import image11 from "../../../images/blog/ic-mcu/microcontroller/image11.gif";
import image12 from "../../../images/blog/ic-mcu/microcontroller/image12.png";
import image13 from "../../../images/blog/ic-mcu/microcontroller/image13.png";
import image14 from "../../../images/blog/ic-mcu/microcontroller/image14.png";
import image15 from "../../../images/blog/ic-mcu/microcontroller/image15.png";
import image16 from "../../../images/blog/ic-mcu/microcontroller/image16.png";
import image17 from "../../../images/blog/ic-mcu/microcontroller/image17.jpg";
import image18 from "../../../images/blog/ic-mcu/microcontroller/image18.png";
import image19 from "../../../images/blog/ic-mcu/microcontroller/image19.jpg";
import image20 from "../../../images/blog/ic-mcu/microcontroller/image20.png";
import image21 from "../../../images/blog/ic-mcu/microcontroller/image21.jpg";
import image22 from "../../../images/blog/ic-mcu/microcontroller/image22.png";

const Microcontroller = () => {
  const questions = [
    {
      question: "What does IC stand for?",
      answers: ["Integrated Circuit", "Internal Circuit", "Independent Circuit", "Integrated Control"],
      correct: 0
    },
    {
      question: "Which of the following is a microcontroller?",
      answers: ["Arduino", "Raspberry Pi", "Intel Core i7", "AMD Ryzen"],
      correct: 0
    },
    {
      question: "What is the primary function of a microcontroller?",
      answers: ["Processing input", "Managing memory", "Controlling peripherals", "All of the above"],
      correct: 3
    },
    {
      question: "Which language is commonly used to program microcontrollers?",
      answers: ["Python", "Java", "C/C++", "HTML"],
      correct: 2
    },
    {
      question: "What is the function of GPIO pins on a microcontroller?",
      answers: ["Powering the microcontroller", "Resetting the microcontroller", "Interfacing with other hardware", "Storing data"],
      correct: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Like button state and logic
  const [likeCount, setLikeCount] = useState(0);

  // Comment section state and logic
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

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
        Microcontroller
        </h1>

      </div>
    </div>
    <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">

        <div className="my-8 text-center">
          <Image src={image1} />
        </div>
        <p>Nope, not that MCU. </p>
        <p>So by MCU, I mean(uh..uh?) The microcontroller unit.</p>
        <p>
          A microcontroller is a small and low-cost microcomputer, which is
          designed to perform the specific tasks of embedded systems like
          displaying microwave information, receiving remote signals, etc.
        </p>
        <div className="my-8 text-center">
          <Image src={image2} />
        </div>
        <p>
          The general microcontroller consists of the
          <a
            className="text-blue-600 underline"
            href="https://www.techtarget.com/whatis/definition/processor#:~:text=A%20processor%20(CPU)%20is%20the,interpreting%20most%20of%20computers%20commands."
          >
            processor
          </a>
          , the memory (
          <a
            className="text-blue-600 underline"
            href="https://www.computerhope.com/jargon/r/ram.htm"
          >
            RAM
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.tutorialspoint.com/computer_fundamentals/computer_rom.htm"
          >
            ROM
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.tutorialspoint.com/erasable-programmable-read-only-memory-eprom"
          >
            EPROM
          </a>
          ),
          <a
            className="text-blue-600 underline"
            href="https://www.computerhope.com/jargon/s/seriport.htm"
          >
            Serial ports
          </a>
          , peripherals (
          <a
            className="text-blue-600 underline"
            href="https://en.wikipedia.org/wiki/Timer"
          >
            timers
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.tutorialspoint.com/computer_logical_organization/digital_counters.htm"
          >
            counters
          </a>
          ), etc.
        </p>
        <p>Where can you find them?</p>
        <p>
          They are almost everywhere, from simple devices like washing machines,
          traffic lights, microwave ovens to highly sophisticated satellite
          systems. A 1999 BMW 7-series has 65 microcontrollers. Although the
          microcontrollers in PCs are the most visible, they account for just 6%
          of the microcontroller market.
        </p>
        <p>
          Microcontrollers are used in applications requiring repetitive
          operations such as running the traffic light at an intersection. In
          traffic lights, the microcontroller's sole function is to turn lights
          on and off at predetermined times.
        </p>
        <div className="my-8 text-center">
          <Image src={image3} />
        </div>
        <p>
          Another example is a microwave oven. Let's examine how a
          microcontroller functions while cooking a bag of popcorn in a
          microwave oven.
        </p>
        <p>
          You open the door and put the bag of popcorn inside. You close the
          door and push the button labeled "Popcorn." A few minutes later, a
          tone announces the popcorn is done. What happened behind the scenes?
        </p>
        <p>
          When you opened the door, the microcontroller sensed the door switch,
          turned on the light, and disabled the magnetron. The microcontroller
          continually scans the keyboard. When you pushed the "Popcorn" button,
          the microcontroller confirmed that the door was closed and began to
          count timing pulses, started the motor for the turntable, set the
          power level of the magnetron, and controlled the display. When the
          timer reaches zero, the microcontroller shuts down the magnetron,
          stops the turntable, and signals you.
        </p>
        <div className="my-8 text-center">
          <Image src={image4} />
        </div>

        <div className="my-8 text-center">
          <Image src={image5} />
        </div>
        <p>
          Controller board of a washing machine which controls the time of motor
          rotation, speed, buzzer control, 8-segment display control, etc. The
          board has a microcontroller
          <a
            className="text-blue-600 underline"
            href="https://www.st.com/zh/microcontrollers-microprocessors/st7lite49m.html#overview"
          >
            ST7LITE49M
          </a>
          .
        </p>
        <h3>Components of a microcontroller</h3>
        <div className="my-8 text-center">
          <Image src={image6} />
        </div>
        <div>
          <ul>
            <li>
              CPU - It is the processing unit of any computer. It is the
              “brains” of the microcontroller. It is what fetches the
              instructions from the code memory and executes the instructions
              that it fetches.
            </li>
            <li>
              RAM - The data RAM (Random Access Memory) is the data space that
              is used for temporarily storing constant and variable values that
              are used by the microcontroller during normal program execution.
            </li>
            <li>
              EEPROM - The on-chip EEPROM memory (Electrically Erasable
              Programmable Read-Only Memory) on a microcontroller is like a
              microcontroller’s hard drive. It has two partitions. One partition
              is reserved for the storage of the program code i.e program memory
              while the other partition is reserved for permanent storage of
              data i.e data memory, used by the chip during normal program
              execution.
            </li>
            <li>
              I/O ports - These are the ports that are used to provide binary
              data to the microcontroller and to fetch processed binary data
              from the microcontroller. They provide a channel to communicate
              with the microcontroller.
            </li>
            <li>
              Timers and counters - Counters are simply used to generate a count
              in electronics such as 1,2,3,4. You also must know timers from the
              description where the 555 timer IC is described. In similar ways,
              microcontrollers are embedded with such components that act as
              timers and counters inside the microcontroller to perform time and
              count related tasks.
            </li>
            <li>
              Oscillators - An oscillator embed in a microcontroller is used to
              provide a clock to the microprocessor of a microcontroller. In a
              microprocessor, every instruction is executed in synchronization
              with the clock. To achieve high clock speeds, an external
              oscillator can be used with a microcontroller.
            </li>
            <li>
              A/D Converters(Analog to Digital Converters and Digital to Analog
              Convertors) - Any microprocessor needs data to be in digital form
              i.e data has to be in a binary state to be processed. In
              microcontrollers, the CPU too requires digital data to work on but
              the input provided by devices is analog signals of voltage. So
              data needs to be converted into digital signals so analog to
              digital converters is present in a microcontroller to aid the
              processing.
            </li>
          </ul>
        </div>
        <p>
          After data gets processed according to the instructions, the processed
          data in digital form is again needed to be converted into analog
          signals as most of the output devices need analog signals to show
          output. So, a digital to analog converter is also embedded inside a
          microcontroller for this purpose. Remember, there are external
          converters also available.
        </p>

        <h3>Classification of MCUs</h3>
        <p>
          Microcontrollers are classified into various categories based on
          memory, architecture, bits, and instruction sets. Following is the
          list of their types −
        </p>
        <div>
          <ol>
            <li>
              <h3>On the basis of the number of bits</h3>
              <p>
                Based on the number of bits microcontroller can process in one
                clock cycle, the microcontroller is further classified into
                three categories:
              </p>
              <ul>
                <li>
                  8-bit microcontroller − Microcontrollers that process 8-bit of
                  information in one clock cycle. This type of microcontroller
                  is used to execute arithmetic and logical operations like
                  addition, subtraction, multiplication division, etc. For
                  example, Intel 8031 and 8051 are 8 bits microcontrollers.
                </li>
                <li>
                  16-bit microcontroller − Microcontrollers that process 16-bit
                  of information in one clock cycle. This type of
                  microcontroller is used to perform arithmetic and logical
                  operations where higher accuracy and performance are required.
                  For example, Intel 8096 is a 16-bit microcontroller.
                </li>
                <li>
                  32-bit microcontroller − Microcontrollers that process 32-bit
                  of information in one clock cycle. This type of
                  microcontroller is generally used in automatically controlled
                  appliances like automatic operational machines, medical
                  appliances, etc.
                </li>
              </ul>
            </li>
            <li>
              <h3>On basis of Memory</h3>
              <p>
                Based on the memory configuration, the microcontroller is
                further divided into two categories:
              </p>
              <ul>
                <li>
                  External memory microcontroller − This type of microcontroller
                  is designed in such a way that it does not have a program
                  memory on the chip. Hence, it is named an external memory
                  microcontroller. For example, Intel 8031 microcontroller.
                </li>
                <li>
                  Embedded memory microcontroller − This type of microcontroller
                  is designed in such a way that the microcontroller has all
                  programs and data memory, counters, and timers interrupt, I/O
                  ports are embedded on the chip. For example, Intel 8051
                  microcontroller.
                </li>
                <li>
                  <h4>On basis of Memory Architecture</h4>
                  <p>
                    Based on the memory architecture on which microcontroller is
                    created, they can be classified into two categories:
                  </p>
                  <ul>
                    <li>
                      <h4>Based on Von Neumann Memory Architecture - </h4>
                      <p>
                        These Microcontrollers have common memory for storage of
                        data as well as programs.
                      </p>
                    </li>
                    <li>
                      <h3>Based on Harvard Memory Architecture -</h3>
                      <p>
                        These Microcontrollers have separate memory units (and
                        separate
                        <a
                          className="text-blue-600 underline"
                          href="https://www.techopedia.com/definition/6733/data-bus#:~:text=A%20data%20bus%20is%20a,and%20other%20pieces%20of%20hardware."
                        >
                          buses
                        </a>
                        .) for storage of data as well as programs.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <p>
          Some of the examples of microcontrollers are ATmega328, ATtiny85,
          ESP8266, etc.
        </p>
        <p>
          You’ll see the use of some of the microcontrollers mentioned above in
          the blog of Development boards.
        </p>
        <div className="my-8 text-center">
          <Image src={image7} />
        </div>
        <h3>Applications of Microcontrollers</h3>
        <p>
          Microcontrollers are used for specified tasks where the tasks are
          predefined. They are used in different devices such as −
        </p>
        <div>
          <ol>
            <li>Light sensing and controlling devices like LED.</li>
            <li>
              Temperature sensing and controlling devices like microwave oven,
              chimneys.
            </li>
            <li>Fire detection and safety devices like a Fire alarm.</li>
            <li>Measuring devices like multimeters.</li>
          </ol>
        </div>
        <h3>Difference between Microprocessor and Microcontrollers</h3>
        <p>
          What is the need for Microcontrollers if we already had
          Microprocessors or vice versa A simple difference chart will surely
          clarify all such doubts.
        </p>
        <div className="my-8 text-center">
          <Image src={image8} />
        </div>
        <h1>Development boards</h1>
        <p>
          Hello everyone! Here we are with another fascinating topic for you to
          learn - Development Boards, more specifically, Arduino Uno
        </p>
        <p>What is a Development Board?</p>
        <p>
          A development board is a printed circuit board with circuitry and
          hardware designed to facilitate experimentation with a certain
          microcontroller. Some everyday development boards are- Arduino Boards
          like Uno, Nano, Mega, and many more non-arduino boards like ESP32.
        </p>
        <div className="my-8 text-center">
          <Image src={image9} />
        </div>
        <h5>Why do we need development boards?</h5>
        <p>
          Imagine you have a microcontroller, and you wish to do some cool
          projects, say a maze solver bot or a burglar alarm. Now, every time
          you would have to set up the elementary circuit on a breadboard, and
          you know that some of the electric circuits would be the same each
          time, like power circuits. That makes it redundant and frustrating.
          Imagine a PCB containing all this basic circuitry. That’s the reason
          why we use a Development Board.
        </p>
        <p>Regarding Arduino boards:</p>
        <p>
          Arduino boards are the pivotal components for thousands of ongoing
          projects in the field of robotics. With Arduino boards, you can
          convert input, like light, temperature, etc., from the sensors and
          govern an output, like activating an arm, a motor, or even sending
          information online.
        </p>
        <p>
          This is done by sending a set of instructions to the Arduino board
          using Arduino Programming Language, using Arduino Integrated
          Development Environment (Arduino
          <a
            className="text-blue-600 underline"
            href="https://www.codecademy.com/article/what-is-an-ide#:~:text=An%20IDE%2C%20or%20Integrated%20Development,%2C%20building%20executables%2C%20and%20debugging."
          >
            IDE
          </a>
          ). The language can be expanded through C++ libraries, and people
          wanting to understand the technical details can make the leap from
          Arduino to the AVR C programming language on which it is based.
          Similarly, you can add AVR-C code directly into your Arduino programs
          if you want to.
        </p>
        <p>
          Wondering what exactly is an Arduino and what’s with this new term
          AVR? Hold on! Let’s see what they mean.
        </p>
        <p>
          Arduino is an open-source hardware and software company which helps us
          build exciting electronics projects with easy-to-use hardware and
          software. All Arduino boards have one thing in common - a
          MICROCONTROLLER. The microcontroller is a comp...but you know what a
          microcontroller is?
        </p>
        <p>
          AVR is a microcontroller family developed by Atmel. Some of the
          examples are the ATmega series, ATtiny, ATxmega.
        </p>
        <p>
          Some sample projects that you could do using Arduino as brain include
          building a
          <a
            className="text-blue-600 underline"
            href="https://www.instructables.com/Simple-Arduino-Wireless-Burglar-Alarm/"
          >
            burglar alarm
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.instructables.com/How-to-Make-Line-Follower-Robot/"
          >
            line follower bot
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.instructables.com/Obstacle-Avoiding-Robot-Arduino-1/"
          >
            obstacle avoiding robot
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.instructables.com/Room-Temperature-Monitoring-Using-Arduino-and-LM-3/"
          >
            temperature monitoring systems
          </a>
          ,
          <a
            className="text-blue-600 underline"
            href="https://www.instructables.com/Smartphone-Controlled-RC-Car-Using-Arduino/"
          >
            RC car
          </a>
          , or even
          <a
            className="text-blue-600 underline"
            href="https://www.instructables.com/Home-Automation-Using-Arduino-Uno/"
          >
            home automation
          </a>
          .. or, you could also make some 'useless machines' like the one shown
          in
          <a
            className="text-blue-600 underline"
            href="https://www.youtube.com/watch?v=kproPsch7i0"
          >
            this
          </a>
          video.
        </p>
        <p>
          Now you know how interesting and important it is to learn about
          Arduino. As per requirements, Arduino CC manufactures many boards,
          (you can see them here: <a
            className="text-blue-600 underline"
            href="https://www.arduino.cc/en/hardware"
          >
            Arduino - Products
          </a>).
        </p>
        <b>Why are we studying Arduino boards, and why are they so popular?</b>
        <p>
          Arduino development boards are so popular because of their simple IDE,
          straightforward code, and lots of Open-source libraries. But this is
          not it. Arduino Hardware is also Open-source, which means several
          other companies make Arduino compatible boards programmable with
          Arduino IDE. Some of the common arduino boards are Arduino Nano,
          Arduino Uno, Arduino Mega, etc
        </p>
        <div className="my-8 text-center">
          <Image src={image10} />
        </div>
        <p>
          In this tutorial, we will study an everyday Arduino board - Arduino
          Uno. We will also do some simulations on Arduino Uno but let’s go
          through the hardware part first.
        </p>
        <div className="my-8 text-center">
          <Image src={image11} />
        </div>
        <div className="my-8 text-center">
          <Image src={image12} />
        </div>
        <p>This is how an Arduino Uno looks like.</p>
        <p>
          Some numbers have been marked on the image corresponding to components
          on the board. Let’s know about these components in detail
        </p>
        <div>
          <ol>
            <li>
              An Arduino Uno board can be powered using a USB cable from your
              computer. All you need to do is connect the wire to the USB
              connection. It helps to upload the sketch to the Arduino Uno
              board. Sometimes it is used to send <a
            className="text-blue-600 underline"
            href="https://en.wikipedia.org/wiki/Serial_communication"
          >
           serial data
          </a> to Arduino Uno
              too.
            </li>
            <li>
              The Arduino Uno board can also be powered using an AC-to-DC
              adapter or a battery. The power source can be connected by
              plugging in a 2.1mm center-positive plug into the power jack of
              the board.
            </li>
            <li>It is a voltage regulator.</li>
            <li>
              Crystal Oscillator: The crystal oscillator helps Arduino Uno in
              dealing with time issues. How does Arduino Uno calculate time? The
              crystal oscillator is what helps here. Its frequency is 16,000,000
              Hertz or 16 MHz.
            </li>
            <li>
              You can reset your Arduino Uno board, i.e., start your program
              from the beginning. You can reset the UNO board in two ways.
              First, by using the reset button (15) on the board. Second, you
              can connect an external reset button to the Arduino Uno pin
              labeled RESET(5).
            </li>
            <li>It supplies 3.3V output once the board is powered up.</li>
            <li>It supplies 5V output once the board is powered up</li>
            <li>
              There are several GND pins on the Arduino Uno, any of which can be
              used to ground your circuit.
            </li>
            <li>
              This pin also powers up the Arduino Uno board. Arduino Uno can
              operate on an external supply from 6 to 20 volts. If supplied with
              less than 7V, the 5V pin may supply less than five volts, and the
              board may become unstable. If using more than 12V, the voltage
              regulator may overheat and damage the board. The recommended range
              is 7 to 12 volts.
            </li>
            <li>
              The Arduino Uno board has six analog input pins A0 through A5.
            </li>
            <li>
              It is a microcontroller IC. The main IC on the Arduino is slightly
              different from board to board but is usually from the ATmega line
              of IC’s from the ATMEL company. Arduino Uno uses ATmega328P.
            </li>
            <li>
              This LED should light up when you plug your Arduino Uno into a
              power source to indicate that your board is powered up correctly.
              If this light does not turn on, then there is something wrong with
              the connection.
            </li>
            <li>
              On the board, you will see two labels: TX (transmit) and RX
              (receive). They appear in two places on the Arduino Uno board.
              First, at the digital pins 0 and 1, indicate the pins responsible
              for serial communication. Second, the TX and RX led (13). The TX
              led flashes with different speeds while sending the serial data.
              The speed of flashing depends on the baud rate used by the board.
              RX flashes during the receiving process.
            </li>
            <li>
              The Arduino Uno board has 14 digital I/O pins (of which 6 provide
              PWM (Pulse Width Modulation) output. These pins can be configured
              to work as input digital pins to read logic values (0 or 1) or as
              digital output pins to drive different modules like LEDs, relays,
              etc. The pins labeled “~” can be used to generate PWM.
            </li>
          </ol>
        </div>
        <h2>What is PWM?</h2>
        <p>
          Pulse Width Modulation is a method of reducing the average power
          delivered by an electrical signal, by effectively chopping it up into
          discrete parts. The term duty cycle describes the proportion of 'on'
          time to the regular interval or 'period' of time; a low duty cycle
          corresponds to low power, because the power is off for most of the
          time. Duty cycle is expressed in percent, 100% being fully on. When a
          digital signal is on half of the time and off the other half of the
          time, the digital signal has a duty cycle of 50% and resembles a
          "square" wave.
        </p>
        <div className="my-8 text-center">
          <Image src={image13} />
        </div>
        <p>
          That was pretty much all about the Uno board. But it's not over yet.
          In the next blog, we will do some simulations on an Arduino Uno board
          online on <a
            className="text-blue-600 underline"
            href="https://www.tinkercad.com/"
          >
           tinkercad
          </a>. Till then, complete the given assignment.
        </p>

        <p>Assignment Questions (mail them to puneet@zine.co.in):</p>
        <div>
          <ol>
            <li>
              What is flash memory? What is the size of flash memory for Arduino
              Uno?
            </li>
            <li>What is the baud rate mentioned in the blog?</li>
          </ol>
        </div>
        <h1>Programming Arduino Uno</h1>
        <p>
          Hello there! In the previous blog, we introduced you to Arduino. Now,
          it is time to try your hand at programming.
        </p>
        <p>
          Generally, we code in Arduino IDE, compile it and upload it to the
          Arduino. And the Arduino mostly behaves as expected. Simple? The
          programming language we use for programming the Arduino devices is
          Arduino Programming Language. But this is nothing to be scared of, it
          is just a <a
            className="text-blue-600 underline"
            href="https://techterms.com/definition/framework#:~:text=A%20framework,new%20application."
          >
           framework
          </a> built on top of C++, which means most syntax is
          the same.
        </p>
        <p>
          But there are quite a few differences too. One of the main differences
          is that unlike C++, it doesn’t have a main() function, but it does
          require two main functions: setup() and loop(). A program written in
          Arduino Programming Language is called Sketch.
        </p>
        <p>
          Now let’s start programming our Arduino board. If you’ve been
          following the blogs so far, you must know what we are going to use for
          simulation.
        </p>
        <div>
          <ol>
            <li>
              Go to <a
            className="text-blue-600 underline"
            href="https://www.tinkercad.com/join"
          >
           tinkercad
          </a> tinkercad and create a new personal account. You can sign in
              with google for your ease.
            </li>
            <li>
              You will see a screen like this after completing the signup
              process.
              <div className="my-8 text-center">
                <Image src={image14} />
              </div>
              <p>
                Select Circuits from the left panel and then create new circuit.
              </p>
              <div className="my-8 text-center">
                <Image src={image15} />
              </div>
            </li>
            <li>
              Next, you should see a blank screen with some components listed on
              the right side. Search for Arduino Uno R3, LED, and a resistor and
              drag them on the blank screen one by one.
            </li>
            <li>
              Make connections like the ones shown below and click on the Start
              Simulation button on the top right.
              <div className="my-8 text-center">
                <Image src={image16} />
              </div>
            </li>
            <li>
              Wow! The led is blinking. Note that not only the LED which we
              connected to the Arduino but the LED on the board is also
              blinking.
              <div className="my-8 text-center">
                <Image src={image17} />
              </div>
            </li>
          </ol>
        </div>

        <p>
          But you didn’t program it to do so. How did it happen? Let’s figure
          that out. First, Stop Simulation. Click on that little code button
          near the Start Simulation button. Open the Blocks menu and click on
          Text. You should see this:
        </p>
        <div className="my-8 text-center">
          <Image src={image18} />
        </div>
        <p>This is the default program that is causing the led to blink.</p>
        <p>Let’s try to understand how this program is doing so.</p>
        <p>void setup()</p>
        <p>void setup() &lbrace; pinMode(13, OUTPUT); &rbrace;</p>
        <p>void loop() &lbrace;</p>
        <p> digitalWrite(13, HIGH);</p>
        <p> delay(1000); // Wait for 1000 millisecond(s)</p>
        <p> digitalWrite(13, LOW);</p>
        <p> delay(1000); // Wait for 1000 millisecond(s) &rbrace;</p>
        <p>The first thing is you can see two functions: setup() and loop().</p>
        <p>
          setup(): This function is called at the very beginning and only once,
          when the program starts, and when the Arduino is shut down and
          restarted. So, for example, if you wanted something to be done only
          once, you will include those tasks in the setup.
        </p>
        <p>
          loop(): This function is repeatedly called while the program is
          running, this function governs the regular functioning of the Arduino
          board. So, if you want a task to be done repeatedly by an Arduino
          board then those tasks must reside in a loop().
        </p>
        <p>Line 3: pinMode(13, OUTPUT);</p>
        <p>This sets pin 13 on the Arduino board as an output pin.</p>
        <p>Lines 8, 10: digitalWrite(13, HIGH); and digitalWrite(13, LOW);</p>
        <p>These lines are used to set pin 13 high and low respectively.</p>
        <p>Lines 9, 12: delay(1000);</p>
        <p>
          These lines are giving a delay of 1000 milliseconds between setting
          pin HIGH and LOW.
        </p>
        <p>As the loop() is called repeatedly, the led starts blinking.</p>
        <div className="my-8 text-center">
          <Image src={image19} />
        </div>
        <p>
          Isn’t it amazing? Congratulations! You learned the “Hello World” of
          Arduino today. For more information on Arduino programming language
          you can refer to the following link:
        </p>
        <a
          className="text-blue-600 underline"
          href="https://flaviocopes.com/arduino-programming-language/#:~:text=The%20Arduino%20Programming%20Language%20is,Programming%20Language%20is%20called%20sketch.
        "
        >
          https://flaviocopes.com/arduino-programming-language/#:~:text=The%20Arduino%20Programming%20Language%20is,Programming%20Language%20is%20called%20sketch.
        </a>
        <p>
          Now it's the time for you to do a small assignment (Submission through
          Google form):
        </p>
        <div>
          <ol>
            <li>Why is the led on the Arduino Uno Board blinking?</li>
            <li>
              What will happen if we remove “delay(1000)” from the last line in
              the above program? Why do you think it is happening?
            </li>
            <li>What is the extension of a sketch?</li>
            <li>
              Redraw the circuit shown below.
              <div className="my-8 text-center">
                <Image src={image20} />
              </div>
              <p>
                Write a program such that the led lights up when the push button
                is pressed and turns off when we release the push button. Submit
                the code below.
              </p>
            </li>
            <li>
              Simulate the hypothetical circuit you studied in circuits [link to
              BEE circuits blog] blog on tinkercad and share the link.
            </li>
          </ol>
        </div>

        <h1>Sensors</h1>
        <p>
          Aight! It is time to learn about sensors now. Let’s cut to the chase!
        </p>
        <p>What is a sensor?</p>
        <p>
          Any device that measures physical input from its environment and
          converts it into data that can be interpreted by us or a machine.
        </p>
        <p>Let’s make it simpler with the example of an eye.</p>
        <p>
          The eye is a sensor of sight for us and the electronic counterpart of
          it is a camera. Both gather visual information from the surrounding
          environment and convert it into data that can be interpreted by their
          respective data processing units, i.e., brain for us and
          microcontroller or microprocessor for machines.
        </p>
        <p>
          <b>Fact</b>: The average resolution of a human eye is approximated to
          be 576 megapixels (you can refer this
          <a
            className="text-blue-600 underline"
            href="https://www.youtube.com/watch?v=4I5Q3UXkGd0&ab_channel=Vsauce     "
          >
            video
          </a>
          ) meanwhile the highest resolution camera devices ever created has a
          resolution of 108 megapixel created by
          <a
            className="text-blue-600 underline"
            href="https://www.theverge.com/circuitbreaker/2019/11/5/20949438/xiaomi-cc9-pro-108-megapixel-camera-phone-samsung-sensor "
          >
            Xiomi
          </a>
          ) and
          <a
            className="text-blue-600 underline"
            href="https://www.theverge.com/2020/2/12/21134366/samsung-108-megapixel-sensor-size-image-quality-noise-vs-iphone-xiaomi   "
          >
            Samsung
          </a>
          ).
        </p>
        <p>
          Now, we know what are sensors, but why do we need sensors in robotics?
        </p>
        <p>
          To answer this question, let’s take an example- You want your device
          to function according to the light, say a light follower bot. So, the
          bot you built must act to detect where the light is. As the intensity
          of light falling on the bot increases, then it can be concluded that
          the distance between the light source and bot is decreasing (assuming
          that light source emits at constant power). But how will you give the
          intensity of light as input to the microcontroller directly as the
          visual data can’t be directly interpreted by a microcontroller? We
          need an intermediate to bridge this gap.
        </p>
        <p>
          There exists a need to convert light intensity into signals to feed
          them into our ICs or a microcontroller so the data can be interpreted
          and output can be obtained. We need a device that can sense the
          intensity of light in the surroundings and provide that information in
          the form of electrical signals to make a robot that acts on the
          intensity of light. Sensors, come to the rescue. Just like you have
          your senses to interact with the surroundings, such as
        </p>
        <div>
          <ol>
            <li>Eyes for visual input (discussed above)</li>
            <li>Ears for auditory inputs</li>
            <li>Tongue for the sense of taste (or sense of pH indirectly)</li>
            <li>Skin for the sense of touch, change in temperature, etc</li>
            <li>Nose for the sense of smell</li>
          </ol>
        </div>
        <div className="my-8 text-center">
          <Image src={image21} />
        </div>
        <p>
          Similarly, fields of electronics also have several sensors so that the
          ICs and microcontrollers can interact with their surroundings.
          Although most of the sensors provide output in the form of electrical
          signals, some sensors provide data in some other form too.
        </p>
        <p>
          For example, a thermometer is a sensor or a temperature sensor that
          senses the temperature and provides data in the form of visual
          information. In our case, we are going to use an LDR(sensor) to detect
          the intensity of light which in return feeds that data into our device
          to process further.
        </p>
        <p>
          In a nutshell, sensors are the devices that detect the alteration in
          electrical or physical, or other quantities and provide the compatible
          data to the devices you are using to process the information. For a
          robot utilizing electronic circuitry or system to perform any useful
          task or function, it needs to be able to communicate with the “real
          world” whether this is by reading an input signal from an “ON/OFF”
          switch or by activating some form of the output device to illuminate a
          single light.
        </p>
        <p>
          Now, we’ve mentioned some sensors. We need you to think which
          electronic sensors are associated directly with our sense organs and
          how. This is an assignment to help you understand the relation between
          sensors in humans and machines.
        </p>
        <div className="my-8 text-center">
          <Image src={image22} />
        </div>
        <p>
          In the next blog, we’ll learn about how to choose sensors. We’ll also
          classify a wide range of sensors on different bases, and how they
          work.
        </p>
        <p>
          Till then, try to think about more sensors that provide the data but
          not in the form of electric signals.
        </p>
      </div>
    </div>
  {/* Quiz Component */}
      <div>
        {showScore ? (
          <div>
            <h2>Your score: {score} out of {questions.length}</h2>
          </div>
        ) : (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <div>
              {questions[currentQuestion].answers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(index)}>
                  {answer}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Like Button Component */}
      <div>
        <button onClick={() => setLikeCount(likeCount + 1)}>
          Like {likeCount}
        </button>
      </div>

      {/* Comment Section Component */}
      <div>
        <form onSubmit={handleCommentSubmit}>
          <textarea value={newComment} onChange={handleCommentChange} />
          <button type="submit">Add Comment</button>
        </form>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Microcontroller;
