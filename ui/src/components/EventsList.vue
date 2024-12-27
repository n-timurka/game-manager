<script setup lang="ts">
import { useApi } from '@/composables/useApi';
import { EventType, type Event } from '@/types/event';
import { ArrowRightIcon, ArrowPathIcon, ArrowsRightLeftIcon } from '@heroicons/vue/24/solid'

const { isFetching, error, data: events } = useApi('events').json<Event[]>()
</script>

<template>
  <section class="p-4 rounded shadow flex justify-between bg-white">
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else class="flex flex-col divide-y w-full">
      <h2 class="font-semibold mb-4">Events</h2>
      <div v-for="event in events" :key="event.id" class="px-2 py-3 hover:bg-slate-100">
        <div class="flex justify-between items-center">
          <div>{{ event.game.h.title }} &ndash; {{ event.game.a.title }} ({{ event.game.hScore }}:{{ event.game.aScore }})</div>

          <RouterLink :to="{ name: 'game', params: { id: event.game.id }}">
            <ArrowRightIcon class="text-slate-600 size-4" />
          </RouterLink>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex space-x-2 items-center">
            <div v-if="event.type === EventType.GOAL" class="font-semibold">GOAL!</div>
            <div v-if="event.type === EventType.YELLOW_CARD" class="bg-yellow-400 w-3 h-4"></div>
            <div v-if="event.type === EventType.RED_CARD" class="bg-red-400 w-3 h-4"></div>
            <ArrowPathIcon v-if="event.type === EventType.SUBSTITUTION" class="size-4" />

            <div>{{ event.player.name }}</div>
            <template v-if="event.type === EventType.SUBSTITUTION">
              <ArrowsRightLeftIcon class="size-4" />
              <div>{{ event.assistent?.name }}</div>
            </template>
          </div>

          <div class="text-slate-600 text-sm">{{ event.minute }}`</div>
        </div>
      </div>
    </div>
  </section>
</template>
