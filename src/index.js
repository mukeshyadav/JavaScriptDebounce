let message = function() {
  console.log("m Called");
};

function debounce(func, timer) {
  let timeout;
  let count = 0;
  return function() {
    let ctx = this;
    let args = arguments;
    console.log(++count);
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(ctx, args), timer);
  };
}

let messages = debounce(message, 1000);
messages();
messages();
messages();
messages();
messages();
messages();
messages();
messages();
messages();
