import {MongoClient} from "mongodb";

const URI = "mongodb+srv://ybarbosa648:<senha>@cluster0.jjxfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyProjeto");
