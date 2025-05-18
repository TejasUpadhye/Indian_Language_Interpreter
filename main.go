package main

import (
	"bytes"
	_ "embed"
	"fmt"
	"io/ioutil"
	"monkey/repl" // Import the existing repl package
	"net/http"
	"os"
	"os/exec"
	"os/user"
)

//go:embed index.html
var htmlContent []byte

//go:embed styles.css
var cssContent []byte

//go:embed scripts.js
var jsContent []byte



//go:embed lan.png
var lanImage []byte

//go:embed run.png
var runImage []byte

func handleREPL(w http.ResponseWriter, r *http.Request) {
	// Ensure that the request method is POST
	if r.Method == http.MethodPost {
		// Read the code from the request body
		code, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Failed to read input", http.StatusBadRequest)
			return
		}

		// Create a buffer from the code to simulate stdin for the REPL
		codeBuffer := bytes.NewReader(code)

		// Execute the REPL with the code passed via the buffer
		repl.Start(codeBuffer, w) // Call repl.Start here instead of repl.Run
	} else {
		// Return error if the request method is not POST
		http.Error(w, "Invalid request method. Use POST.", http.StatusMethodNotAllowed)
	}
}

func serveFile(w http.ResponseWriter, r *http.Request) {
	// Serve the embedded HTML file
	if r.URL.Path == "/" {
		w.Header().Set("Content-Type", "text/html")
		w.Write(htmlContent)
		return
	}

	if r.URL.Path == "/styles.css" {
		w.Header().Set("Content-Type", "text/css")
		w.Write(cssContent)
		return
	}

	if r.URL.Path == "/scripts.js" {
		w.Header().Set("Content-Type", "text/script")
		w.Write(jsContent)
		return
	}

	// Serve the embedded images based on the URL path
	if r.URL.Path == "/lan.png" {
		w.Header().Set("Content-Type", "image/png")
		w.Write(lanImage)
		return
	}
	if r.URL.Path == "/run.png" {
		w.Header().Set("Content-Type", "image/png")
		w.Write(runImage)
		return
	}

	// Fallback: 404 Not Found for any other paths
	http.NotFound(w, r)
}

func main() {
	// Print a greeting when starting the server
	user, err := user.Current()
	if err != nil {
		panic(err)
	}
	fmt.Printf("Hello %s! This is the Indian Langauge Interpreter\n",
		user.Username)
	fmt.Printf("Server started. You can interact via HTTP requests.\n")

	// Automatically open the browser on Windows
	cmd := exec.Command("cmd", "/C", "start", "http://localhost:8080")
	err = cmd.Start()
	if err != nil {
		fmt.Println("Error opening browser:", err)
	}

	// Serve the HTML page at the root URL and images
	http.HandleFunc("/", serveFile)

	// Handle POST requests for executing code at /execute
	http.HandleFunc("/execute", handleREPL)

	// Start the server on port 8080
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Printf("Error starting server: %v\n", err)
		os.Exit(1)
	}
}
