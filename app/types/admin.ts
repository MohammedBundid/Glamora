interface Admin {
    loading: boolean,
    setLoading: (loadin: boolean) => void;
    createEvent: (data: object) => void;
    // createProduct: () => void;
    // createPromotion: () => void;
}

export default Admin