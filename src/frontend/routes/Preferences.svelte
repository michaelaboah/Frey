<script >
    import Router from "svelte-spa-router"
    import Modal from "../components/Modal.svelte";
    import Licensing from "./PreferencesRoutes/Licensing.svelte";
    import General from "./PreferencesRoutes/General.svelte"
    import Cloud from "./PreferencesRoutes/Cloud.svelte"

    export let show = true;
    const prefRoutes = {
        "/Preferences": General,
        "/PreferencesRoutes/Cloud": Cloud,
        "/PreferencesRoutes/Licensing": Licensing
    }

    window.api.openWindow('hello')
</script>

<div>
    <Modal shown={show}>
        <nav>
            <a href="#/PreferencesRoutes/Preferences"> General </a>
            <a href="#PreferencesRoutes/Cloud"> Cloud </a>
            <a href="#/PreferencesRoutes/Licensing"> Licensing </a>
        </nav>
        <Router {prefRoutes}/>    
    </Modal>
</div>