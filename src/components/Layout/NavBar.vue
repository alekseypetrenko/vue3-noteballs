<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          @click.prevent="showMobileNav = !showMobileNav"
          ref="navBarBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navBarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is active"
            @click="showMobileNav = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is active"
            @click="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showMobileNav = ref(false);

const navBarMenuRef = ref(null);
const navBarBurger = ref(null);

onClickOutside(
  navBarMenuRef,
  (e) => {
    showMobileNav.value = false;
  },
  {
    ignore: [navBarBurger],
  },
);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
