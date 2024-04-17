const { createApp } = Vue;

createApp({

  data(){
    return{
      apiUrl: 'data/server.php',
      playList: [],
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result =>{
        this.playList = result.data;
        console.log(this.playList);
      })
    }
  },

  mounted(){
    this.getApi()
  }

}).mount('#app');