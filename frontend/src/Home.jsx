import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active slide" style={{backgroundImage: `url('https://static.gostor.com/UPDATED_BANNER_IMAGES/image_1694268901302948')`}}>
            {/* <img src="" class="d-block w-100" alt="..." height={'600em'} /> */}
            <div className="carousel-caption d-none d-md-block">
              {/* <h1 style={{  fontFamily: 'Montserrat' }}>Air Conditioner</h1> */}
            </div>
          </div>
          <div class="carousel-item slide"  style={{backgroundImage: `url('https://static.gostor.com/UPDATED_BANNER_IMAGES/image_1694269398863370')`}}>
            {/* <img src="" class="d-block w-100" alt="..." height={'600em'} /> */}
            <div className="carousel-caption d-none d-md-block">
              {/* <h2 style={{ marginLeft: '600px', marginBottom: '50px', fontFamily: 'Montserrat' }}>Television</h2> */}
            </div>
          </div>
          <div class="carousel-item slide" style={{backgroundImage: `url('https://static.gostor.com/UPDATED_BANNER_IMAGES/image_1694269489705943')`}}>
            {/* <img src="" class="d-block w-100" alt="..." height={'600em'} /> */}
            <div className="carousel-caption d-none d-md-block">
              {/* <h2 className='' style={{ marginLeft: '500px', marginBottom: '100px', fontFamily: 'Montserrat' }}>Refrigerator</h2> */}
            </div>
          </div>
          <div class="carousel-item slide" style={{backgroundImage: `url('https://static.gostor.com/UPDATED_BANNER_IMAGES/image_1694269860115954')`}}>
            {/* <img src="" class="d-block w-100" alt="..." height={'600em'} /> */}
            <div className="carousel-caption d-none d-md-block">
              {/* <h2 className='' style={{ marginRight: '100px', marginBottom: '300px', fontFamily: 'Montserrat' }}>Washing Machine</h2> */}
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Home;