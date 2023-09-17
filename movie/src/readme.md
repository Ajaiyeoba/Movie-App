    API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d5a553fa52193a73303ddb7b160aaccf";
    API_IMG =" https://image.tmdb.org/t/p/w500";
    API_SEARCH ="https://api.themoviedb.org/3/search/movie/api_key=d5a553fa52193a73303ddb7b160aaccf&query";

    curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=d5a553fa52193a73303ddb7b160aaccf'

     curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/343611?&append_to_response=videos&api_key=d5a553fa52193a73303ddb7b160aaccf'