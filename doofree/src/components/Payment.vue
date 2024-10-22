<template>
  <div class="payment-container">
    <h2>Payment</h2>
    <div class="booking-details">
      <p><strong>Confirm booking for:</strong> {{ hotel.name }}</p>
      <p><strong>Price:</strong> ${{ hotel.price }}</p>
    </div>

    <button @click="completePayment" class="pay-button">Pay Now</button>

    <div v-if="paymentSuccessful" class="success-message">
      <h3>Payment Successful!</h3>
      <p>Your booking for {{ hotel.name }} has been confirmed.</p>
      <p><strong>Booking Details:</strong></p>
      <p>ID: {{ bookingDetails.id }}</p>
      <p>Name: {{ bookingDetails.name }}</p>
      <p>Price: ${{ bookingDetails.price }}</p>
      <p>Date: {{ bookingDetails.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotel: {},
      paymentSuccessful: false,
      bookingDetails: {},
    };
  },
  created() {
    const hotelId = this.$route.query.hotelId;
    this.hotel = {
      1: { id: 1, name: "Hotel A", price: 100 },
      2: { id: 2, name: "Hotel B", price: 150 },
      3: { id: 3, name: "Hotel C", price: 200 },
      4: { id: 4, name: "Hotel D", price: 250 },
    }[hotelId];
  },
  methods: {
    completePayment() {
      // เก็บข้อมูลการจอง
      this.bookingDetails = {
        id: this.hotel.id,
        name: this.hotel.name,
        price: this.hotel.price,
        date: new Date().toLocaleString(), // ใช้วันที่ปัจจุบัน
      };

      // เก็บข้อมูลลง localStorage (ถ้าต้องการ)
      localStorage.setItem(
        "bookingDetails",
        JSON.stringify(this.bookingDetails)
      );

      // เปลี่ยนสถานะการชำระเงินสำเร็จ
      this.paymentSuccessful = true;
    },
  },
};
</script>

<style scoped>
.payment-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: Arial, sans-serif;
}

.booking-details {
  margin-bottom: 20px;
}

.pay-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.pay-button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  color: green;
  text-align: center;
}
</style>
