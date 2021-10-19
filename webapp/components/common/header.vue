<template>
  <header>
    <div class='header-wrapper'>
      <div class='header-navigation'>
        <nuxt-link :to="{name: '/'}" class='header-link'>
          <span class='header-logo'>Ushida</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'products'}" class='header-link link' >
          <span>Products</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'portfolio'}" class='header-link link'>
          <span>Portfolio</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'contacts'}" class='header-link link'>
          <span>Contacts</span>
        </nuxt-link>
        <nuxt-link :to="{name: 'about'}" class='header-link link'>
          <span>About</span>
        </nuxt-link>
      </div>
      <div class='header-auth'>
        <nuxt-link :to="{ name: 'auth-login' }">
          <button class="button button-not-active sign-in">Sign In</button>
        </nuxt-link>
        <button class="button sign-up">Sign Up</button>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  color: #fff;
  position: fixed;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  z-index: 20;
  top: 0;
  width: 100%;
  .header-wrapper {
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    .header-auth {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sign-up {
        margin-left: 0.5rem;
      }
    }
    .header-navigation {
      display: flex;
      .header-link {
        margin-left: 2rem;
        display: flex;
        align-items: center;
        .header-logo {
          padding-top: 5px;
          font-family: 'Gang-of-Three', Fallback, sans-serif;
          font-size: 1.2rem;
        }
        span {
          color: #fff;
        }
      }
      .header-link:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>