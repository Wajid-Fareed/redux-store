'use client'
import Container from "@/components/re-usable/container/Container";
import { addToCart, deleteFromCart, removeToCart } from "@/redux/slice/AddToCardSlice";
import { IProduct, RootState } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const [cart, setCaet] = useState<IProduct[]>([]);
  const cartData = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartData) {
      setCaet(cartData);
    }
  }, [cartData])

  const totalCartPrice = cart.reduce((total, item) => {
    const priceCal = item.discountPrice ? item.discountPrice * (item.cartQuantity || 0) : item.salePrice * (item.cartQuantity || 0);
    return total + priceCal;
  }, 0);

  const totalTex = totalCartPrice >=  100 ? 0 : 30;

  const total = totalCartPrice + totalTex;

  return (
    <>
      <Container className="py-7">
        <h2 className="text-4xl font-bold text-center">Shopping Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6 h-[75vh]">
          <div>
            <div className="overflow-auto max-h-[60vh]">
              <table className="w-full">
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3">
                        <div className="flex gap-4 items-center">
                          <Image
                            src={item.posterImageUrl.imageUrl}
                            alt={item.posterImageUrl.altText}
                            width={80}
                            height={80}
                            className="w-20"
                          />
                          <h2 className="text-xl font-medium">{item.name}</h2>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center justify-between w-28 h-14 border ms-auto">
                          <button
                            onClick={() =>dispatch(addToCart(item))}
                            className="border w-10 h-full flex justify-center items-center text-xl font-semibold"
                          >
                            +
                          </button>
                          <p>{item.cartQuantity}</p>
                          <button
                             onClick={() => dispatch(removeToCart(item))}
                            className="border w-10 h-full flex justify-center items-center text-xl font-semibold"
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-end">
                        <div>
                          <p>{(item.discountPrice ? item.discountPrice : item.salePrice) * (item.cartQuantity || 0)}</p>
                        </div>
                      </td>
                      <td className="p-3 text-end w-fit">
                        <div>
                          <button
                             onClick={() => dispatch(deleteFromCart(item))}
                            className="w-20 h-10 flex justify-end items-center text-xl font-semibold text-black"
                          >
                            <RxCross1 size={30} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
             {cart.length < 1 && (
              <div className="text-center">
                <h2 className="text-xl font-bold">No items in cart</h2>
                <div className="text-end">
                  <Link href="/" className="bg-black text-white font-bold focus:outline-none inline-flex justify-center items-center h-16 w-40 rounded-sm">
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="py-8 px-12 border text-center h-fit">
            <h2 className="text-2xl font-bold">Total Cart</h2>
            <div className="flex flex-col gap-6 mt-5">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">Subtotal:</p>
                <span className="text-xl font-medium">$ {totalCartPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">Tax:</p>
                <span className="text-xl font-medium">$ {totalTex}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">Total:</p>
                <span className="text-xl font-medium">${total}</span>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/checkout"
                  className="bg-black text-white font-bold focus:outline-none h-14 px-8 w-full flex justify-center items-center"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
