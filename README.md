# Markdown Note Taking App
### Overview
This app lets you upload a markdown file, and either check for spelling mistakes, grammar error, suggestion. It also let's you render the markdown in HTML 

### Installation guide 
**Clone the repo**  
`git clone https://github.com/NAJIB-B/markdown-note-taking-App`  
**Navigate into the directory**  
` cd markdown-note-taking-App `  
**Install the dependencies**  
` npm install `  
**Create your .env file**  
`touch .env`
**Add your database connection string** (I used mongodb atlas)  
`DATABASE=your-database-connection-string`  
**Run the project**  
`npm start`  

### Api endpoints
**uploading md file to db**  
`POST /api/v1/note/upload`  
**checking for grammar errors**  
`POST /api/v1/note/grammar-check`  
**rendering your markdown as html**  
`POST /api/v1/note/render-note`  

**project idea from** [https://roadmap.sh/projects/markdown-note-taking-app](https://roadmap.sh/projects/markdown-note-taking-app)
