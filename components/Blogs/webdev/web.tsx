import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../../images/blog/webdev/image1.png";

const Web = () => {
   const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  const handleQuizSubmit = () => {
    if (quizAnswer.toLowerCase() === "hypertext markup language") {
      setQuizResult("Correct!");
    } else {
      setQuizResult("Incorrect. Try again.");
    }
  };
  return (
    <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Web Development</h1>
              </div>
          </div>

        <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <p>
          Before diving into the sea of web development, we must first
          understand how the web works.
        </p>
        <p>
          Clients are the typical web user's internet-connected devices (for
          example, your computer connected to your Wi-Fi or your phone connected
          to your mobile network) and web-accessing software available on those
          devices (usually a web browser like Firefox or Chrome).
        </p>
        <p>
          Servers are computers that store webpages, sites, or apps. When a
          client device wants to access a webpage, a copy of the webpage is
          downloaded from the server onto the client machine to be displayed in
          the user's web browser.
        </p>
        <div className="my-8 text-center">
          <Image src={image1} />
        </div>
        <h2>So what happens, exactly?</h2>
        <p>
          When you type a web address into your browser (for our analogy, that's
          like walking to the shop):
        </p>
        <ol>
          <li>
            The browser goes to the DNS server and finds the actual address of
            the server that the website lives on (you find the shop’s address).
          </li>
          <li>
            The browser sends an HTTP request message to the server, asking it
            to send a copy of the website to the client (you go to the shop and
            order your goods). This message, and all other data sent between the
            client and the server, is sent across your internet connection using
            TCP/IP.
          </li>
          <li>
            If the server approves the client's request, the server sends the
            client a "200 OK" message, which means "Of course, you can look at
            that website! Here it is", and then starts sending the website's
            files to the browser as a series of small chunks called data packets
            (the shop gives you your goods, and you bring them back to your
            house).
          </li>
          <li>
            The browser assembles the small chunks into a complete web page and
            displays it to you (the goods arrive at your door — new shiny stuff,
            awesome!).
          </li>
        </ol>
        <h2></h2>
        <ol>
          <li>
            <p>
              When a browser sends a request for an HTML file, it first parses
              the HTML.
            </p>
            <p>
              If the HTML file contains <code>{`<link>`}</code> elements that
              reference external CSS stylesheets, the browser sends additional
              requests to the server for each stylesheet in the order they
              appear in the HTML file.
            </p>
            <p>
              If the HTML file contains <code>{`<script>`}</code> elements that
              reference external JavaScript files, the browser sends additional
              requests to the server for each script in the order they appear in
              the HTML file, except for scripts with the <code>async</code> or
              <code>defer</code> attributes set.
            </p>
            <p>
              After the external CSS and JavaScript files are loaded, the
              browser constructs a Document Object Model (DOM) tree from the
              parsed HTML and an in-memory CSS Object Model (CSSOM) from the
              parsed CSS files.
            </p>
            <p>
              The browser then applies the styles from the CSSOM to the
              corresponding elements in the DOM tree, and executes any
              JavaScript code found in the HTML or external JavaScript files.
            </p>
            <p>
              Finally, the browser paints the visual representation of the page
              on the screen, allowing the user to interact with it.
            </p>
          </li>
          <li>
            <p>
              The browser parses the HTML file first, which leads to the browser
              recognising any &lt;link&gt;-element references to external CSS
              stylesheets and any &lt;script&gt;-element references to scripts.
            </p>
          </li>
          <li>
            <p>
              As the browser parses the HTML, it sends requests back to the
              server for any CSS files it has found from &lt;link&gt; elements
              and any JavaScript files it has found from &lt;script&gt;
              elements, and those then parse the CSS and JavaScript.
            </p>
          </li>
          <li>
            <p>
              The browser generates an in-memory DOM tree from the parsed HTML,
              generates an in-memory CSSOM structure from the parsed CSS, and
              compiles and executes the parsed JavaScript.
            </p>
          </li>
          <li>
            <p>
              As the browser builds the DOM tree and applies the styles from the
              CSSOM tree, and executes the JavaScript, a visual representation
              of the page is painted on the screen, and the user sees the page
              content and can begin to interact with it.
            </p>
          </li>
        </ol>
        import React from 'react';
        <ul>
          <li>
            &lt;!--...--&gt; - Comment. Everybody likes to comment. It allows
            you to write a comment in your code.
          </li>
          <li>
            &lt;!DOCTYPE html&gt; - It defines the document type for browser to
            recognize it.
          </li>
          <li>&lt;html&gt; - It marks the start of html document.</li>
          <li>
            &lt;head&gt; - Every HTML document is divided in two parts: head and
            body. This tag defines the head part.
          </li>
          <li>&lt;body&gt; - It defines the body part of html document.</li>
          <li>
            &lt;meta&gt; - It defines the meta data of the page such as
            viewport, character set, etc. Don’t worry if you don’t get the use
            of it.
          </li>
          <li>&lt;title&gt; - It defines the title of the webpage.</li>
          <li>
            &lt;a&gt; - It stands for anchor tag and used to create hyperlinks
            and links.
          </li>
          <li>
            &lt;b&gt; - If there is an ‘a’ there is a ‘b’. But it’s different.
            Use it on a text and live boldly.
          </li>
          <li>
            &lt;br&gt; - Well the one problem or miracle of HTML is that it
            collapses the spaces so it is virtually impossible to just give a
            line break by pressing enter. For that, we use the br tag.
          </li>
          <li>&lt;button&gt; - Don’t think we need to tell what this does.</li>
          <li>
            &lt;div&gt; - Most encountered tag in HTML. It just defines a box
            for the content and we use the box to apply many stylings.
          </li>
          <li>
            &lt;form&gt; - One of the important and challenging parts of
            development is gathering and using the user data. Forms are the
            important part of it. This tag marks the form in an html.
          </li>
          <li>
            &lt;input&gt; - In the form one needs a field to input data. The
            input tag defines an input field to do just that.
          </li>
          <li>
            &lt;label&gt; - What the input is for? We answer that by the label
            tag. It defines a label for input tag.
          </li>
          <li>
            &lt;h1&gt; to &lt;h6&gt; - These are the heading tags in HTML used
            to define heading in a document.
          </li>
          <li>&lt;img&gt; - It expands to image and then it defines itself.</li>
          <li>&lt;link&gt; - It creates a link to file used by the webpage.</li>
          <li>&lt;nav&gt; - Defines the navigation links for a page.</li>
          <li>&lt;p&gt; - Defines a paragraph in a document.</li>
          <li>&lt;ol&gt; - Defines an ordered list with numbers.</li>
          <li>&lt;ul&gt; - Defines an unordered list with bullet points.</li>
          <li>&lt;li&gt; - Defines a list item in these lists.</li>
          <li>&lt;video&gt; - Self-explanatory.</li>
        </ul>
        <p>
          Well, it was a long typing span but still I think we have left quite
          some tags. Don’t worry you can still get other tags on{" "}
          <a href="https://www.w3schools.com/html/default.asp">W3Schools</a>.
          But the docs many developers use are{" "}
          <a href="https://developer.mozilla.org/en-US/">MDN Docs</a> . I would
          strongly suggest reading these docs and making your own HTML practice
          page before continuing further.
        </p>
        <div>
          <h2>CSS</h2>
          <p>
            Now that we have created the basic structure of our webpage, here
            comes the time to style it with colors and fonts. We use CSS to
            style our HTML page and make it look more beautiful. And guess where
            we can get all the content? At the same page we got out HTML
            content.
          </p>
          <p>&lt;link rel="stylesheet" href="./Club.css"&gt;</p>
          <p>
            But before we begin, we must link our CSS file to our HTML file
            using the link tag. The rel attribute tells the HTML the type of
            document we want to link to our HTML file. For a CSS file it’s
            stylesheet. The href attribute gives the browser the destination
            where we have our CSS file on our system.
          </p>
          <p>
            Now that we have the file linked, we can start our styling? But wait
            how do I tell the browser to apply style to a particular element.
            Here where the selectors come in. Here we shall only be covering the
            basic selectors.
          </p>
          <ol>
            <li>
              Element Selector: We can select an element by its name using an
              element selector. It looks something like this
            </li>
            <pre>
              <code>
                p {"{"}
                color: white;
                {"}"}
              </code>
            </pre>
            <li>
              Class Selector: We can also give a class name to an element to
              select it in our CSS. It is generally denoted by ‘.’ in CSS.
            </li>
            <pre>
              <code>
                .header {"{"}
                color: black;
                {"}"}
              </code>
            </pre>
            <li>
              ID Selector: We can also give an Id to a tag along with a class
              and style with it. It generally begins with a ‘#’ in CSS.
            </li>
            <pre>
              <code>
                #abc {"{"}
                color: grey;
                {"}"}
              </code>
            </pre>
          </ol>
        </div>
        <div>
          <h2>Example -</h2>
          <p>HTML</p>
          <div>
            <p>&lt;!-- This is a comment --&gt;</p>
            <p>&lt;DOCTYPE html&gt;</p>
            <p>&lt;html lang="en"</p>
            <p>&lt;head&gt;</p>
            <p>&lt;meta charset="UTF-8"&gt;</p>
            <p>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</p>
            <p>
              &lt;meta name="viewport" content="width=device-width,
              initial-scale=1.0"&gt;
            </p>
            <p>&lt;title&gt;Document &lt;title&gt;</p>
            <p>&lt;link rel="stylesheet" href="./Club.css"&gt;</p>
            <p>&lt;/head&gt;</p>
            <p>&lt;body&gt;</p>
            <p>&lt;p &gt;Hello&lt;p&gt;</p>
            <p>&lt;p class="fresher"&gt;Freshers&lt;p&gt;</p>
            <p>
              &lt;p id="welcome"&gt;Welcome to the zine Recruitmeent&lt;p&gt;
            </p>
            <p>&lt;/body&gt;</p>
            <p>&lt;/html&gt;</p>
            <p>&lt;&gt;</p>
          </div>

          <div>
            <h2>CSS</h2>
            <p>
              {" "}
              p {"{"}
              color: red
              {"}"}
            </p>
            <p>
              .fresher {"{"}
              color: blue;
              {"}"}
            </p>
            <p>
              #welcome {"{"}
              color: bisque;
              {"}"}
            </p>
          </div>
        </div>
        <p>
          Now I can say we have figured out everything we need to do before. So
          let's jump in our stylings.
        </p>
        <p>For starters-</p>
        <ul>
          <li>color - defines the color of the text</li>
          <li>
            background-color - defines the background color for the given tag
          </li>
          <li>
            font-family - defines the family of the font used. Wait for the
            workshop to know more about it and our favorites.
          </li>
          <li>font-size - defines the font size of the text</li>
          <li>height - defines the height of the div</li>
          <li>width - defines the width of the div</li>
        </ul>
        <p>Box Model</p>
        <p>
          One of the most widely used styling is of box model. Basically, CSS
          treats every div as a box which has some properties which are
        </p>
        <ul>
          <li>
            padding - refers to the space between box's content and it's
            boundary
          </li>
          <li>border - refers to the outline of the box</li>
          <li>
            margin - refers to the space outside the box's boundary that browser
            has to leave in rendering the box.
          </li>
        </ul>
        <p>
          For further info about box model, you can use the above mentioned
          references. Also see for properties like box-shadow, etc.
        </p>
        <p>CSS Layout</p>
        <p>
          Well now we have boxes but how do we arrange those boxes; for this we
          use CSS Layout which mainly stands on these two:
        </p>
        <p>Flexbox</p>
        <p>
          Flexbox is an arrangement of boxes in one direction like a row or a
          column. To enable flexbox, we set:
        </p>
        <code>display: flex;</code>
        <p>Grid</p>
        <p>
          Grid is more of a 2-D arrangement of elements. To set up a grid, we
          can use:
        </p>
        <code>
          display: grid; grid-template-columns: 200px 300px; grid-template-rows:
          100px 50px;
        </code>
        <p>This gives an arrangement as:</p>
        <p>JavaScript</p>
        <p>
          We have the bricks and color now let's add functionality. JavaScript
          is the programming language widely used for both client-side and
          server-side of a web app. Let's breakdown the language first.
        </p>
        <p>Variables</p>
        <p>
          JS is dynamically typed so we don't have any use for declaring the
          type of variables. We popularly use let and const for variable
          declaration.
        </p>
        <code>const x = 10; let y = 12;</code>
        <p>
          There is also another method to declare a variable using var keyword
          but its use is discontinued with time due to security reasons. Along
          with primary data types we also have array and objects in JS.
        </p>
        <div>
          <ul>
            <li>
              <h2>Selection statement:</h2>
              <p>We have both if else and switch statements in JS.</p>
              <p> switch (key) {"{"}</p>
              <p> case value: break; default: break;</p>
              <p> {"}"}</p>
              <p> if (condition) {"{"}</p>
              <p>
                {" "}
                {"}"}else{"{"}
              </p>
              <p> {"}"}</p>
            </li>
            <li>
              <h2>Looping statement </h2>
              <p>We have aall three loops in Js</p>
              <p> do {"{"}</p>
              <p>
                {"}"} while (condition); while (condition) {"{"}
              </p>
              <p>{"}"}</p>
              <p> for (let index = 0; index &lt; length; index++) {"{"}</p>
              <p> {"}"}</p>
            </li>
            <li>
              <h2>unctions -</h2>
              <p> function name(params) {"{"} </p>
              <p>{"}"}</p>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Now that we are familiar with the basic concepts of JS. We are
            moving to DOM (Document Object Model) and Event Listeners.
          </p>
          <p>
            The above shows the DOM tree generated during rendering a webpage.
            In the DOM model we can access every part of the document by an
            object in JS by using query selector.
          </p>
          <p>These selectors are –</p>
          <ul>
            <li>document.getElementsByName("")</li>
            <li>document.getElementsByClassName("")</li>
            <li>document.getElementById()</li>
          </ul>
        </div>
        <p>
          It’s by using these selectors that we can interact with the HTML
          elements, add an event listener and much more. For sake of simplicity
          we are just going to show one example of the event listeners.
        </p>
        <h2>HTML</h2>
        <div>
          <p>&lt;!DOCTYPE&nbsp;html&gt;</p>
          <p>&lt;html&nbsp;lang=&quot;en&quot;&gt;</p>
          <p>&nbsp;</p>
          <p>&lt;head&gt;</p>
          <p>&nbsp; &nbsp;&nbsp;&lt;meta&nbsp;charset=&quot;UTF-8&quot;&gt;</p>
          <p>
            &nbsp;
            &nbsp;&nbsp;&lt;meta&nbsp;http-equiv=&quot;X-UA-Compatible&quot;&nbsp;content=&quot;IE=edge&quot;&gt;
          </p>
          <p>
            &nbsp;
            &nbsp;&nbsp;&lt;meta&nbsp;name=&quot;viewport&quot;&nbsp;content=&quot;width=device-width,
            initial-scale=1.0&quot;&gt;
          </p>
          <p>&nbsp; &nbsp;&nbsp;&lt;title&gt;Document&lt;/title&gt;</p>
          <p>&lt;/head&gt;</p>
          <p>&nbsp;</p>
          <p>&lt;body&gt;</p>
          <p>
            &nbsp; &nbsp;&nbsp;&lt;button&nbsp;id=&quot;click&quot;&gt;Click me
            !!!&lt;/button&gt;
          </p>
          <p>&lt;/body&gt;</p>
          <p>&nbsp;</p>
          <p>&lt;/html&gt;</p>
        </div>
        <div>
          <h2>JS</h2>
          <p>function&nbsp;onClick() </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;alert(&quot;Hello
            Freshers&quot;);
          </p>
          <p>&nbsp; &nbsp; &nbsp; &nbsp; </p>
          <p>
            &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;let&nbsp;button&nbsp;=&nbsp;document.getElementById(&quot;click&quot;);
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp;
            button.addEventListener(&quot;click&quot;, onClick);
          </p>
        </div>
        <div>
          <h2>Preview</h2>
          <p>When Clicked</p>
          <p>
            Problem Statement – Build a Portfolio using HTML, CSS and JS. It
            must contain a Homepage (Landing Page), About, Works, Services,
            Contact and must be at least a two-page Portfolio with both pages
            linked to each other. Also include link to your GitHub profile in
            the portfolio and deploy it. Send us the link of the deployed site
            to the same on zine.nitj@gmail.com
          </p>
        </div>
      </div>
    </div>
     <h2 className="mt-8">Quiz: What is the full form of HTML?</h2>
        <input
          type="text"
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        />
        <button
          onClick={handleQuizSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Submit
        </button>
        {quizResult && <p className="mt-2">{quizResult}</p>}

        <div className="my-4">
          <button
            onClick={handleLike}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Like
          </button>
          <span className="ml-2">{likeCount} Likes</span>
        </div>

        <div className="mt-8">
          <h2>Comments</h2>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment..."
            className="border border-gray-400 p-2 rounded w-full"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Post Comment
          </button>
          <ul className="mt-4">
            {comments.map((c, index) => (
              <li key={index} className="border-b border-gray-300 py-2">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Web;
