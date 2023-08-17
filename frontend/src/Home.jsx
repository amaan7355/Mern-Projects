import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://wallpaperaccess.com/full/6356994.jpg" class="d-block w-100" alt="..." height={'600em'} />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ marginRight: '200px', marginBottom: '100px', fontFamily: 'Montserrat' }}>Air Conditioner</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://cdn.mos.cms.futurecdn.net/SoSHcH5bVS3eVii9t7qMM4.jpg" class="d-block w-100" alt="..." height={'600em'} />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ marginLeft: '600px', marginBottom: '50px', fontFamily: 'Montserrat' }}>Television</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://assets.website-files.com/5e997655a5b30c6a2ba6626c/5e99832592d21664014d916e_5cb74506db2dea2076a16296_5cb4454b2c6bba26e0464be8_Temperature%252520Variance%252520in%252520Your%252520Fridge.jpeg" class="d-block w-100" alt="..." height={'600em'} />
            <div className="carousel-caption d-none d-md-block">
              <h2 className='' style={{ marginLeft: '500px', marginBottom: '100px', fontFamily: 'Montserrat' }}>Refrigerator</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.samsung.com/is/image/samsung/assets/za/p6_gro2/p6_initial_pcd/laundry/AddWash_PC_1440x640.jpg?imwidth=1366" class="d-block w-100" alt="..." height={'600em'} />
            <div className="carousel-caption d-none d-md-block">
              <h2 className='' style={{ marginRight: '100px', marginBottom: '300px', fontFamily: 'Montserrat' }}>Washing Machine</h2>
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