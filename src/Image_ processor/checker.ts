
const checker = (name: string, width: string, height: string): boolean => {
  
    var arr: string[] = ['img1', 'img2', 'img3','img4', 'img5', 'img6']
    var img_name : boolean = arr.includes(name)
   
    if (Number.parseInt(width )> 0 && Number.parseInt(height) > 0 && img_name)
       return true
    else
    {
     return false
    }
        
}


export  default checker