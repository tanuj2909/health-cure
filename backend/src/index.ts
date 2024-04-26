
import dotenv from 'dotenv';
import {app} from "./app"

const PORT = 8000;


try{
    app.listen(PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT || PORT}`);
    })
} catch(error){
    console.log(`Server not connected!! Something went wrong`)
}