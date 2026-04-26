<script setup>
const route = useRoute()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'ChatLogVault - Own Your ChatGPT History'
const description = 'Your personal vault for ChatGPT conversations. Browse, search, and organize your AI chat history locally with complete privacy.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})

const showFooter = computed(() => route.path !== '/setup')
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
          <div class="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="size-7 shrink-0"
            >
              <path
                d="M7 11C7 9.35 8.35 8 10 8H22C23.65 8 25 9.35 25 11V18C25 19.65 23.65 21 22 21H16.5L12.2 24.5C11.55 25.03 10.6 24.57 10.6 23.73V21H10C8.35 21 7 19.65 7 18V11Z"
                fill="#10B981"
              />
              <circle cx="13" cy="14.5" r="1.2" fill="#ECFDF5" />
              <circle cx="16" cy="14.5" r="1.2" fill="#ECFDF5" />
              <circle cx="19" cy="14.5" r="1.2" fill="#ECFDF5" />
            </svg>
          </div>
          <span class="hidden sm:inline">ChatLogVault</span>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/makoto0428/chatlog-vault"
          target="_blank"
          icon="i-lucide-github"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter v-if="showFooter">
      <template #left>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          © {{ new Date().getFullYear() }} ChatLogVault. MIT Licensed.
        </p>
      </template>

      <template #right>
        <div class="flex items-center gap-4">
          <UButton
            to="#"
            color="gray"
            variant="ghost"
            size="sm"
          >
            Documentation
          </UButton>
          <UButton
            to="https://github.com/makoto0428/chatlog-vault"
            target="_blank"
            icon="i-lucide-github"
            aria-label="GitHub"
            color="gray"
            variant="ghost"
          />
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
