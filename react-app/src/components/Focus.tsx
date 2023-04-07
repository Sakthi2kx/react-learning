// useEffect example

import { useEffect, useRef } from "react";

const Focus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //after render
  useEffect(() => {
    //side effect
    if (inputRef.current) inputRef.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return <input ref={inputRef} type="text" className="form-control" />;
};

export default Focus;
