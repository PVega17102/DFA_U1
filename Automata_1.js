class DFA1 {
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
      console.log('Actual DFA1 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA1 state: ',state);
    return this.accepting.includes(state);
  }
}

const input1 = document.getElementById('a1i');
const output1 = document.getElementById('a1o');
const button1 = document.getElementById('a1b');

button1.addEventListener('click', (event) => {

  const states = [0, 1, 2, 3];
  const alphabet = ['a', 'b', 'c'];
  const transition = (state, char) => {
    switch (state) {
      case 0:
        if (char == 'a') {
          return char === 'a' ? 1 : 3;
        } else if (char == 'b') {
          return char === 'b' ? 2 : 3;
        } else if (char == 'c') {
          return char === 'c' ? 3 : 3;
        }
      case 1:
        if (char == 'a') {
          return char === 'a' ? 2 : 3;
        } else if (char == 'b') {
          return char === 'b' ? 3 : 3;
        } else if (char == 'c') {
          return char === 'c' ? 1 : 3;
        }
      case 2:
        if (char == 'a') {
          return char === 'a' ? 3 : 3;
        } else if (char == 'b') {
          return char === 'b' ? 1 : 3;
        } else if (char == 'c') {
          return char === 'c' ? 3 : 3;
        }
      case 3:
        if (char == 'a') {
          return char === 'a' ? 3 : 3;
        } else if (char == 'b') {
          return char === 'b' ? 3 : 3;
        } else if (char == 'c') {
          return char === 'c' ? 3 : 3;
        } else {
          return 3;
        }
    }
  };
  const start = 0;
  const accepting = [3];

  const dfa1 = new DFA1(states, alphabet, transition, start, accepting);
  if (dfa1.recognize(input1.value)) {
    output1.textContent = 'The input is: Valid'
  } else {
    output1.textContent = 'The input is: Invalid'
  }

});