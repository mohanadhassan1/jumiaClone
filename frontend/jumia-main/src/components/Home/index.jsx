import React, { useEffect } from "react";
import MySlider from "../Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/products";
import CurrencyFormat from 'react-currency-format';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching fetchProducts...");
    dispatch(fetchProducts());
  }, []);

  console.log("Products:", products);

  // products.forEach((element) => {
  //   console.log(element.name);
  // });
  // let text = num.toLocaleString("en-US", {style:"currency", currency:"USD"});

  return (
    <>
      <div className="container">
        <MySlider />

        {/* Products */}
        <div className="gap-4 p-3 mb-3 rounded bg-white mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} to={product.id} >
              <div className="hover:scale-[1.01] group relative" >
                <div className="w-52 h-52 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 justify-between">
                  <h3 className="text-lg  leading-6 font-medium text-gray-900">{product.name}</h3>
                  {/* <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); handleFavourites(product) }} className="bg-transparent" >aaa</button> */}
                  {/* <p className="mt-1 text-sm font-bold  text-gray-900">{product.price}</p> */}
                  <CurrencyFormat className="font-bold text-gray-900" value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  {/* <p className="mt-1 text-sm font-medium text-gray-500">Rating : {product.rating}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ramadan Careem */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Ramadan-24/Teasing/HP/1200x200EN.gif"
              alt=""
            />
          </div>
        </div>

        {/* Fashoin Clearance */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/ENDE.gif"
              alt=""
            />
          </div>
        </div>

        {/* Monday Super */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/SuperFlashSale/19-02/EN1.png"
              alt=""
            />
          </div>
        </div>

        {/* Deals of the Day */}
        <div className=" flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/Daily-Deals/FEB-19/GeneralENDESKTOP.jpg"
              alt=""
            />
          </div>
        </div>

        {/* Shop All Your Needs Bar*/}
        <div className="h-16 flex justify-center items-center gap-4 p-3 rounded-t bg-orange-50">
          <h2 className="font-medium text-xl">Shop All Your Needs</h2>
        </div>

        {/*Shop All Your Needs 1 */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Phones/572x250EN.png"
              alt=""
            />
          </div>

          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Fashion/WomenBoots/572x250EN.png"
              alt=""
            />
          </div>
        </div>

        {/*Shop All Your Needs 2 */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Supermarket/572x250EN.png"
              alt=""
            />
          </div>

          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Beauty/572x250EN.png"
              alt=""
            />
          </div>
        </div>

        {/* New On Jumia */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className=""
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/GIF/EN-copy-5.gif"
              alt=""
            />
          </div>
        </div>

        {/* Trending Now Bar */}
        <div className="h-16 flex justify-center items-center gap-4 p-3 rounded-t bg-orange-50">
          <h2 className="font-medium text-xl">Trending Now!</h2>
        </div>

        {/* Trending Now Cards */}
        <div className=" flex gap-4 p-3 rounded-b bg-white">
          <div className="hover:scale-[1.01] h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_6.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="hover:scale-[1.01] h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="hover:scale-[1.01] h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="hover:scale-[1.01] h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_11.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="hover:scale-[1.01] h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_2.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="hover:scale-[1.01] h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/New-On-Jumia/Trending/300x400EN_copy_4.png"
              alt="Sunset in the mountains"
            />
          </div>
        </div>

        {/* ♡ Proudly Made in Egypt ♡ Bar*/}
        <div className="h-16 flex justify-center items-center gap-4 p-3 rounded-t bg-orange-50">
          <h2 className="font-medium text-xl">♡ Proudly Made in Egypt ♡</h2>
        </div>

        {/* ♡ Proudly Made in Egypt ♡ */}
        <div className=" flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className=" w-full"
              src="https://eg.jumia.is/cms/Made-In-EG-2024/Jan-Revamp/Banner/DesktopEN.png"
              alt=""
            />
          </div>
        </div>

        {/* Best Beauty Offers Bar*/}
        <div className="h-16 flex justify-center items-center gap-4 p-3 rounded-t bg-orange-50">
          <h2 className="font-medium text-xl">Best Beauty Offers</h2>
        </div>

        {/*Best Beauty Offers */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Beauty/Maybelline/Edit/378x252EN.png"
              alt=""
            />
          </div>

          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Beauty/Axe/378x252EN.png"
              alt=""
            />
          </div>

          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Beauty/LOreal/Edit/378x252EN.png"
              alt=""
            />
          </div>
        </div>

        {/* Best Home Offers Bar*/}
        <div className="h-16 flex justify-center items-center gap-4 p-3 rounded-t bg-orange-50">
          <h2 className="font-medium text-xl">Best Home Offers</h2>
        </div>

        {/*Best Home Offers */}
        <div className="flex gap-4 p-3 mb-3 rounded bg-white">
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Home/Storage-Organizer/378x252EN.png"
              alt=""
            />
          </div>

          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Home/Oriental-Weavers/378x252EN.png"
              alt=""
            />
          </div>

          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Home/Ceiling-Lights/378x252EN.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
