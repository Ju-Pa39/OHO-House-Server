
exports.createContact = async(req,res)=> {
    try{
        res.send('บันทึกข้อมูลเรียบร้อย')
    }catch(err){
        console.log(err)
        res.status(500).json({message : "Server Error"})
    }
}