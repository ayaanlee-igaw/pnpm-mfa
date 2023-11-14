<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { RouterLink, RouterView, useRoute  } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// 현재 라우트 정보를 저장하는 변수
const currentRoute: any = ref('');

// useRoute 훅 사용
const route = useRoute();

// 현재 라우트 정보 갱신하는 함수
const updateCurrentRoute = () => {
  currentRoute.value = route.fullPath;
  console.log('Remote Current Route:', currentRoute.value);
};

// 라우트가 변경될 때마다 현재 라우트 정보 갱신
watchEffect(() => {
  updateCurrentRoute();
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Remote" />

      <nav>
        <RouterLink to="/remote1">Remote1</RouterLink>
        <RouterLink to="/remote2">Remote2</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
