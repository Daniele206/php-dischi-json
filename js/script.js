const { createApp } = Vue;

createApp({

  data(){
    return{
      apiUrl: 'data/server.php',
      playList: [],
      newSong: {
        title: "",
        author: "",
        year: "",
        poster: "https://images-na.ssl-images-amazon.com/images/I/411BQR6BHRL.jpg",
        genre: ""
      }
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result =>{
        this.playList = result.data;
        console.log(this.playList);
      })
    },

    addSong(){
      const data = new FormData();

      data.append('newSongTitle', this.newSong.title);
      data.append('newSongAuthor', this.newSong.author);
      data.append('newSongYear', this.newSong.year);
      data.append('newSongPoster', this.newSong.poster);
      data.append('newSongGenre', this.newSong.genre);

      axios.post(this.apiUrl, data)
        .then(result => {
          this.playList = result.data;
        })
    },

    removeSong(i){
      if(confirm('Vuoi davvero eliminare questa canzone')){
        const data = new FormData();

        data.append('removeSongId', i);
  
        axios.post(this.apiUrl, data)
          .then(result => {
            this.playList = result.data;
          })
      }
    },

    like(i){
      const data = new FormData();

        data.append('likeId', i);
  
        axios.post(this.apiUrl, data)
          .then(result => {
            this.playList = result.data;
          })
    }
  },

  mounted(){
    this.getApi()
  }

}).mount('#app');