import React from 'react'

const ProductDetail = ({data}) => {
    const {backPage, filterData} = data
    const {title, images, price, description, rating, discountPercentage} = filterData;
    
  return (
    <>
        <section className="productDetail sectionSpace">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="productImg">
                            <img src={images[0]} alt={title} className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="productContent">
                            <strong className='text-primary text-capitalize '>category</strong>
                            <h3 className='mb-3'>{title}</h3>
                            <span className='price d-block'>Price: {price}</span>
                            <span className='rating d-block'>Rating: {rating}</span>
                            <span className='discount d-block'>Discount: {discountPercentage}</span>
                            <p className='mt-3'>{description}</p>

                            <button type='button' className='btn btn-danger' onClick={backPage}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductDetail