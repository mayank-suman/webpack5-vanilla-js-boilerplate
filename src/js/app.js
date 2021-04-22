function printHello() {
  const appEl = document.querySelector('.app');
  appEl.innerHTML = '<h1>Hello All<h1>';
}

export default function initApp() {
  printHello();
}

initApp();
