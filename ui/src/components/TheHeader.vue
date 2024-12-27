<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="py-4 bg-amber-700 text-amber-50">
        <div class="container mx-auto flex justify-between items-center">
            <RouterLink to="/" class="text-lg">
                Game<strong>Manager</strong>
            </RouterLink>
        </div>
    </header>
</template>
