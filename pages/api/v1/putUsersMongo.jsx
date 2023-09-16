import client from "../../../mongoConnection";

export default async function handler(req, res) {
  const { name, email, password } = req.body;
  const collection = client.db("trivia").collection("user");

  console.log(req.body);

  try {
    // Verifica se o usuário já está cadastrado pelo email
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: `Usuário com email ${email} já cadastrado` });
    }

    // Insere o novo usuário no banco de dados
    const newUser = { name, email, password };
    const result = await collection.insertOne(newUser);

    console.log('Novo usuário cadastrado:', result.ops[0]);

    res.status(200).json({ message: 'Usuário cadastrado com sucesso', user: result.ops[0] });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o usuário' });
  } finally {
    // Fechar a conexão com o MongoDB, se necessário
    // client.close();
  }
}
