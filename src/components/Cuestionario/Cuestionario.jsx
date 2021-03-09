import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaAngleRight, FaMicrophone, FaQuestion } from 'react-icons/fa';
import "./cuestionario.css";
// import ProgressBar from '../../components/General/ProgressBar';

const questions = [
  {
    id: '1',
    question: '¿Cuantos años tienes?',
    correct: ['24'],
    answers: ['30', '24', '28', '18'],
  },
  {
    id: '2',
    question: '¿De que color es el caballo?',
    correct: ['blanco'],
    answers: ['rojo', 'azul', 'amarillo', 'blanco'],
  },
  {
    id: '3',
    question: '¿En que continente se encuentra México?',
    correct: ['America'],
    answers: ['America', 'Europa', 'Africa', 'Asia'],
  },
];

const Examen = () => {
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(0);
  const [question, setQuestion] = useState(questions[page]);
  const [answer, setAnswer] = useState('');
  const max = questions.length;
  const options = ['A', 'B', 'C', 'D', 'E'];
  const [error, setError] = useState(false);
  const [userAnswers, setUserAnswers] = useState(questions.map(() => '')); // ['', '']
  const percentage = Math.round((progress / max) * 100);
  const [active, setActive] = useState(userAnswers[page]);

  const handlerSaveAnswer = () => {
    if (answer) {
      userAnswers[page] = answer;
      setUserAnswers(userAnswers);
      setProgress(progress + 1);
    } else {
      setError(true);
    }
  };

  const handlerCancelAnswer = () => {
    setAnswer('');
    userAnswers[page] = '';
    setUserAnswers(userAnswers);
    setProgress(progress - 1);
    setActive('');
  };

  const handlerQuestion = (item, index) => {
    setQuestion(item);
    setAnswer('');
    setPage(index);
    setActive(userAnswers[index]);
  };

  const handlerNextQuetion = () => {
    setPage(page + 1);
    setAnswer('');
    setQuestion(questions[page + 1]);
    setActive(userAnswers[page + 1]);
  };

  return (
    <>
      <header className='Test__header'>
        <button type='button' className='Test__header--close btn-link-danger'>
          <MdClose />
        </button>
        <div className='Test__header--info'>
          <small>Your Progress</small>
          <div className='flex'>
            <p><strong>{`${percentage}% completed`}</strong></p>
            <small>
              <AiOutlineClockCircle />
              <span>22 min</span>
            </small>
          </div>
          {/* <ProgressBar progress={progress} max={max} percentage={percentage} /> */}
        </div>
      </header>
      <main className='Test__body'>
        <div className='flex'>
          {questions.map((item, index) => (
            <button
              type='button'
              key={item.question}
              className={userAnswers[index] ? 'btn' : page === index ? 'btn-outline-success light' : 'btn-outline-warning light'}
              onClick={() => handlerQuestion(item, index)}
            >
              {`p-${index + 1}`}
            </button>
          ))}
        </div>
        <div className='Test__body--question'>
          <p className='txt'><strong>{question.question}</strong></p>
          <form className='form-control'>
            <label htmlFor='' className='form-label'>
              <textarea
                rows={5}
                defaultValue={userAnswers[page] || answer}
                className='form-textarea'
                placeholder='Selecciona tu respuesta'
              />
            </label>
          </form>
        </div>
        <div className='Test__body--answers'>
          {question.answers.map((item, index) => (
            <button
              type='button'
              key={`${question.id}-${item}`}
              className={`answer--box btn-white ${active === item && 'active'}`}
              onClick={() => { setAnswer(item); setActive(item); }}
            >
              <p className='text-primary'>
                {options[index]}
              </p>
              <p>{`${item}`}</p>
            </button>
          ))}
        </div>
        {/* <button type='button' disabled={progress <= 0} className='btn' onClick={() => setProgress(progress - 1)}>Regresar</button>
        <button type='button' disabled={progress >= max} className='btn' onClick={() => setProgress(progress + 1)}>Avanzar</button> */}
        {/* <p>Examen</p> */}
      </main>
      <footer className='Test__footer'>
        <button type='button' className='btn-circular-outline-primary'>
          <FaQuestion />
        </button>
        {!userAnswers[page] && (
          <button type='button' className='btn-tertiary' onClick={() => handlerSaveAnswer()}>
            Guardar
          </button>
        )}
        {userAnswers[page] && (
          <div className='grid'>
            <button type='button' className='btn-outline-danger light' onClick={() => handlerCancelAnswer()}>
              Cancelar
            </button>
            <button type='button' className='btn' onClick={() => handlerNextQuetion()}>
              <FaAngleRight />
            </button>
          </div>
        )}
        <button type='button' className='btn-circular-outline-primary'>
          <FaMicrophone />
        </button>
      </footer>
      {error && (
        <div className='test-alert'>
          <h5>Error!!</h5>
          <div className='flex'>
            <p>Escribe o selecciona una respuesta</p>
            <button type='button' className='btn-link-soft' onClick={() => setError(false)}>
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Examen;
