<template>
<div>
  <li>
    {{book.title}} : {{book.author}}
  </li>
  <span v-if="book.finishedReading">- Read</span>
  <span v-else>- Not Read</span>
</div>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book'],
};
</script>

<style>
li {
  display: block;
  margin: 0 10px;
}
</style>