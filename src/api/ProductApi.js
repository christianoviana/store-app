import products from './products-data.json';

export class ProductApi{
   getProducts(){
       let promise = new Promise((resolve, reject) => {

            if(products){
                resolve(products.items);
            }else{
                reject(new Error('There is no data'));
            }
       });

       return promise;
   }

   getProductsById(id){
        let promise = new Promise((resolve, reject) => {
            const product = products.items.filter((e) => e.id === parseInt(id));

            if(product[0]){
                resolve(product[0]);
            }else{
                reject(new Error(`Product id ${id} not found`));
            }
        });

        return promise;
    }
}

export default ProductApi;
