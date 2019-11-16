import axios from "axios";


export default {
    getGoogleSearchBooks: function(query){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    }

    getBooks:function(){
        return axios.get("/api/books");
    }

    getBooks:function(){
        return axios.get("/api/books/" + id);
    }

    savebooks:function(){
        return axios.post("/api/books", this.savebooks)
    }
}