const { createApp } = Vue;

createApp({
  data() {
    return {
      disksList: [],
    };
  },

  mounted() {
    // console.log(axios);
    axios
      .get("http://localhost/php-dischi-json/data/dischi.php")
      .then((response) => {
        // console.log(res);
        this.disksList = response.data;
        // console.log(disksList);
      });
  },
}).mount("#app");
