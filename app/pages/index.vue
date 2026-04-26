<script setup>
const features = [
  {
    icon: 'i-lucide-hard-drive',
    title: 'Local-First',
    description: 'All your data stays on your machine. No cloud sync, no external servers. You own your conversations.',
    featured: false,
  },
  {
    icon: 'i-lucide-shield',
    title: 'Privacy-Friendly',
    description: 'Zero telemetry, no tracking. Your chat history remains completely private and secure.',
    featured: false,
  },
  {
    icon: 'i-lucide-file-json',
    title: 'JSON Import/Export',
    description: 'Import your ChatGPT export directly. Export your organized data anytime in standard JSON format.',
    featured: false,
  },
  {
    icon: 'i-lucide-tags',
    title: 'Tagging & Organization',
    description: 'Create custom tags, folders, and categories. Keep your conversations organized your way.',
    featured: false,
  },
  {
    icon: 'i-lucide-search',
    title: 'Fast Search',
    description: 'Instant full-text search across all your conversations. Find any message in milliseconds.',
    featured: true,
  },
  {
    icon: 'i-lucide-image',
    title: 'Image Preview',
    description: 'View images and attachments from your conversations inline. No need to download separately.',
    featured: false,
  },
]

const steps = [
  {
    icon: 'i-lucide-upload',
    step: '01',
    title: 'Import',
    description: 'Export your conversations from ChatGPT and import the JSON file directly into ChatLogVault.',
  },
  {
    icon: 'i-lucide-folder-open',
    step: '02',
    title: 'Organize',
    description: 'Tag your conversations, create collections, and organize them in a way that makes sense to you.',
  },
  {
    icon: 'i-lucide-zap',
    step: '03',
    title: 'Search',
    description: 'Instantly find any conversation with powerful full-text search across all your chat history.',
  },
]

const footerLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'i-lucide-github',
  },
  {
    label: 'Documentation',
    href: '#',
    icon: 'i-lucide-book-open',
  },
  {
    label: 'Discussions',
    href: '#',
    icon: 'i-lucide-message-square',
  },
]

const recentChats = [
  'React best practices',
  'API design patterns',
  'TypeScript tips'
]
</script>

<template>
  <div class="bg-white dark:bg-slate-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white dark:bg-slate-950">
      <!-- Subtle grid background -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
      <div class="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
        <div class="flex flex-col items-center text-center">
          <!-- Badge -->
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400">
            <span class="size-2 rounded-full bg-emerald-500" />
            Open Source
          </div>

          <!-- Title -->
          <h1 class="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            ChatLogVault
          </h1>

          <!-- Tagline -->
          <p class="mt-6 max-w-2xl text-pretty text-lg text-slate-600 sm:text-xl dark:text-slate-400">
            Own your ChatGPT history. Search, organize, and keep it local.
          </p>

          <!-- CTA Buttons -->
          <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <UButton
              to="/setup"
              size="lg"
              color="primary"
              variant="solid"
              trailing-icon="i-lucide-arrow-right"
            >
              Get Started
            </UButton>

            <UButton
              as="a"
              href="https://github.com/makoto0428/chatlog-vault"
              target="_blank"
              size="lg"
              color="neutral"
              variant="outline"
              leading-icon="i-lucide-github"
            >
              View on GitHub
            </UButton>

            <UButton
              as="a"
              href="#"
              size="lg"
              color="neutral"
              variant="ghost"
              leading-icon="i-lucide-book-open"
            >
              <span class="hidden sm:inline">Docs</span>
            </UButton>
          </div>
          <!-- Tech badges -->
          <div class="mt-12 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span class="flex items-center gap-1.5">
              <span class="font-mono text-xs">MIT</span> Licensed
            </span>
            <span class="size-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span>JavaScript</span>
            <span class="size-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span>Vue 3</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="border-t border-slate-200 bg-slate-50 py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/50">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for developers
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Everything you need to manage your ChatGPT conversations efficiently.
          </p>
        </div>

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            :class="[
              'group rounded-xl border p-6 transition-all',
              feature.featured
                ? 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-lg hover:shadow-xl dark:border-emerald-900/30 dark:from-emerald-950/30 dark:to-slate-800 dark:hover:to-slate-700'
                : 'border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
            ]"
          >
            <div :class="[
              'mb-4 inline-flex size-10 items-center justify-center rounded-lg',
              feature.featured
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
            ]">
              <UIcon :name="feature.icon" class="size-5" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ feature.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ feature.description }}
            </p>
            <div v-if="feature.featured" class="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-900/30">
              <span class="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">✨ Featured</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshot Section -->
    <section class="bg-white py-20 sm:py-28 dark:bg-slate-950">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Clean, intuitive interface
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A minimal UI designed to get out of your way.
          </p>
        </div>

        <!-- Mock UI Preview -->
        <div class="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <!-- Window chrome -->
          <div class="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
            <div class="flex gap-1.5">
              <div class="size-3 rounded-full bg-red-500/80" />
              <div class="size-3 rounded-full bg-yellow-500/80" />
              <div class="size-3 rounded-full bg-green-500/80" />
            </div>
            <div class="ml-4 flex-1">
              <div class="mx-auto max-w-sm rounded-md bg-slate-200 px-3 py-1 text-center text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                ChatLogVault
              </div>
            </div>
          </div>

          <!-- App content mock -->
          <div class="flex min-h-[400px]">
            <!-- Sidebar -->
            <div class="hidden w-56 border-r border-slate-200 bg-slate-50 p-4 sm:block dark:border-slate-700 dark:bg-slate-950">
              <div class="mb-4 flex items-center gap-2 rounded-md bg-slate-200 px-3 py-2 text-sm dark:bg-slate-800">
                <UIcon name="i-lucide-search" class="size-4 text-slate-500 dark:text-slate-400" />
                <span class="text-slate-500 dark:text-slate-400">Search...</span>
              </div>
              
              <div class="space-y-1">
                <div class="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <UIcon name="i-lucide-message-square" class="size-4" />
                  All Chats
                </div>
                <div class="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
                  <UIcon name="i-lucide-tag" class="size-4" />
                  Tags
                </div>
                <div class="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
                  <UIcon name="i-lucide-folder" class="size-4" />
                  Collections
                </div>
              </div>

              <div class="mt-6 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Recent
              </div>
              <div class="mt-2 space-y-1">
                <div
                  v-for="title in recentChats"
                  :key="title"
                  class="truncate rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  {{ title }}
                </div>
              </div>
            </div>

            <!-- Main content -->
            <div class="flex-1 p-6">
              <div class="mb-6 flex items-center justify-between">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-white">React best practices</h3>
                <div class="flex gap-2">
                  <span class="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                    react
                  </span>
                  <span class="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                    tutorial
                  </span>
                </div>
              </div>

              <div class="space-y-4">
                <div class="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                  <p class="text-sm font-medium text-slate-600 dark:text-slate-400">You</p>
                  <p class="mt-1 text-sm text-slate-900 dark:text-white">What are some React best practices for 2024?</p>
                </div>
                <div class="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Assistant</p>
                  <p class="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Here are key React best practices for 2024: Use Server Components when possible, prefer composition over inheritance, implement proper error boundaries...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="get-started" class="border-t border-slate-200 bg-slate-50 py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/50">
      <div class="mx-auto max-w-5xl px-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Get started in minutes
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Three simple steps to take control of your ChatGPT history.
          </p>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-3">
          <div
            v-for="(item, index) in steps"
            :key="item.step"
            class="relative text-center"
          >
            <!-- Connector line -->
            <div
              v-if="index < steps.length - 1"
              class="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-slate-300 to-transparent sm:block dark:from-slate-700 dark:to-transparent"
            />
            
            <div class="relative mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <UIcon :name="item.icon" class="size-7" />
              <span class="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900">
                {{ item.step }}
              </span>
            </div>
            
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Source Section -->
    <section class="border-t border-slate-200 bg-slate-50 py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/50">
      <div class="mx-auto max-w-4xl px-6">
        <div class="rounded-2xl border border-emerald-200 bg-white p-8 shadow-xl sm:p-12 dark:border-emerald-900/30 dark:bg-slate-800 dark:shadow-2xl">
          <div class="flex flex-col items-center text-center">
            <div class="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <UIcon name="i-lucide-github" class="size-7" />
            </div>

            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Open Source & Community Driven
            </h2>
            
            <p class="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              ChatLogVault is free, open source, and built with love by the community. 
              Contributions are always welcome.
            </p>

            <!-- Stats -->
            <div class="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <UIcon name="i-lucide-star" class="size-5 text-yellow-500" />
                <span class="font-semibold text-slate-900 dark:text-white">2.4k</span>
                <span>stars</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <UIcon name="i-lucide-git-fork" class="size-5" />
                <span class="font-semibold text-slate-900 dark:text-white">340</span>
                <span>forks</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <UIcon name="i-lucide-heart" class="size-5 text-red-500" />
                <span class="font-semibold text-slate-900 dark:text-white">80+</span>
                <span>contributors</span>
              </div>
            </div>

            <!-- License badge -->
            <div class="mt-8 rounded-lg bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Released under the </span>
              <span class="font-mono font-medium text-slate-900 dark:text-white">MIT License</span>
            </div>

            <!-- CTA -->
            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <UButton
                as="a"
                href="https://github.com/makoto0428/chatlog-vault"
                target="_blank"
                size="lg"
                color="green"
                :trailing-icon="false"
                class="gap-2"
              >
                <UIcon name="i-lucide-star" class="size-5" />
                Star on GitHub
              </UButton>
              <UButton
                as="a"
                href="https://github.com/makoto0428/chatlog-vault"
                target="_blank"
                size="lg"
                color="gray"
                variant="outline"
                :trailing-icon="false"
                class="gap-2"
              >
                <UIcon name="i-lucide-git-fork" class="size-4" />
                <span class="hidden sm:inline">Fork & Contribute</span>
                <span class="sm:hidden">Contribute</span>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div class="mx-auto max-w-6xl px-6 py-12">
        <div class="flex flex-col items-center justify-center gap-6 text-center sm:justify-center">
          <div class="flex items-center gap-2">
            <div class="flex size-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <span class="font-mono text-xs font-bold">CV</span>
            </div>
            <span class="font-semibold text-slate-900 dark:text-white">ChatLogVault</span>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-400">
            Own your ChatGPT history. Free, open source, and built with ❤️
          </p>

          <p class="text-xs text-slate-500 dark:text-slate-500">
            MIT License • <a href="https://github.com/makoto0428/chatlog-vault" target="_blank" class="hover:text-slate-700 dark:hover:text-slate-300">GitHub</a> • <a href="#" class="hover:text-slate-700 dark:hover:text-slate-300">Documentation</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
