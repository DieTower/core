import styled from 'styled-components';

export const BackgroundImageDev = styled.div`
    width: ${props => props.w};
    height: ${props => props.h};
    color: ${props => props.color};
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-attachment: ${props => props.attachment};
    background-position: ${props => props.position};
    background-size: ${props => props.size};
    background-color: ${props => props.bgColor};
    filter: blur(${props => props.blur+'px'});
`;

export const BackgroundOpacity = styled.div`
    width:100%;
    height:100%;
    
    background-color: rgba(0,0,0,${props => props.opacity});
`;