import styled from 'styled-components'

type PropsContainer = {
    done: boolean;
}

export const Container = styled.div(({ done }: PropsContainer) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        width: 100%;
        text-decoration: ${done ? 'line-through' : 'initial'};
        display: flex;
        alig-items: center;
        justify-content: space-between;
        text-transform: capitalize;
    }

    label svg {
        cursor: pointer;
    }
`
))