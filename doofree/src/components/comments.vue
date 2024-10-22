<template>
  <div class="comments-container">
    <h3>Reviews</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.username }}:</strong> {{ comment.text }}
      </li>
    </ul>

    <div class="add-comment">
      <input v-model="newComment.username" placeholder="Your Name" />
      <textarea v-model="newComment.text" placeholder="Write a review..." rows="3"></textarea>
      <button @click="addComment">Submit Review</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      comments: this.initialComments,
      newComment: { username: "", text: "" },
    };
  },
  methods: {
    addComment() {
      if (this.newComment.username && this.newComment.text) {
        this.comments.push({ 
          id: this.comments.length + 1, 
          username: this.newComment.username, 
          text: this.newComment.text 
        });
        this.newComment.username = "";
        this.newComment.text = "";
      } else {
        alert("Please fill out both fields!");
      }
    },
  },
};
</script>

<style scoped>
.comments-container {
  margin-top: 20px;
}

.add-comment {
  margin-top: 20px;
}

.add-comment input,
.add-comment textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-comment button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-comment button:hover {
  background-color: #0056b3;
}
</style>
