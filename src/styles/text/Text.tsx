import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

interface TextProps {
   // weight?: '400' | '600' | '700';
    color?: string;
    size?: number;
    opacity?: number;
    marginHorizontal?: number;
    
}



export const Text = styled.Text<TextProps>`
//font-family: ${({weight}) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400' };
color: ${({color}) => color || '#222' };
font-size: ${({size}) => size ? `${RFValue(size)}px` : `${RFValue(16)}px`}
opacity: ${({opacity}) => opacity || 1};
text-align: center;
`;
