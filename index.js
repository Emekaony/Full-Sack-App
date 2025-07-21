document.getElementById("container").addEventListener("click", () => {
  console.log("The container event took off!!");
});

document.getElementById("child").addEventListener("click", (e) => {
  // this makes it so that the event doesn't get bubbled up to the parent
  e.stopPropagation();
  console.log("The child event took off!!");
});
