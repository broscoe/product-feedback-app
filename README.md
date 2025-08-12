# Product Feedback App

## 👋 Welcome!

Imagine you are starting out as a freelance full-stack developer. You've just been hired by your first new client: a startup that is building a new product. The startup is generically named _My Company_. 

_My Company_ wants you to build a Product Feedback application, where customers can view and submit feedback about how their product could be improved. 

![image](https://github.com/user-attachments/assets/5fabe48e-fb2b-4337-94cc-515e64a0bf66)


## 🎯 Project Requirements

Users should be able to:

- View all product suggestions
- Submit a new product suggestions by filling out a form
- Receive form validations when trying to submit a new suggestion
- Filter suggestions by category
- When there are no suggestions for the currently selected filter, show the "There is no feedback" screen 
- View the optimal layout for the app depending on their device's screen size

---

## The Tech Stack

These are all the technologies you should use to build your full-stack application: 

| Component | Language | Framework | Deployment | Dev Tools |
|-----------|------------|----------------|------------|-------|
| Frontend  | HTML, CSS, JavaScript | React         | Netlify   |      |
| Server/API | Node.js     | Express       | Render    | Postman for API testing |
| Database  | PostgreSQL |               | Neon    |   |

---

## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/ffyUs0kcwOG0gpe8N4BzYL/Product-Management-App?node-id=0-1&p=f&t=kSc9d10uZiSGCOFD-0) for the designs
- **Documentation Guides:** The teaching team at AnnieCannons has provided some [handy guides](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.0#heading=h.ykdbmvmlp0ag) to help you use Github and other coding tools

---

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code. 
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Comment your code generously — Future You will thank you.** You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
4. **Clean up your code as you go**. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.

---

## Recommended Folder Structure

We recommend starting by creating two folders in your `product-feedback-app` repo: 
1. `client`: This folder holds your frontend that you will build with Javascript & React. 
2. `server`: This folder holds your backend that you will build with Node.js & Express.

To start building your frontend, you would navigate into your `client` folder, and start your React project by making a new Vite project with `npm create vite@latest`. 

To start building your backend, you would navigate into your `server` folder. Then run `npm init` to initialize your `package.json` file, and install any npm packages you want. Then create a `src` folder, which would hold your `index.js` file and `database-schema.sql` file. 

---

## 🚀 Roadmap: Step-by-step guide to building this project

---

### ⚙️ Fork & Clone the Github repo 
1. Fork this Github repo into your own account. Use this [fork and clone guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.55gk3qetux2a#heading=h.wbbot8ebr58a) to help you.
2. Clone your new Github repo into the `dev` folder on your local machine. 

---

### 🎯 Milestone: Create your database schema

1. Review the [Figma designs](https://www.figma.com/design/ffyUs0kcwOG0gpe8N4BzYL/Product-Management-App?node-id=0-1&p=f&t=kSc9d10uZiSGCOFD-0) and plan/pseudo-code what data you'll need to build this application 
2. In a DB Fiddle, write PostgreSQL code to create your tables
3. Insert at least 3 rows of sample data into each table
4. Write the SQL queries for your API to:
     - Select all suggestions
     - Add a suggestion
5. Bookmark the link to your DB Fiddle so you can find it later.
6. Submit the link to your DB Fiddle on Canvas.
   
---

### 🎯 Milestone: Set up your PostgreSQL database on Neon

1. Use Neon.tech to create a new Neon project called `suggestions`
2. Set up your database on Neon (create the 1 table and insert rows of sample data)

---

### ⚙️ Set up your `server` folder
1. In the terminal, `cd` into your `server` folder
2. Review the following files already provided for you:

      - `package.json` — lists information about your project and its dependencies 
      - `.gitignore` — lists which files and folders that Git should ignore 
      - `src` folder — where all your custom code will live
      - `index.js` — where you will write your server/API code
      - `config.js` — contains your database's access credentials
        
3. In the `server` folder, run `npm install express` and `npm install pg`. Once you do that, you should see `express` and `pg` listed as dependencies in your `package.json`.

---

### ⚙️ Connect your Neon-hosted PostgreSQL database to your Express server
1. Get your Neon database's Connection string. To do this, go to the Neon.tech website and open up your Neon project. You should see a 'Connect to your database' section where you can click on the Connect button.

    <img width="461" height="392" alt="Connect to the Neon database on your Neon project's dashboard" src="https://github.com/user-attachments/assets/91f9e3cd-09f3-4899-b9e1-73f3fe58506a" />
2. Once you click on the Connect button, you should see a window pop up with your database's Connection String, which contains the password/access credentials to your database. 

    <img width="1073" height="425" alt="Connect to the Neon database on your Neon project's dashboard" src="https://github.com/user-attachments/assets/d42a10f0-c414-43dc-a9ac-7ef978d424ee" />

    Make sure the Connection string starts with `postgresql://` — if it doesn't, you'll need to click on the dropdown menu to the upper left of the Connection String and make sure you have `Connection String` selected, and not something else like `psql`. 

    <img width="1075" height="427" alt="Selecting Connection String when connecting to Neon database instead of another option like psql" src="https://github.com/user-attachments/assets/fdf21a6b-c862-40ab-83bc-a0d3b949c5dc" />

3. Copy your database's Connection string, and paste it into your `config.js` file as the value of the `databaseUrl` property:
    <img width="797" height="170" alt="Connection string as databaseUrl in the config.js file" src="https://github.com/user-attachments/assets/af6cf409-17ad-4b4e-a092-8fca0e7537ef" />

---

### ⚙️ Set up your server's boilerplate code 
1. In your server's `index.js` file, set up your server using the same boilerplate code as the `06-recipe-API-server-SQL` project or your `version-4` of the Countries API project. 

---

### 🎯 Milestone: Build the server/API
1. `GET /get-all-suggestions`: Return all the suggestions data
2. `POST /add-one-suggestion`: Save submitted form data
3. Test your API endpoints in Postman to make sure they're working
4. Push your code to Github
5. Deploy your server/API to Render
6. Submit the Render link to your deployed server to Canvas. 

---

### 🎯 Milestone: Build the Frontend

1. Build the frontend in the `client` folder, according to the [Figma designs](https://www.figma.com/design/ffyUs0kcwOG0gpe8N4BzYL/Product-Management-App?node-id=0-1&p=f&t=kSc9d10uZiSGCOFD-0). Users should be able to:

   - View all product suggestions
   - Submit a new product suggestion by filling out a form
   - Receive form validations when trying to submit a new suggestion
   - Filter suggestions by category
   - When there are no suggestions for the currently selected filter, show the "There is no feedback" screen 
   - View the optimal layout for the app depending on their device's screen size
2. Push your code to Github
3. Deploy your frontend to Netlify

---

### Test everything again... and again! 
1. Now that your database, API, and frontend are all deployed to the internet, you can test all user flows:
   - Viewing all suggestions
   - Filtering the suggestions
   - Adding a suggestion
3. Check your database to make sure the data is updating correctly

---

### Clean and Comment your code
1. Refactor your backend code to make it clean and modular
2. Comment complex logic to explain how it works

---

### Deploy & Submit
1. Push your code to Github
4. Submit to Canvas!

---

## 🌟 Stretch Goals (Optional)

Finished the main requirements? Here are some bonus challenges:

- 🏆 Upvote product suggestions
- 🏆 Sort suggestions by most/least upvotes and most/least comments
- 🏆 Edit an existing suggestion
- 🏆 Delete an existing suggestion
- 🏆 Add comments to an existing suggestion
