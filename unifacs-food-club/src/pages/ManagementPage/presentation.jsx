// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './styles.css'

function ManagementPagePresentation() {
    return (
        <section id="management-page">
            <div class="management-page_navbar">
                <ul>
                    <li><Link> Consultar Produtos </Link></li>
                    <li><Link> Adicionar Produto </Link></li>
                    <li><Link> Alterar Produto </Link></li>
                    <li><Link> Gerenciar Produto </Link></li>

                    <li>{' -'}</li>

                    <li><Link> Consultar Responsáveis </Link></li>
                    <li><Link> Adicionar Responsável </Link></li>

                    <li>{' -'}</li>

                    <li><Link> Consultar Alunos </Link></li>
                    <li><Link> Adicionar Aluno </Link></li>

                    <li>{' -'}</li>

                    <li><Link> Adicionar Aluno </Link></li>

                    <li>{' -'}</li>

                    <li><Link> Comprar </Link></li>

                </ul>
            </div>
        </section>
    )
}

export default ManagementPagePresentation;