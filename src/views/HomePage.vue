<template>
  <div class="min-h-screen">
    <suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loading-spinner />
        </div>
      </template>
    </suspense>
  </div>
</template>

<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/HeroSection.vue';
</script>