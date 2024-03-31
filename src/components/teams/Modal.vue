<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>
<template>
    <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    name="bounce"
    >
        <div v-if="show" class="overlay">
        <div class="modal-container">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h4>Add Member on the team</h4>
                    <button class="btn btn-outline-info rounded-10" @click="$emit('close')">&times; Close</button>
                </div>
                <div class="card-body">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<style>
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.418);
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        transition: 0.4s;
        z-index: 999;
    }
    .modal-container{
        background: white;
        border-radius: 10px;
        box-shadow: 1px 1px 8px rgba(204, 204, 204, 0.568);
        width: 80vh;
        max-width: 500px;
        padding: 10px;
        position: relative;
        z-index: 9999;
    }
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>