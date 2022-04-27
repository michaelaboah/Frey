
<div>
        <nav>
            <slot/>
        </nav>
</div>

<style>
/* Top Level Navigation Style*/
    nav{
        position: fixed;
        top: 0%;
        left: 0%;
        bottom: 0%;
        width: 7%;
        padding-top: 4%;
    }
    /* Navigation Light Mode*/
    @media (prefers-color-scheme: light) {
	nav{ background-color: #a1a7ad; }
        nav :global(.active){
            background-color: #a1a7ad;
            color: black;
        }
        nav :global(.selected) {
            background-color: #ddd;
            color: black;
        }
        nav :global(a){
            display: block;
            padding: 15%;
            font-size: 14pt;
            color: #434644;
        }
    }
    /* Navigation Dark Mode*/
    @media (prefers-color-scheme: dark) {
	nav{ background-color: #1e1f20; }
        nav :global(.active){
            background-color: #474758;
            color: white;
        }
        nav :global(.selected) {
            background-color: #333;
            color: white;
        }
        nav :global(a){
        display: block;
        padding: 15%;
        font-size: 14pt;
        color: #a3a8a5;
        }
    }
</style>