
import React from 'react'


function NewsItems(props) {
  let {title, desc, imgurl, url,author,date,source} = props;
  return (

    <div data-aos="fade-up"
    data-aos-offset="500"
    data-aos-duration="1000">
      <div className="card" style={{width:'300px', height:'650px', marginBottom:'15px', overflow:'hidden'}} >
          <div className="badge rounded-pill bg-danger" style={{zIndex:'1'}}>
          {source}  
      </div>
     
          <img src={!imgurl?"https://i.guim.co.uk/img/media/c475b7d769a76579fd7011a4ddac41afa50bca10/0_63_7087_4253/master/7087.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6e07ee59b38436cfa25c06be528a75fb":imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Read More</a>
          </div>
          </div>
      </div>
  )
}

export default NewsItems

