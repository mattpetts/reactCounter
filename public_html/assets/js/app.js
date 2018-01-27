'use strict';

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var resetCount = function resetCount() {
    count = 0;
    renderCounterApp();
};
var appRoot = document.getElementById('app');
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: resetCount },
            'RESET'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
