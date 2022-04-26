<script lang="ts">

    
</script>


<div>
    <!-- <Modal shown={show}> -->
        <nav>
            <slot/>
        </nav>
    <!-- </Modal> -->
</div>

<style>


    nav{
        position: fixed;
        top: 0%;
        left: 0%;
        bottom: 0%;
        background-color: rgb(30, 31, 32);
        width: 7%;
        padding-top: 4%;
    }

    nav :global(a){
        display: block;
        padding: 15%;
        font-size: 14pt;
        color: rgb(163, 168, 165);
    }

    nav :global(.active){
        background-color: #474758;
        color: white;
    }

    nav :global(.selected) {
		background-color: #333;
		color: white;
	}

</style>