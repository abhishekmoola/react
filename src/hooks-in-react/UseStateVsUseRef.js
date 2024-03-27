import { useRef, useState } from 'react';

export default function Counter() {
  let ref = useRef(100);
  let [count, setCount] = useState(100);

  function handleClick() {
    setCount(count+1);
    ref.current = ref.current + 1;
    alert('You clicked useRef' + ref.current + ' times!');
     alert('You clicked useState' + count + ' times!');
  }
  return (
    <>
    <h1>{count}</h1>
    <div><h1>{ref.current}</h1></div>
    <button onClick={handleClick}>
      Click me!
    </button></>
  );
}