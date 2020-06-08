const initialState = {
  singleProductData: {
    name: '',
    description: '',
    price: '',
    params: [],
    image_url: ''
  },
  products: [
    {
      name: 'Bosch aksis fúrógép',
      description: '',
      params: [
        'Robusztus kialakítás',
        'Elektronikus cellavédelem' ,
        '2 db 1,5 Ah-s Li-ion akku',
        '11 db-os csavarozóbetét-készlet',
        '12 db-os fúrószárkészlet',
        'Szerszámkofferben',
      ],
      price: '8999',
      price_sales: '12999',
      image_url: 'https://webimg.praktiker.hu/_upload/images/praktiker_catalog/320318/600x600/320318_01_akkus-furo-csavarozo-12v-1-akkuval-1,5ah-li-ion+koffer-easydrill-1200.png'
    }
  ]
};

const reducer = (state = initialState, actions) => {
  switch (actions.type){
    case 'SET_PRODUCT_TO_MODAL':
      return {
        ...state,
        singleProductData: actions.product
      }
      default: {
        return state
      }
  }
}

export default reducer;