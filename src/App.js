import questions from './resources/questions.json'
import './App.css';

function App() {
  return (
    <div id="main" >
      <div id="passage">
        {questions[0].passage}
      </div>
      <div id="illustration">
        {/* <img src={questions[0].illustration} /> */}
        <div class="grid-container">
          {
            questions[0].illustration.data.map((data) => {
              return (
                <div style={{ fontWeight: data.type === "head" ? "bold" : "" }} >{data.value}</div>
              );
            })
          }
        </div>
      </div>
      <div id="question">
        1. {questions[0].question}
      </div>
      <div id="option">
        {
          questions[0].options.map((option) => {
            return (
              <div class="option">
                <input type="radio" name="option" /> {option.symbol}. {option.description}
              </div>
            );
          })
        }
      </div>
      <div id="answer">
        The correct answer is {questions[0].answer}.
      </div>
      <div id="button-group">
        <input type="button" id="previous" value="Previous" />
        <input type="button" value="Show Answer" />
        <input type="button" id="next" value="Next" />
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
