import React, { useEffect, useState } from 'react';
import axios from "../../axios.js";
import '../../App.scss'
import 'bootstrap/dist/css/bootstrap.css'
function Game(props) {
    const [game, setGame] = useState({
        title: 'Loading',
        questionList: ["64613b6bd1c58de2ab644c5e", "646147cb9a377edbaabee347", "646147e39a377edbaabee349"]
    });
    const [question, setQuestion] = useState({
        title: "Loading",
        codeBlocks: ["6465da51bf1bbbfb0deda7b6", "6465da4cbf1bbbfb0deda7b5", "6465da56bf1bbbfb0deda7b7", "64612e7a21186d6fac1cb82c"],
        codeFields: ["6465da51bf1bbbfb0deda7b6", "6465da4cbf1bbbfb0deda7b5", "6465da56bf1bbbfb0deda7b7"],
        correctPattern: ["64612e9f21186d6fac1cb830", "64612ec621186d6fac1cb834", "64612ebc21186d6fac1cb832"]
    });
    const [currentNum, setCurrentNum] = useState(0);
    const [isCompLoaded, setIsCompLoaded] = useState(false);
    const [codeFieldsList, setCodeFieldsList] = useState([]);
    const [codeBlocksList, setCodeBlocksList] = useState([]);
    const [currentBlock, setCurrentBlock] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const link = window.location.href;
                const gameId = link.trim().slice(27);
                const blockList = [];
                const fieldList = [];

                const gameResponse = await axios.get(`/game/${gameId}`);
                setGame(gameResponse.data);

                const questionResponse = await axios.get(`/admin/questions/${game.questionList[currentNum]}`);
                setQuestion(questionResponse.data);
                console.log(questionResponse.data)

                await Promise.all(
                    questionResponse.data.codeFields.map(async (codeFieldId) => {
                        const response = await axios.get(`/admin/codeblocks/${codeFieldId}`);
                        fieldList.push(response.data);
                        console.log(codeFieldId)
                    })
                );
                setCodeFieldsList(fieldList);

                await Promise.all(
                    questionResponse.data.codeBlocks.map(async (codeBlockId) => {
                        const response = await axios.get(`/admin/codeblocks/${codeBlockId}`);
                        blockList.push(response.data);
                    })
                );
                setCodeBlocksList(blockList);

                setIsCompLoaded(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentNum]);

    const handleNext = () => {
        setCurrentNum(currentNum + 1);
    };


    // drag drop functionality
    const dragStartHandler = (e, block) => {
        console.log(block)
        setCurrentBlock(block)
    }
    const dragEndHandler = (e) => {

    }
    const dragOverHandler = (e) => {
        e.preventDefault()
    }
    const dropHandler = (e, block) => {
        e.preventDefault()
        console.log(block)
        if (currentBlock.blockField==="true") {

        }

    }
    return (
        <div className="Game">
            <main>
                <section id="question">
                    <div className="container-fluid">
                        <h1>{game.title}</h1>
                        <h3>{question.title}</h3>
                        <div className="main_game mx-3 mt-5 mb-3">
                            {isCompLoaded ? (
                                <div className="answers_list row mx-5 py-5 justify-content-center align-items-evenly">
                                    {codeFieldsList.map((field) => (
                                        <div
                                            className={field.blockField === "true" ? "codeblock_empty mx-4" : "codeblock"}
                                            key={field._id}
                                            draggable={field.blockField === "true" ? false : true}
                                            onDragStart={(e) => dragStartHandler(e, field)}
                                            onDragLeave={(e) => dragEndHandler(e)}
                                            onDragEnd={(e) => dragEndHandler(e)}
                                            onDragOver={(e) => dragOverHandler(e)}
                                            onDrop={(e) => dropHandler(e, field)}
                                        >
                                            {field.blockName}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading</div>
                            )}
                            <div>
                                <button className="btn btn-secondary rounded-pill px-3" onClick={handleNext} type="button">Next</button>
                            </div>
                            {isCompLoaded ? (
                                <div className="block_list row mx-5 py-5 justify-content-evenly">
                                    {codeBlocksList.map((block) => (
                                        <div
                                            className="codeblock py-2"
                                            key={block._id}
                                            draggable={true}
                                            onDragStart={(e) => dragStartHandler(e, block)}
                                            onDragLeave={(e) => dragEndHandler(e)}
                                            onDragEnd={(e) => dragEndHandler(e)}
                                            onDragOver={(e) => dragOverHandler(e)}
                                            onDrop={(e) => dropHandler(e, block)}
                                        >
                                            {block.blockName}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading</div>
                            )}
                        </div>
                    </div>
                </section>
                <section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>Utopia 2.0
                                    </h6>
                                    <p>Explore your major with Eutopia 2.0!</p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                    <p>
                                        <a href="#!" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3"></i>Geel, Belgium</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        utopia@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        © 2023 Thomas More
                        <a className="text-reset" href="https://thomasmore.be">Thomas More</a>
                    </div>
                </section>
            </main>
        </div>
    );

}

export default Game;
