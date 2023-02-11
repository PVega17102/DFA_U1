class DFA2 {
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
      console.log('Actual DFA2 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA2 state: ',state);
    return this.accepting.includes(state);
  }
}

const input2 = document.getElementById('a2i');
const output2 = document.getElementById('a2o');
const button2 = document.getElementById('a2b');

button2.addEventListener('click', (event) => {

  const states = [0, 1, 3, 4, 6, 8];
  const alphabet = ['a', 'b', 'c'];
  const transition = (state, char) => {
    switch (state) {
      case 0:
        if (char == 'a') {
          return char === 'a' ? 4 : 4;
        } else if (char == 'c') {
          return char === 'c' ? 1 : 4;
        }
      case 1:
        if (char == 'c') {
          return char === 'c' ? 3 : 3;
        }
      case 3:
        if (char == 'a') {
          return char === 'a' ? 3 : 3;
        } else if (char == 'b') {
          return char === 'b' ? 3 : 3;
        } else if (char == 'c') {
          return char === 'c' ? 3 : 3;
        }
      case 4:
        if (char == 'a') {
          return char === 'a' ? 4 : 4;
        } else if (char == 'b') {
          return char === 'b' ? 8 : 4;
        } else if (char == 'c') {
          return char === 'c' ? 1 : 4;
        }
      case 6:
        if (char == 'b') {
          return char === 'b' ? 8 : 6;
        }
      case 8:
        if (char == 'b') {
          return char === 'b' ? 6 : 8;
        }
    }
  };
  const start = 0;
  const accepting = [3, 4, 6, 8];

  const dfa2 = new DFA2(states, alphabet, transition, start, accepting);
  if (dfa2.recognize(input2.value)) {
    output2.textContent = 'The input is: Valid'
  } else {
    output2.textContent = 'The input is: Invalid'
  }

});