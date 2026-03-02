import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h2 className='news-title'>Kiriri Library Updates</h2>

            <div className='news-data'>

                <div className='news-empty'></div>

                {/* Competitions Section */}
                <div>
                    <h1 className='news-subtitle'>Library Competitions</h1>
                    <div>

                        <div className='news-competition-event'>
                            <p>Research Writing Competition</p>
                            <p>
                                Students are invited to participate in the annual academic 
                                research writing competition organized by the University Library.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p>Book Review Challenge</p>
                            <p>
                                Share a creative and critical review of any academic book 
                                available in the library and stand a chance to win prizes.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p>Information Literacy Contest</p>
                            <p>
                                Test your research and referencing skills in our information 
                                literacy awareness competition.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p>Innovation & Leadership Essay</p>
                            <p>
                                Submit essays focusing on women leadership and innovation 
                                inspired by Kiriri’s academic values.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p>Reading Week Challenge</p>
                            <p>
                                Participate in our reading week initiative to promote a strong 
                                reading culture within the university.
                            </p>
                        </div>

                    </div>
                </div>

                <div className='news-empty'></div>

                {/* Online Quiz Section */}
                <div>
                    <h1 className='news-subtitle'>Online Academic Quizzes</h1>
                    <div>

                        <div className='news-quiz-event'>
                            <p>Library Orientation Quiz</p>
                            <p>
                                A quiz designed to help new students understand how to 
                                effectively use the library resources and systems.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p>Referencing & Citation Quiz</p>
                            <p>
                                Test your knowledge on proper academic referencing styles 
                                and citation practices.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p>Digital Resources Awareness Quiz</p>
                            <p>
                                Learn about the available online journals and e-books 
                                accessible through the university library portal.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p>Women in STEM Knowledge Quiz</p>
                            <p>
                                Celebrate women in science and technology through an 
                                engaging academic knowledge quiz.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p>Academic Integrity Quiz</p>
                            <p>
                                Strengthen your understanding of plagiarism policies 
                                and responsible research practices.
                            </p>
                        </div>

                    </div>
                </div>

                <div className='news-empty'></div>

            </div>
        </div>
    )
}

export default News
