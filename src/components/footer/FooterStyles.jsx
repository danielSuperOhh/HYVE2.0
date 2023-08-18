import styled from 'styled-components';

export const Box = styled.div`
    padding: 80px 40px;
    background: var(--blues-blue-colour-07, #041E45);
    width: 100%;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 1200px;
	margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
                            minmax(185px, 1fr));
    grid-gap: 30px;


    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill,
                            minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #FBFBFB;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */

    &:hover {
        color: #ADBED8;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    margin-bottom: 40px;
    color: var(--primary-white-colour, #FBFBFB);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
