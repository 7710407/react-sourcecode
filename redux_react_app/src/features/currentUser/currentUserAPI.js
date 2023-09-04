export function loadCurrentUser() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        {
          name: "Bob Marley",
        }
      );
    }, 2000);
  });
}
