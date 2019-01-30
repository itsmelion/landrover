# Installation and Usage
- This project comes with Docker configuration files, although spinning a container is entirely optional.
- If you with to build the container, open project folder, run `docker-compose build` and then `docker-compose up -d`. Then browse to http://localhost:3000

### Notes:
- Original Readme with test requirements moved to `TASK.md`
- Intentionally provided two containers, one containing webpack and another with gulp. Since gulp is marked as a Requirement, but gulp is obsolete, and webpack provides much more benefits i opted for showing skill with both not taking the risk of skipping a requirement, but show a bigger variety of skills and ease with both methods

# Changes:
### **1)** Micro-Services Architecture
A micro-service architecture are widely known for offering high availability apps, easy scaling, and consistency of environments.
But in this case also helped to non mixing up Backend dependencies with frontend packages. Good for readability, and keep a frontend/backend agnostic projects.

---
### **2)** Updated dependencies and plugins
Using newer packages, in all projects, especially better Babel plugins allowing ES6, ES7+ ..., providing more features of modern Javascript development.

---
### **3)** Refactored syntax
- Removed needless HBS and view engines from NodeJS
> The idea is a backend agnostic frontend. In a real-life scenario websites, or an webapps like these are static content doesnt need NodeJS for serving its content. They can be deployed on the server and count with a simple Apache/Nginx configuration to handle the files. I prefer for example, serve with continuous integration services like Netflify.

---
### **4)** Flamework
This project uses `flamework` as SCSS lib for flexbox layouting.
Its developed and maintained by myself, and inspired by Angular Material.

---
