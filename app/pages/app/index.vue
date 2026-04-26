<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950">
    <UContainer class="py-12 sm:py-16">
      <UCard class="mx-auto max-w-3xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400">
              <UIcon name="i-lucide-layout-dashboard" class="size-5" />
            </div>
            <div>
              <h1 class="text-xl font-semibold text-slate-900 dark:text-white">
                ChatLogVault App
              </h1>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                Setup is complete. Replace this placeholder with the main application shell.
              </p>
            </div>
          </div>
        </template>

        <div class="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <p>
            This route is ready for the post-setup experience.
          </p>
          <UButton to="/" color="neutral" variant="outline" leading-icon="i-lucide-home">
            Back to landing page
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>