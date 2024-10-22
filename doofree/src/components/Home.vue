<template>
  <div class="container">
    <nav>
      <ul class="nav-list">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/payment">Payment</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li v-if="bookingDetails">
          <span
            >Booking: {{ bookingDetails.name }} - ${{
              bookingDetails.price
            }}</span
          >
        </li>
        <li @click="logout" class="logout-button">Logout</li>
      </ul>
    </nav>

    <h2>Home - Search Hotels</h2>
    <div class="search-container">
      <input v-model="searchQuery" placeholder="Search for hotels..." />
      <button @click="searchHotels">Search</button>
    </div>

    <ul class="hotel-list">
      <li
        v-for="hotel in filteredHotels"
        :key="hotel.id"
        @click="selectHotel(hotel)"
        class="hotel-item"
      >
        <img :src="hotel.image" alt="Hotel Image" class="hotel-image" />
        <div class="hotel-info">
          <h3>{{ hotel.name }}</h3>
          <p>Price: ${{ hotel.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      hotels: [
        {
          id: 1,
          name: "Hotel A",
          price: 100,
          image: "src/components/icons/1.png",
        },
        {
          id: 2,
          name: "Hotel B",
          price: 150,
          image: "src/components/icons/b.jpg",
        },
        {
          id: 3,
          name: "Hotel C",
          price: 200,
          image: "src/components/icons/3.png",
        },
        {
          id: 4,
          name: "Hotel D",
          price: 250,
          image: "src/components/icons/4.png",
        },
      ],
    };
  },
  computed: {
    filteredHotels() {
      return this.hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    searchHotels() {
      console.log("Searching for:", this.searchQuery);
    },
    selectHotel(hotel) {
      this.$router.push({ name: "HotelRating", query: { hotelId: hotel.id } });
    },
    logout() {
      localStorage.removeItem("user"); // ลบข้อมูลผู้ใช้จาก localStorage
      this.$router.push({ name: "Login" }); // เปลี่ยนเส้นทางไปยังหน้า Login
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

nav {
  background-color: #007bff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #0056b3;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
  margin-right: 10px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.hotel-list {
  list-style-type: none;
  padding: 0;
}

.hotel-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hotel-item:hover {
  background-color: #f8f9fa;
}

.hotel-image {
  width: 100px;
  height: auto;
  margin-right: 15px;
}

.hotel-info {
  flex-grow: 1;
}

.hotel-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.hotel-info p {
  margin: 5px 0 0;
  color: #555;
}
</style>
