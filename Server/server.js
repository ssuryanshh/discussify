const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

let user = {
    school: [
        {
            name:"Suryansh Srivastav",
            email_id: "suryanshnextgen@gmail.com",
            stream: "science",
            class : 12,
            user_name: "suryansh",
            password : "suryansh",
            credits : 100,
        },
    ],
    college: [
        {
            name:"Suryansh Srivastav",
            email_id: "suryanshnextgen@gmail.com",
            graduation_course: "BTech",
            specialization: "Computer Science and Engineering",
            university: "LPU",
            college_year: 3,
            user_name: "suryansh",
            password : "suryansh",
            credits : 100,
        },
    ],
    professional: [
        {
            name:"Suryansh Srivastav",
            email_id: "suryanshnextgen@gmail.com",
            highest_education: "Graduated",
            profession: "Software Developer Intern",
            university: "LPU",
            user_name: "suryansh",
            password : "suryansh",
            credits : 100,
        
        },
    ],
}
//GET- LIST all school users
app.get("/user/school", (req,res)=>{
    res.json(user.school);
});


//GET- LIST all college users
app.get("/user/college", (req,res)=>{
    res.json(user.college);
});

//GET- LIST all professional users
app.get("/user/professional", (req,res)=>{
    res.json(user.professional);
});

//POST- Create a new user in school
app.post("/user/school",(req, res)=>{
    user.school.push(req.body);
    res.send("User added");
});

//POST- Create a new user in college
app.post("/user/college",(req, res)=>{
    user.college.push(req.body);
    res.send("User added");
});

//POST- Create a new user in professional
app.post("/user/professional",(req, res)=>{
    user.professional.push(req.body);
    res.send("User added");
});


// PUT - Modify passsword
app.put("/school/password", (req, res) => {
    const index = user.school.findIndex(
      (u) => u.user_name === req.params.user_name
    );
    if (index === -1) {
      res.status(404).send("user not found");
    } else {
      user.school[index] = { ...user.school[index], ...user.password };
      res.send("Password updated");
    }
  });

  // DELETE - Remove a user by username
  app.delete("/user", (req, res) => {
    const index = user.school.findIndex(
      (u) => u.username === req.params.username
    );
    if (index === -1) {
      res.status(404).send("User not found");
    } else {
      user.school.splice(index, 1);
      res.send("user deleted");
    }
  });
  
  app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
  });
  

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
