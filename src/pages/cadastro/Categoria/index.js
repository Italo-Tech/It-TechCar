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
    });

    return (
        <PageDefault>
            <h1>
                Category registration:
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
                    label="Category Name"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                {/* Descrição */}
                <FormField
                    label="Description"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Color"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Register
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
                Go to home screen
      </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
