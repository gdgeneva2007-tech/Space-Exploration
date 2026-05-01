const express=require("express");
const path=require("path");

// Import our routers
const indexRouter=require("./routes/index");
const aboutRouter=require("./routes/about");
const solarSystemRouter=require("./routes/solarSystem");
const contactRouter=require("./routes/contact");

// Create the express app
const app=express();

// Define the port
const PORT =3000;

// ============================================
// MIDDLEWARE SECTION
// ============================================

// Serve static files (CSS, images) from 'public' folder
// When browser requests "/css/style.css", express looks in ./public/css/style.css
app.use(express.static(path.join(__dirname,"public")));

// ROUTES SECTION
app.use("/",indexRouter);
app.use("/about",aboutRouter);
app.use("/solar-system",solarSystemRouter);
app.use("/contact",contactRouter);

// 404 HANDLER (must be LAST)
// Only runs if no route above matched
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"/views","notFound.html"));
})

//START SERVER
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});