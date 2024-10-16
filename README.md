# Markdown Note Taking App
### Overview
![project architecture](https://assets.roadmap.sh/guest/markdown-note-taking-app-tymi3.png)  
A RESTful API that facilitates file uploads while allowing users to manage notes effectively. This project includes endpoints for checking the grammar of notes, error suggestion, saving notes in Markdown format, and returning the rendered HTML version of those notes.

### Installation guide 

<ol>
  <li><strong>Clone the project repo</strong></li>
  <pre><code>git clone https://github.com/NAJIB-B/markdown-note-taking-App.git</code></pre>

  <li><strong>Navigate into the project directory</strong></li>
  <pre><code>cd markdown-note-taking-App</code></pre>

  <li><strong>Install the dependencies</strong></li>
  <pre><code>npm install</code></pre>

  <li><strong>Create your own MongoDB database</strong></li>
  <p>(I used <a href="https://www.mongodb.com/products/platform/atlas-database">MongoDB Atlas</a>)</p>

  <li><strong>Create your <code>.env</code> file</strong></li>
  <pre><code>touch .env</code></pre>

  <li><strong>Add the following environment variables</strong></li>
  <p>Populate the <code>.env</code> file with the following variables, replacing the placeholders with your own details:</p>

  <pre><code>DATABASE="mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.mongodb.net/&lt;database-name&gt;?retryWrites=true&amp;w=majority&amp;appName=Cluster0"
  
  </code></pre>

  <p><strong>Note:</strong></p>
  <ul>
    <li>Replace <code>&lt;username&gt;</code>, <code>&lt;database-name&gt;</code>, and <code>&lt;password&gt;</code></li>
  </ul>

  <li><strong>Run the project</strong></li>
  <pre><code>npm start</code></pre>
</ol>


### Api endpoints
**uploading md file to db**  
`POST /api/v1/note/upload`  
**checking for grammar errors**  
`POST /api/v1/note/grammar-check`  
**rendering your markdown as html**  
`POST /api/v1/note/render-note`  

**project idea from** [https://roadmap.sh/projects/markdown-note-taking-app](https://roadmap.sh/projects/markdown-note-taking-app)
