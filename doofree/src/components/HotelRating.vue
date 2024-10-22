<template>
  <div class="hotel-rating-container">
    <h2 class="title">Hotel Rating</h2>
    <div class="hotel-details">
      <img :src="hotel.image" alt="Hotel Image" class="hotel-image" />
      <div class="hotel-info">
        <p class="hotel-name">{{ hotel.name }}</p>
        <p class="hotel-price">Price: ${{ hotel.price }}</p>
        <p class="hotel-rating">Rating: {{ hotel.rating }} ★</p>
      </div>
    </div>

    <button @click="confirmBooking" class="book-button">Book Now</button>

    <Comments :initialComments="comments" />

    <button @click="goBack" class="back-button">Back</button>
  </div>
</template>

<script>
import Comments from "./Comments.vue";

export default {
  components: {
    Comments,
  },
  data() {
    return {
      hotel: {},
      comments: [],
    };
  },
  created() {
    const hotelId = this.$route.query.hotelId;
    this.loadHotelData(hotelId);
    this.loadComments(hotelId);
  },
  methods: {
    loadHotelData(hotelId) {
      const hotels = {
        1: {
          id: 1,
          name: "Hotel A",
          price: 100,
          image: "src/components/icons/1.png",
          rating: 4.5,
        },
        2: {
          id: 2,
          name: "Hotel B",
          price: 150,
          image: "src/components/icons/b.jpg",
          rating: 4.0,
        },
        3: {
          id: 3,
          name: "Hotel C",
          price: 200,
          image: "src/components/icons/3.png",
          rating: 5,
        },
        4: {
          id: 4,
          name: "Hotel D",
          price: 250,
          image: "src/components/icons/4.png",
          rating: 5,
        },
      };

      this.hotel = hotels[hotelId];
    },
    loadComments(hotelId) {
      const commentsData = {
        1: [
          { id: 1, username: "John", text: "Great place to stay!" },
          { id: 2, username: "Amber", text: "Very comfortable and clean." },
        ],
        2: [
          { id: 3, username: "Mike", text: "Excellent service!" },
          { id: 4, username: "Sophie", text: "Will come again." },
        ],
        3: [
          { id: 5, username: "Lisa", text: "Amazing views!" },
          { id: 6, username: "Tom", text: "Best hotel experience." },
        ],
        4: [
          { id: 7, username: "Anna", text: "Loved the amenities!" },
          { id: 8, username: "Jack", text: "Highly recommend!" },
        ],
      };

      this.comments = commentsData[hotelId] || [];
    },
    confirmBooking() {
      this.$router.push({ name: "Payment", query: { hotelId: this.hotel.id } });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.hotel-rating-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.hotel-details {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.hotel-image {
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.hotel-info {
  flex: 1;
}

.hotel-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.hotel-price,
.hotel-rating {
  font-size: 16px;
  color: #555;
}

.book-button,
.back-button {
  margin-top: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.book-button {
  background-color: #28a745;
}

.book-button:hover {
  background-color: #218838;
}

.back-button {
  background-color: #007bff;
  margin-left: 10px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
