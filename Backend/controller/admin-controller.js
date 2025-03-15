const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AdminModel = require('../models/admin-model')

router.get('/admin', async (req, res) => {
    try {
        const admins = await AdminModel.find();
        res.status(201).json(admins);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/admin', async (req, res) => {
    try {
        const unhashedPassword = req.body.password;

        bcrypt.hash(unhashedPassword, saltRounds, function(err, hash) {
            try {
                const hashedPassword = hash;

                console.log(hashedPassword);

                const admin = {
                    admin_name : req.body.admin_name,
                    password : hashedPassword
                };
      
                const newAdmin = AdminModel.insertOne(admin);

                res.status(201).json(newAdmin);
            } catch(err) {
                res.status(400).json({ error: err.message });
            }
        });
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
})

router.post('/admin/authenticate', async (req, res) => {
    try {
        const admin = await AdminModel.findOne({admin_name: req.body.admin_name});
        const password = req.body.password;
        if (admin !== null) {
            const hashedPassword = admin.password; 
            console.log(hashedPassword);
            bcrypt.compare(password, hashedPassword, function(err, result) {
                console.log(result)
                if (result === true) {
                    return res.status(201).json(admin);
                } else if (result === false) {
                    return res.status(400).json({ error: "Invalid password" });
                }
            });
        } else {
            return res.status(400).json({error: "Username not found"});
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
})

module.exports = router;