import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler/GestureButtons';

export const Container = styled.View`
    flex: 1;
    background: #f3f3f3;
    position: relative;
`;

export const Scroll = styled.ScrollView``;

export const Vector = styled.Image.attrs(props => ({
    source: props.source,
}))`
    position: absolute;
    top: 0;
    left: 0;
`;

export const ReturnButton = styled(RectButton)`
    position: absolute;
    top: 50;
    left: 20;
`;

export const ProductBox = styled.View`
    margin-top: 140px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
`;

export const ProductInfo = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    height: 120px;
`;

export const ProductTitle = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 24px;
    font-family: 'Nunito Bold';
    width: 200px;
`;

export const ProductQuantity = styled.Text`
    font-size: 18px;
    font-family: 'Nunito';
`;

export const ProductPrice = styled.Text`
    font-size: 24px;
    font-family: 'Nunito Bold';
`;

export const TagReserved = styled.View`
    background: #28241f;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 44px;
    position: absolute;
    top: 50px;
    right: 0;
`;

export const TagText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Nunito Bold';
    padding: 10px;
    text-align: center;
`;

export const LastUpdate = styled.View`
    height: ${props => (props.height ? props.height : '200')}px;
    align-items: center;
    justify-content: center;
`;

export const LastUpdateText = styled.Text`
    color: #000;
    font-size: 18px;
    font-family: 'Nunito';
    padding: 20px;
    text-align: center;
`;

export const ProductMenu = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})``;

export const ProductMenuBackground = styled.View`
    width: 290px;
    max-height: 44px;
    margin: 0 auto;
    margin-top: 130px;
    background: #e5e5e5;
    border-radius: 22px;
    overflow: hidden;
    position: relative;
`;

export const Category = styled(RectButton)`
    height: 44px;
    min-width: 100px;
    padding: 5px 15px;
    border-radius: 22px;
    background: ${props => (props.selected ? '#fff' : '#e5e5e5')};
    margin-left: 60px;
    left: -60;
    align-items: center;
    justify-content: center;
`;

export const CategoryTitle = styled.Text`
    font-size: 18px;
    color: ${props => (props.selected ? '#ffa944' : '#808080')};
    font-family: 'Nunito';
`;

export const NamesList = styled.View`
    margin-top: 20px;
`;

export const NameBoard = styled.View`
    height: 60px;
    justify-content: center;
    margin: 5px 20px;
    padding: 20px;
    border-radius: 20px;
    background: #e5e5e5;
    left: ${props => (props.left ? props.left : 0)};
`;

export const Name = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito';
    color: #000;
`;

export const DeliverButton = styled(RectButton)`
    width: 300px;
    height: 60px;
    padding: 10px;
    margin-top: 5px;
    margin-right: 20px;
    margin-left: -180px;
    background: #28241f;
    border-radius: 20px;
    justify-content: center;
    position: relative;
`;

export const DeliverText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Nunito Bold';
    margin-left: 20px;
    position: absolute;
    right: 40;
`;
