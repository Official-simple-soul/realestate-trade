import React from 'react';
import Content from './Content';
import WhatIs from './WhatIs';
import Others from './Others';

export default function Main() {
  return (
    <main className="pt-16 ">
      <Content />
      <WhatIs />
      <Others />
    </main>
  );
}
