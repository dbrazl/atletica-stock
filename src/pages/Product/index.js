import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/AntDesign';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import SearchInput from '../../components/SearchInput';

import vector from '../../assets/images/vector.png';

import {
    Container,
    Scroll,
    Vector,
    ReturnButton,
    ProductBox,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductQuantity,
    ProductPrice,
    TagReserved,
    TagText,
    LastUpdate,
    LastUpdateText,
    ProductMenu,
    ProductMenuBackground,
    Category,
    CategoryTitle,
    NamesList,
    NameBoard,
    Name,
    DeliverButton,
    DeliverText,
} from './styles';

export default function Product(props) {
    const { navigation } = props;
    const product = navigation.getParam('item');
    const status = navigation.getParam('status');

    const [menu] = useState(['Informações', 'Lista']);
    const [selectedMenu, setSelectedMenu] = useState('');

    const [names, setNames] = useState([
        'Daniel Braz Lopes',
        'Matheus Jose Ferreira Toledo',
        'Juliane Paiva',
        'Livia Pires',
        'Ana Carolina de Souza',
        'Felipe Braz',
    ]);

    const [filteredNames, setFilteredNames] = useState(names);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        function setInitialSelectedMenu() {
            setSelectedMenu('Informações');
        }

        setInitialSelectedMenu();
    }, []);

    function navigateToDelivery() {
        navigation.navigate('Delivery');
    }

    function formatPrice(price) {
        const [real, cents] = price.split('.');

        if (cents !== undefined && cents.length === 1) {
            return `R$ ${real}.${cents}0`;
        }

        if (cents !== undefined && cents.length >= 2) {
            const twoDecimals = cents.toFixed(2);
            return `R$ ${real}.${twoDecimals}`;
        }

        if (!cents) {
            return `R$ ${real}.00`;
        }

        return `R$ 00.00`;
    }

    function formatDate(date) {
        const [calender, timeToCorrige] = date.split('T');
        const [time] = timeToCorrige.split('.');

        return `${calender} ${time}`;
    }

    function getDate() {
        const lastUpdate = parseISO(formatDate(product.updatedAt));

        return formatRelative(lastUpdate, new Date(), { locale: pt });
    }

    function handleSelectedMenu(item) {
        setSelectedMenu(item);
    }

    function renderProductMenu(condition, item, handlePress) {
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

    function renderStockProduct() {
        return (
            <>
                <ProductBox>
                    <ProductImage
                        source={{
                            uri:
                                'https://am4bookstory.s3.amazonaws.com/caneca.png',
                        }}
                    />
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductQuantity>{`Quantidade: ${product.quantity_stock -
                            product.quantity_reserved}`}</ProductQuantity>
                        <ProductPrice>
                            {formatPrice(String(product.unit_price))}
                        </ProductPrice>
                    </ProductInfo>
                </ProductBox>

                <LastUpdate height={400}>
                    <LastUpdateText>{`Última atualização foi ${getDate()}`}</LastUpdateText>
                </LastUpdate>
            </>
        );
    }

    function renderRightActionsNameList() {
        return (
            <DeliverButton>
                <DeliverText>Entregar</DeliverText>
            </DeliverButton>
        );
    }

    async function searchOnList(text) {
        const filtered = await names.filter(
            elem => elem.toLowerCase().indexOf(text.toLowerCase()) !== -1
        );

        if (searchName !== '') {
            setFilteredNames(filtered);
        } else {
            setFilteredNames(names);
        }
    }

    async function onChangeUsername(text) {
        setSearchName(text);
        searchOnList(text);
    }

    function renderProductMenuContent() {
        if (selectedMenu === 'Informações') {
            return (
                <LastUpdate>
                    <LastUpdateText>{`Última atualização foi ${getDate()}`}</LastUpdateText>
                </LastUpdate>
            );
        }

        return (
            <>
                <SearchInput
                    textContentType="username"
                    keyboardType="default"
                    autoCorrect={false}
                    placeholder="Buscar por nome..."
                    width={230}
                    marginTop={30}
                    value={searchName}
                    onChangeText={text => onChangeUsername(text)}
                />

                <NamesList>
                    {filteredNames.map(name => (
                        <Swipeable
                            renderRightActions={renderRightActionsNameList}
                        >
                            <NameBoard>
                                <Name>{name}</Name>
                            </NameBoard>
                        </Swipeable>
                    ))}
                </NamesList>
            </>
        );
    }

    function renderReservedProduct() {
        return (
            <>
                <TagReserved>
                    <TagText>Reservado</TagText>
                </TagReserved>

                <ProductBox>
                    <ProductImage
                        source={{
                            uri:
                                'https://am4bookstory.s3.amazonaws.com/caneca.png',
                        }}
                    />
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductQuantity>{`Quantidade: ${product.quantity_reserved}`}</ProductQuantity>
                        <ProductPrice>
                            {formatPrice(String(product.unit_price))}
                        </ProductPrice>
                    </ProductInfo>
                </ProductBox>

                <ProductMenuBackground>
                    <ProductMenu
                        data={menu}
                        keyExtractor={category => category}
                        horizontal
                        renderItem={({ item }) =>
                            renderProductMenu(
                                selectedMenu,
                                item,
                                handleSelectedMenu
                            )
                        }
                    />
                </ProductMenuBackground>

                {renderProductMenuContent()}
            </>
        );
    }

    return (
        <Container>
            <Scroll>
                <Vector source={vector} />

                <ReturnButton onPress={navigateToDelivery}>
                    <Icon name="arrowleft" size={50} color="#000" />
                </ReturnButton>

                {status === 'Em estoque'
                    ? renderStockProduct()
                    : renderReservedProduct()}
            </Scroll>
        </Container>
    );
}

Product.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
    }).isRequired,
};
