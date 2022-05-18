<script>
import { fade, crossfade } from 'svelte/transition'
import { afterNavigate } from '$app/navigation'

export let color

// afterNavigate(() => {
//     document.querySelector('main').style.backgroundColor = color
// })

const [send, receive] = crossfade({})


</script>

<main in:fade out:fade class={color}>
<!-- <main in:send={{key: 'r'}} out:receive={{key: 'r'}}> -->
  <slot></slot>
</main>


<style lang="postcss">
main {
  background-color: white;
  border: solid black 10px;
  border-style: double;
  margin-right: 1rem;
  min-height: 100%;
  transition: background-color 1s;
}

main.blue { background-color: #ACF; }

main.yellow { background-color: #FE6; }

main.red { background-color: #F66; }

main.green { background-color: #6F8; }

main.purple { background-color: #C7F; }

main.orange { background-color: #FC7; }

</style>