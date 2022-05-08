import { FC } from 'react';
import { atom, RecoilRoot, useRecoilState } from 'recoil';

// * --------------------------------------------------------------------------- state

export const atomInput = atom<number>({ key: 'atomInput', default: 0 });

// * ---------------------------------------------------------------------------

export const TabRecoil: FC = () => {
  return (
    <RecoilRoot>
      <TabInner />
    </RecoilRoot>
  );
};

// * ---------------------------

export const TabInner = () => {
  const [val, setVal] = useRecoilState(atomInput);
  return (
    <>
      value: {val}
      <input onChange={(e) => setVal(Number(e.target.value))} />
    </>
  );
};
