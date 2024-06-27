import "../globals.css"

export default function List() {

    const product = ['Tomato', 'Pasta', 'Coconut']

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                product.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{a} $40</h4>
                            {/* <h4>{product[i]} $40</h4> */}
                        </div>
                    )
                })
            }
        </div>
    )
}