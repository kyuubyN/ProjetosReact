import '.estilo.css'
import Logo from '../Logo'
import IconesHeader from '../IconesHeader'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'

const HeaderComponents = styled.header `
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
        
        <HeaderComponents>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderComponents>
    )
}
export default Header