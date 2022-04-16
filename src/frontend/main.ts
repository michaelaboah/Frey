import "svelte";

import App from "./App.svelte";


const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});
//@ts-expect-error
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  //@ts-expect-error
  const isDarkMode = await window.darkMode.toggle()
  //@ts-expect-error
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
//@ts-expect-error
document.getElementById('reset-to-system').addEventListener('click', async () => {
  //@ts-expect-error
  await window.darkMode.system()
  //@ts-expect-error
  document.getElementById('theme-source').innerHTML = 'System'
})

export default app;
