import React, {useEffect, useState} from 'react';

export function Hours({color, type, onClick, label}) {
    const [current, setCurrent] = useState(3);
    const [previous, setPrevious] = useState();
    const [next, setNext] = useState();
    const [active, setActive] = useState('');

    const getPrevious = (fromValue) => {
        let previousTemp = fromValue - 1;
        if (previousTemp <= 0) {
            previousTemp = 12
        }

        return previousTemp;
    }

    const getNext = (fromValue) => {
        let nextTemp = fromValue + 1;
        if (nextTemp > 12) {
            nextTemp = 1
        }

        return nextTemp;
    }


    useEffect(() => {
        if (current) {
            setActive('active');
            setPrevious(getPrevious(current));
            setNext(getNext(current));
        }

        setInterval(() => {
            setActive('');
        }, 300)
    }, [current]);


    const hours = []
    for(let i = 1; i<=12;i++) {
        hours.push(i);
    }

    const increment = () => {
            if (current + 1 > 12) {
                setCurrent(1);
            } else {
                setCurrent(current + 1);
            }
    }

    const decrement = () => {
        if (current - 1 === 0) {
            setCurrent(12)
        } else {
            setCurrent(current -1);
        }
    }

    return <div className={"numbers block " + active}>
        <p onClick={decrement} className='number pre-previous'>{getPrevious(previous)}</p>
        <p onClick={decrement} className='number previous'>{getPrevious(current)}</p>
        <p className='number current'>{current}</p>
        <p onClick={increment} className='next'>{getNext(current)}</p>
        <p onClick={increment} className=' pre-previous'>{getNext(next)}</p>
    </div>
}
