import './Slider.css'
export default function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.newgenapps.com/hubfs/Imported_Blog_Media/eCommerce-Website-Components-photo.jpg" class="d-block w-100  height"  alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-best-practices-.jpg" class="d-block w-100  height" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.investopedia.com/thmb/HTsQttB_aZtIFO2aNUau7T82UXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ecommerce-d7e19a12ebed400eb1b2344b2cbb0e7d.png" class="d-block w-100 height" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}