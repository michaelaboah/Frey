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
  
  const isDarkMode = await window.api.toggle()
  //@ts-expect-error
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
//@ts-expect-error
document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.api.system()
  //@ts-expect-error
  document.getElementById('theme-source').innerHTML = 'System'
})

export default app;
