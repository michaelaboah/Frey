


<script lang="ts">
  export let shown = false;


  export function show(){
    shown = true
  }

  export function hide(){
    shown = false
  }
</script>

{#if show}
<div class="modal-wrapper">
  <div class="modal">
    <slot />
  </div>
</div>
{/if}

<style>
/* .modal-wrapper{
} */

.modal{
  max-width: 80vw;
  padding: 1 rem;
  margin: 15% auto;
  
}
</style>