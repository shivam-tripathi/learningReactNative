function measure() {
  let time = 0;
  const timer = setInterval(() => {
    console.log(time++);
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    console.log('done');
  }, 1000 * 60 * 3);
}

measure();
