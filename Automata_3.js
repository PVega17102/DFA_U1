class DFA3 {
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
      console.log('Actual DFA3 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA3 state: ',state);
    return this.accepting.includes(state);
  }
}

const input3 = document.getElementById('a3i');
const output3 = document.getElementById('a3o');
const button3 = document.getElementById('a3b');

button3.addEventListener('click', (event) => {

  const states = [0, 2, 4, 7, 8];
  const alphabet = ['a', 'b', 'c'];
  const transition = (state, char) => {
    switch (state) {
      case 0:
        if (char == 'a') {
          return char === 'a' ? 7 : 7;
        }
      case 2:
        if (char == 'b') {
          return char === 'b' ? 8 : 8;
        }
      case 4:
        if (char == 'b') {
          return char === 'b' ? 8 : 8;
        } else if (char == 'c') {
          return char === 'c' ? 4 : 8;
        }
      case 7:
        if (char == 'a') {
          return char === 'a' ? 7 : 7;
        } else if (char == 'b') {
          return char === 'b' ? 2 : 7;
        }
      case 8:
        if (char == 'b') {
          return char === 'b' ? 8 : 8;
        } else if (char == 'c') {
          return char === 'c' ? 4 : 8;
        }
    }
  };
  const start = 0;
  const accepting = [7, 8];

  const dfa3 = new DFA3(states, alphabet, transition, start, accepting);
  if (dfa3.recognize(input3.value)) {
    output3.textContent = 'The input is: Valid'
  } else {
    output3.textContent = 'The input is: Invalid'
  }

});