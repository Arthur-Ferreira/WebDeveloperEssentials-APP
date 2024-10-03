<template>
     <!-- <%- include('../../shared/includes/head', { pageTitle: 'All Products' }) %>
    <link rel="stylesheet" href="/styles/products.css">
    <link rel="stylesheet" href="/styles/carousel.css">
    <script src="/scripts/carousel.js" defer></script>
    </head> -->
    <!-- <body> -->
    <!-- <%- include('../../shared/includes/header') %> -->
    <!-- <%- include('../../shared/includes/carousel') %> -->
    <main>
      <h1>All Products</h1>
      <ul id="products-grid">
        <!-- <% for (const product of products) { %> -->
        <li>
          Products
          <!-- <%- include('../../shared/includes/product-item', { product: product }) %> -->
        </li>
        <!-- <% } %> -->
      </ul>
    </main>
    <!-- <%- include('../../shared/includes/footer') %> -->
</template>

<script>

export default {
  name: "AllProducts",
}
</script>