<template>
  <div class="app">
    <main>
      <Nuxt/>
    </main>
  </div>
</template>
<style lang="scss" scoped>
#__layout {
  background-color: rgba(0, 0, 0, 0.85);
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
}
.app {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
}
main {
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>