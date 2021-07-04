<template>
  <footer>
    <div class="footer-directory">
      <div class="footer-directory-wrapper">
        <div v-for="(item, index) in menu" :key="index" class="directory-column">
          <label class="directory-label">
            {{ item.name }}
          </label>
          <ul class="directory-list">
            <li
              v-for="(child, cIndex) in item.children"
              :key="`menu-item-${index}-child-${cIndex}`"
              class="directory-list-item"
              >
              <nuxt-link :to="child.to" class="link">
                {{ child.name }}
                <span v-if="child.tag" class="tag">
                  {{ child.tag }}
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
        <div class="directory-list-item">
          <p class="title">Великая японская цитата:</p>
          <p>"Лягушке, которой нравится жить в колодце,</p>
          <p>никогда не дано познать прелесть великого моря.</p>
          <p>чтобы дарить прекрасное и учить мудрому."</p>
          <p class="title end">Куя (空也), 959г н.э.</p>
        </div>
      </div>
    </div>
    <div class="footer-mini">
      <div class="footer-mini-wrapper">
        <div class="footer-mini-legal">&copy; Copyright {{ new Date().getFullYear() }}. <nuxt-link :to="{ name: 'policy' }"><span class="footer-link">All rights reserved.</span></nuxt-link></div>
        <div class="footer-mini-socials">
          <a href="https://www.facebook.com/" target="_blank"
             class="icon">
            <facebook-icon class="facebook"/>
          </a>
          <a href="https://www.instagram.com/ushida.samurai/" target="_blank"
             class="icon">
            <instagram-icon class="instagram"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FacebookIcon, InstagramIcon } from 'vue-feather-icons'
export default {
  components: {
    FacebookIcon, InstagramIcon
  },
  data: () => ({
    appName: 'Auctions',
    open: false,
    profile: false,
    menu: [
      {
        name: 'Project',
        children: [
          {
            name: 'Blog',
            to: { name: 'about' },
          },
          {
            name: 'News',
            to: { name: 'about' },
          },
          {
            name: 'About',
            to: { name: 'about' },
          },
          {
            name: 'Contacts',
            to: { name: 'contacts' },
          },
          {
            name: 'Policy',
            to: { name: 'policy' },
          },
        ],
      },
      {
        name: 'Creator',
        children: [
          {
            name: 'Who we are?',
            to: { name: 'faq' },
          },
          {
            name: 'History',
            to: { name: 'faq' },
          },
          {
            name: 'Portfolio',
            to: { name: 'faq' },
          },
          {
            name: 'FAQ',
            to: { name: 'faq' },
          },
        ],
      },
      {
        name: 'Developers & Designers',
        children: [
          {
            name: 'Vacancies',
            to: { name: 'faq' },
          },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/common.scss";
footer {
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 8;
  .footer-directory {
    padding: 2rem 0;
    margin: 0 6rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(228, 228, 228, 0.05);
    .footer-info {
      font-size: 0.9rem;
      width: 30%;
      .title {
        margin-bottom: 0.5rem;
        font-weight: 700;
      }
      .end {
        text-align: right;
        margin-top: 0.5em;
      }
    }
    &-wrapper {
      display: flex;
      width: 60%;
    }
    .directory-column {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      margin-right: 3rem;
      flex-basis: 35%;
      color: #fff;
      .title {
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      p {
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }
      p:first-child {
        margin: 0rem 0rem 0.5rem 0rem;
      }
      .directory-label {
        margin-bottom: 0.5rem;
        font-weight: 700;
      }
      .directory-list {
        .directory-list-item {
          margin-bottom: 0.5rem;
          cursor: pointer;
          .tag {
            vertical-align: super;
            font-size: 0.8rem;
            color: $base-blue;
          }
        }
      }
    }
  }
  .footer-mini {
    padding: 1rem 2rem;
    margin: 0 4rem;
    font-size: 0.875rem;
    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .footer-mini-legal {
        width: 30%;
        .footer-link {
          color: $base-blue;
        }
        .footer-link:hover {
          text-decoration: underline;
        }
      }
      .footer-mini-logo {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          margin-right: 0.5rem;
        }
        svg {
          width: 7rem;
          cursor: pointer;
          .cls-3 {
            fill: #9d9d9d;
            transition: .2s ease-in-out;
          }
        }
        svg:hover {
          .cls-3 {
            fill: #c0312c;
          }
        }
      }
      .footer-mini-socials {
        display: flex;
        justify-content: flex-end;
        width: 30%;
        .icon {
          opacity: 0.5;
          transition: .2s ease-in-out;
          .facebook {
            margin-right: 0.5rem;
          }
        }
        .icon:hover {
          opacity: 1;
        }
      }
    }
    .footer-legal {
      display: none;
      text-align: center;
      margin-top: 1rem;
      .footer-link {
        color: $base-blue;
      }
      .footer-link:hover {
        text-decoration: underline;
      }
    }
  }
}
@media (max-width: 781px) {
  footer {
    .footer-directory {
      display: flex;
      flex-direction: column;
      margin: 0 2rem;
      &-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        width: 100%;
        .directory-column {
          flex-basis: 0;
        }
      }
      .footer-info {
        width: 100%;
      }
    }
    .footer-mini {
      margin: 0rem;
      &-wrapper {
        .footer-mini-legal {
          display: none;
        }
        .footer-mini-logo {
          span {
            display: none;
          }
        }
        .footer-mini-socials {
          justify-content: flex-start;
        }
      }
      .footer-legal {
        display: block;
      }
    }
  }
}
</style>
