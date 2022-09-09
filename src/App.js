import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { roman: '', integer: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const s = event.target.value;
        this.setState({ roman: s })
        let romanMap = new Map();
        romanMap.set("I", 1);
        romanMap.set("V", 5);
        romanMap.set("X", 10);
        romanMap.set("L", 50);
        romanMap.set("C", 100);
        romanMap.set("D", 500);
        romanMap.set("M", 1000);

        let romanValue = 0;
        let i = s.length - 1;

        if (s.length >= 1 && s.length <= 15) {
            while (i >= 0) {
                let rVal = 0;
                if (romanMap.get(s[i])) {
                    if (s[i] === 'V' && s[i - 1] === 'I') {
                        rVal = 4;
                        i--;
                    } else if (s[i] === 'X' && s[i - 1] === 'I') {
                        rVal = 9;
                        i--;
                    } else if (s[i - 1] === 'X' && s[i] === 'L') {
                        rVal = 40;
                        i--;
                    } else if (s[i - 1] === 'X' && s[i] === 'C') {
                        rVal = 90;
                        i--;
                    } else if (s[i - 1] === 'C' && s[i] === 'D') {
                        rVal = 400;
                        i--;
                    } else if (s[i - 1] === 'C' && s[i] === 'M') {
                        rVal = 900;
                        i--;
                    } else {
                        rVal = romanMap.get(s[i]);
                    }
                    romanValue = romanValue + rVal;
                    i--;
                } else {
                    i = -1;
                }
            }
        }

        this.setState({ integer: romanValue });
    }

    render() {
        return (
            <div className='main'>
                <input type="text" id="roman" name="roman" className="roman"
                    value={this.state.roman} onChange={this.handleChange} /><br /><br />
                <span>{this.state.integer}</span>
            </div>
        );
    }
}

export default App;