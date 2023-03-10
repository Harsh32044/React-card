import img from '../IMG-20201024-WA0024.jpg'

function Info() {
    return (
        <div className="info-container">
            <img src={img} alt="" className="info-image"/>
            <h2>Harsh Srivastav</h2>
            <p>Frontend Developer</p>
            <a href="#root" className='info-site'>harsh.sriv</a>
            <a href="http://www.google.com" target="_blank" className="email" rel="noreferrer"><button className="emailBtn"><i className="fa-solid fa-envelope"></i>  Email</button></a>
            <a href="https://www.linkedin.com/in/harsh-srivastav-784a8b15b/" target="_blank" className="linkedIn" rel="noreferrer"><button className="linkedinBtn"><i className="fa-brands fa-linkedin" type="button"></i>  LinkedIn</button></a>
        </div>
    )
}

export default Info;