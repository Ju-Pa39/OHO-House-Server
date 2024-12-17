const prisma = require('../config/prisma')


exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        console.log(req.body)
        if (!name) {
            return res.status(400).json({ message: "กรุณากรอกชื่อ" });
        }

        const create = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                message
            }
        });

        res.send('บันทึกข้อมูลเรียบร้อย');
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "ข้อผิดพลาดจากเซิร์ฟเวอร์" });
    }
};