<template>
    <div style="padding-top:6vh;width:100vw;height:90vh;background-color:#fafafa;display:flex;justify-content:center">
        <dialog id="d">
            <form>
                <p>Hi Tester</p>
                <button onclick="event.preventDefault();d.close()">Close</button>
            </form>
        </dialog>
        <button onclick="d.showModal()" class="brButton">Dialog Test</button>

    </div>
</template>

<script>

</script>

<style scoped>
</style>