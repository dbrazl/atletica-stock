import React, { useState, useEffect } from 'react';

import IconAntdesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import api from '../../../services/api';

import {
    Container,
    Title,
    Products,
    ProductCard,
    ProductTitle,
    ProductImage,
    Items,
    ItemBoard,
    ItemName,
    ItemQuantity,
    ItemQuantityText,
    DeleteItemButton,
    ButtonBox,
    ActionButton,
    ActionTextButton,
    ResetButton,
    ResetTextButton,
    ContinueButton,
    ContinueTextButton,
    DeleteAllItemsButton,
    DeleteAllItemsText,
} from './styles';

export default function New() {
    const [products, setProducts] = useState([]);
    const [toBuy, setToBuy] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products');

            setProducts(response.data.products);
        }

        getProducts();
    }, []);

    function handleSelectProduct(item) {
        let id = 0;

        const inList = toBuy.filter(elem => elem.name === item.name);

        if (inList.length === 0) {
            toBuy.forEach(elem => {
                if (elem.id > id) {
                    id = elem.id;
                }
            });

            setToBuy([
                ...toBuy,
                {
                    id: id + 1,
                    name: `${item.name}`,
                    quantity: 1,
                },
            ]);
        }
    }

    function renderProductSelector(item) {
        return (
            <ProductCard onPress={() => handleSelectProduct(item)}>
                <ProductImage
                    source={{
                        uri: 'https://am4bookstory.s3.amazonaws.com/caneca.png',
                    }}
                />
                <ProductTitle>{item.name}</ProductTitle>
            </ProductCard>
        );
    }

    function handleDeleteItem(item) {
        const { quantity } = toBuy[item.id - 1];

        if (quantity > 1) {
            const newToBuy = toBuy.map(elem => {
                if (elem.name === item.name) {
                    elem.quantity -= 1;
                }

                return elem;
            });
            setToBuy(newToBuy);
        } else if (quantity === 1) {
            toBuy.splice(item.id - 1, 1);

            const newToBuy = toBuy.map(elem => {
                if (elem.id > item.id) {
                    elem.id -= 1;
                }
                return elem;
            });

            setToBuy(newToBuy);
        }
    }

    function deleteAllOnRequestItem() {
        setToBuy([]);
    }

    function addProduct(item) {
        const newToBuy = toBuy.map(elem => {
            if (elem.name === item.name) {
                elem.quantity += 1;
            }

            return elem;
        });

        setToBuy(newToBuy);
    }

    function handleDeleteSpecificItemOnList(item) {
        toBuy.splice(item.id - 1, 1);

        const newToBuy = toBuy.map(elem => {
            if (elem.id > item.id) {
                elem.id -= 1;
            }
            return elem;
        });

        setToBuy(newToBuy);
    }

    function renderRightActionsDeleteItemsOnList(item) {
        return (
            <DeleteAllItemsButton
                onPress={() => handleDeleteSpecificItemOnList(item)}
            >
                <DeleteAllItemsText>Deletar</DeleteAllItemsText>
            </DeleteAllItemsButton>
        );
    }

    function renderRequestItems() {
        return (
            <Items
                data={toBuy}
                keyExtractor={product => product.id}
                renderItem={({ item }) => {
                    return (
                        <Swipeable
                            renderRightActions={() =>
                                renderRightActionsDeleteItemsOnList(item)
                            }
                        >
                            <ItemBoard>
                                <ItemQuantity onPress={() => addProduct(item)}>
                                    <ItemQuantityText>
                                        {item.quantity}
                                    </ItemQuantityText>
                                </ItemQuantity>

                                <ItemName>{item.name}</ItemName>

                                <DeleteItemButton
                                    onPress={() => handleDeleteItem(item)}
                                >
                                    <IconFeather
                                        name="trash-2"
                                        size={24}
                                        color="#000"
                                    />
                                </DeleteItemButton>
                            </ItemBoard>
                        </Swipeable>
                    );
                }}
            />
        );
    }

    function renderRightActionsRequest() {
        return (
            <ContinueButton>
                <ContinueTextButton>Continuar</ContinueTextButton>
            </ContinueButton>
        );
    }

    function renderLeftActionsRequest() {
        return (
            <ResetButton onPress={deleteAllOnRequestItem}>
                <ResetTextButton>Resetar</ResetTextButton>
            </ResetButton>
        );
    }

    return (
        <Container>
            <Title>Pedido</Title>
            <Products
                data={products}
                keyExtractor={product => product.id}
                horizontal
                renderItem={({ item }) => {
                    return renderProductSelector(item);
                }}
            />

            {renderRequestItems()}

            <ButtonBox>
                <Swipeable
                    renderRightActions={renderRightActionsRequest}
                    renderLeftActions={renderLeftActionsRequest}
                >
                    <ActionButton>
                        <ActionTextButton>Ação</ActionTextButton>
                    </ActionButton>
                </Swipeable>
            </ButtonBox>
        </Container>
    );
}

New.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <IconAntdesign name="addfile" size={32} color={tintColor} />
    ),
};
