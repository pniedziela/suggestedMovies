// Ten komponent jest odpowiedzailny za wyswietlanie pojedynczego filmu
Vue.component('movie-detail',{

    props:['movie'],

    template:`
    <div class="gallery" style="margin:5px; float: left; border: 1px solid; ">
    <img style="width: 100%; height: auto " v-bind:src="movie.Poster">
    <div class="title" style="padding: 15px; text-align: center">{{movie.Title}}</div>
<!--    <div class="year">{{movie.Year}}</div>-->
    </div>
    `

});


//Tutaj masz komponent - glowna czesc ktorea ma dwie funkcje. Jedna do szukania filmow, a druga fo randomowego suzkania po
//nazwach z listy.
new Vue({
    el:"#getmovieapp",
    mounted:function(){
            this.loadRandom()
    },
    data:{
        searchKey:'',
        moviesList:[],
        randomkeywords:['Shaman','Lord','Capitan','Super','naruto'],
    },

    methods:{

        searchMovies()
        {
            var url = 'http://www.omdbapi.com/?s=' + this.searchKey + '&apikey=8dc936a1&';
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesList=data;
            })
        },

        loadRandom()
        {
            const randomElement = this.randomkeywords[Math.floor(Math.random() * this.randomkeywords.length)];
            var url = 'http://www.omdbapi.com/?s=' + randomElement + '&apikey=8dc936a1&';
            fetch(url)
                .then(response=>response.json())
                .then(data=>{
                    this.moviesList=data;
                })
        }
    }
});

