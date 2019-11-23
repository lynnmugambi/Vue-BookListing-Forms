<template>
  <form v-on:submit.prevent="bookSubmit(bookData)" class="" action="#" method="post">
    <input v-model="bookData.bookTitle" type="text" name="title" value="" placeholder="Book Title">
    <input v-model="bookData.bookAuthor" type="text" name="author" value="" placeholder="Book Author">
    <div><input type="checkbox" v-model="bookData.finishedReading" ></div>
    <div><input type="radio" v-model="bookData.ownership" value="borrowed"></div>
    <div><input type="radio" v-model="bookData.ownership" value="bought"></div>
    <label for="finishedReading"> Finished Reading</label>
    <label for="borrowed"> Borrowed </label>
    <label for="bought"> Bought</label>
    <button type="submit" name="button">Add Book</button>
  </form>
</template>

<script>
export default {
  name: "BookForm",
  props: ["books"],
  data() {
    return {
      bookData: {
        bookTitle: "",
        bookAuthor: "",
        finishedReading: false,
        ownership: []
      }
    };
  },
  methods: {
    bookSubmit(bookData) {
      this.$emit("addBook", bookTitle, bookAuthor);
    }
  }
};
</script>

<style>
</style>
