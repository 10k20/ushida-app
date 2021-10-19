<template>
  <div class="sign-in">
    <div class="sign-in-logo">
      <div class="logo"></div>
      <div class="title">Ushida</div>
    </div>
    <div class="sign-in-wrapper">
      <div class="sign-in-header">
        <div class="title">Sign in</div>
        <div class="subtitle">New user? <nuxt-link :to="{ name: 'auth-registration' }" ><span class="link">Create an account</span></nuxt-link></div>
      </div>
      <form>
        <div class="input-wrapper email">
          <input type="email" name="email" placeholder="Email" required>
        </div>
        <div class="input-wrapper">
          <input type="password" placeholder="Password">
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/scss/common.scss";

.sign-in {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &-logo {
    margin-right: 20rem;
    .title {
      font-size: 2rem;
    }
  }
  &-wrapper {
    padding: 2rem;
    background-color: rgba($color: #000000, $alpha: 0.25);
    border-radius: 10px;
    border: 1px solid rgba($color: $border-color, $alpha: 0.05);;
    .sign-in-header {
      border-bottom: 1px solid rgba($color: $border-color, $alpha: 0.05);;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      .title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .subtitle {
        .link {
          color: $base-blue;
        }
        .link::before,
        .link::after {
            background: $base-blue;
        }
      }
    }
    form {
      .input-wrapper {
        margin-bottom: 1rem;
        input {
          width: 15rem;
        }
      }
    }
  }
}
</style>