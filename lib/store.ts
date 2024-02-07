import { create } from 'zustand'
import { createProductSlice, ProductSlice } from './slices/createProductSlice'

// in case you have more then one slice you need to work with &
// type StoreState = ProductSlice & CartSlice
type StoreState = ProductSlice 

export const useAppStore = create<StoreState>()((...a) => ({
    ...createProductSlice(...a),

}))

// use useAppStore to access to all your slices 
// in your ui you can use 
// const { addToCart } = useAppStore();
// const [mProducts, setMProducts] = useState<Product[]>([])
// see https://articles.wesionary.team/a-guide-to-managing-state-in-next-js-with-zustand-22a2899e5d0f
// read more in https://docs.pmnd.rs/zustand/getting-started/introduction