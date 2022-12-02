import { MutableRefObject, RefObject, useRef } from "react";

export default function useArrayRef() {
  const refs = useRef<Array<HTMLElement>>([]);

  return [refs, (ref: HTMLElement) => ref && refs.current.push(ref)];
}
