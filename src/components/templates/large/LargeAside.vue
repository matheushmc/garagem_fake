<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>
<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-home-outline" /> Home
      </router-link>
    </div>
    <div class="divider" />
    <div class="menu">
      <router-link to="/marcas">
        <i class="icon mdi mdi-shield-car"/> Marca
      </router-link>
      <router-link to="/categorias">
        <i class="icon mdi mdi-car-estate"/> Categoria
      </router-link>
      <router-link to="/Cores">
        <i class="icon mdi mdi-spray"/> Cor
      </router-link>
      <router-link to="/acessorios">
        <i class="icon mdi mdi-seat-recline-extra"/> Acessorios
      </router-link>
      <router-link to="/login">
        <i class="icon mdi mdi-account" /> Login
      </router-link>
      <router-link to="/logout">
        <i class="icon mdi mdi-account-circle"/> Perfil
      </router-link>
    </div>
  </div>
  <logo-title />
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #230064;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #230064;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style>