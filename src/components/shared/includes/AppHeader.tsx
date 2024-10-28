<template>
  <header id="main-header">
    <div id="logo"><router-link to="/">WDE</router-link></div>
    <nav>
      <ul>
        <li><router-link to="/products">Shop</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/orders">Orders</router-link></li>
      </ul>
      <!-- <%- include('nav-items') %> -->
    </nav>
    <button id="mobile-menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
  <aside id="mobile-menu">
    <nav>
      <!-- <%- include('nav-items') %> -->
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>