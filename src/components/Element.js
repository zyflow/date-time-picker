import React, {useEffect, useState} from 'react';

export function Element({minNumber = 0, maxNumber = 59, step = 1}) {
    const [current, setCurrent] = useState(3);
    const [previous, setPrevious] = useState(3);
    const [next, setNext] = useState(3);
    const [active, setActive] = useState('');

    const getPrevious = (fromValue) => {
        let previousTemp = parseInt(fromValue) - parseInt(step);
        if (previousTemp < minNumber) {
            previousTemp = maxNumber
        }


        return previousTemp;
    }

    const getNext = (fromValue) => {
        let nextTemp = parseInt(fromValue) + parseInt(step);
        if (nextTemp > maxNumber) {
            nextTemp = minNumber
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

    const increment = () => {
        if (current + 1 > maxNumber) {
            setCurrent(parseInt(minNumber));
        } else {
            setCurrent(current + 1);
        }
    }

    const decrement = () => {
        if (current - 1 < minNumber) {
            setCurrent(parseInt(maxNumber))
        } else {
            setCurrent(current -1);
        }
    }


    return <div className="static-center-color">
        <div className={"numbers block " + active}>
            <p onClick={decrement} className='number pre-previous'>{getPrevious(previous)}</p>
            <p onClick={decrement} className='number previous'>{getPrevious(current)}</p>
            <p className='number current'
                // onTouchStart={touchStart}
            >{current}</p>
            <p onClick={increment} className='next'>{getNext(current)}</p>
            <p onClick={increment} className=' pre-previous'>{getNext(next)}</p>
        </div>
    </div>
}
