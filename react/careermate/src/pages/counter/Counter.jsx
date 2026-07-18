import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
        console.log(count);
    };
    return (
        <main className="counter-page">
            <section className="counter-panel">
                <h2>Counter</h2>
                <p className="counter-number">Count: {count}</p>
                <button onClick={handleAdd}>Add</button>
            </section>
        </main>
    );
}

export default Counter;