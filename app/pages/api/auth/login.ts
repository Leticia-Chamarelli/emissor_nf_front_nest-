import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, senha } = req.body;

    // Aqui você deve fazer a validação do email e senha
    // Se forem válidos, você pode gerar um token JWT ou usar o fornecido no exemplo

    const token = 'SEU_BEARER_TOKEN';

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
