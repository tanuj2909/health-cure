
import dotenv from 'dotenv';
import {app} from "./app"

const PORT = 8000;


try{
    app.listen(process.env.PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
} catch(error){
    console.log(`Server not connected!! Something went wrong`)
}