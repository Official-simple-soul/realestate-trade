import React, { useState } from 'react';
import Content from './Content';
import WhatIs from './WhatIs';
import Others from './Others';
import SearchModal from '../components/modal/SearchModal'

export default function Main() {
  const [showModal, setShowModal] = useState(true)
  return (
    <main className="pt-16 ">
      <Content />
      <WhatIs />
      <Others />
      {/* <SearchModal showModal={showModal} setShowModal={setShowModal}/> */}
    </main>
  );
}
