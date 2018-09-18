function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  }
  return sum;
}

process.on("message", () => {
  const sum = longComputation();
  process.send(sum);
  process.exit(1);
});