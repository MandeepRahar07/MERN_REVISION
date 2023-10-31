import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData, DeleteProduct } from '../Redux/actions';
import { Link } from 'react-router-dom';

function Product() {

  const [search, setSearch] = useState('');
  const [sorting , setsorting] = useState("");
  const [filter, setfilter]= useState("");
  const [page, setpage] = useState(1);

 console.log(page);

  const productdata = useSelector((state) => state.product.productdata);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchProductData(search,sorting,filter,page));

  }, [search,sorting,filter,page]);
 

  const handleDelete = (id) => {
    dispatch(DeleteProduct(id))
      dispatch(fetchProductData());
  };

  
  return (
    <div>
      Productdiv

      <div>
        <label htmlFor="">Serch BY NAME</label>
        <input type="text" onChange={(e)=> setSearch(e.target.value)} />
      </div>


      <div>
      <label htmlFor="" >Sorting</label>
        <select name="" id="" onChange={(e)=> setsorting(e.target.value)}>
          <option value="">All</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
       
       <div>
        <label htmlFor="">Category</label>
        <select name="" id="" onChange={(e)=> setfilter(e.target.value)}>
          <option value="">All</option>
          <option value="phone">Phone</option>
          <option value="watch">Watch</option>
          <option value="airpods">Airpods</option>
        </select>
       </div>

      

      <div>

        {productdata.map((e) => (
          <div key={e.id}>
            <h3>{e.id}</h3>
            <h1>{e.name}</h1>
            <h2>{e.price}</h2>
            <Link to={`/edit/${e.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div>
  <button onClick={() => setpage(page - 1)}>Previous</button>
  <button>{page}</button>
  <button onClick={() => setpage(page + 1)}>Next</button>
</div>

    </div>
  );
}

export default Product;
