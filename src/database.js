import mongoose from "mongoose";

mongoose.connect("mongodb+srv://LessHL:Lesslylora@lessh.kbexnks.mongodb.net/groceries_Less?appName=LessH")
    .then((cnn) => console.log("Conectado a MongoDB."))
    .catch((error) => console.error("Error al conectar con MongoDB.", error));

export default mongoose;
