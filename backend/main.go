package main

import (
	"log"
	"net/http"

	"github.com/alex-305/backend/handlers"
)

func main() {
	http.HandleFunc("/project", handlers.Projects)
	http.HandleFunc("/project/", handlers.Projects)
	http.HandleFunc("/blog", handlers.Blog)
	http.HandleFunc("/blog/", handlers.Blog)

	log.Fatal(http.ListenAndServe("localhost:7642", nil))
}
