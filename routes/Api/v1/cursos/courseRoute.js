const express = require('express');
const router = express.Router();

var payments = require('../../../../data');

// [POST] dominio.../api/v1/log/add
router.post('/payments',(req,res)=>{
    
    var payment = {idCourse: req.body.idCourse,idStudent: req.body.idStudent,payment:req.body.payment};
    payments.push(payment);
    
    res.send(payments);
})

router.get('/payments/:idStudent',(req,res)=>{
    var studentPayments = payments.find(payment=>payment.idStudent==req.params.idStudent);
    res.send(studentPayments);
});

router.post('/validPayment',(req,res)=>{
    var student = req.body.idStudent;
    var course = req.body.idCourse;

    if(payments.find(payment=>(payment.idStudent == student&&payment.idCourse == course))!=null){
        return res.send(true);
    }else{
        return res.send(false);
    }
})

module.exports = router;

