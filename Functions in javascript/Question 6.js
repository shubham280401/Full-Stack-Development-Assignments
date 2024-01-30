let curry = function (fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function (...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  };
  
  let add = (x, y) => x + y;
  const newCurry = curry(add);
  console.log(newCurry(4)(5));
  console.log(newCurry(4, 6));