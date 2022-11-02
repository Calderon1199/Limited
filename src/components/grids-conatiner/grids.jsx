import './grids.style.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
    return(
        <div className='grid'>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`
          }}/>
          <div className='mini-grid'>
            <h3>{title}</h3>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem