import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

export default function Auth() {
    const [formType, setFormType] = useState('login'); // Tipo de formulário (login ou signup)
    const [formData, setFormData] = useState(null); // Dados do formulário
    const { login, signup, authLoading } = authServices(); // Serviços de autenticação
    const navigate = useNavigate();

    const authData = JSON.parse(localStorage.getItem('auth'));

    // Redireciona para o perfil se já estiver autenticado
    useEffect(() => {
        if (authData) {
            return navigate('/profile');
        }
    }, [authData]);

    // Alterna entre os tipos de formulário
    const handleChangeFormType = () => {
        setFormData(null); // Reseta os dados do formulário
        setFormType(formType === 'login' ? 'signup' : 'login'); // Alterna o tipo de formulário
    };

    // Atualiza os dados do formulário com base na entrada do usuário
    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Envia o formulário
    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        switch (formType) {
            case 'login':
                login(formData); // Chama a função de login
                break;
            case 'signup':
                if (formData.password !== formData.confirmPassword) {
                    console.log('Passwords do not match'); // Verifica se as senhas coincidem
                    return;
                }
                signup(formData); // Chama a função de registro
                break;
        }
    };

    if (authLoading) {
        return (<h1>Loading...</h1>); // Exibe carregamento durante autenticação
    }

    return (
        <div>
            {formType === 'login' ? (
                <>
                    <h1>Login</h1>
                    <button onClick={handleChangeFormType}>Don't you have an account? Click here</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                        />
                        <button type="submit">Login <LuLogIn /></button>
                    </form>
                </>
            ) : null}

            {formType === 'signup' ? (
                <>
                    <h1>Signup</h1>
                    <button onClick={handleChangeFormType}>Already have an account? Click here</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField 
                        required
                        label="Fullname"
                        type="fullname"
                        name="fullname"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        onChange={handleFormDataChange}
                        />
                        <button type="submit">Signup <LuLogIn /></button>
                    </form>
                </>
            ) : null}
        </div>
    );
}
