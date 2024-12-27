import {createStore} from "vuex";

export default createStore({
    state: {
        products: [
            {
                id: 1,
                img: '/products/product1.jpg',
                title: 'Product 1',
                price: 130,
                category: 'ring'
            },
            {
                id: 2,
                img: '/products/product2.jpg',
                title: 'Product 2',
                price: 130,
                category: 'necklace'
            },
            {
                id: 3,
                img: '/products/product3.jpg',
                title: 'Product 3',
                price: 130,
                category: 'necklace'
            },
            {
                id: 4,
                img: '/products/product4.jpg',
                title: 'Product 4',
                price: 130,
                category: 'earring'
            },
            {
                id: 5,
                img: '/products/product5.jpg',
                title: 'Product 5',
                price: 130,
                category: 'earring'
            },
            {
                id: 6,
                img: '/products/product6.jpg',
                title: 'Product 6',
                price: 130,
                category: 'necklace'
            },
            {
                id: 7,
                img: '/products/product1.jpg',
                title: 'Product 7',
                price: 130,
                category: 'ring'
            },
            {
                id: 8,
                img: '/products/product2.jpg',
                title: 'Product 8',
                price: 130,
                category: 'necklace'
            },
            {
                id: 9,
                img: '/products/product3.jpg',
                title: 'Product 9',
                price: 130,
                category: 'necklace'
            },
            {
                id: 10,
                img: '/products/product4.jpg',
                title: 'Product 10',
                price: 130,
                category: 'earring'
            },
            {
                id: 11,
                img: '/products/product5.jpg',
                title: 'Product 11',
                price: 130,
                category: 'earring'
            },
            {
                id: 12,
                img: '/products/product6.jpg',
                title: 'Product 12',
                price: 130,
                category: 'necklace'
            },
        ],
        productID:null,
        cart:[]
    },
    getters: {
        getProducts: (state) => state.products,
        getProductID: (state) => state.productID,
        getCart: (state) => state.cart
    },
    actions: {
        async getProductIdAc({commit,state}, id){
            try{
                const product = state.products.find((product)=>product.id === id);
                commit('GET_PRODUCT_BY_ID', product);
            }catch(error){
                console.error("error in get product by id action: ", error);
            }
        },
        addToCart({commit}, item){
            commit('ADD_TO_CART', item);
        }
    },
    mutations: {
        GET_PRODUCT_BY_ID(state,product){
            state.productID = product;
        },
        ADD_TO_CART(state, item){
            state.cart.push(item);
        }
    }
})