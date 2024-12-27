import { createFetch } from "@vueuse/core";

export const useApi = createFetch({
  baseUrl: "/api",
});
