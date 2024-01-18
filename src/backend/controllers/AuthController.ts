import { Request, Response } from 'express';
import User from '../database/models/user';
import { compare } from 'bcrypt';


export async function Store(request: Request, response: Response) {
  const { name, email, phone, cpf, password } = request.body;

  try {
    const [verifyEmailExists, verifyCpfExists, verifyPhoneExists] = await Promise.all([
      User.findOne({ where: { email } }),
      User.findOne({ where: { phone } }),
      User.findOne({ where: { cpf } }),
    ]);

    if (verifyEmailExists)
      return response.render('sign', { message: 'Email já cadastrado' });
    if (verifyCpfExists)
      return response.render('sign', { message: 'CPF já cadastrado' });
    if (verifyPhoneExists)
      return response.render('sign', { message: 'Telefone já cadastrado' });

    await User.create({ name, email, phone, cpf, password });
    request.flash('message', 'Autenticação bem-sucedida')
    response.redirect('/home')
  } catch (error) {
    console.error(error);
    response.status(201).render('errors/501')
  }
}

/* CONTROLLER DE LOGIN */

export async function Auth(request: Request, response: Response) {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const verifyPassword = await compare(password, user.password);
      console.log(verifyPassword);

      if (verifyPassword === false) {
        request.flash('error', 'Senha não confere')
        return response.redirect('/sign')
      } else {
        request.flash('error', 'Autenticação bem-sucedida')
        return response.redirect('/home')
      }
    } else {
      request.flash('error', 'Usuário não encontrado')
      return response.redirect('/sign')
    }
  } catch (error) {
    response.render('error', { error: 'Erro ao autenticar usuário' });
  }
}