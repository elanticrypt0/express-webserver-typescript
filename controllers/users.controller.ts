
class UsersController{
    
    public usersGet(req:any,res:any):void{
        
        // Aquì tiene una desestructuraciòn con valores de ejemplo.
        const { q,name = 'No name',apikey,page =1,limit  }=req.query;

        res.json({
            msg: 'Get API',
            q,
            name,
            apikey,
            page,
            limit
        });
    }
    public usersPut(req:any,res:any):void{
        const id=req.params.id;
        res.json({
            msg:'Put API',
            id
        });
    }
    public usersPost(req:any,res:any):void{
        const body= req.body;
        res.json({
            msg:'Post API',
            body
        });
    }
    public usersDelete(req:any,res:any):void{
        res.json({
            msg:'Delete API'
        });
    }


}

export default UsersController;