<script setup>
    defineProps({
        name: String,
        email: String,
        status: String,
        tag: String,
        content: String,
    })

</script>

<template>

            <div class="col-md-6">
                <div class="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">{{ tag }}</strong>
                        <h3 class="mb-0">{{ name }}</h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                        <p class="card-text mb-auto">{{ content }}</p>
                        <a href="#" class="stretched-link">Continue reading</a>
                    </div>
                </div>
            </div>

</template>