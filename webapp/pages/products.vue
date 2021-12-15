<template>
  <div class="products">
    <div class="products-wrapper">
      <nuxt-link :to="{name: ''}">
        <div class="product-card">
          <div class="product-card-category">
            <span>Video</span>
          </div>
          <div class="product-card-image">
            <img src="~/assets/images/background_1.jpg"/>
          </div>
          <div class="product-card-main">
            <div class="product-card-body">
              <div class="product-card-body-title">Autumn 2019 LUT Pack</div>
            <div class="product-card-body-description">Some description text for this product</div>
          </div>
          <div class="product-card-footer">
              <div class="product-card-author">Ushida</div>
              <div class="product-card-price">20$</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="{name: ''}">
        <div class="product-card">
          <div class="product-card-category">
            <span>Video</span>
          </div>
          <div class="product-card-image">
            <img src="~/assets/images/background_1.jpg"/>
          </div>
          <div class="product-card-main">
            <div class="product-card-body">
              <div class="product-card-body-title">Autumn 2019 LUT Pack</div>
            <div class="product-card-body-description">Some description text for this product</div>
          </div>
          <div class="product-card-footer">
              <div class="product-card-author">Ushida</div>
              <div class="product-card-price">20$</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="{name: ''}">
        <div class="product-card">
          <div class="product-card-category">
            <span>Video</span>
          </div>
          <div class="product-card-image">
            <img src="~/assets/images/background_1.jpg"/>
          </div>
          <div class="product-card-main">
            <div class="product-card-body">
              <div class="product-card-body-title">Autumn 2019 LUT Pack</div>
            <div class="product-card-body-description">Some description text for this product</div>
          </div>
          <div class="product-card-footer">
              <div class="product-card-author">Ushida</div>
              <div class="product-card-price">20$</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="{name: ''}">
        <div class="product-card">
          <div class="product-card-category">
            <span>Video</span>
          </div>
          <div class="product-card-image">
            <img src="~/assets/images/background_1.jpg"/>
          </div>
          <div class="product-card-main">
            <div class="product-card-body">
              <div class="product-card-body-title">Autumn 2019 LUT Pack</div>
            <div class="product-card-body-description">Some description text for this product</div>
          </div>
          <div class="product-card-footer">
              <div class="product-card-author">Ushida</div>
              <div class="product-card-price">20$</div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  head: () => ({
    title: 'Products'
  })
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

.products {
  width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  .products-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .product-card {
      position: relative;
      max-width: 18rem;
      height: 24rem;
      text-align: center;
      color: $text-color;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgba(228, 228, 228, 0.05);
      overflow: hidden;
      margin-bottom: 1.75rem;
      transition: .15s ease-in-out;
      &-category {
        position: absolute;
        z-index: 2;
        right: 0;
        top: 1.5rem;
        padding: 0.1rem 0.5rem;
        backdrop-filter: blur(15px);
        font-weight: 400;
        background-color: rgba(255, 255, 255, 0.185);
      }
      &-image {
        position: relative;
        height: 10rem;
        img {
          background: transparent;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .25s ease-in-out;
        }
      }
      &-main {
        // backdrop-filter: blur(15px);
        padding: 2rem 2rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba($color: #000000, $alpha: 0.25);
        .product-card-body {
          width: 100%;
          &-title {
            font-size: 1.25rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
          }
          &-description {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            font-weight: 300;
            color: $dark-text-color;
            height: 4.75rem;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .product-card-footer {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .product-card:hover {
      border: 1px solid rgba(228, 228, 228, 0.15);
    }
  }
}
</style>