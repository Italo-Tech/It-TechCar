import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Menu/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chave: nome, descricao
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        });
    }

    function handleChange(infoDoEvento) {
        setValue(
            infoDoEvento.target.getAttribute('name'),
            infoDoEvento.target.value,

        );
    }

    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            const URL = 'http://localhost:8080/categorias';
            fetch(URL)
                .then(async (respostaDoServer) => {
                    if (respostaDoServer.ok) {
                        const resposta = await respostaDoServer.json();
                        setCategorias(resposta);
                        return;
                    }
                    throw new Error('Não foi possível pegar os dados');
                });
        }
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.nome}
            </h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);

                setValues(valoresIniciais);
            }}
            >

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                {/* Descrição */}
                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
