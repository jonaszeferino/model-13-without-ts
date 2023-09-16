import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://jonaszeferinolinx:${process.env.MONGO_DB_OMNI}@cluster0.ojz6drq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  } else {
    console.log('Conexão estabelecida com o MongoDB com sucesso');
  }
});

export default client;


