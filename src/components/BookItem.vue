<template>
  <li>
    {{book.title}} : {{book.author}}
  </li>
  <span v-if="book.finishedReading"> Read</span>
  <span v-if="!book.finishedReading">Not Read</span>
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