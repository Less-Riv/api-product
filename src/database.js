import mongoose from "mongoose";

// Accedemos a tu cadena de conexión desde el archivo .env
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then((cnn) => console.log("Conectado a MongoDB."))
    .catch((error) => console.error("Error al conectar con MongoDB.", error));

export default mongoose;