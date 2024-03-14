function useDebounce(cb, dealy) {
  let timerId;
  return (...args) => {
    clearInterval(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, dealy);
  };
}

export default useDebounce;
