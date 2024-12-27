<template>
  <section class="mt-32" data-aos="fade-up">
    <h1 class="text-center mb-20 text-4xl/[0.9] font-medium tracking-tight text-black sm:text-7xl/[0.8] md:text-[5rem]/[0.9]">
      What,s New
    </h1>
  </section>
  <carousel :wrap-around="true" v-bind="settings" :breakpoint="breakpoints">
    <slide v-for="(product, index) in products" :key="index">
      <ProductCard :product="product" />
    </slide>
    <template #addons>
      <Navigation />
    </template>
  </carousel>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { Carousel, Navigation, Slide } from "vue3-carousel";
  import { useStore } from 'vuex';
  import ProductCard from "@/components/ProductCard.vue";

  const store = useStore();
  const products = computed(()=> {
    const allProducts = store.getters['getProducts'];

    const rings = allProducts.filter((product) => product.category.toLowerCase() === 'ring').slice(0,3);

    const nacklaces = allProducts.filter((product) => product.category.toLowerCase() === 'necklace').slice(0,3);

    const earrings = allProducts.filter((product) => product.category.toLowerCase() === 'earring').slice(0,2);

    return [...rings, ...nacklaces, ...earrings];
  })

//   Carousel setting
  const settings = ref({
    itemsToShow : 5,
    snapAlign:'center'
  });

  const breakpoints = ref({
    700:{
      itemsToShow: 3,
      snapAlign: 'center'
    },
    1024:{
      itemsToShow: 5,
      snapAlign: 'start'
    }
  })

</script>