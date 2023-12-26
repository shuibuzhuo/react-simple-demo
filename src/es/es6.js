const doSomething = async () => {
  console.log("done");
};

const fn = async () => {
  console.log("do sth");
  await doSomething();
};

fn();
