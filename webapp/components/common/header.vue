<template>
  <header class="header">
    <div class='header-wrapper'>
      <div class="header-logo">
        <nuxt-link :to="{name: '/'}">
          <span>Ushida</span>
        </nuxt-link>
        <div @click="isAudioPlaying = !isAudioPlaying" class="header-audio" :class="{playing: isAudioPlaying}">
          <div class="header-audio-fragment"></div>
          <div class="header-audio-fragment"></div>
          <div class="header-audio-fragment"></div>
        </div>
      </div>
      <div class='header-navigation'>
        <nuxt-link :to="{name: 'products'}" class='header-link link' >
          <span>Products</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'stories'}" class='header-link link'>
          <span>Stories</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'portfolio'}" class='header-link link'>
          <span>Portfolio</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'about'}" class='header-link link'>
          <span>About</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'sign-in'}" class='header-link link'>
          <span>Sign In</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'sign-up'}" class='header-link button'>
          <span>Sign Up</span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isAudioPlaying: false
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('changeAuthStatus', {
        authStatus: false,
        accessToken: null,
        profileData: null
      })
      this.$storage.removeUniversal('accessToken')
      this.$storage.removeUniversal('profileData')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/common.scss";

  .header {
    padding: 1rem 15.125rem;
    color: $text-color;
    width: 100%;
    display: flex;
    &-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-navigation {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
    &-logo {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.25rem;
      display: flex;
      align-items: center;
    }
    .playing {
      .header-audio-fragment:first-of-type {
        animation: audioPlay infinite ease-in-out 0.75s;
        animation-delay: 0;
        animation-play-state: running;
      }
      .header-audio-fragment:nth-of-type(2) {
        animation: audioPlay infinite ease-in-out 0.75s;
        animation-delay: 0.5s;
        animation-play-state: running;
      }
      .header-audio-fragment:last-of-type {
        animation: audioPlay infinite ease-in-out 0.75s;
        animation-delay: 1s;
        animation-play-state: running;
      }
    }
    &-audio {
      margin-left: 1rem;
      display: flex;
      column-gap: 4px;
      align-items: center;
      cursor: pointer;
      height: 2.25rem;
      &-fragment {
        height: 4px;
        width: 4px;
        background: $text-color;
        border-radius: 2px;
        transition: .2s ease-in-out;
        animation-play-state: paused
      }
    }
  }

  @keyframes audioPlay {
    0% {
      height: 4px;
    }
    50% {
      height: 12px;
    }
    100% {
      height: 4px;
    }
  }
</style>