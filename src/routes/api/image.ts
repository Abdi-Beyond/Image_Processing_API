import express from 'express';
import {resolve} from 'path';
import fs from 'fs';

import checker from '../../Image_ processor/checker';
import sharp_api from '../../Image_ processor/Image_api_processor';
var image = express.Router()
var dir = './images/thumb';


image.get("/", (req: express.Request, res: express.Response): void =>{
   var {width, height } = req.query;
    var name= req.query.img
    var thumbfile = './images/thumb/'+name+"_"+width+"X"+height+".jpg";
   
    

(async (): Promise<void> => { 
   
        if (checker(name as string,width as string, height as string) == true)
        {
            
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            
          
            
        else{
            if (fs.existsSync(thumbfile)){
                
                res.sendFile(resolve('images/thumb') +"/"+name+"_"+width+"X"+height+".jpg");
            }
         else{
           if (await sharp_api(name as string,width as string, height as string))
           {
            res.sendFile(resolve('images/thumb') +"/" +name+"_"+width+"X"+height+".jpg");
           }
        else
        {
           res.sendFile("Unable to Create image please try again.");
        }
        }}
            
    }
    else{
        res.send("Url: Query not properly set please write valid query. example => http://localhost:3000/api/image?img=img1&width=&height=")
    }

})();
    
})

export default image