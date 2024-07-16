package handlers

import "net/http"

func Projects(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		handleGetProjects(w, r)
	case "POST":
		handlePostPojects(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func handleGetProjects(w http.ResponseWriter, r *http.Request) {

}

func handlePostPojects(w http.ResponseWriter, r *http.Request) {

}
