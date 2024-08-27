import image from "../assets/aboutphoto.jpg"
import image2 from "../assets/about2.webp"
export default function About() {
    return (
        <>
            <div className="firstdiv">
                <p id="paragraph">E commerce is the process of buying and selling goods and services online. It has become increasingly popular in recent years, as it offers a convenient and efficient way to shop. There are many advantages to using e commerce, including the ability to compare prices, access a wider range of products, and enjoy greater convenience. It is also typically faster and more convenient than traditional shopping methods.
                    E-commerce has revolutionized the way businesses operate and has created new opportunities for entrepreneurs around the world. If you’re thinking of starting an online business, there’s no better time than now. With the right platform and a bit of creativity, you can build a successful e-commerce business that will thrive for years to come. Thanks for reading!</p>
                <img id="image" src={image}></img>
            </div>
            <div className="seconddiv">
                <img id="secondimg" src={image2}></img>
            </div>
        </>
    )
}