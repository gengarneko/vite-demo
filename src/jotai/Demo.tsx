import React from 'react';
import { useAtom, atom } from 'jotai';
import { atomWithDefault, useResetAtom, RESET, atomWithObservable } from 'jotai/utils';
import { interval, map } from 'rxjs';

// * ---------------------------------------------------------------------------

const count1Atom = atom(1);
const count2Atom = atomWithDefault((get) => get(count1Atom) * 2);

// * ---------------------------

export const Counter: React.FC = () => {
  const [count1, setCount1] = useAtom(count1Atom);
  const [count2, setCount2] = useAtom(count2Atom);
  const resetCount2 = useResetAtom(count2Atom);

  return (
    <>
      <div>
        count1: {count1}, count2: {count2}
      </div>
      <button onClick={() => setCount1((c) => c + 1)}>increment count1</button>
      <button onClick={() => setCount2((c) => c + 1)}>increment count2</button>
      <button onClick={() => resetCount2()}>Reset with useResetAtom</button>
      <button onClick={() => setCount2(RESET)}>Reset with RESET const</button>
    </>
  );
};

// * ---------------------------------------------------------------------------

const counterSubject = interval(1000).pipe(map((i) => `#${i}`));
const counterAtom = atomWithObservable(() => counterSubject);

// * ---------------------------

export const Counter2 = () => {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <div>
      count: {counter}
      {/* <button onClick={() => setCounter(RESET)} /> */}
    </div>
  );
};
