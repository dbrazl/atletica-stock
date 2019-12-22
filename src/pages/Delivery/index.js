import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import {
    Container,
    Scroll,
    Title,
    Categories,
    Category,
    CategoryTitle,
    CategoriesBackground,
    Products,
    ProductBackground,
    Product,
    ProductImage,
    ProductStatus,
    ProductStatusBackground,
    Status,
    ProductName,
    ProductQuantity,
    TagReserved,
    TagText,
} from './styles';

export default function Delivery(props) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const [productsList, setProductsList] = useState([]);
    const [productStatus] = useState(['Em estoque', 'Reservado']);
    const [selectedProductStatus, setSelectedProductStatus] = useState('');

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products');

            const { products } = response.data;
            setProductsList(products);
            return products;
        }

        async function getCategories() {
            const uniqueCategories = [];
            const products = await getProducts();

            if (products.lenght !== 0) {
                uniqueCategories.push(products[0].category);

                uniqueCategories.forEach(category => {
                    products.forEach(product => {
                        if (category !== product.category) {
                            uniqueCategories.push(product.category);
                        }
                    });
                });
            } else {
                setCategories(['Não há categorias']);
            }

            setSelectedCategory(uniqueCategories[0]);
            setCategories(uniqueCategories);
        }

        getCategories();
        setSelectedProductStatus('Em estoque');
    }, []);

    function navigateToProduct(item) {
        const { navigation } = props;

        navigation.navigate('Product', { item, status: selectedProductStatus });
    }

    function handleCategory(item) {
        setSelectedCategory(item);
        /**
         * Get items
         */
    }

    function handleProductStatus(item) {
        setSelectedProductStatus(item);
    }

    function renderCategory(condition, item, handlePress) {
        if (condition === item) {
            return (
                <Category selected>
                    <CategoryTitle selected>{item}</CategoryTitle>
                </Category>
            );
        }

        return (
            <Category onPress={() => handlePress(item)}>
                <CategoryTitle>{item}</CategoryTitle>
            </Category>
        );
    }

    function renderStatus(condition, item, handlePress) {
        if (condition === item) {
            return (
                <Status selected>
                    <CategoryTitle selected>{item}</CategoryTitle>
                </Status>
            );
        }

        return (
            <Status onPress={() => handlePress(item)}>
                <CategoryTitle>{item}</CategoryTitle>
            </Status>
        );
    }

    function renderStockProductsCards(item) {
        if (item.quantity_stock !== 0) {
            return (
                <Product onPress={() => navigateToProduct(item)}>
                    {item.quantity_stock > item.quantity_reserved && (
                        <ProductBackground>
                            <ProductImage
                                source={{
                                    uri:
                                        'https://am4bookstory.s3.amazonaws.com/caneca.png',
                                }}
                            />
                            <ProductName>{item.name}</ProductName>
                            <ProductQuantity>
                                Quantidade:{' '}
                                {item.quantity_stock - item.quantity_reserved}
                            </ProductQuantity>
                        </ProductBackground>
                    )}
                </Product>
            );
        }

        return <></>;
    }

    function renderReservedProductsCards(item) {
        if (item.quantity_reserved) {
            return (
                <Product onPress={() => navigateToProduct(item)}>
                    <ProductBackground>
                        <TagReserved>
                            <TagText>Reservado</TagText>
                        </TagReserved>
                        <ProductImage
                            source={{
                                uri:
                                    'https://am4bookstory.s3.amazonaws.com/caneca.png',
                            }}
                            marginTop={54}
                        />
                        <ProductName>{item.name}</ProductName>
                        <ProductQuantity>
                            Quantidade: {item.quantity_reserved}
                        </ProductQuantity>
                    </ProductBackground>
                </Product>
            );
        }
        return <></>;
    }

    return (
        <Container>
            <Scroll>
                <Title>Produtos</Title>
                <CategoriesBackground>
                    <Categories
                        data={categories}
                        keyExtractor={category => category}
                        horizontal
                        renderItem={({ item }) =>
                            renderCategory(
                                selectedCategory,
                                item,
                                handleCategory
                            )
                        }
                    />
                </CategoriesBackground>

                <ProductStatusBackground>
                    <ProductStatus
                        data={productStatus}
                        keyExtractor={category => category}
                        horizontal
                        renderItem={({ item }) =>
                            renderStatus(
                                selectedProductStatus,
                                item,
                                handleProductStatus
                            )
                        }
                    />
                </ProductStatusBackground>

                <Products
                    data={productsList}
                    keyExtractor={product => product.id}
                    horizontal
                    renderItem={({ item }) => {
                        if (selectedProductStatus === 'Em estoque') {
                            return renderStockProductsCards(item);
                        }
                        return renderReservedProductsCards(item);
                    }}
                />
            </Scroll>
        </Container>
    );
}

Delivery.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="file-text" size={32} color={tintColor} />
    ),
};

Delivery.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
