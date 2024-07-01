import React, { useState } from 'react';

const ML = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [quizAnswers, setQuizAnswers] = useState([null, null, null, null, null]);
    const [quizScore, setQuizScore] = useState(null);

    const handleLike = () => setLikes(likes + 1);

    const handleCommentChange = (e) => setComment(e.target.value);

    const handleCommentSubmit = () => {
        if (comment) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const handleQuizChange = (index, value) => {
        const newAnswers = [...quizAnswers];
        newAnswers[index] = value;
        setQuizAnswers(newAnswers);
    };

    const handleQuizSubmit = () => {
        const correctAnswers = ["A", "C", "B", "D", "B"];
        let score = 0;
        quizAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score++;
            }
        });
        setQuizScore(score);
    };

    return (
        <div className="h-screen bg-white text-center flex flex-col items-center justify-center p-4">
            <iframe className="h-full w-full mb-4" src="https://docs.google.com/document/d/e/2PACX-1vRX9SdN78Zl2ws_c74cqArk5Tu1yo6DQOMFiJrWZc6weyL-tYJnlOJT_EFxrjIQ4LoIGzDRRJEGdvXp/pub?embedded=true" ></iframe>

            <div className="bg-gray-100 p-4 rounded shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Introduction to Machine Learning</h2>

                <h3 className="text-xl font-semibold mb-2">Supervised Learning</h3>
                <p className="mb-4">
                    Supervised learning is a type of machine learning where the model is trained on labeled data. This means that each training example is paired with an output label. The model learns to predict the output from the input data. Common algorithms used in supervised learning include linear regression, logistic regression, support vector machines, and neural networks.
                </p>

                <h3 className="text-xl font-semibold mb-2">Unsupervised Learning</h3>
                <p className="mb-4">
                    Unsupervised learning involves training a model on data that does not have labeled responses. The model tries to learn the patterns and the structure from the data without any specific feedback. Clustering and association are two common types of unsupervised learning techniques. K-means clustering and hierarchical clustering are popular clustering algorithms.
                </p>

                <h3 className="text-xl font-semibold mb-2">Reinforcement Learning</h3>
                <p className="mb-4">
                    Reinforcement learning is a type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize some notion of cumulative reward. This learning process is inspired by behavioral psychology. Key components of reinforcement learning include the agent, environment, actions, states, and rewards. Algorithms like Q-learning and deep reinforcement learning are widely used.
                </p>

                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLike}>Like ({likes})</button>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Comments</h3>
                    <div className="mb-4">
                        {comments.map((comment, index) => (
                            <div key={index} className="bg-gray-200 p-2 rounded mb-2">{comment}</div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={comment}
                        onChange={handleCommentChange}
                        className="border p-2 rounded w-full mb-2"
                        placeholder="Add a comment"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleCommentSubmit}>Submit</button>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Quiz</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleQuizSubmit(); }}>
                        <div className="mb-4">
                            <label>1. What type of learning is used when the model learns from labeled data?</label>
                            <div>
                                <input type="radio" name="q1" value="A" onChange={(e) => handleQuizChange(0, e.target.value)} /> A. Supervised Learning
                            </div>
                            <div>
                                <input type="radio" name="q1" value="B" onChange={(e) => handleQuizChange(0, e.target.value)} /> B. Unsupervised Learning
                            </div>
                            <div>
                                <input type="radio" name="q1" value="C" onChange={(e) => handleQuizChange(0, e.target.value)} /> C. Reinforcement Learning
                            </div>
                        </div>

                        <div className="mb-4">
                            <label>2. Which algorithm is commonly used in clustering?</label>
                            <div>
                                <input type="radio" name="q2" value="A" onChange={(e) => handleQuizChange(1, e.target.value)} /> A. Linear Regression
                            </div>
                            <div>
                                <input type="radio" name="q2" value="B" onChange={(e) => handleQuizChange(1, e.target.value)} /> B. Logistic Regression
                            </div>
                            <div>
                                <input type="radio" name="q2" value="C" onChange={(e) => handleQuizChange(1, e.target.value)} /> C. K-means Clustering
                            </div>
                            <div>
                                <input type="radio" name="q2" value="D" onChange={(e) => handleQuizChange(1, e.target.value)} /> D. Q-learning
                            </div>
                        </div>

                        <div className="mb-4">
                            <label>3. What is the goal of reinforcement learning?</label>
                            <div>
                                <input type="radio" name="q3" value="A" onChange={(e) => handleQuizChange(2, e.target.value)} /> A. Clustering data
                            </div>
                            <div>
                                <input type="radio" name="q3" value="B" onChange={(e) => handleQuizChange(2, e.target.value)} /> B. Maximizing cumulative reward
                            </div>
                            <div>
                                <input type="radio" name="q3" value="C" onChange={(e) => handleQuizChange(2, e.target.value)} /> C. Predicting labels
                            </div>
                            <div>
                                <input type="radio" name="q3" value="D" onChange={(e) => handleQuizChange(2, e.target.value)} /> D. None of the above
                            </div>
                        </div>

                        <div className="mb-4">
                            <label>4. Which type of learning uses the concept of agents and environments?</label>
                            <div>
                                <input type="radio" name="q4" value="A" onChange={(e) => handleQuizChange(3, e.target.value)} /> A. Supervised Learning
                            </div>
                            <div>
                                <input type="radio" name="q4" value="B" onChange={(e) => handleQuizChange(3, e.target.value)} /> B. Unsupervised Learning
                            </div>
                            <div>
                                <input type="radio" name="q4" value="C" onChange={(e) => handleQuizChange(3, e.target.value)} /> C. Semi-supervised Learning
                            </div>
                            <div>
                                <input type="radio" name="q4" value="D" onChange={(e) => handleQuizChange(3, e.target.value)} /> D. Reinforcement Learning
                            </div>
                        </div>

                        <div className="mb-4">
                            <label>5. Which of the following is not a common algorithm used in supervised learning?</label>
                            <div>
                                <input type="radio" name="q5" value="A" onChange={(e) => handleQuizChange(4, e.target.value)} /> A. Support Vector Machines
                            </div>
                            <div>
                                <input type="radio" name="q5" value="B" onChange={(e) => handleQuizChange(4, e.target.value)} /> B. K-means Clustering
                            </div>
                            <div>
                                <input type="radio" name="q5" value="C" onChange={(e) => handleQuizChange(4, e.target.value)} /> C. Neural Networks
                            </div>
                            <div>
                                <input type="radio" name="q5" value="D" onChange={(e) => handleQuizChange(4, e.target.value)} /> D. Logistic Regression
                            </div>
                        </div>

                        <button className="bg-purple-500 text-white px-4 py-2 rounded" type="submit">Submit Quiz</button>
                    </form>
                    {quizScore !== null && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Your Score: {quizScore}/5</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ML;
