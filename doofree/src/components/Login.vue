<template>
  <div class="login-container">
      <h2>Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "", // สำหรับแสดงข้อความผิดพลาด
    };
  },
  methods: {
    login() {
      // ตรวจสอบการล็อกอิน
      if (this.username === "" || this.password === "") {
        this.errorMessage = "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน";
        return; // ออกจากฟังก์ชันถ้าไม่มีข้อมูล
      }

      // ตัวอย่างการตรวจสอบล็อกอิน (เปลี่ยนตามที่คุณต้องการ)
      if (this.username === "555" && this.password === "555") {
        this.errorMessage = ""; // รีเซ็ตข้อความผิดพลาด
        this.$router.push({ name: "Home" }); // เปลี่ยนหน้า
      } else {
        this.errorMessage = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"; // แสดงข้อความผิดพลาด
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
