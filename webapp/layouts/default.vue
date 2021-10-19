<template>
  <div class="app">
    <Header />
    <main>
      <Nuxt/>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/common/header.vue'
import Footer from '~/components/common/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#__layout {
  background-color: rgba(0, 0, 0, 0.85);
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  background: url('~/assets/images/background_2.jpg') no-repeat center center fixed;
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
  margin-top: 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>