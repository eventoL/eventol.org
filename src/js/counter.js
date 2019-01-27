const options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.'
};

export const createCounter = (name, promise, startValue=0) => {
  const querystring = `#${name}`;
  promise.then(value => {
    console.log(name, value);
    const counter = new CountUp(name, startValue, value, 0, 2.5, options);
    if (!counter.error) {
      $(window).scroll(() => {
        const hT = $(querystring).offset().top;
        const hH = $(querystring).outerHeight();
        const wH = $(window).height();
        const wS = $(window).scrollTop();
        if (wS > (hT + hH - wH)) {
          counter.start();
        }
      });
    } else {
      console.error(counter.error);
    }
  })
};
