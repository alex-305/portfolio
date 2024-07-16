package handlers

import "net/http"

func Blog(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		handleGetBlog(w, r)
	case "POST":
		handlePostBlog(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func handleGetBlog(w http.ResponseWriter, r *http.Request) {

}

func handlePostBlog(w http.ResponseWriter, r *http.Request) {

}
