export default function Api(){
    const reviews = [
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '3.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '1.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },{
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '5.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Alex',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Marcelo',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },{
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'João',
            avaliacao: '2.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'Anônimo',
            avaliacao: '5.0',
            comentario: 'Motivo 1',
            profissional: 'Lucas',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        {
            data: '00/00/0000',
            contato: 'Maria',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Natalisson',
            servico: 'Corte de Cabelo',
            unidade: 'NOVO ELDORADO'
        },
        {
            data: '00/00/0000',
            contato: 'Alex',
            avaliacao: '4.0',
            comentario: 'Motivo 1',
            profissional: 'Marcelo',
            servico: 'Corte de Cabelo',
            unidade: 'SAVASSI'
        },
        
    ];

    return reviews;
       
}