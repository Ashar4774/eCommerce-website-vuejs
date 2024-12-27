<template>
  <div class="min-h-screen">
    <suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
          <Collection />
          <ExclusiveSection />
          <BestSellers />
          <ContactSection />
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
import {defineAsyncComponent} from "vue";

const LoadingSpinner = defineAsyncComponent(()=> import('@/components/LoadingSpinner.vue'));
const NavBar = defineAsyncComponent(()=> import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(()=> import('@/components/HeroSection.vue'));
const Collection = defineAsyncComponent(()=> import('@/components/Collection.vue'));
const ExclusiveSection = defineAsyncComponent(()=> import('@/components/ExclusiveSection.vue'));
const BestSellers = defineAsyncComponent(()=> import('@/components/BestSellers.vue'));
const ContactSection = defineAsyncComponent(()=> import('@/components/ContactSection.vue'));


</script>