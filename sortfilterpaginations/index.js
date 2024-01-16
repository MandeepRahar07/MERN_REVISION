app.get("/productdata", async(req,res)=>{
    const {name, page, limit, _sort,_order,category,comingsoon,stockavilable} = req.query;
    let query = {};
    
    if(name){
        query.name={$regex:name}
    }
    
    if(category){
    query.category = category;
    }
    
    if(comingsoon){
        query.comingsoon = comingsoon
    }
    
    if(stockavilable){
        query.stockavilable = stockavilable
    }
    
    // .............sorting.......... 
    
    let sortOption = {};
    
    if (_sort) {
        if (_order === "asc" || _order === "desc") {
            sortOption[_sort] = _order === "asc" ? 1 : -1;
        }
    }
    
    let limitofproduct = parseInt(limit);
    const skip = (parseInt(page-1) * (parseInt(limit)));
    
    const data =await ProductModel.find(query).sort(sortOption).limit(limitofproduct).skip(skip);
    res.send(data);
    })