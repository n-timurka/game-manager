<script lang="ts" setup>
import { useDateFormat } from '@vueuse/core'
import { useApi } from '@/composables/useApi';
import type { Game } from '@/types/game';

const { isFetching, error, data: games } = useApi('games').json<Game[]>()
</script>

<template>
  <section>
        <div v-if="isFetching">Loading...</div>
        <div v-else-if="error" class="text-red-600">{{ error }}</div>
        <div v-else class="grid grid-cols-2 gap-4">
            <div v-for="game in games" :key="game.id" class="p-4 rounded shadow bg-white space-y-2">
              <div class="flex-1 flex space-x-6 justify-between">
                <div class="bg-slate-200 rounded-xl w-20 h-20"></div>
                <div class="text-center">
                  <div class="text-lg text-slate-800">{{ game.h?.title }} &ndash; {{ game.a?.title }}</div>
                <div class="font-semibold text-4xl">{{ game.hScore }} : {{ game.aScore }}</div>

                </div>
                <div class="bg-slate-200 rounded-xl w-20 h-20"></div>
              </div>

              <div class="flex justify-between">
                <div class="relative pl-3 text-green-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1 before:bg-green-600 before:h-2 before:w-2 before:rounded-full">Live</div>

                <div class="text-sm text-slate-600">{{ useDateFormat(game.datetime, 'DD MMMM YYYY, HH:mm') }}</div>

                <RouterLink :to="{ name: 'game', params: { id: game.id }}" class="underline">Report</RouterLink>
              </div>
            </div>
        </div>
      </section>
</template>
