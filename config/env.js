require('dotenv').config();

module.exports = {
    db_host: process.env.MYSQL_DB_HOST,
    db_user: process.env.MYSQL_DB_USER,
    db_password: process.env.MYSQL_DB_PASSWORD,
    db_name: process.env.MYSQL_DB_NAME,
    db_port: process.env.MYSQL_DB_PORT,
    port: process.env.PORT,
    secret_key: process.env.SECRET_KEY,
    // cloudinary_name: process.env.CLOUDINARY_NAME,
    // cloudinary_key: process.env.CLOUDINARY_API_KEY,
    // cloudinary_secret: process.env.CLOUDINARY_API_SECRET,
};