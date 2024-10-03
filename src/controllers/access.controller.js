'use strict'

class AccessController {

    singUp = async (req, res, next) => {
        try {
            console.log(`[P]::Sinup::`, req.body);
            //200 OK, 201 CREATED
            return res.status(201).json({
                code: '2001',
                metadata: { userid: 1 }
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AccessController();