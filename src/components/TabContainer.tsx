import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { atom, RecoilRoot, useRecoilState } from 'recoil';

// * --------------------------------------------------------------------------- comp

export const TabContainer: FC<{ children?: ReactNode }> = ({ children }) => {
  const [activeTabKey, setActiveTabKey] = useState<0 | 1 | 2>(0);
  return (
    <div>
      {[0, 1, 2].map((key) => (
        <button onClick={() => setActiveTabKey(key as 0 | 1 | 2)} key={key}>
          choose {key}
        </button>
      ))}
      <div>
        selected tab: {activeTabKey}
        <TabChildren tab={activeTabKey} />
      </div>
    </div>
  );
};

// * ---------------------------

export const TabChildren: FC<{ tab: 0 | 1 | 2 }> = ({ tab }) => {
  return { 0: <div>00000000</div>, 1: <div>111111111</div>, 2: <TabRecoil /> }[tab];
};

// * ---------------------------

export const atomInput = atom<number>({ key: 'atomInput', default: 0 });
export const TabRecoil: FC = () => {
  return (
    <RecoilRoot>
      <TabInner />
    </RecoilRoot>
  );
};
export const TabInner = () => {
  const [val, setVal] = useRecoilState(atomInput);
  return (
    <div>
      <div>value: {val}</div>
      <input onChange={(e) => setVal(Number(e.target.value))} />
    </div>
  );
};
