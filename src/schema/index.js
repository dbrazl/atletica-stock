import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
    name: Yup.string().required('Insira um usuário'),
    password: Yup.string().required('A senha é obrigatória'),
});

export const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('O nome de usuário é obrigatório'),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
    cellphone: Yup.string()
        .min(14, 'O número está muito pequeno')
        .required('Informe um telefone para contato'),
});

export const RestoreAccountSchema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
});
