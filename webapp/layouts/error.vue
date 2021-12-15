<template>
  <div class="error">
    <div class="error-wrapper">
      <div class="icon">
        <alert-triangle-icon stroke-width='1' />
      </div>
      <div class="error-info">
        <div class="error-code">
          {{ error.statusCode }}
        </div>
        <div class="error-text">
          {{ error.message }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/scss/common.scss";

.error {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .icon {
      display: flex;
      justify-content: center;
      svg {
        height: 8rem;
        width: 8rem;
      }
    }
    .error-info {
      .error-code {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
<script>
import { ArrowLeftIcon, AlertTriangleIcon } from 'vue-feather-icons'

export default {
  components: { ArrowLeftIcon, AlertTriangleIcon },
  props: ['error'],
}
</script>