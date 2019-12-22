import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler/GestureButtons';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    flex: 1;
    background: #f3f3f3;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
    font-size: 48px;
    color: #ffa944;
    font-family: 'Nunito Bold';
    margin-top: 50px;
    margin-left: 20px;
`;

export const Categories = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})``;

export const CategoriesBackground = styled.View`
    max-height: 44px;
    margin-top: 20px;
    margin-left: 20px;
    background: #e5e5e5;
    border-bottom-left-radius: 22px;
    border-top-left-radius: 22px;
    overflow: hidden;
`;

export const Category = styled(RectButton)`
    height: 44px;
    min-width: 100px;
    padding: 5px 15px;
    border-radius: 22px;
    background: ${props => (props.selected ? '#fff' : '#e5e5e5')};
    margin-left: 20px;
    left: -20;
    align-items: center;
    justify-content: center;
`;

export const CategoryTitle = styled.Text`
    font-size: 18px;
    color: ${props => (props.selected ? '#ffa944' : '#808080')};
    font-family: 'Nunito';
`;

export const Products = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})`
    max-height: 410px;
`;

export const Product = styled(RectButton)`
    height: 300px;
    width: 200px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin: 30px 20px;
`;

export const ProductBackground = styled(LinearGradient).attrs({
    colors: ['#FFD43E', '#E7844D'],
})`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
`;

export const ProductStatus = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})``;

export const ProductStatusBackground = styled.View`
    width: 290px;
    max-height: 44px;
    margin: 0 auto;
    margin-top: 20px;
    background: #e5e5e5;
    border-radius: 22px;
    overflow: hidden;
    position: relative;
`;

export const Status = styled(RectButton)`
    height: 44px;
    min-width: 100px;
    padding: 5px 15px;
    border-radius: 22px;
    background: ${props => (props.selected ? '#fff' : '#e5e5e5')};
    margin-left: 50px;
    left: -50;
    align-items: center;
    justify-content: center;
`;

export const ProductName = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: 150px;
    color: #fff;
    font-size: 24px;
    font-family: 'Nunito Bold';
    margin-top: 10px;
    text-align: center;
`;

export const ProductQuantity = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: 150px;
    color: #fff;
    font-size: 18px;
    font-family: 'Nunito';
    margin-top: 10px;
    text-align: center;
`;

export const TagReserved = styled.View`
    background: #28241f;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 44px;
    position: absolute;
    top: 20px;
    right: 0;
`;

export const TagText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Nunito Bold';
    padding: 10px;
    text-align: center;
`;
