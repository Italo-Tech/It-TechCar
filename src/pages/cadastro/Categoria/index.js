import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Menu/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);



    useEffect(() => {
        categoriasRepository.getAllWithVideos();

        // fetch(URL_BACKEND_TOP)
        //     .then(async (respostaDoServer) => {
        //         // const resposta = await respostaDoServer.json();
        //         // setCategorias([
        //         //     ...resposta,
        //         // ]);
        //     });
    });

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

                clearForm();
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
                        {categoria.titulo}
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
