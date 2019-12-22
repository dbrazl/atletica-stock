import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler/GestureButtons';

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

export const Products = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})`
    padding-left: 20px;
    max-height: 190px;
`;

export const ProductCard = styled(RectButton)`
    align-items: center;
    flex-direction: row;
    border-radius: 10px;
    height: 150px;
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 20px;
    background: ${props => (props.selected ? 'rgba(0, 0, 0, 0.5)' : '#e5e5e5')};
    overflow: hidden;
`;

export const ProductTitle = styled.Text.attrs({
    numberOfLines: 3,
})`
    font-size: 24px;
    font-family: 'Nunito Bold';
    width: 140px;
    margin-left: 20px;
    text-align: center;
`;

export const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
`;

export const Items = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 30px;
    max-height: 220px;
`;

export const ItemBoard = styled.View`
    height: 60px;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
    background: #e5e5e5;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
`;

export const ItemName = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: 190px;
    padding: 20px;
    font-size: 18px;
    font-family: 'Nunito';
`;

export const ItemQuantity = styled(RectButton)`
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 10px;
    background: #f3f3f3;
    justify-content: center;
`;

export const ItemQuantityText = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito';
    width: 40px;
    text-align: center;
`;

export const DeleteItemButton = styled(RectButton)`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

export const ButtonBox = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const ActionButton = styled.View`
    width: 200px;
    height: 44px;
    background: #e5e5e5;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ActionTextButton = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito';
`;

export const ResetButton = styled(RectButton)`
    width: 200px;
    height: 44px;
    background: #ffa944;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ResetTextButton = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito Bold';
    color: #fff;
`;

export const ContinueButton = styled(RectButton)`
    width: 200px;
    height: 44px;
    background: #28241f;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ContinueTextButton = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito Bold';
    color: #fff;
`;

export const DeleteAllItemsButton = styled(RectButton)`
    width: 300px;
    height: 60px;
    padding: 10px;
    margin-right: 20px;
    margin-left: -180px;
    background: #28241f;
    border-radius: 20px;
    justify-content: center;
    position: relative;
`;

export const DeleteAllItemsText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Nunito Bold';
    margin-left: 20px;
    position: absolute;
    right: 40;
`;
