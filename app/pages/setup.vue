<script setup>
const router = useRouter()

const steps = [
  {
    id: 'database',
    title: 'PostgreSQL',
    description: 'Configure the primary database connection.'
  },
  {
    id: 'storage',
    title: 'Image Storage',
    description: 'Set directories for original images and thumbnails.'
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'Enable login providers for your workspace.'
  },
  {
    id: 'sample',
    title: 'Sample Data',
    description: 'Optionally seed the app with sample conversations.'
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Choose language and theme defaults.'
  }
]

const currentStep = ref(0)

const form = reactive({
  connectionUrl: 'postgres:password@localhost:5432/chatlog_vault',
  ssl: false,
  originalImagePath: '/var/lib/chatlog-vault/images/originals',
  thumbnailPath: '/var/lib/chatlog-vault/images/thumbnails',
  authEnabled: true,
  googleEnabled: false,
  githubEnabled: true,
  googleClientId: '',
  googleClientSecret: '',
  githubClientId: '',
  githubClientSecret: '',
  sampleData: true,
  language: 'ja',
  theme: 'system'
})

const languageOptions = [
  { label: 'Japanese', value: 'ja' },
  { label: 'English', value: 'en' }
]

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' }
]

const isFirstStep = computed(() => currentStep.value === 0)
const isLastStep = computed(() => currentStep.value === steps.length - 1)
const stepperItems = computed(() => steps.map(step => ({
  title: step.title,
  description: step.description
})))

function goNext() {
  if (!isLastStep.value) {
    currentStep.value += 1
  }
}

function goBack() {
  if (!isFirstStep.value) {
    currentStep.value -= 1
  }
}

async function finishSetup() {
  await router.push('/app')
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 dark:bg-slate-950">
    <UContainer class="py-2 sm:py-3">
      <div class="mx-auto max-w-6xl space-y-4">
        <header class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <UBadge color="primary" variant="subtle" class="mb-2">
              Initial Setup
            </UBadge>
            <h1 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Configure ChatLogVault
            </h1>
            <p class="mt-1 max-w-2xl text-xs leading-5 text-slate-700 dark:text-slate-300 sm:text-sm">
              Complete the initial setup to connect your database, define storage, and choose app defaults before entering the application.
            </p>
          </div>

          <UButton to="/" color="neutral" variant="ghost" size="sm" leading-icon="i-lucide-arrow-left">
            Back to landing page
          </UButton>
        </header>

        <UStepper
          v-model="currentStep"
          :items="stepperItems"
          size="sm"
          class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm ring-1 ring-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:ring-slate-700/70"
        />

        <section>
          <UCard class="mx-auto flex w-full flex-col border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:ring-slate-700/70" :ui="{ header: 'p-4 sm:p-5', body: 'p-4 sm:p-5 min-h-[360px] lg:min-h-[420px]', footer: 'border-t border-slate-200 p-4 sm:p-5 dark:border-slate-800' }">
            <template #header>
              <div class="space-y-3">
                <div>
                  <div class="mb-1.5 text-sm font-medium text-primary-600 dark:text-primary-400">
                    Step {{ currentStep + 1 }}
                  </div>
                  <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">
                    {{ steps[currentStep].title }}
                  </h2>
                  <p class="mt-1.5 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {{ steps[currentStep].description }}
                  </p>
                </div>

              </div>
            </template>

            <div v-if="currentStep === 0" class="min-h-[280px] space-y-5">
              <UFormField label="PostgreSQL Connection URL" name="connectionUrl" description="Enter the connection details as a single URL path.">
                <UFieldGroup class="w-full">
                  <UInput
                    v-model="form.connectionUrl"
                    size="xl"
                    class="min-w-0 flex-1"
                    placeholder="postgres:password@localhost:5432/chatlog_vault"
                    :ui="{
                      base: 'pl-28',
                      leading: 'pointer-events-none'
                    }"
                  >
                    <template #leading>
                      <p class="text-sm text-slate-500 dark:text-slate-400">
                        postgresql://
                      </p>
                    </template>
                  </UInput>
                </UFieldGroup>

                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Example: postgresql://postgres:password@localhost:5432/chatlog_vault
                </p>
                <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  The password is included in the URL for setup convenience and will be handled securely when persistence is implemented.
                </p>
              </UFormField>

              <div class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/50">
                <div>
                  <div class="font-medium text-slate-900 dark:text-white">Require SSL</div>
                  <div class="text-sm text-slate-600 dark:text-slate-400">Apply SSL as an additional option on top of the connection URL.</div>
                </div>
                <USwitch v-model="form.ssl" />
              </div>

              <div class="flex flex-col gap-2.5 border-t border-slate-200 pt-2 sm:flex-row dark:border-slate-800">
                <UButton color="neutral" variant="outline" size="md" leading-icon="i-lucide-plug-zap">
                  Test Connection
                </UButton>
                <UButton color="neutral" variant="soft" size="md" leading-icon="i-lucide-database-zap">
                  Run Migrations
                </UButton>
              </div>
            </div>

            <div v-else-if="currentStep === 1" class="min-h-[280px] space-y-5">
              <div class="grid gap-4">
                <UFormField label="Original image storage" name="originalImagePath" description="Where full-resolution images from imported chats will be stored.">
                  <UInput v-model="form.originalImagePath" size="xl" icon="i-lucide-folder-open" class="w-full" placeholder="/var/lib/chatlog-vault/images/originals" />
                </UFormField>

                <UFormField label="Thumbnail storage" name="thumbnailPath" description="Used for generated previews in the conversation list and gallery views.">
                  <UInput v-model="form.thumbnailPath" size="xl" icon="i-lucide-image" class="w-full" placeholder="/var/lib/chatlog-vault/images/thumbnails" />
                </UFormField>
              </div>

              <div class="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/50">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-folder-check" class="mt-0.5 size-5 text-primary-500" />
                  <div class="min-w-0 flex-1">
                    <div class="font-medium text-slate-900 dark:text-white">Check write permissions</div>
                    <div class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Confirm that both directories exist and that ChatLogVault can create files inside them.
                    </div>
                  </div>
                  <UButton color="neutral" variant="outline" size="sm" leading-icon="i-lucide-shield-check">
                    Check Permissions
                  </UButton>
                </div>
              </div>
            </div>

            <div v-else-if="currentStep === 2" class="min-h-[280px] space-y-4">
              <div class="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-950/50">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <div class="font-medium text-slate-900 dark:text-white">Enable authentication</div>
                    <div class="text-sm text-slate-600 dark:text-slate-400">Require users to sign in before opening the app.</div>
                  </div>
                  <USwitch v-model="form.authEnabled" />
                </div>
              </div>

              <div class="grid gap-4 grid-cols-1">
                <UCard :class="[
                  'border transition-all',
                  form.authEnabled && form.googleEnabled
                    ? 'border-primary-200 bg-primary-50/60 shadow-sm dark:border-primary-900/40 dark:bg-primary-950/10'
                    : 'border-slate-200 bg-slate-50/70 opacity-70 dark:border-slate-800 dark:bg-slate-950/20'
                ]" :ui="{ body: 'p-3 sm:p-3.5' }">
                  <div class="grid grid-cols-3 items-end gap-3">
                    <div class="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/40">
                      <div class="flex items-center justify-between gap-4">
                        <div>
                          <div class="font-medium text-slate-900 dark:text-white">Google Login</div>
                          <div class="text-sm text-slate-600 dark:text-slate-400">Allow sign in with Google OAuth.</div>
                        </div>
                        <USwitch v-model="form.googleEnabled" :disabled="!form.authEnabled" />
                      </div>
                    </div>

                    <UFormField label="Google Client ID" name="googleClientId">
                      <UInput v-model="form.googleClientId" size="lg" :disabled="!form.authEnabled || !form.googleEnabled" />
                    </UFormField>

                    <UFormField label="Google Client Secret" name="googleClientSecret">
                      <UInput v-model="form.googleClientSecret" size="lg" type="password" :disabled="!form.authEnabled || !form.googleEnabled" />
                    </UFormField>
                  </div>
                </UCard>

                <UCard :class="[
                  'border transition-all',
                  form.authEnabled && form.githubEnabled
                    ? 'border-primary-200 bg-primary-50/60 shadow-sm dark:border-primary-900/40 dark:bg-primary-950/10'
                    : 'border-slate-200 bg-slate-50/70 opacity-70 dark:border-slate-800 dark:bg-slate-950/20'
                ]" :ui="{ body: 'p-3 sm:p-3.5' }">
                  <div class="grid grid-cols-3 items-end gap-3">
                    <div class="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/40">
                      <div class="flex items-center justify-between gap-4">
                        <div>
                          <div class="font-medium text-slate-900 dark:text-white">GitHub Login</div>
                          <div class="text-sm text-slate-600 dark:text-slate-400">Allow sign in with GitHub OAuth.</div>
                        </div>
                        <USwitch v-model="form.githubEnabled" :disabled="!form.authEnabled" />
                      </div>
                    </div>

                    <UFormField label="GitHub Client ID" name="githubClientId">
                      <UInput v-model="form.githubClientId" size="lg" :disabled="!form.authEnabled || !form.githubEnabled" />
                    </UFormField>

                    <UFormField label="GitHub Client Secret" name="githubClientSecret">
                      <UInput v-model="form.githubClientSecret" size="lg" type="password" :disabled="!form.authEnabled || !form.githubEnabled" />
                    </UFormField>
                  </div>
                </UCard>
              </div>
            </div>

            <div v-else-if="currentStep === 3" class="min-h-[280px] space-y-5">
              <div class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/50">
                <div>
                  <div class="font-medium text-slate-900 dark:text-white">Try with sample data</div>
                  <div class="text-sm text-slate-600 dark:text-slate-400">Seed example conversations and tags after setup completes.</div>
                </div>
                <USwitch v-model="form.sampleData" />
              </div>

              <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/30">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-sparkles" class="mt-0.5 size-5 text-primary-500" />
                  <div>
                    <div class="font-medium text-slate-900 dark:text-white">What gets added</div>
                    <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      <li>Sample conversations with tags and folders</li>
                      <li>Example screenshots and thumbnails</li>
                      <li>Starter search filters and saved views</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="min-h-[280px] space-y-5">
              <div class="grid gap-4 sm:grid-cols-2">
                <UFormField label="Language" name="language" description="Choose the default interface language for first sign-in.">
                  <USelect v-model="form.language" size="xl" :items="languageOptions" />
                </UFormField>

                <UFormField label="Theme" name="theme" description="Set the initial color mode. Users can still change it later.">
                  <USelect v-model="form.theme" size="xl" :items="themeOptions" />
                </UFormField>
              </div>

              <div class="rounded-xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-check-circle" class="mt-0.5 size-4 text-primary-600 dark:text-primary-400" />
                  <div>
                    <div class="font-medium text-slate-900 dark:text-white">Ready to complete setup</div>
                    <p class="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      Saving is not connected to an API yet. This flow currently demonstrates the complete first-run experience and routes into the app shell.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <template #footer>
              <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center">
                <div class="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Step {{ currentStep + 1 }} of {{ steps.length }}
                </div>

                <div class="flex flex-col-reverse gap-3 sm:ml-auto sm:flex-row sm:justify-end">
                  <UButton color="neutral" variant="ghost" size="md" :disabled="isFirstStep" @click="goBack">
                    Back
                  </UButton>

                  <UButton v-if="!isLastStep" color="primary" variant="solid" size="md" class="min-w-36 justify-center" trailing-icon="i-lucide-arrow-right" @click="goNext">
                    Continue
                  </UButton>

                  <UButton v-else color="primary" variant="solid" size="md" class="min-w-52 justify-center" trailing-icon="i-lucide-rocket" @click="finishSetup">
                    Save Settings and Start
                  </UButton>
                </div>
              </div>
            </template>
          </UCard>
        </section>
      </div>
    </UContainer>
  </div>
</template>
