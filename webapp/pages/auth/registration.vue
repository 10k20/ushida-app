<template>
  <div class="sign-in">
    <div class="sign-in-left">
      <div class="logo-wrapper">
        <span class="logo-title">
          Ushida
        </span>
      </div>
    </div>
    <div class="sign-in-right">
      <div class="sign-in-right-wrapper">
        <div class="sign-in-right-title">
          Create an account
        </div>
        <div class="sign-in-right-subtitle">
          Already have an account? <span class="link"><nuxt-link :to="{name: 'auth-login'}">Sign in</nuxt-link></span>
        </div>
        <form onsubmit="return false">
          <div class="input-line">
            <div class="input-wrapper">
              <label for="email">Email adress</label>
              <input type="email" name="email" id="email" v-model="email">
            </div>
          </div>
          <!-- <div class="input-line">
            <div class="input-wrapper">
              <label for="login">Login</label>
              <input type="text" name="email" id="login" v-model="login">
            </div>
          </div>
          <div class="input-line name">
            <div class="input-wrapper">
              <label for="first-name">First name</label>
              <input type="text" class="first-name" id="first-name" v-model="first_name">
            </div>
            <div class="input-wrapper">
              <label for="last-name">Last name</label>
              <input type="text" class="second-name" id="last-name" v-model="last_name">
            </div>
          </div> -->
          <div class="input-line">
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password">
            </div>
          </div>
          <!-- <div class="privacy">
            The <span class="link">Ushida Inc.</span> may 
            keep me informed with <span class="link">personalized</span> 
            emails about products and services. 
            See our <span class="link">Privacy Policy</span> for more details or 
            to opt-out at any time.
            <br>
            <br>
            By clicking Create account, 
            I agree that I have read and accepted the 
            <span class="link">Terms of Use</span> and <span class="link">Privacy Policy</span>.
          </div> -->
          <button class="button sign-up" @click="signUp">Create account</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    // login: '',
    email: '',
    // first_name: '',
    // last_name: '',
    password: ''
  }),
  layout: 'auth',
  methods: {
    signUp(event) {
      event.preventDefault()
      this.$axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDctJo5V4uEgGzOe9uAvTm41GHyvnlM9pg`, {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }).then((response) => {
        if (response.status === 200) {
          this.$storage.setUniversal('accessToken', response.data.idToken)
          this.$storage.setUniversal('profileData', response.data.email)
          this.$store.dispatch('changeAuthStatus', {
            authStatus: true,
            accessToken: response.data.idToken,
            profileData: response.data.email
          })
          setTimeout(() => {
            this.$router.push('/')
          }, 1000);
        }
        else {
          alert('Some error occuired')
        }
      })
    } 
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/common.scss';

.link {
  color: $base-blue;
  &::before, &::after {
    background: $base-blue;
  }
}

.sign-in {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  &-left {
    .logo-wrapper {
      .logo-title {
        font-size: 1.5rem;
      }
    }
  }
  &-right {
    background-color: rgba(0, 0, 0, 0.5);
    // border: 1px solid $border-color;
    color: $text-color;
    padding: 2rem;
    border-radius: 8px;
    width: 35%;
    &-wrapper {
      .sign-in-right-title {
        font-size: 2.5rem;
        font-weight: 700;
      }
      .sign-in-right-subtitle {
        color: $heavy-gray;
      }
      form {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .input-line {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          .input-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            label {
              font-size: 0.85rem;
              margin-bottom: 0.5rem;
            }
            input {
              background-color: transparent;
              box-shadow: 0px 1px 0px 0px $heavy-gray;
              outline: none;
              transition: .2s ease-in-out;
              &:focus {
                border-bottom: 0;
                box-shadow: 0px 2px 0px 0px $base-blue;
              }
            }
          }
        }
        .name {
          .input-wrapper {
            width: 45%;
          }
        }
        .privacy {
          font-size: 0.8rem;
        }
      }
      .button {
        font-size: 0.9rem;
        max-width: fit-content;
        margin-top: 2rem;
      }
    }
  } 
}
</style>