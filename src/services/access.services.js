'use strict'

const shopModel = require("../models/shop.model");
const bcrypt = require("crypto");
const crypto = require("crypto");

const roleShop = {
    SHOP: 'SHOP',
    WRITED: 'WRITED',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

//cài npm i bcrypt --save mục đích để băm
//cài npm i crypto --save để setup thuật toán bất đối xứng
class accessService {

    static signUp = async ({ name, email, password }) => {
        try {

            //kiểm tra tk có ở trong shop hay không
            const holderShop = await shopModel.findOne({ email }).lean();

            //nếu tồn tại trả về tài khoản đã tồn tại
            if (holderShop) {
                return {
                    code: 'xxxx',
                    message: 'Account already registered!'
                }
            }

            //nếu chưa có tiến hành băm password bằng bcrypt
            const passwordHash = await bcrypt.hash(password, 10);

            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles: [roleShop.SHOP]
            })

            /*nếu newShop được tạo thành công
            => tạo refesh token và access token để lưu cho những phiên sau
            */

            if (newShop) {
                //sử dụng thuật toán bất đối xứng
                //create private key, public key
                //pulic key chỉ có nhiệm vụ verify token
                //còn ngược lại private key tạo token và không lưu ở be
                const { privateKey, publicKey } = await crypto.generateKeyPairSync('rsa', { modulusLength: 4096 });
                //sau khi có 2 key lưu vào collection store
            }


        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = accessService;