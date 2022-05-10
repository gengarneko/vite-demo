import type { FC } from 'react';
import { TabContainer } from './components/TabContainer';
import { Button } from '@tux-ui/base';

// * --------------------------------------------------------------------------- comp

export const Index: FC = () => {
  return (
    <div>
      <Button />
      <TabContainer />
    </div>
  );
};
