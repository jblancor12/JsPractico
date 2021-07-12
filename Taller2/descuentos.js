function calcularDescuento(precio,descuento)
{
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento= (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function buttonCalculateDiscount()
{
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    console.log(priceValue)

    const inputDiscount = document.getElementById("input-discount");
    const discountValue = inputDiscount.value;
    console.log(discountValue)

    const inputCoupon = document.getElementById("input-coupon");
    const couponValue = inputCoupon.value;
    console.log(couponValue)

    if(couponValue===""){
        const finalPrice = calcularDescuento(priceValue,discountValue);
        console.log(finalPrice)
        const pfinalPrice = document.getElementById("finalPriceP");
        pfinalPrice.innerText = "El precio final de tu producto es de "+ finalPrice+ "$";
    }
    else{

        const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
    
        const userCoupon = coupons.find(isCouponValueValid);
    
        if (!userCoupon) {
            alert("El cupón " + couponValue + "no es válido");
        }
        else {
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularDescuento(priceValue, descuento);
    
            const resultP = document.getElementById("finalPriceP");
            resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
        }
    
    }

}



    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];