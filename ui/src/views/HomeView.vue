<script setup lang="ts">
import EventsList from '@/components/EventsList.vue';
import GamesList from '@/components/GamesList.vue';
</script>

<template>
  <main class="container mx-auto my-4">
    <section class="flex space-x-4">
      <GamesList class="basis-3/4" />

      <div class="flex-1">
        <EventsList />
      </div>
    </section>
  </main>
</template>
