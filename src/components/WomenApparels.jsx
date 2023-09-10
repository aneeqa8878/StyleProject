import React, { useState } from "react";

function WomenApparels() {
  const [data, setData] = useState([
    {
      image:
        "https://rjspret.com/cdn/shop/products/shshtaj-2.jpg?v=1682965687&width=1445",
      title1: "-31%",
      title2: "Golden Fancy Dress FR4881",
      price1: "Rs3,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://sareeswala.com/wp-content/uploads/2022/08/Long-Designer-Pakistani-Dress-For-Engagement-Pakistani-Suits-1.jpeg",
      title1: "-31%",
      title2: "Ferozy Fancy Dress FR7883",
      price1: "Rs3,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xka2pW_eFo-i2GAF2RGT0mYWKtWw7PDmhFlDxbMmsCt2TfXQjNMFKLHpGVw_U6fAqys&usqp=CAU",
      title1: "-41%",
      title2: "Fancy Green Dress FR5117",
      price1: "Rs4,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://assets0.mirraw.com/images/11700888/LT-7006_large_m.jpg?1690444315",
      title1: "-31%",
      title2: "Fancy Golden Dress FR4981",
      price1: "Rs2,500",
      price2: "Rs1,415",
    },
    {
      image:
        "https://i.pinimg.com/236x/b2/4e/b9/b24eb96d9b98784138f2bcd1832f78bc.jpg",
      title1: "-31%",
      title2: "Peach Fancy Dress FR4881",
      price1: "Rs5,500",
      price2: "Rs3,415",
    },
    {
      image:
        "https://www.khasstores.com/cdn/shop/products/printed-khaddar-suit-with-printed-khaddar-dupatta-kkh-1630-dresses-khas-stores-974123.jpg?v=1670849039&width=720",
      title1: "-38%",
      title2: "Skin Formal Dress CL1373",
      price1: "Rs1,500",
      price2: "Rs 800",
    },
    {
      image:
        "https://www.khasstores.com/cdn/shop/products/kkh-1481-winter-2022-vol-iii-khas-stores-726584.jpg?v=1665664562&width=600",
      title1: "-31%",
      title2: "Print 3PC Dress FR7910",
      price1: "Rs2,500",
      price2: "Rs1,715",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMst30OPaHE_XmHDn2Qym1kIEYzAetvE1MqU4n_NYquMyY94JxvTRLOPu2pMVwh2ZqBc&usqp=CAU",
      title1: "-31%",
      title2: "Green Formal Dress FR4881",
      price1: "Rs3,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEmqNhHFngDMLknJnq3rlHRbUkogdXsvFqLYeoy3ffJxdEC1xVkx-xx78H1_9Fe7bCIw&usqp=CAU",
      title1: "-21%",
      title2: "Blue Formal Dress FR7886",
      price1: "Rs3,500",
      price2: "Rs2,208",
    },
    {
      image:
        "https://dhannak.com/cdn/shop/products/image_1200x.progressive_d29f1d06-cd40-4497-a347-f1f096482978@2x.jpg?v=1634121138",
      title1: "-31%",
      title2: "Skin Pink Formal Dress FR4981",
      price1: "Rs2,800",
      price2: "Rs1,915",
    },
    {
      image:
        "https://gracestore.pk/cdn/shop/products/image_13271282-bb40-4f7f-8ffa-41c2259d26c3_1200x.jpg?v=1670484174",
      title1: "-31%",
      title2: "Black Formal Dress FR7910",
      price1: "Rs2,500",
      price2: "Rs1,415",
    },
    {
      image:
        "https://shoprex.com/images/srproducts/large/decent-embroidered-khadder-dress-with-wool-shawl-dupatta_43925.jpg",
      title1: "-31%",
      title2: "Black Formal Dress FR7886",
      price1: "Rs3,500",
      price2: "Rs 2,250",
    },
  ]);
  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center  gap-5 mt-5">
        {data.map((item) => {
          return (
            <div class="card" style={{ width: "15rem" }}>
              <img src={item.image} alt="Card image cap" width={"255px"} height={"320px"} />
              <div class="cover">
                <button class="btn btn-light ml-5">
                  <span>Quick View</span>
                </button>
                <button class="btn btn-light ml-5">
                  <span>Quick Shop</span>
                </button>
              </div>

              <div class="text-block1">
                <h6>{item.title1}</h6>
              </div>
              <h5 class="card-title fs-6 w-10">{item.title2}</h5>
              <p class="card-text text-center">
                <del style={{ color: "gray" }}>{item.price1}</del>{" "}
                <emb style={{ color: "red" }}>{item.price2}</emb>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WomenApparels;
