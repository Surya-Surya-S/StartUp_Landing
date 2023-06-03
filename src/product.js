function Product() {
    const Products = [
        {
            icon: "images/product/icon1.png",
            heading: "3D modeling & art",
            para: "Get your info tests delivered at home collect a sample from the your progress tests.",
            learn: "learn More",
        },
        {
            icon: "images/product/icon2.png",
            heading: "Digital Promotion",
            para: "Get your info tests delivered at home collect a sample from the your progress tests.",
            learn: "learn More",
        },
        {
            icon: "images/product/icon3.png",
            heading: "Business Enterprise",
            para: "Get your info tests delivered at home collect a sample from the your progress tests.",
            learn: "learn More",
        },
        {
            icon: "images/product/icon4.png",
            heading: "Marketing & advertising",
            para: "Get your info tests delivered at home collect a sample from the your progress tests.",
            learn: "learn More",
        },
        {
            icon: "images/product/icon5.png",
            heading: "Ultimate development",
            para: "Get your info tests delivered at home collect a sample from the your progress tests.",
            learn: "learn More",
        },
        {
            icon: "images/product/icon6.png",
            heading: "Online support",
            para: "Get your info tests delivered at home collect a sample from the your progress tests.",
            learn: "learn More",
        },
    ]
    return (
        <section id="product" class="pt-5 mb-5">
            <div class="container_fluid pt-5">
                <div class="product_inner text-center pt-5 m-auto">
                    <div class="product_top">
                        <h2 class="text-capitalize">what the features of product</h2>
                        <p class="text-uppercase">features are highlighted here</p>
                    </div>
                    <div class="product_bottom row row-cols-12 m-auto mt-5">
                        <div class="product_content d-grid px-0">
                            {
                                Products.map((v, i) => {
                                    return (
                                        <>
                                            <div class="product_details w-100 d-flex m-auto overflow-hidden mb-5">
                                                <a href="#1" class="m-auto mt-1 ms-0">
                                                    <img src={v.icon} alt="icon1" title="icon1" class="mw-100" />
                                                </a>
                                                <div class="product_para w-75 m-auto text-start ps-4">
                                                    <h4>{v.heading}</h4>
                                                    <p class="mb-2">{v.para}</p>
                                                    <a href="#1" class="text-capitalize">{v.learn}<i class="fa-solid fa-angle-right ps-2" style={{ "color": "#1006bc5;" }}></i></a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Product