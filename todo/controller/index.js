const Todo = require("../model/Todo");


exports.updateTodo =  (req,res) => {
    const body = req.body;

    Todo.updateOne({_id:req.params.id}, {$set:{title:body.title, list:body.list}}, function(err, result) {
        if (err)
            console.log(err)
    });

    return res.status(200).json({
        message: 'Todo is updated',
    })

}

exports.getTodo =  (req,res) => {
    
    //req.params.id
    let todo = Todo.findById(req.params.id, (error, data) => {

        if(error)
        {
            return res.status(200).json({
                message: 'Document not found',
            })
        
        }
        else
        {
            return res.status(200).json({
                todo: data,
                "message": "Document found",
            })
        
        }

    })




    // return res.status(200).json({
    //     message: todoData,
    // })

}


exports.getAllTodos =  (req,res) => {
    
    Todo.find((err, docs) => {
 
        return res.status(200).json({
            todos: docs,
        })
    
    });

    // return res.status(200).json({
    //     message: "Data is savedd",
    // })

}


exports.saveTodo =  (req,res) => {
    
    const body = req.body;

    const todo = new Todo({title:body.title, list:body.list});
    todo.save();

    return res.status(200).json({
        message: "Todo is saved",
    })


}




// exports.gettest =  (req,res) => {
//     console.log('test')
//     // const test = new Test(body);
//     // const data = await test.save();
//     // return res.status(200).json({
//     //     message: "Data is saved",
//     //     data
//     // })
// }