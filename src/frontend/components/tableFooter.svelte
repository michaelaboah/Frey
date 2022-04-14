<script lang="ts">
    export let bottomLeft: string
    export let bottomRight: string
</script>
<footer>    
    <p id="BottomLeft">{ bottomLeft} </p>
    <p id="BottomRight">{bottomRight}</p>
</footer>

<style>
#BottomLeft{
    position: fixed;
    left: 5%;
    text-align: left;
}

#BottomRight{
    position: fixed;
    right: 5%;
    text-align: left;
  
}

footer {
    padding-bottom: 2.5rem;
    position: fixed;
    left: 0%;
    background-color: grey;
    bottom: 0%;
    width: 100%;
    height: 1.5rem;            /* Footer height */
    margin-top: -180;
}
</style>
