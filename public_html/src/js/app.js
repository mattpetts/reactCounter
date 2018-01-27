let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const resetCount = () => {
    count = 0;
    renderCounterApp();
};
const appRoot = document.getElementById('app')
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={resetCount}>RESET</button>
            <button onClick={minusOne}>-1</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();
