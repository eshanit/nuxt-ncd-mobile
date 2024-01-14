<script setup lang="ts">
</script>
<template>
  <div class=" bg-white rounded-2xl shadow-xl p-5">
    <div class="border-b border-gray-400 pb-5">
      <slot name="header"></slot>
    </div>
    <div class="pt-5">
      <slot name="body"></slot>
    </div>

  </div>
</template>