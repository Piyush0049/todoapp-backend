import { app } from "./app.js";
import connecttodb from "./data/database.js";
import cors from "cors";
app.use(cors());

connecttodb();
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App running at port ${port} port`)
})