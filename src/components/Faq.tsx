import { Accordion, Container, Title } from '@mantine/core';
import React, { useRef } from 'react';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export const Faq = () => {
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();

  function onClick(ref: any) {
    if (ref.current.style.display === "block") {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "block";
    }
  }

  return (
    <div style={{padding: 20, textAlign: 'center'}}>
      <h2 style={{padding: 20}}>FAQ</h2>

      <button className="accordion" onClick={() => onClick(ref1)}>Section 1</button>
      <div className="panel" ref={ref1}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={() => onClick(ref2)}>Section 2</button>
      <div className="panel" ref={ref2}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={() => onClick(ref3)}>Section 3</button>
      <div className="panel" ref={ref3}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </div>
  );
}