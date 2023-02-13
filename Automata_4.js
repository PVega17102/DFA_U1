class DFA4 {
  constructor(states, alphabet, transition, start, accepting) {
    this.states = states;
    this.alphabet = alphabet;
    this.transition = transition;
    this.start = start;
    this.accepting = accepting;
  }

  recognize(string) {
    let state = this.start;
    for (const char of string) {
      console.log('Actual DFA4 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA4 state: ',state);
    return this.accepting.includes(state);
  }
}

const input4 = document.getElementById('a4i');
const output4 = document.getElementById('a4o');
const button4 = document.getElementById('a4b');

button4.addEventListener('click', (event) => {

  const states = [0, 10];
  const alphabet = ['c', 'f', 'd'];
  const transition = (state, char) => {
    switch (state) {
      case 0:
        if (char == 'f') {
          return char === 'f' ? 10 : 10;
        }
        break;
      case 10:
        if (char == 'c') {
          return char === 'c' ? 0 : 0;
        }
        break;
      default:
        break;
    }
  };
  const start = 0;
  const accepting = [10];

  const dfa4 = new DFA4(states, alphabet, transition, start, accepting);
  if (dfa4.recognize(input4.value)) {
    output4.textContent = 'The input is: Valid'
  } else {
    output4.textContent = 'The input is: Invalid'
  }

});
