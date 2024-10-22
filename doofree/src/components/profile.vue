<template>
  <div class="profile-container">
    <h2>User Profile</h2>
    <div v-if="user">
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture" />
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <!-- เพิ่มฟิลด์อื่นๆ ที่ต้องการแสดง -->
    </div>
    <button @click="editProfile">Edit Profile</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.loadUserProfile();
  },
  methods: {
    loadUserProfile() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    },
    editProfile() {
      // เพิ่มการจัดการสำหรับการแก้ไขโปรไฟล์
      console.log("Edit profile functionality goes here");
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}
</style>
